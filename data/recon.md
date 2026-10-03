**Section 5: Terminal Sleuth**.

### 25 Easy Problems (150 Coins)

*Focus: Training wheels. The hints literally tell them what to type. They just need to execute it and observe the right pane.*

**Name:** Forensics: Read the Manual
**PS:** Directive: There is a file called `instructions.txt`. Read what is inside it to find the flag.
**Hint:** In Linux, the `cat` command reads files. Type `cat instructions.txt` and hit run.
**Implementation:** Terminal left. When they run the command, the text output reveals the flag.

**Name:** Query: Open the Box
**PS:** Directive: The database has a table named `vault`. Look inside to find the hidden code.
**Hint:** SQL uses SELECT. Type `SELECT * FROM vault` to see everything, then read the table output.
**Implementation:** They execute a basic select-all query and visually scan the result.

**Name:** OSINT: The Sticky Note
**PS:** Directive: The suspect left a sticky note on their digital desktop. The password is right there.
**Hint:** Look really closely at the ASCII art sticky note rendered on the right pane.
**Implementation:** Right pane shows an ASCII art square with a pin `[ PIN: 8080 ]`. Zero coding required.

**Name:** Forensics: What's in here?
**PS:** Directive: You are in a secure folder. What files are in here? Find the file named 'flag_xxx'.
**Hint:** Type `ls` (which stands for list) and hit run to see all the files in the directory.
**Implementation:** They execute `ls`. The terminal outputs a list of 4 files, one being the flag.

**Name:** Query: The Target
**PS:** Directive: Look at the `agents` table. Find the name of the agent whose `status` is 'Rogue'.
**Hint:** Type `SELECT * FROM agents`. Scan the list on the right for the rogue agent's name.
**Implementation:** They do a select-all and manually find the answer in the visual table.

**Name:** OSINT: The Archived Pin
**PS:** Directive: The agent's old ID card is in this archived web page text. Find the 4-digit ID.
**Hint:** Just read the text block on the right pane carefully. Look for the phrase "Legacy Pin".
**Implementation:** Right pane shows simulated plain-text HTML.

**Name:** Forensics: Who am I?
**PS:** Directive: The system needs to verify your terminal username.
**Hint:** Linux has a literal command for this. Type `whoami` and hit run.
**Implementation:** Typing `whoami` outputs the flag (e.g., `admin_idealab`).

**Name:** Query: Filter the Noise
**PS:** Directive: The `inventory` table is huge. Get only the item where the `id` is exactly 77.
**Hint:** Use a WHERE clause! Type `SELECT * FROM inventory WHERE id = 77`.
**Implementation:** Introduces basic filtering by giving them the exact syntax.

**Name:** OSINT: The Metadata
**PS:** Directive: We extracted the raw EXIF data from a photograph. What camera model took this photo?
**Hint:** Look at the raw metadata text block on the right. Find the line labeled "Camera Model".
**Implementation:** Right pane shows a simulated EXIF text dump.

**Name:** Forensics: Echo Chamber
**PS:** Directive: Make the terminal repeat the word "SGSITS" back to you to unlock the system.
**Hint:** The `echo` command prints text. Type `echo SGSITS`.
**Implementation:** Teaches the basic echo command.

**Name:** Query: Count the Spies
**PS:** Directive: How many total spies are registered in the `spies` table?
**Hint:** SQL can count for you. Type `SELECT COUNT(*) FROM spies`.
**Implementation:** Introduces the `COUNT()` aggregate function.

**Name:** OSINT: The Fake Website
**PS:** Directive: Look at the raw HTML source code on the right. What is the hidden comment?
**Hint:** In HTML, developer comments are invisible on the actual website and look like `<!-- secret text -->`.
**Implementation:** Right pane shows 10 lines of HTML code with a hidden flag in a comment block.

**Name:** Forensics: Where am I?
**PS:** Directive: You are lost deep in a folder structure. Print your current working directory to get the flag.
**Hint:** The command for "Print Working Directory" is just its initials: `pwd`.
**Implementation:** Output is a file path like `/var/hidden/flag_here`.

**Name:** Query: The Richest
**PS:** Directive: Find the absolute highest balance in the `accounts` table.
**Hint:** SQL has a MAX function. Type `SELECT MAX(balance) FROM accounts`.
**Implementation:** Teaches the `MAX()` function.

**Name:** OSINT: Domain Age
**PS:** Directive: Look at the WHOIS domain data on the right. What year was this website registered?
**Hint:** Scan the text block for "Creation Date" or "Registered On".
**Implementation:** Right pane shows raw WHOIS text format.

**Name:** Forensics: Hidden History
**PS:** Directive: An operator executed a critical command and cleared their terminal, but bash records prior keystrokes in a hidden dotfile. Inspect the bash history file to recover the authorization flag.
**Hint:** Inspect the hidden bash history file using `cat ~/.bash_history` or `cat .bash_history`.
**Implementation:** Simulated bash terminal with virtual home directory. User executes `cat .bash_history` to inspect the hidden command log and reveal the authorization token.

**Name:** Network: HTTP Header Snooping
**PS:** Directive: A staging web service on `http://127.0.0.1:8080/health` returns custom telemetry headers. Use curl to inspect the response headers and find the value of `X-Service-Flag`.
**Hint:** Use the `-I` or `-i` flag with curl to dump response headers: `curl -I http://127.0.0.1:8080/health`.
**Implementation:** Network interrogation challenge. User runs `curl -I` against the local endpoint to inspect HTTP response headers and extract the secret header field.

**Name:** Forensics: Secret in the Subdir
**PS:** Directive: A nested configuration directory exists under `/var/configs`. Find all files ending in `.conf` recursively and locate the token stored in the `auth.conf` file.
**Hint:** Use `find /var/configs -name "*.conf"` to locate the configuration files, then `cat` the file.
**Implementation:** Bash file enumeration. User executes recursive directory search with `find` to pinpoint nested config files and read the target credential.

**Name:** Forensics: Pattern Harvester
**PS:** Directive: The file `system_events.log` contains thousands of lines. Search for lines containing the keyword 'FLAG:' to extract the security token.
**Hint:** Use `grep "FLAG:" system_events.log` to isolate the line containing the token.
**Implementation:** Log parsing via grep. User isolates relevant log event lines using keyword pattern matching to recover the flag token.

**Name:** Forensics: Modified in the Shadows
**PS:** Directive: An adversary altered a file in `/opt/data` today. List the files sorted by modification time to identify the most recently updated file.
**Hint:** Use `ls -lt` to sort directory contents by modification time descending.
**Implementation:** Filesystem timestamp forensics. User sorts files by mtime with `ls -lt` to identify which file was tampered with most recently.

**Name:** Forensics: Hidden Under the Dot
**PS:** Directive: A covert operative hid a file whose name begins with a dot in `/tmp/staging`. Discover the hidden filename and view its content.
**Hint:** List hidden files with `ls -la /tmp/staging`, then read the dotfile with `cat`.
**Implementation:** Hidden dotfile discovery. Running `ls -la` displays concealed dotfiles, allowing the user to view the hidden payload with `cat`.

**Name:** Network: Hostname Resolution
**PS:** Directive: Inspect `/etc/hosts` to find the static IP address mapped to the internal host `telemetry.internal.corp`.
**Hint:** Print the contents of the hosts resolution file with `cat /etc/hosts`.
**Implementation:** Local DNS configuration inspection. User reads `/etc/hosts` to uncover static domain overrides and recover the mapping token.

**Name:** Forensics: Counting Lines
**PS:** Directive: The audit file `audit.csv` lists detected security alerts. Count how many total lines are in `audit.csv`.
**Hint:** Use `wc -l audit.csv` to count the lines in the file.
**Implementation:** Terminal line counting utility. User executes `wc -l audit.csv` to tally record rows and inspect the summary security marker.

**Name:** Forensics: Environment Variable Peek
**PS:** Directive: The container runtime passed an operational secret in an environment variable named `MISSION_TOKEN`. Print its value.
**Hint:** Print an environment variable using `echo $MISSION_TOKEN` or `env | grep MISSION_TOKEN`.
**Implementation:** Process environment inspection. User retrieves session variables via `echo $MISSION_TOKEN` to read the passed runtime token.

**Name:** Forensics: File Size Triage
**PS:** Directive: Several dump files were created in `/var/dumps`. Locate the only dump file that is not 0 bytes and read the string within.
**Hint:** Use `find /var/dumps -size +0c` or `ls -lh /var/dumps` to spot the non-empty file.
**Implementation:** Filesystem triage filtering. User identifies non-empty files amidst zero-byte dummy files using size flags in `find` or `ls -l`.

### 20 Medium Problems (400 Coins)

*Focus: Stepping off the training wheels. They have to combine logic or modify commands slightly.*

**Name:** Forensics: The Hidden Payload
**PS:** Directive: The current directory appears completely empty when you type `ls`, but a concealed script is present. Find its exact filename.
**Hint:** In Linux systems, files starting with a dot (.) are hidden. Add the `-a` (all) flag: type `ls -a`.
**Implementation:** Introduces command flags.

**Name:** Query: Sort it Out
**PS:** Directive: Query the `agents` table. Who is the agent that appears at the very top of the list when sorted alphabetically by `last_name`?
**Hint:** You need to order the results. Add `ORDER BY last_name ASC` to your SELECT statement.
**Implementation:** Introduces SQL ordering.

**Name:** Forensics: Searching Inside
**PS:** Directive: The `server.log` file has 10,000 lines. Find the exact 4-digit code attached to the phrase "CRITICAL_FAIL:".
**Hint:** You don't need to read the whole file. Use the grep command to search inside it: `grep "CRITICAL_FAIL" server.log`.
**Implementation:** Introduces `grep` for text searching.

**Name:** Query: Combine Two Tables
**PS:** Directive: `employees` has names. `access_logs` has entry times. Find the name of the employee who entered at '03:00:00'.
**Hint:** Combine them using JOIN! `SELECT name FROM employees JOIN access_logs ON employees.id = access_logs.emp_id WHERE time = '03:00:00'`.
**Implementation:** They execute a pre-structured JOIN query to understand relational data.

**Name:** OSINT: Hex Editor
**PS:** Directive: We ran a file through a Hexadecimal reader. It reveals a hidden text string appended at the very end of the file. Find it.
**Hint:** Scroll to the absolute bottom of the text-based Hex dump on the right pane. Look at the readable ASCII letters on the far right column.
**Implementation:** Introduces looking at raw ASCII hex dumps.

**Name:** Forensics: The Tail End
**PS:** Directive: The system is actively writing to `stream.log`. Read only the very last line of the file to get the flag.
**Hint:** The `tail` command outputs the end of a file. Try `tail -n 1 stream.log`.
**Implementation:** Introduces reading file ends.

**Name:** Query: Unique Values
**PS:** Directive: There are duplicate entries. Find the total number of completely *unique* `city` names in the `safehouses` table.
**Hint:** Use the `DISTINCT` keyword right after SELECT to ignore duplicates. `SELECT COUNT(DISTINCT city)...`
**Implementation:** Teaches unique filtering in databases.

**Name:** OSINT: The Network Hop
**PS:** Directive: We ran a `traceroute` to find where the signal is bouncing. Look at the terminal output on the right. What is the IP address of the 4th hop?
**Hint:** Find line number 4 in the text output. The IP address looks like `192.168.x.x`.
**Implementation:** Replaces the satellite image. Uses a simulated `traceroute` text log.

**Name:** Forensics: The Symbolic Link
**PS:** Directive: The file `shortcut.lnk` is pointing to another location. Find the absolute path of the original file it points to.
**Hint:** Use `ls -l`. The output will show an arrow `->` pointing to the real file path.
**Implementation:** Introduces file details and symlinks.

**Name:** Query: The Null Protocol
**PS:** Directive: The database crashed. Find the `badge_id` in the `access_logs` table where the `timestamp` is exactly NULL.
**Hint:** You cannot use `=` for NULL in SQL. You must use `WHERE timestamp IS NULL`.
**Implementation:** Teaches NULL handling in databases.

**Name:** Forensics: SUID Binary Hunt
**PS:** Directive: An attacker planted an executable binary with SUID bit (permissions 4755) in `/usr/local/bin`. Find the name of the SUID binary.
**Hint:** Use `find /usr/local/bin -perm -4000` to enumerate binaries with the SUID bit set.
**Implementation:** Linux privilege escalation reconnaissance. User scans directory binaries for SUID permission bit `-4000` to uncover the rogue escalation binary.

**Name:** Forensics: Access Log 404 Hunter
**PS:** Directive: Analyze `access.log` to find the URI path that returned HTTP status code 404 during an automated scanning probe.
**Hint:** Filter lines containing ' 404 ' using grep or awk: `grep " 404 " access.log`.
**Implementation:** Web access log analysis. Filtering Nginx access log lines by status 404 reveals the reconnaissance probe path and embedded flag.

**Name:** Forensics: Scheduled Cron Job
**PS:** Directive: Examine system scheduled tasks in `/etc/crontab` and `/etc/cron.d/` to find the script executed every 5 minutes by the root user.
**Hint:** View `/etc/crontab` and check the cron expression `*/5 * * * *`.
**Implementation:** Persistence analysis via cron. Reading `/etc/crontab` and parsing cron timing expressions reveals scheduled root maintenance scripts.

**Name:** Query: Schema Table Discovery
**PS:** Directive: Query `sqlite_master` in the database to discover the name of the hidden audit table that begins with `shadow_`.
**Hint:** Execute `SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'shadow_%';`.
**Implementation:** Database schema reconnaissance. Querying the internal `sqlite_master` metadata table exposes covert table names and hidden data schemas.

**Name:** Forensics: Grep Regex IP Extraction
**PS:** Directive: A rogue server transmitted connection attempts logged in `firewall.log`. Use extended grep with regex to extract IPv4 addresses matching subnet `10.50.X.X`.
**Hint:** Use `grep -E "10\.50\.[0-9]+\.[0-9]+" firewall.log` or `grep "10.50." firewall.log`.
**Implementation:** Regular expression pattern matching on network firewall logs. User filters traffic entries by CIDR subnet pattern to identify allowed connections.

**Name:** Forensics: World-Writable Audit
**PS:** Directive: Audit permissions in `/opt/services` to find the world-writable file (permission mode 777 or o+w) that represents a privilege escalation hazard.
**Hint:** Use `find /opt/services -perm -0002` or `ls -l` and look for `rwxrwxrwx`.
**Implementation:** File permission auditing. Scanning `/opt/services` for files with world-writable permission bits isolates vulnerable misconfigured scripts.

**Name:** Network: Listening Socket Audit
**PS:** Directive: Inspect the system socket status output from `ss -tulpn` or `netstat -tlpn` to find the unauthenticated service listening on port 9090.
**Hint:** Search for `:9090` in the socket listing output to identify the program name.
**Implementation:** Network socket reconnaissance. Examining simulated `ss` or socket summary tables reveals unauthorized daemons listening on high non-standard ports.

**Name:** Query: SQL Injection Probe
**PS:** Directive: In the `audit_trail` table, multiple suspicious SQL injection payloads were logged. Query the payload that successfully extracted admin credentials.
**Hint:** Use `SELECT * FROM audit_trail WHERE payload LIKE '%UNION%' OR status = 'EXPLOITED';`.
**Implementation:** SQL audit log interrogation. Querying the audit trail for exploited union-based injection signatures pinpoints successful breach attempts.

**Name:** Forensics: SSH Authorized Keys Audit
**PS:** Directive: Investigate `/home/deploy/.ssh/authorized_keys` to identify the rogue public key comment appended by an unauthorized actor.
**Hint:** Read the authorized_keys file: `cat /home/deploy/.ssh/authorized_keys` and examine the trailing comment.
**Implementation:** SSH backdoors forensic analysis. Reading authorized key configurations flags unrecognized key headers and rogue administrative comments.

**Name:** Forensics: Defective Systemd Unit
**PS:** Directive: A persistent service was installed in `/etc/systemd/system/malware.service`. Inspect the `ExecStart` directive to discover what binary is executed.
**Hint:** Print the unit file with `cat /etc/systemd/system/malware.service` and read `ExecStart=`.
**Implementation:** Systemd persistence investigation. Parsing custom service unit files reveals execution arguments and payload tokens configured under `ExecStart`.

### 15 Hard Problems (750 Coins)

*Focus: Chaining commands together and reading raw data structures without hand-holding.*

**Name:** Query: The Grand Heist (Triple Join)
**PS:** Directive: `suspects` has IDs. `vehicles` links IDs to plates. `toll_booths` links plates to cities. Find the `city` of the suspect named 'Kabir'.
**Hint:** Double JOIN required. Join suspects to vehicles on `suspect_id`. Then join toll_booths on `license_plate`. Filter `WHERE name = 'Kabir'`.
**Implementation:** They write a complex SQL query joining three interconnected tables.

**Name:** Forensics: Piped Count
**PS:** Directive: The `auth.log` file tracks all logins. Write a command chain to count exactly how many times the word "Failed" appears.
**Hint:** You can pipe (`|`) commands into each other! Read the file, filter for the specific word, and count the lines: `cat auth.log | grep "Failed" | wc -l`.
**Implementation:** Introduces command pipelines in bash.

**Name:** Query: Above Average
**PS:** Directive: Query the `salaries` table. Find the `name` of the operative who earns strictly more than the overall average salary of the entire organization.
**Hint:** You need a subquery! First find the average `(SELECT AVG(salary) FROM salaries)`, then use that in your main WHERE clause.
**Implementation:** Introduces nested SQL subqueries.

**Name:** OSINT: Wireshark Packet Dump
**PS:** Directive: Analyze the raw HTTP PCAP (packet capture) text dump. An operative logged into an unsecured HTTP site. Extract their plaintext password.
**Hint:** Search the raw text block on the right for `POST` requests. Look for the payload body containing `password=`.
**Implementation:** Right pane displays a raw text network request log. They manually hunt for the unencrypted form data.

**Name:** Forensics: Base64 Decode
**PS:** Directive: The file `encoded_flag.txt` contains a Base64 string. Decode it directly in the terminal to reveal the plaintext flag.
**Hint:** Pipe the `cat` command into the base64 decoding tool: `cat encoded_flag.txt | base64 -d`.
**Implementation:** Teaches terminal-based decryption chaining.

**Name:** Forensics: Pipeline Awk Aggregator
**PS:** Directive: A high-volume access log `web_traffic.csv` records IP addresses in column 1 and bytes in column 4. Write an awk command to sum total bytes for IP `192.168.1.50`.
**Hint:** Chain awk with pattern match and accumulator: `awk -F',' '$1=="192.168.1.50"{sum+=$4} END{print sum}' web_traffic.csv`.
**Implementation:** Awk stream processing and field arithmetic. User filters CSV records by source IP and aggregates numeric byte counters in the END block.

**Name:** Network: DNS Tunneling Exfiltration
**PS:** Directive: An adversary exfiltrated base64 data chunks encoded in DNS query subdomains in `dns_queries.log`. Concatenate the subdomains for domain `corp-exfil.xyz` and decode them.
**Hint:** Extract subdomain prefixes using `awk` or `cut`, strip `.corp-exfil.xyz`, concatenate, and pipe through `base64 -d`.
**Implementation:** Covert channel analysis. Extracting ordered subdomain labels from DNS request logs, stripping domain suffixes, and base64-decoding recovers the exfiltrated flag.

**Name:** Forensics: Memory String Carving
**PS:** Directive: Carve ASCII strings from a raw physical memory dump `memdump.raw` looking for decrypted cryptographic master keys prefixed with `MASTER_KEY:`.
**Hint:** Extract printable strings using `strings memdump.raw | grep "MASTER_KEY:"`.
**Implementation:** Memory artifact carving. Executing `strings` against binary memory dump snapshots extracts volatile secrets and master encryption keys.

**Name:** Network: PCAP TLS Handshake SNI
**PS:** Directive: Analyze the captured TLS Client Hello packets in `traffic_capture.pcap.txt` to find the Server Name Indication (SNI) hostname used by the covert command-and-control server.
**Hint:** Search packet dissections for `Server Name:` or `Handshake: Client Hello` with `grep -A 2 "Server Name"`.
**Implementation:** Encrypted traffic reconnaissance. Parsing unencrypted TLS handshake extensions in PCAP dissections reveals the destination SNI domain and C2 indicators.

**Name:** Forensics: Chained Sed and Xargs
**PS:** Directive: A list of candidate artifact file paths is stored in `file_manifest.txt`. Strip leading whitespace with sed, and pass existing paths via xargs to grep for `FLAG_SIG`.
**Hint:** Use `sed 's/^[ 	]*//' file_manifest.txt | xargs grep "FLAG_SIG"`.
**Implementation:** Command pipeline chaining. Sanitizing manifest path strings with `sed` and feeding arguments via `xargs` into `grep` performs batch triage.

**Name:** Network: Topology Reconstruction
**PS:** Directive: A multi-hop routing table `routing_table.txt` defines network gateways. Trace the next-hop router gateway IP for destination subnet `172.28.0.0/16`.
**Hint:** Search routing table for destination `172.28.0.0` and identify the Gateway column.
**Implementation:** IP routing table inspection. Analyzing kernel network routes maps gateway next-hops for isolated subnets and determines network egress routes.

**Name:** Forensics: Multi-Stage Hex Carving
**PS:** Directive: An obfuscated shell payload in `corrupt_firmware.bin` contains an embedded tar archive offset starting at magic bytes `75 73 74 61 72` (ustar). Extract the header token.
**Hint:** Use `xxd` or `hexdump -C corrupt_firmware.bin | grep -C 2 "ustar"` to locate the offset and token.
**Implementation:** Hexadecimal signature carving. Using `hexdump -C` to locate the magic bytes `ustar` in damaged firmware blobs carves out embedded archive tokens.

**Name:** Forensics: Inode Link Investigation
**PS:** Directive: An operative hardlinked a sensitive file to disguise it. Find all file paths sharing inode number `849201` in directory `/var/vault`.
**Hint:** Use `find /var/vault -inum 849201` to find all directory entries linking to the same inode.
**Implementation:** Filesystem inode analysis. Using `find -inum` traces hardlinked directory entries pointing to identical filesystem inodes regardless of file naming.

**Name:** Network: TCP Session Stream Assembly
**PS:** Directive: A fragmented Telnet session was captured in `telnet_stream.dump`. Assemble the sequence of retransmitted characters to reconstruct the administrator authentication command.
**Hint:** Sort the stream packets by sequence number: `sort -k2,2n telnet_stream.dump | awk '{print $4}' | tr -d '\n'`.
**Implementation:** TCP stream reassembly. Reordering out-of-order sequence frames via `sort` and concatenating stream payloads reassembles the cleartext Telnet session.

**Name:** Forensics: Multi-Stage Forensic Vault
**PS:** Directive: A multi-layered artifact `vault_stage1.txt` contains a base64 encoded string, which decodes to a reverse-rot13 command. Execute the pipeline to unlock the master flag.
**Hint:** Decode base64 first (`base64 -d vault_stage1.txt`), then pipe through rot13 with `tr 'A-Za-z' 'N-ZA-Mn-za-m'`.
**Implementation:** Multi-stage decoding pipeline. Chaining `base64 -d` with `tr` character substitution unmasks multiple layers of obfuscation to uncover the flag.
