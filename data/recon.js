[
  {
    "id": "recon_01",
    "name": "Forensics: Read the Manual",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "bash",
    "problem_statement": "Directive: There is a file called `instructions.txt`. Read what is inside it to find the flag.",
    "flag": "SYSTEM_READY",
    "hints": [
      { "level": 1, "cost": 25, "text": "In Linux, the `cat` command reads files. Type `cat instructions.txt` and hit run." }
    ],
    "workspace": {
      "current_directory": "/home/agent",
      "file_system": {
        "instructions.txt": "Welcome operative. Your access flag is: SYSTEM_READY"
      }
    }
  },
  {
    "id": "recon_02",
    "name": "Query: Open the Box",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "sql",
    "problem_statement": "Directive: The database has a table named `vault`. Look inside to find the hidden code.",
    "flag": "FLAG_77X",
    "hints": [
      { "level": 1, "cost": 25, "text": "SQL uses SELECT. Type `SELECT * FROM vault` to see everything, then read the table output." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM vault LIMIT 1;",
      "database_schema": {
        "vault": [
          { "id": 1, "item": "Old Map", "secret_code": "EMPTY" },
          { "id": 2, "item": "Locked Box", "secret_code": "FLAG_77X" }
        ]
      }
    }
  },
  {
    "id": "recon_03",
    "name": "OSINT: The Sticky Note",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "osint",
    "problem_statement": "Directive: The suspect left a sticky note on their digital desktop. The password is right there.",
    "flag": "8080",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look really closely at the ASCII art sticky note rendered on the right pane." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "ascii",
        "content": "  _________________\n /                 \\\n|   DON'T FORGET!   |\n|                   |\n|   Server PIN:     |\n|   8080            |\n|                   |\n \\_________________/"
      }
    }
  },
  {
    "id": "recon_04",
    "name": "Forensics: What's in here?",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "bash",
    "problem_statement": "Directive: You are in a secure folder. What files are in here? Find the file named 'flag_xxx'.",
    "flag": "flag_092",
    "hints": [
      { "level": 1, "cost": 25, "text": "Type `ls` (which stands for list) and hit run to see all the files in the directory." }
    ],
    "workspace": {
      "current_directory": "/home/agent/secure",
      "file_system": {
        "readme.md": "Nothing here",
        "system_config": "Binary data",
        "flag_092": "You found it!"
      }
    }
  },
  {
    "id": "recon_05",
    "name": "Query: The Target",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "sql",
    "problem_statement": "Directive: Look at the `agents` table. Find the name of the agent whose `status` is 'Rogue'.",
    "flag": "Victor",
    "hints": [
      { "level": 1, "cost": 25, "text": "Type `SELECT * FROM agents`. Scan the list on the right for the rogue agent's name." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM agents;",
      "database_schema": {
        "agents": [
          { "id": 101, "name": "Aman", "status": "Active" },
          { "id": 102, "name": "Victor", "status": "Rogue" },
          { "id": 103, "name": "Priya", "status": "Active" }
        ]
      }
    }
  },
  {
    "id": "recon_06",
    "name": "OSINT: The Archived Pin",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "osint",
    "problem_statement": "Directive: The agent's old ID card is in this archived web page text. Find the 4-digit ID.",
    "flag": "4520",
    "hints": [
      { "level": 1, "cost": 25, "text": "Just read the text block on the right pane carefully. Look for the phrase 'Legacy Pin'." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "html",
        "content": "<div style=\"font-family: monospace; padding: 20px;\"><h2>IdeaLab Member Profile</h2><p>Name: Kabir</p><p>Status: Inactive</p><p>Legacy Pin: 4520</p></div>"
      }
    }
  },
  {
    "id": "recon_07",
    "name": "Forensics: Who am I?",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "bash",
    "problem_statement": "Directive: The system needs to verify your terminal username.",
    "flag": "admin_idealab",
    "hints": [
      { "level": 1, "cost": 25, "text": "Linux has a literal command for this. Type `whoami` and hit run." }
    ],
    "workspace": {
      "current_directory": "/home/admin_idealab",
      "current_user": "admin_idealab",
      "file_system": {}
    }
  },
  {
    "id": "recon_08",
    "name": "Query: Filter the Noise",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "sql",
    "problem_statement": "Directive: The `inventory` table is huge. Get only the item where the `id` is exactly 77.",
    "flag": "EMP_GENERATOR",
    "hints": [
      { "level": 1, "cost": 25, "text": "Use a WHERE clause! Type `SELECT * FROM inventory WHERE id = 77`." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM inventory LIMIT 2;",
      "database_schema": {
        "inventory": [
          { "id": 12, "item_name": "Rations", "qty": 100 },
          { "id": 77, "item_name": "EMP_GENERATOR", "qty": 1 },
          { "id": 89, "item_name": "Cables", "qty": 50 }
        ]
      }
    }
  },
  {
    "id": "recon_09",
    "name": "OSINT: The Metadata",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "osint",
    "problem_statement": "Directive: We extracted the raw EXIF data from a photograph. What camera model took this photo?",
    "flag": "EOS_5D",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the raw metadata text block on the right. Find the line labeled 'Camera Model'." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "Filename: IMG_9921.CR2\nDate Taken: 2024-10-15\nCamera Maker: Canon\nCamera Model: EOS_5D\nFocal Length: 50mm"
      }
    }
  },
  {
    "id": "recon_10",
    "name": "Forensics: Echo Chamber",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "bash",
    "problem_statement": "Directive: Make the terminal repeat the word 'SGSITS' back to you to unlock the system.",
    "flag": "SGSITS",
    "hints": [
      { "level": 1, "cost": 25, "text": "The `echo` command prints text. Type `echo SGSITS`." }
    ],
    "workspace": {
      "current_directory": "/home/agent",
      "file_system": {}
    }
  },
  {
    "id": "recon_11",
    "name": "Query: Count the Spies",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "sql",
    "problem_statement": "Directive: How many total spies are registered in the `spies` table?",
    "flag": "4",
    "hints": [
      { "level": 1, "cost": 25, "text": "SQL can count for you. Type `SELECT COUNT(*) FROM spies`." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM spies LIMIT 1;",
      "database_schema": {
        "spies": [
          { "id": 1, "alias": "Viper" },
          { "id": 2, "alias": "Ghost" },
          { "id": 3, "alias": "Shadow" },
          { "id": 4, "alias": "Hawk" }
        ]
      }
    }
  },
  {
    "id": "recon_12",
    "name": "OSINT: The Fake Website",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "osint",
    "problem_statement": "Directive: Look at the raw HTML source code on the right. What is the hidden comment?",
    "flag": "HIDDEN_DEV",
    "hints": [
      { "level": 1, "cost": 25, "text": "In HTML, developer comments are invisible on the actual website and look like `<!-- secret text -->`." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Login Server</title>\n</head>\n<body>\n  <h1>Access Restricted</h1>\n  <!-- FLAG: HIDDEN_DEV -->\n</body>\n</html>"
      }
    }
  },
  {
    "id": "recon_13",
    "name": "Forensics: Where am I?",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "bash",
    "problem_statement": "Directive: You are lost deep in a folder structure. Print your current working directory to get the flag.",
    "flag": "/var/hidden/flag_here",
    "hints": [
      { "level": 1, "cost": 25, "text": "The command for 'Print Working Directory' is just its initials: `pwd`." }
    ],
    "workspace": {
      "current_directory": "/var/hidden/flag_here",
      "file_system": {}
    }
  },
  {
    "id": "recon_14",
    "name": "Query: The Richest",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "sql",
    "problem_statement": "Directive: Find the absolute highest balance in the `accounts` table.",
    "flag": "950000",
    "hints": [
      { "level": 1, "cost": 25, "text": "SQL has a MAX function. Type `SELECT MAX(balance) FROM accounts`." }
    ],
    "workspace": {
      "default_query": "SELECT balance FROM accounts LIMIT 2;",
      "database_schema": {
        "accounts": [
          { "acct_no": "A01", "balance": 45000 },
          { "acct_no": "A02", "balance": 950000 },
          { "acct_no": "A03", "balance": 1200 }
        ]
      }
    }
  },
  {
    "id": "recon_15",
    "name": "OSINT: Domain Age",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "osint",
    "problem_statement": "Directive: Look at the WHOIS domain data on the right. What year was this website registered?",
    "flag": "2018",
    "hints": [
      { "level": 1, "cost": 25, "text": "Scan the text block for 'Creation Date' or 'Registered On'." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "Domain Name: SYNDICATE-NET.ORG\nRegistry Domain ID: 987654321_DOMAIN_ORG-VRSN\nCreation Date: 2018-06-15T12:00:00Z\nRegistrar: NameCheap, Inc."
      }
    }
  },
  {
    "id": "recon_16",
    "name": "Forensics: The Hidden Payload",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "bash",
    "problem_statement": "Directive: The current directory appears completely empty when you type `ls`, but a concealed script is present. Find its exact filename.",
    "flag": ".secret_payload.sh",
    "hints": [
      { "level": 1, "cost": 50, "text": "In Linux systems, files starting with a dot (.) are hidden. Add the `-a` (all) flag: type `ls -a`." }
    ],
    "workspace": {
      "current_directory": "/tmp/drops",
      "file_system": {
        ".secret_payload.sh": "echo 'System Compromised'"
      }
    }
  },
  {
    "id": "recon_17",
    "name": "Query: Sort it Out",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "sql",
    "problem_statement": "Directive: Query the `agents` table. Who is the agent that appears at the very top of the list when sorted alphabetically by `last_name`?",
    "flag": "Batra",
    "hints": [
      { "level": 1, "cost": 50, "text": "You need to order the results. Add `ORDER BY last_name ASC` to your SELECT statement." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM agents;",
      "database_schema": {
        "agents": [
          { "first_name": "Vikram", "last_name": "Singh" },
          { "first_name": "Neha", "last_name": "Batra" },
          { "first_name": "Rohan", "last_name": "Deshmukh" }
        ]
      }
    }
  },
  {
    "id": "recon_18",
    "name": "Forensics: Searching Inside",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "bash",
    "problem_statement": "Directive: The `server.log` file has 10,000 lines. Find the exact 4-digit code attached to the phrase 'CRITICAL_FAIL:'.",
    "flag": "9012",
    "hints": [
      { "level": 1, "cost": 50, "text": "You don't need to read the whole file. Use the grep command to search inside it: `grep \"CRITICAL_FAIL\" server.log`." }
    ],
    "workspace": {
      "current_directory": "/var/log",
      "file_system": {
        "server.log": "INFO: Boot sequence initiated\nWARN: Memory High\nCRITICAL_FAIL: 9012\nINFO: Restarting"
      }
    }
  },
  {
    "id": "recon_19",
    "name": "Query: Combine Two Tables",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "sql",
    "problem_statement": "Directive: `employees` has names. `access_logs` has entry times. Find the name of the employee who entered at '03:00:00'.",
    "flag": "Rahul",
    "hints": [
      { "level": 1, "cost": 50, "text": "Combine them using JOIN! `SELECT name FROM employees JOIN access_logs ON employees.id = access_logs.emp_id WHERE time = '03:00:00'`." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM employees;",
      "database_schema": {
        "employees": [
          { "id": 101, "name": "Aditi" },
          { "id": 102, "name": "Rahul" }
        ],
        "access_logs": [
          { "emp_id": 101, "time": "08:15:00" },
          { "emp_id": 102, "time": "03:00:00" }
        ]
      }
    }
  },
  {
    "id": "recon_20",
    "name": "OSINT: Hex Editor",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "osint",
    "problem_statement": "Directive: We ran a file through a Hexadecimal reader. It reveals a hidden text string appended at the very end of the file. Find it.",
    "flag": "BACKDOOR",
    "hints": [
      { "level": 1, "cost": 50, "text": "Scroll to the absolute bottom of the text-based Hex dump on the right pane. Look at the readable ASCII letters on the far right column." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "000000D0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|\n000000E0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|\n000000F0  FF D9 00 00 00 00 00 00  42 41 43 4B 44 4F 4F 52  |........BACKDOOR|"
      }
    }
  },
  {
    "id": "recon_21",
    "name": "Forensics: The Tail End",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "bash",
    "problem_statement": "Directive: The system is actively writing to `stream.log`. Read only the very last line of the file to get the flag.",
    "flag": "SYSTEM_HALT",
    "hints": [
      { "level": 1, "cost": 50, "text": "The `tail` command outputs the end of a file. Try `tail -n 1 stream.log`." }
    ],
    "workspace": {
      "current_directory": "/var/log",
      "file_system": {
        "stream.log": "Ping response OK\nPing response OK\nData transfer complete\nSYSTEM_HALT"
      }
    }
  },
  {
    "id": "recon_22",
    "name": "Query: Unique Values",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "sql",
    "problem_statement": "Directive: There are duplicate entries. Find the total number of completely *unique* `city` names in the `safehouses` table.",
    "flag": "2",
    "hints": [
      { "level": 1, "cost": 50, "text": "Use the `DISTINCT` keyword right after SELECT to ignore duplicates. `SELECT COUNT(DISTINCT city) FROM safehouses;`" }
    ],
    "workspace": {
      "default_query": "SELECT city FROM safehouses;",
      "database_schema": {
        "safehouses": [
          { "id": 1, "city": "Indore" },
          { "id": 2, "city": "Bhopal" },
          { "id": 3, "city": "Indore" }
        ]
      }
    }
  },
  {
    "id": "recon_23",
    "name": "OSINT: The Network Hop",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "osint",
    "problem_statement": "Directive: We ran a `traceroute` to find where the signal is bouncing. Look at the terminal output on the right. What is the IP address of the 4th hop?",
    "flag": "192.168.1.104",
    "hints": [
      { "level": 1, "cost": 50, "text": "Find line number 4 in the text output. The IP address looks like `192.168.x.x`." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "traceroute to secure.server (10.0.0.5), 30 hops max\n 1  192.168.1.1 (192.168.1.1)  1.123 ms\n 2  10.14.0.1 (10.14.0.1)  4.231 ms\n 3  10.14.10.5 (10.14.10.5)  5.432 ms\n 4  192.168.1.104 (192.168.1.104)  8.765 ms\n 5  10.0.0.5 (10.0.0.5)  10.123 ms"
      }
    }
  },
  {
    "id": "recon_24",
    "name": "Forensics: The Symbolic Link",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "bash",
    "problem_statement": "Directive: The file `shortcut.lnk` is pointing to another location. Find the absolute path of the original file it points to.",
    "flag": "/etc/shadow",
    "hints": [
      { "level": 1, "cost": 50, "text": "Use `ls -l`. The output will show an arrow `->` pointing to the real file path." }
    ],
    "workspace": {
      "current_directory": "/home/agent",
      "file_system": {
        "shortcut.lnk": "symlink -> /etc/shadow"
      }
    }
  },
  {
    "id": "recon_25",
    "name": "Query: The Null Protocol",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "sql",
    "problem_statement": "Directive: The database crashed. Find the `badge_id` in the `access_logs` table where the `timestamp` is exactly NULL.",
    "flag": "B-99",
    "hints": [
      { "level": 1, "cost": 50, "text": "You cannot use `=` for NULL in SQL. You must use `WHERE timestamp IS NULL`." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM access_logs;",
      "database_schema": {
        "access_logs": [
          { "badge_id": "B-12", "timestamp": "2024-10-01 08:30" },
          { "badge_id": "B-99", "timestamp": null }
        ]
      }
    }
  },
  {
    "id": "recon_26",
    "name": "Query: The Grand Heist (Triple Join)",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "sql",
    "problem_statement": "Directive: `suspects` has IDs. `vehicles` links IDs to plates. `toll_booths` links plates to cities. Find the `city` of the suspect named 'Kabir'.",
    "flag": "Ujjain",
    "hints": [
      { "level": 1, "cost": 100, "text": "Double JOIN required. Join suspects to vehicles on `suspect_id`. Then join toll_booths on `license_plate`. Filter `WHERE name = 'Kabir'`." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM suspects;",
      "database_schema": {
        "suspects": [ { "id": 99, "name": "Kabir" }, { "id": 45, "name": "Arjun" } ],
        "vehicles": [ { "suspect_id": 99, "license_plate": "MP09-1234" }, { "suspect_id": 45, "license_plate": "MP04-5555" } ],
        "toll_booths": [ { "license_plate": "MP09-1234", "city": "Ujjain" }, { "license_plate": "MP04-5555", "city": "Bhopal" } ]
      }
    }
  },
  {
    "id": "recon_27",
    "name": "Forensics: Piped Count",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "bash",
    "problem_statement": "Directive: The `auth.log` file tracks all logins. Write a command chain to count exactly how many times the word 'Failed' appears.",
    "flag": "3",
    "hints": [
      { "level": 1, "cost": 100, "text": "You can pipe (`|`) commands into each other! Read the file, filter for the specific word, and count the lines: `cat auth.log | grep \"Failed\" | wc -l`." }
    ],
    "workspace": {
      "current_directory": "/var/log",
      "file_system": {
        "auth.log": "Success: root\nFailed: admin\nSuccess: user1\nFailed: root\nFailed: admin"
      }
    }
  },
  {
    "id": "recon_28",
    "name": "Query: Above Average",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "sql",
    "problem_statement": "Directive: Query the `salaries` table. Find the `name` of the operative who earns strictly more than the overall average salary of the entire organization.",
    "flag": "Meera",
    "hints": [
      { "level": 1, "cost": 100, "text": "You need a subquery! First find the average `(SELECT AVG(salary) FROM salaries)`, then use that in your main WHERE clause." }
    ],
    "workspace": {
      "default_query": "SELECT * FROM salaries;",
      "database_schema": {
        "salaries": [
          { "name": "Raj", "salary": 40000 },
          { "name": "Simran", "salary": 50000 },
          { "name": "Meera", "salary": 90000 }
        ]
      }
    }
  },
  {
    "id": "recon_29",
    "name": "OSINT: Wireshark Packet Dump",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "osint",
    "problem_statement": "Directive: Analyze the raw HTTP PCAP (packet capture) text dump. An operative logged into an unsecured HTTP site. Extract their plaintext password.",
    "flag": "Hunter2",
    "hints": [
      { "level": 1, "cost": 100, "text": "Search the raw text block on the right for `POST` requests. Look for the payload body containing `password=`." }
    ],
    "workspace": {
      "evidence_board": {
        "type": "text",
        "content": "GET /index.html HTTP/1.1\nHost: secure.local\n\nPOST /login.php HTTP/1.1\nHost: secure.local\nContent-Type: application/x-www-form-urlencoded\n\nuser=admin&password=Hunter2"
      }
    }
  },
  {
    "id": "recon_30",
    "name": "Forensics: Base64 Decode",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "bash",
    "problem_statement": "Directive: The file `encoded_flag.txt` contains a Base64 string. Decode it directly in the terminal to reveal the plaintext flag.",
    "flag": "TERMINAL_WIN",
    "hints": [
      { "level": 1, "cost": 100, "text": "Pipe the `cat` command into the base64 decoding tool: `cat encoded_flag.txt | base64 -d`." }
    ],
    "workspace": {
      "current_directory": "/home/agent",
      "file_system": {
        "encoded_flag.txt": "VEVSTUlOQUxfV0lO"
      }
    }
  }
]