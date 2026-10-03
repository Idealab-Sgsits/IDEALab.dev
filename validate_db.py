#!/usr/bin/env python3
"""
validate_db.py - IDEALab CTF Database End-to-End Validation Engine.

Zero-dependency verification tool for the IDEALab CTF challenge database.
Validates JSON schema, economy rules, Base64 encoding of sensitive fields,
leak prevention, web challenge visibility, flag uniqueness, and Markdown sync.
"""

import argparse
import base64
from collections import Counter, defaultdict
import json
import os
import re
import sys

# -----------------------------------------------------------------------------
# Configuration and Constants
# -----------------------------------------------------------------------------

DOMAINS = [
    "core_compute",
    "cryptography",
    "data_decypher",
    "maker",
    "recon",
    "web",
]

DOMAIN_DISPLAY_NAMES = {
    "core_compute": "Core Compute",
    "cryptography": "Cryptography",
    "data_decypher": "Data Decypher",
    "maker": "Maker Sandbox",
    "recon": "Reconnaissance",
    "web": "Web Exploitation",
}

ID_PATTERNS = {
    "core_compute": r"^core_compute_\d{2}$",
    "cryptography": r"^crypto_\d{2}$",
    "data_decypher": r"^data_\d{2}$",
    "maker": r"^maker_\d{2}$",
    "recon": r"^recon_\d{2}$",
    "web": r"^web_\d{2}$",
}

COIN_RULES = {
    "easy": 150,
    "medium": 400,
    "hard": 750,
}

HINT_COST_RULES = {
    "easy": 25,
    "medium": 50,
    "hard": 100,
}

SENSITIVE_FIELD_KEYS = {
    "hidden_setup",
    "hidden_setup_b64",
    "hidden_validation",
    "hidden_validation_b64",
    "expected_state",
    "expected_state_b64",
    "file_system",
    "file_system_b64",
    "database_schema",
    "database_schema_b64",
    "visual_render",
    "visual_render_b64",
}

# Known baseline exceptions present in initial 180-problem dataset
LEGACY_BASE64_EXCEPTIONS = {
    ("maker", "maker_16", "workspace.hidden_setup"),
    ("maker", "maker_18", "workspace.hidden_setup"),
    ("maker", "maker_22", "workspace.hidden_setup"),
    ("maker", "maker_26", "workspace.hidden_setup"),
    ("maker", "maker_28", "workspace.hidden_setup"),
    ("maker", "maker_30", "workspace.hidden_setup"),
}

LEGACY_DUPLICATE_FLAGS = {"SGSITS", "42", "Rahul", "4"}

# Known intentional inspection challenges where students inspect source/DOM
INTENTIONAL_INSPECTION_CHALLENGES = {
    ("web", "web_05"),
    ("web", "web_11"),
    ("web", "web_15"),
    ("recon", "recon_10"),
}


# -----------------------------------------------------------------------------
# Base64 and Security Helpers
# -----------------------------------------------------------------------------

def is_valid_base64(val):
    """
    Check if a string is valid Base64 encoded data.
    Empty strings are accepted as empty payloads.
    """
    if not isinstance(val, str):
        return False, f"Expected str, got {type(val).__name__}"
    val_clean = val.strip()
    if len(val_clean) == 0:
        return True, "Empty string"
    if not re.match(r"^[A-Za-z0-9+/=]+$", val_clean):
        return False, "Contains invalid Base64 characters"
    if len(val_clean) % 4 != 0:
        return False, f"Invalid Base64 length ({len(val_clean)} not divisible by 4)"
    try:
        base64.b64decode(val_clean, validate=True)
        return True, "Valid Base64"
    except Exception as exc:
        return False, str(exc)


def extract_sensitive_fields(obj, prefix=""):
    """
    Recursively extract sensitive fields from arbitrary challenge structures.
    """
    if isinstance(obj, dict):
        for key, val in obj.items():
            current_path = f"{prefix}.{key}" if prefix else key
            is_sensitive = (
                "b64" in key.lower()
                or key.lower() in SENSITIVE_FIELD_KEYS
            )
            if is_sensitive:
                yield current_path, val
            if isinstance(val, (dict, list)):
                yield from extract_sensitive_fields(val, current_path)
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            current_path = f"{prefix}[{idx}]"
            if isinstance(item, (dict, list)):
                yield from extract_sensitive_fields(item, current_path)


# -----------------------------------------------------------------------------
# Core Diagnostic Collector
# -----------------------------------------------------------------------------

class DiagnosticCollector:
    """Collects and organizes errors, warnings, and summary statistics."""

    def __init__(self):
        self.errors = []
        self.warnings = []
        self.stats = defaultdict(lambda: defaultdict(int))
        self.domain_problems = defaultdict(list)
        self.flags_registry = defaultdict(list)

    def add_error(self, domain, problem_id, category, message):
        self.errors.append({
            "domain": domain,
            "id": problem_id,
            "category": category,
            "message": message,
        })

    def add_warning(self, domain, problem_id, category, message):
        self.warnings.append({
            "domain": domain,
            "id": problem_id,
            "category": category,
            "message": message,
        })

    def record_stat(self, domain, metric, increment=1):
        self.stats[domain][metric] += increment

    @property
    def has_errors(self):
        return len(self.errors) > 0


# -----------------------------------------------------------------------------
# Individual Check Functions
# -----------------------------------------------------------------------------

def validate_problem_schema(problem, domain, index, diag):
    """Validate top-level schema and basic types of a problem."""
    pid = problem.get("id")
    if not pid:
        diag.add_error(domain, f"INDEX_{index}", "SCHEMA", "Missing required field 'id'")
        pid = f"INDEX_{index}"
    elif not isinstance(pid, str):
        diag.add_error(domain, str(pid), "SCHEMA", f"'id' must be string, got {type(pid).__name__}")
    elif not re.match(ID_PATTERNS[domain], pid):
        diag.add_error(
            domain,
            pid,
            "ID_FORMAT",
            f"ID '{pid}' does not match domain pattern '{ID_PATTERNS[domain]}'",
        )

    # Name
    name = problem.get("name")
    if not name or not isinstance(name, str) or not name.strip():
        diag.add_error(domain, pid, "SCHEMA", "Missing or empty 'name'")

    # Difficulty
    difficulty = problem.get("difficulty")
    if difficulty not in COIN_RULES:
        diag.add_error(
            domain,
            pid,
            "DIFFICULTY",
            f"Invalid difficulty '{difficulty}'. Expected one of: easy, medium, hard",
        )
    else:
        diag.record_stat(domain, f"diff_{difficulty}")

    # Base Coins
    coins = problem.get("base_coins")
    if not isinstance(coins, int):
        diag.add_error(domain, pid, "COINS", f"'base_coins' must be integer, got {type(coins).__name__}")
    elif difficulty in COIN_RULES and coins != COIN_RULES[difficulty]:
        diag.add_error(
            domain,
            pid,
            "COINS",
            f"base_coins for '{difficulty}' must be {COIN_RULES[difficulty]}, got {coins}",
        )

    # Problem Statement
    ps = problem.get("problem_statement")
    if not ps or not isinstance(ps, str) or not ps.strip():
        diag.add_error(domain, pid, "SCHEMA", "Missing or empty 'problem_statement'")

    # Flag
    flag = problem.get("flag")
    if flag is None or not isinstance(flag, str) or not flag.strip():
        diag.add_error(domain, pid, "SCHEMA", "Missing or empty 'flag'")
    else:
        diag.flags_registry[flag].append((domain, pid))

    # Hints
    hints = problem.get("hints")
    if not isinstance(hints, list) or len(hints) == 0:
        diag.add_error(domain, pid, "HINTS", "'hints' must be a non-empty list of hint objects")
    else:
        has_level_1 = False
        for h_idx, hint in enumerate(hints):
            if not isinstance(hint, dict):
                diag.add_error(domain, pid, "HINTS", f"Hint at index {h_idx} must be a dictionary")
                continue
            h_lvl = hint.get("level")
            h_cost = hint.get("cost")
            h_text = hint.get("text")

            if not isinstance(h_lvl, int):
                diag.add_error(domain, pid, "HINTS", f"Hint[{h_idx}] 'level' must be an int")
            elif h_lvl == 1:
                has_level_1 = True

            if not isinstance(h_cost, int):
                diag.add_error(domain, pid, "HINTS", f"Hint[{h_idx}] 'cost' must be an int")
            elif h_lvl == 1 and difficulty in HINT_COST_RULES:
                expected_cost = HINT_COST_RULES[difficulty]
                if h_cost != expected_cost:
                    diag.add_error(
                        domain,
                        pid,
                        "HINTS",
                        f"Level 1 hint cost for '{difficulty}' must be {expected_cost}, got {h_cost}",
                    )

            if not h_text or not isinstance(h_text, str) or not h_text.strip():
                diag.add_error(domain, pid, "HINTS", f"Hint[{h_idx}] missing or empty 'text'")

        if not has_level_1:
            diag.add_error(domain, pid, "HINTS", "Hints list must contain at least one level 1 hint")


def validate_domain_extension(problem, domain, diag):
    """Validate domain-specific structural contracts."""
    pid = problem.get("id", "UNKNOWN")

    if domain == "core_compute":
        ed = problem.get("editor_state")
        if not isinstance(ed, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'editor_state' object")
        else:
            if "visible_code" not in ed or not isinstance(ed["visible_code"], str):
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "editor_state missing 'visible_code'")
            if "hidden_validation_b64" not in ed or not isinstance(ed["hidden_validation_b64"], str):
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "editor_state missing 'hidden_validation_b64'")

    elif domain == "cryptography":
        eb = problem.get("evidence_board")
        if not isinstance(eb, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'evidence_board' object")
        else:
            if "content" not in eb or not isinstance(eb["content"], str):
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "evidence_board missing 'content'")
            if "type" not in eb or not isinstance(eb["type"], str):
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "evidence_board missing 'type'")

    elif domain == "data_decypher":
        ws = problem.get("workspace")
        if not isinstance(ws, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'workspace' object")
        else:
            if "output_type" not in ws or ws["output_type"] not in ["console", "plot"]:
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "workspace 'output_type' must be 'console' or 'plot'")
            if "visible_code" not in ws or not isinstance(ws["visible_code"], str):
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "workspace missing 'visible_code'")
            has_setup = ("hidden_setup_b64" in ws and isinstance(ws["hidden_setup_b64"], str)) or (
                "hidden_setup" in ws and isinstance(ws["hidden_setup"], str)
            )
            if not has_setup:
                diag.add_error(domain, pid, "DOMAIN_CONTRACT", "workspace missing 'hidden_setup_b64' or 'hidden_setup'")

    elif domain == "maker":
        m_type = problem.get("type")
        if m_type not in ["json_tweak", "api_intercept", "micropython"]:
            diag.add_error(
                domain,
                pid,
                "DOMAIN_CONTRACT",
                f"Invalid maker type '{m_type}'. Must be 'json_tweak', 'api_intercept', or 'micropython'",
            )
        ws = problem.get("workspace")
        if not isinstance(ws, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'workspace' object")

    elif domain == "recon":
        r_type = problem.get("type")
        valid_recon_types = ["bash", "network", "forensic", "sql", "osint"]
        if r_type not in valid_recon_types:
            diag.add_error(
                domain,
                pid,
                "DOMAIN_CONTRACT",
                f"Invalid recon type '{r_type}'. Expected one of {valid_recon_types}",
            )
        ws = problem.get("workspace")
        if not isinstance(ws, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'workspace' object")

    elif domain == "web":
        ed = problem.get("editor_state")
        if not isinstance(ed, dict):
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "Missing 'editor_state' object")
            return
        files = ed.get("files")
        if not isinstance(files, dict) or len(files) == 0:
            diag.add_error(domain, pid, "DOMAIN_CONTRACT", "editor_state.files must be non-empty dictionary")
            return
        active_file = ed.get("active_file")
        if active_file not in files:
            diag.add_error(
                domain,
                pid,
                "WEB_VISIBILITY",
                f"active_file '{active_file}' not found in editor_state.files",
            )
        visible_files = [path for path, finfo in files.items() if isinstance(finfo, dict) and finfo.get("is_visible") is True]
        if len(visible_files) == 0:
            diag.add_error(domain, pid, "WEB_VISIBILITY", "No files are set to is_visible: true")


def validate_sensitive_base64(problem, domain, diag, ignore_legacy=False):
    """Validate that all sensitive fields are valid Base64 encoded strings."""
    pid = problem.get("id", "UNKNOWN")
    for field_path, val in extract_sensitive_fields(problem):
        diag.record_stat(domain, "sensitive_fields_checked")
        is_valid, reason = is_valid_base64(val)
        if not is_valid:
            is_legacy_exception = (domain, pid, field_path) in LEGACY_BASE64_EXCEPTIONS
            if is_legacy_exception and ignore_legacy:
                diag.add_warning(
                    domain,
                    pid,
                    "LEGACY_BASE64_EXCEPTION",
                    f"Sensitive field '{field_path}' is unencoded (known baseline issue): {reason}",
                )
            elif is_legacy_exception:
                diag.add_error(
                    domain,
                    pid,
                    "BASE64_LEAK",
                    f"Sensitive field '{field_path}' is not valid Base64 (legacy baseline defect): {reason}",
                )
            else:
                diag.add_error(
                    domain,
                    pid,
                    "BASE64_LEAK",
                    f"Sensitive field '{field_path}' is not valid Base64: {reason}",
                )
        else:
            diag.record_stat(domain, "sensitive_fields_valid")


def validate_plaintext_leaks(problem, domain, diag):
    """
    Check that plaintext flags are not leaked in student-visible areas.
    Excludes intentional inspection challenges where students inspect source/DOM.
    """
    pid = problem.get("id", "UNKNOWN")
    flag = str(problem.get("flag", "")).strip()
    if not flag:
        return

    # Skip intentional inspection challenges where the flag is meant to be in code
    if (domain, pid) in INTENTIONAL_INSPECTION_CHALLENGES:
        return

    # Check visible code in editor_state or workspace
    visible_sources = []
    if "editor_state" in problem and isinstance(problem["editor_state"], dict):
        ed = problem["editor_state"]
        if "visible_code" in ed and isinstance(ed["visible_code"], str):
            visible_sources.append(("editor_state.visible_code", ed["visible_code"]))
        if "files" in ed and isinstance(ed["files"], dict):
            for fpath, finfo in ed["files"].items():
                if isinstance(finfo, dict) and finfo.get("is_visible") is True:
                    content = finfo.get("content", "")
                    visible_sources.append((f"files[{fpath}]", content))

    if "workspace" in problem and isinstance(problem["workspace"], dict):
        ws = problem["workspace"]
        if "visible_code" in ws and isinstance(ws["visible_code"], str):
            visible_sources.append(("workspace.visible_code", ws["visible_code"]))

    for src_name, text in visible_sources:
        if len(flag) <= 2:
            # Short flags: boundary match to avoid false positives on numbers
            pattern = r"(?<![A-Za-z0-9_])" + re.escape(flag) + r"(?![A-Za-z0-9_])"
            # Only trigger if preceded by flag keyword or direct assignment
            leak_pattern = r"(?:flag|answer|token|pass)\s*[:=]\s*['\"]?" + re.escape(flag)
            if re.search(leak_pattern, text, re.IGNORECASE):
                diag.add_error(
                    domain,
                    pid,
                    "PLAINTEXT_LEAK",
                    f"Plaintext flag '{flag}' directly exposed in visible code '{src_name}'",
                )
        else:
            # Direct presence of flag in visible source
            if flag in text:
                diag.add_error(
                    domain,
                    pid,
                    "PLAINTEXT_LEAK",
                    f"Plaintext flag '{flag}' appears in student-visible source '{src_name}'",
                )

    # Check hints for verbatim answers (unless training wheels directive)
    hints = problem.get("hints", [])
    if isinstance(hints, list) and len(flag) > 2:
        for h_idx, h in enumerate(hints):
            if isinstance(h, dict):
                htext = h.get("text", "")
                if f"FLAG: {flag}" in htext or f"flag is {flag}" in htext.lower():
                    diag.add_error(
                        domain,
                        pid,
                        "PLAINTEXT_LEAK",
                        f"Hint[{h_idx}] directly leaks the flag solution string '{flag}'",
                    )


def validate_markdown_sync(domain, json_data, md_path, diag, target_count=None):
    """
    Validate that data/<domain>.md contains matching problem documentation.
    """
    if not os.path.exists(md_path):
        diag.add_error(domain, "GLOBAL", "FILE_STRUCTURE", f"Missing markdown file: {md_path}")
        return

    try:
        with open(md_path, "r", encoding="utf-8") as fp:
            md_text = fp.read()
    except Exception as exc:
        diag.add_error(domain, "GLOBAL", "MARKDOWN_SYNC", f"Cannot read markdown file {md_path}: {exc}")
        return

    # Extract all problem names (support **Name:** and **Name**: and ### headers)
    name_matches = re.findall(r"^\*\*Name\s*:?\*\*\s*:?\s*(.+)", md_text, re.M)
    ps_matches = re.findall(r"^\*\*PS\s*:?\*\*\s*:?\s*(.+)", md_text, re.M)
    hint_matches = re.findall(r"^\*\*Hint\s*:?\*\*\s*:?\s*(.+)", md_text, re.M)
    impl_matches = re.findall(r"^\*\*(?:Implementation|Evidence Board)\s*:?\*\*\s*:?\s*(.+)", md_text, re.M)

    json_count = len(json_data)
    md_count = len(name_matches)

    diag.record_stat(domain, "md_problem_names", md_count)

    if md_count != json_count:
        diag.add_error(
            domain,
            "GLOBAL",
            "MARKDOWN_SYNC",
            f"Markdown problem count mismatch in {domain}.md: expected {json_count}, found {md_count}",
        )

    # Check section headers
    if target_count == 360 or json_count == 60:
        if not re.search(r"###\s*25\s+Easy", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 25 Easy Problems'")
        if not re.search(r"###\s*20\s+Medium", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 20 Medium Problems'")
        if not re.search(r"###\s*15\s+Hard", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 15 Hard Problems'")
    elif json_count == 30:
        if not re.search(r"###\s*15\s+Easy", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 15 Easy Problems'")
        if not re.search(r"###\s*10\s+Medium", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 10 Medium Problems'")
        if not re.search(r"###\s*5\s+Hard", md_text, re.I):
            diag.add_warning(domain, "GLOBAL", "MARKDOWN_HEADER", "Expected header '### 5 Hard Problems'")

    # Check completeness of blocks
    if len(ps_matches) != md_count:
        diag.add_warning(
            domain,
            "GLOBAL",
            "MARKDOWN_SYNC",
            f"Found {len(ps_matches)} problem statements for {md_count} problem blocks in {domain}.md",
        )
    if len(hint_matches) != md_count:
        diag.add_warning(
            domain,
            "GLOBAL",
            "MARKDOWN_SYNC",
            f"Found {len(hint_matches)} hints for {md_count} problem blocks in {domain}.md",
        )
    if len(impl_matches) != md_count:
        diag.add_warning(
            domain,
            "GLOBAL",
            "MARKDOWN_SYNC",
            f"Found {len(impl_matches)} implementation/evidence blocks for {md_count} problem blocks in {domain}.md",
        )


# -----------------------------------------------------------------------------
# Global Flag Uniqueness Verification
# -----------------------------------------------------------------------------

def validate_flag_uniqueness(diag, strict_flags=False, ignore_legacy=False):
    """
    Check for duplicate flags across all 6 challenge files.
    """
    duplicate_count = 0
    for flag, locations in diag.flags_registry.items():
        if len(locations) > 1:
            duplicate_count += 1
            loc_str = ", ".join(f"{dom}:{pid}" for dom, pid in locations)
            is_legacy = flag in LEGACY_DUPLICATE_FLAGS
            msg = f"Duplicate flag '{flag}' shared across {len(locations)} problems: {loc_str}"

            if strict_flags:
                if is_legacy and ignore_legacy:
                    diag.add_warning("GLOBAL", "ALL", "LEGACY_DUPLICATE_FLAG", msg)
                else:
                    diag.add_error("GLOBAL", "ALL", "DUPLICATE_FLAG", msg)
            else:
                if is_legacy and ignore_legacy:
                    diag.add_warning("GLOBAL", "ALL", "LEGACY_DUPLICATE_FLAG", msg)
                elif is_legacy:
                    diag.add_warning("GLOBAL", "ALL", "LEGACY_DUPLICATE_FLAG", f"{msg} (known baseline collision)")
                else:
                    diag.add_error("GLOBAL", "ALL", "DUPLICATE_FLAG", msg)

    diag.stats["GLOBAL"]["duplicate_flag_count"] = duplicate_count


# -----------------------------------------------------------------------------
# Main Verification Orchestrator
# -----------------------------------------------------------------------------

def run_database_validation(
    data_dir,
    target_count=None,
    strict_flags=False,
    ignore_legacy=False,
    verbose=False,
):
    """
    Run complete suite of validation checks over data_dir.
    Returns: (success: bool, diag: DiagnosticCollector)
    """
    diag = DiagnosticCollector()
    total_problems = 0

    target_per_domain = None
    if target_count is not None:
        target_per_domain = target_count // len(DOMAINS)

    print("=" * 76)
    print(" IDEALab CTF Database End-to-End Verification Engine")
    print("=" * 76)
    mode_desc = []
    if target_count:
        mode_desc.append(f"Target={target_count} problems ({target_per_domain}/domain)")
    else:
        mode_desc.append("Target=Unconstrained (Current DB State)")
    mode_desc.append(f"StrictFlags={'ON' if strict_flags else 'OFF'}")
    if ignore_legacy:
        mode_desc.append("IgnoreLegacy=ON")
    print(f" Mode: {', '.join(mode_desc)}")
    print(f" Data Directory: {os.path.abspath(data_dir)}")
    print("-" * 76)

    for domain in DOMAINS:
        json_path = os.path.join(data_dir, f"{domain}.json")
        md_path = os.path.join(data_dir, f"{domain}.md")

        # 1. File existence
        if not os.path.exists(json_path):
            diag.add_error(domain, "GLOBAL", "FILE_STRUCTURE", f"Missing JSON file: {json_path}")
            continue

        # 2. JSON parsing
        try:
            with open(json_path, "r", encoding="utf-8") as fp:
                data = json.load(fp)
        except Exception as exc:
            diag.add_error(domain, "GLOBAL", "JSON_SYNTAX", f"Failed to parse {json_path}: {exc}")
            continue

        if not isinstance(data, list):
            diag.add_error(domain, "GLOBAL", "JSON_SYNTAX", f"Root element of {json_path} must be a JSON array")
            continue

        p_count = len(data)
        total_problems += p_count
        diag.record_stat(domain, "problem_count", p_count)
        diag.domain_problems[domain] = data

        # 3. Target count enforcement
        if target_per_domain is not None and p_count != target_per_domain:
            diag.add_error(
                domain,
                "GLOBAL",
                "PROBLEM_COUNT",
                f"Expected exactly {target_per_domain} problems for {domain}, found {p_count}",
            )

        # 4. Difficulty distribution check
        diff_counts = Counter(p.get("difficulty") for p in data)
        expected_diff = None
        if target_count == 360 or p_count == 60:
            expected_diff = {"easy": 25, "medium": 20, "hard": 15}
        elif target_count == 180 or p_count == 30:
            expected_diff = {"easy": 15, "medium": 10, "hard": 5}

        if expected_diff:
            for diff_level, exp_c in expected_diff.items():
                act_c = diff_counts.get(diff_level, 0)
                if act_c != exp_c:
                    diag.add_error(
                        domain,
                        "GLOBAL",
                        "DIFFICULTY_DISTRIBUTION",
                        f"Difficulty '{diff_level}' distribution expected {exp_c}, found {act_c}",
                    )

        # 5. Problem-by-problem validation
        seen_ids_in_domain = set()
        for idx, problem in enumerate(data):
            if not isinstance(problem, dict):
                diag.add_error(domain, f"INDEX_{idx}", "SCHEMA", "Problem entry must be a dictionary")
                continue

            pid = problem.get("id", f"UNKNOWN_{idx}")
            if pid in seen_ids_in_domain:
                diag.add_error(domain, pid, "ID_FORMAT", f"Duplicate problem ID '{pid}' inside {domain}.json")
            seen_ids_in_domain.add(pid)

            # Validate schema, extensions, Base64, and leaks
            validate_problem_schema(problem, domain, idx, diag)
            validate_domain_extension(problem, domain, diag)
            validate_sensitive_base64(problem, domain, diag, ignore_legacy=ignore_legacy)
            validate_plaintext_leaks(problem, domain, diag)

        # 6. Markdown sync validation
        validate_markdown_sync(domain, data, md_path, diag, target_count=target_count)

    # 7. Flag uniqueness across all files
    validate_flag_uniqueness(diag, strict_flags=strict_flags, ignore_legacy=ignore_legacy)

    # -------------------------------------------------------------------------
    # Diagnostic Reporting
    # -------------------------------------------------------------------------
    print(f"\n{'Domain':<18} | {'Problems':<8} | {'Easy':<5} | {'Med':<5} | {'Hard':<5} | {'Sensitive B64':<14} | {'Status'}")
    print("-" * 76)
    for domain in DOMAINS:
        stats = diag.stats[domain]
        p_count = stats.get("problem_count", 0)
        e_c = stats.get("diff_easy", 0)
        m_c = stats.get("diff_medium", 0)
        h_c = stats.get("diff_hard", 0)
        b64_c = stats.get("sensitive_fields_valid", 0)
        domain_errs = [e for e in diag.errors if e["domain"] == domain]
        status = "PASS" if len(domain_errs) == 0 else f"FAIL ({len(domain_errs)} errs)"
        print(f"{DOMAIN_DISPLAY_NAMES[domain]:<18} | {p_count:<8} | {e_c:<5} | {m_c:<5} | {h_c:<5} | {b64_c:<14} | {status}")

    print("-" * 76)
    print(f"Total Problems Inspected: {total_problems}")
    print(f"Total Unique Flags Tracked: {len(diag.flags_registry)}")
    dup_count = diag.stats["GLOBAL"].get("duplicate_flag_count", 0)
    print(f"Duplicate Flag Collisions: {dup_count}")
    print(f"Total Violations (Errors): {len(diag.errors)}")
    print(f"Total Warnings: {len(diag.warnings)}")
    print("=" * 76)

    # Print Warnings
    if diag.warnings:
        print("\n [!] WARNINGS DETECTED:")
        for w in diag.warnings:
            print(f"     [{w['domain']}:{w['id']}] ({w['category']}) {w['message']}")

    # Print Errors
    if diag.errors:
        print("\n [X] VALIDATION FAILURES (ERRORS):")
        for e in diag.errors:
            print(f"     [{e['domain']}:{e['id']}] ({e['category']}) {e['message']}")
        print("\n" + "=" * 76)
        print(" RESULT: FAILED - Violations detected. See diagnostics above.")
        print("=" * 76)
        return False, diag
    else:
        print("\n" + "=" * 76)
        print(" RESULT: PASSED - All schema, security, and sync checks verified clean.")
        print("=" * 76)
        return True, diag


# -----------------------------------------------------------------------------
# CLI Entry Point
# -----------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="IDEALab CTF Database End-to-End Verification Harness",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 validate_db.py
      Validate current database state with human-readable diagnostics.
  python3 validate_db.py --target 360
      Validate target state enforcing exactly 360 problems (60/domain, 25/20/15).
  python3 validate_db.py --strict-flags
      Treat any duplicate flag across domains as a hard error.
  python3 validate_db.py --ignore-legacy
      Treat known baseline exceptions (6 unencoded maker fields, 4 flag duplicates) as warnings.
        """,
    )
    parser.add_argument(
        "--data-dir",
        type=str,
        default=os.path.join(os.path.dirname(os.path.abspath(__file__)), "data"),
        help="Path to the directory containing JSON and Markdown database files (default: ./data)",
    )
    parser.add_argument(
        "--target",
        type=int,
        default=None,
        help="Enforce strict total problem count across all domains (e.g. 360 or 180)",
    )
    parser.add_argument(
        "--strict-flags",
        "--strict-dedup",
        action="store_true",
        dest="strict_flags",
        help="Strictly enforce 0 duplicate flags across all files as a hard error",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Enable strict mode (enforces strict flag uniqueness and strict count if target given)",
    )
    parser.add_argument(
        "--ignore-legacy",
        "--allow-legacy",
        action="store_true",
        dest="ignore_legacy",
        help="Allow known legacy baseline exceptions (6 maker unencoded fields, 4 baseline duplicates)",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        dest="json_output",
        help="Output diagnostics in machine-readable JSON format",
    )

    args = parser.parse_args()

    strict_flags = args.strict_flags or args.strict
    if args.target == 360:
        # 360 target inherently demands 0 duplicate flags as per acceptance criteria
        strict_flags = True

    success, diag = run_database_validation(
        data_dir=args.data_dir,
        target_count=args.target,
        strict_flags=strict_flags,
        ignore_legacy=args.ignore_legacy,
    )

    if args.json_output:
        summary_payload = {
            "success": success,
            "total_problems": sum(s.get("problem_count", 0) for s in diag.stats.values()),
            "errors": diag.errors,
            "warnings": diag.warnings,
            "statistics": {k: dict(v) for k, v in diag.stats.items()},
        }
        print(json.dumps(summary_payload, indent=2))

    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
