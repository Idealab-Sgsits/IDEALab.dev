**Section 5: Terminal Sleuth**.

### 15 Easy Problems (150 Coins)

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

### 10 Medium Problems (400 Coins)

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

### 5 Hard Problems (750 Coins)

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