[
  {
    "id": "data_01",
    "name": "The Best Seller",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The pre-loaded list `sales` contains 10,000 daily transaction amounts. Find the absolute highest sale amount in the dataset.",
    "flag": "99984",
    "hints": [
      { "level": 1, "cost": 25, "text": "Python has a built-in max() function. Try print(max(sales))." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import random\nrandom.seed(42)\nsales = [random.randint(100, 90000) for _ in range(10000)]\nsales[452] = 99984\n",
      "visible_code": "# The list 'sales' (10,000 items) is already loaded in memory.\n\n# Write your code below to find the highest number:\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_02",
    "name": "Invoice Cleanup",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The list `invoices` contains 5,000 strings with messy whitespace. Clean them all, then print the exact invoice string located at index 402.",
    "flag": "INV-8890",
    "hints": [
      { "level": 1, "cost": 25, "text": "Strings have a .strip() method. You can clean the specific index directly: print(invoices[402].strip())." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "invoices = [f\"  INV-{i}  \" for i in range(5000)]\ninvoices[402] = \"   INV-8890   \"\n",
      "visible_code": "# The list 'invoices' is loaded. Print the cleaned string at index 402.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_03",
    "name": "The Imposter",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The pre-loaded list `ids` contains 5,000 integers, but one ID was accidentally entered as a text string. Find the string!",
    "flag": "ROGUE_ID",
    "hints": [
      { "level": 1, "cost": 25, "text": "Loop through the list and check the type: if type(item) == str: print(item)." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "ids = [100]*5000\nids[1234] = \"ROGUE_ID\"\n",
      "visible_code": "# The list 'ids' is loaded. Find and print the one string item.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_04",
    "name": "Total Revenue",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: Add up all 8,000 numbers in the `revenue` list to find the exact total earnings.",
    "flag": "80000",
    "hints": [
      { "level": 1, "cost": 25, "text": "You don't need a loop. Just use the built-in sum() function: print(sum(revenue))." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "revenue = [10] * 8000\n",
      "visible_code": "# Calculate the sum of the 'revenue' list.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_05",
    "name": "Customer Demographics",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `data` string contains 5,000 customer ages separated by commas (e.g., \"22,45...\"). Split this string into a list and find the age at index 2999.",
    "flag": "99",
    "hints": [
      { "level": 1, "cost": 25, "text": "Use the string .split(\",\") method, save it to a list, then print index 2999." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "ages_list = [\"25\"] * 5000\nages_list[2999] = \"99\"\ndata = \",\".join(ages_list)\n",
      "visible_code": "# Split the 'data' string by comma and print index 2999.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_06",
    "name": "The Cursed Batch",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `prices` list has 10,000 items. Count exactly how many times the cursed number 13 appears in the dataset.",
    "flag": "42",
    "hints": [
      { "level": 1, "cost": 25, "text": "Lists have a built-in .count() method. Try print(prices.count(13))." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "prices = [10] * 5000 + [13] * 42 + [20] * 4958\n",
      "visible_code": "# Count occurrences of 13 in 'prices'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_07",
    "name": "Reverse Logistics",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The string `encrypted_log` is 5,000 characters of gibberish. Reverse the entire string, then print just the first 10 characters.",
    "flag": "QRSTUVWXYZ",
    "hints": [
      { "level": 1, "cost": 25, "text": "Reverse the string using [::-1], then slice the first 10 characters using [:10]." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "encrypted_log = \"A\" * 4990 + \"ZYXWVUTSRQ\"\n",
      "visible_code": "# Reverse 'encrypted_log' and print the first 10 characters.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_08",
    "name": "Unique Visitors",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: Our website traffic log `ips` contains 20,000 IP addresses with heavy duplication. Exactly how many *unique* IPs visited today?",
    "flag": "5001",
    "hints": [
      { "level": 1, "cost": 25, "text": "Converting a list into a set() automatically deletes duplicates. Then check the len()." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "ips = [\"192.168.0.1\"] * 15000 + [f\"10.0.0.{i}\" for i in range(5000)]\n",
      "visible_code": "# Find the number of unique entries in 'ips'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_09",
    "name": "Inventory Lookup",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `stock` dictionary holds 5,000 items. Retrieve the exact quantity of the key 'Quantum_Processor'.",
    "flag": "777",
    "hints": [
      { "level": 1, "cost": 25, "text": "Access dictionary values using brackets and the key name: print(stock[\"Quantum_Processor\"])." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "stock = {f\"Item_{i}\": i for i in range(5000)}\nstock[\"Quantum_Processor\"] = 777\n",
      "visible_code": "# Get the value for 'Quantum_Processor' from the 'stock' dictionary.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_10",
    "name": "Discount Error",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `transactions` list has 10,000 integers. Find the sum of all the numbers, then print the final answer as an absolute (positive) number.",
    "flag": "404",
    "hints": [
      { "level": 1, "cost": 25, "text": "Sum the list first, then wrap it in the absolute value function: abs(sum(transactions))." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "transactions = [-2] * 5000 + [1] * 9596\n",
      "visible_code": "# Calculate the absolute sum of 'transactions'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_11",
    "name": "Average Rating",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `ratings` list has 100,000 customer scores. Calculate the exact mathematical average (mean).",
    "flag": "3.0",
    "hints": [
      { "level": 1, "cost": 25, "text": "Add them all up with sum() and divide by the len() of the list." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "ratings = [5] * 50000 + [1] * 50000\n",
      "visible_code": "# Find the mean of 'ratings'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_12",
    "name": "The VIP Customer",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `names` list has 5,000 lowercase names. However, exactly one name is already properly Capitalized. Find it!",
    "flag": "Rahul",
    "hints": [
      { "level": 1, "cost": 25, "text": "Loop through the names. Python strings have an .istitle() method that checks if the first letter is capitalized." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "names = [\"user\"] * 4999 + [\"Rahul\"]\n",
      "visible_code": "# Find the one capitalized string in 'names'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_13",
    "name": "Grid Search",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `grid` is a 100x100 2D list of data points. Retrieve the data point located at row index 47, column index 82.",
    "flag": "404",
    "hints": [
      { "level": 1, "cost": 25, "text": "To access lists inside lists, use double brackets: print(grid[row][column])." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "grid = [[0]*100 for _ in range(100)]\ngrid[47][82] = 404\n",
      "visible_code": "# Print the value at row 47, column 82 of 'grid'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_14",
    "name": "Feedback Count",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `reviews` variable is a massive text string. Count exactly how many times the word 'FAIL' appears.",
    "flag": "104",
    "hints": [
      { "level": 1, "cost": 25, "text": "Use the .count(\"FAIL\") method directly on the string variable." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "reviews = \"good \" * 49000 + \"FAIL \" * 104\n",
      "visible_code": "# Count occurrences of 'FAIL' in 'reviews'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_15",
    "name": "Floor Division",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The `items` array has 5,000 different warehouse quantities. You need to pack them into boxes of 12. Find the floor division `// 12` of the item at index 344.",
    "flag": "83",
    "hints": [
      { "level": 1, "cost": 25, "text": "Access the item first, then use the // operator: print(items[344] // 12)." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "items = [10] * 5000\nitems[344] = 1000\n",
      "visible_code": "# Do floor division by 12 on index 344 of 'items'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_16",
    "name": "Pandas: The Defaulter",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: A DataFrame `df` holds 10,000 user balances. Find the `User_ID` of the one person whose balance is exactly -999.",
    "flag": "9999",
    "hints": [
      { "level": 1, "cost": 50, "text": "Filter the DataFrame directly: df[df['Balance'] == -999]['User_ID']" }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\ndf = pd.DataFrame({'User_ID': range(10000), 'Balance': [100]*9999 + [-999]})\n",
      "visible_code": "import pandas as pd\n# 'df' is preloaded. Find the User_ID where Balance is -999.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_17",
    "name": "Pandas: The Empty Shelf",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The inventory DataFrame `df` has 50 columns. Exactly one column is completely empty (NaN). Drop the empty column, then print the total number of columns remaining.",
    "flag": "49",
    "hints": [
      { "level": 1, "cost": 50, "text": "Pandas has a .dropna(axis=1, how='all') function to drop empty columns. Then check len(df.columns)." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame(np.random.rand(10, 50))\ndf.iloc[:, 25] = np.nan\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Drop the empty column and print the remaining column count.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_18",
    "name": "NumPy: Catch the Speeding Ticket",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: A NumPy array `speeds` holds data for 50,000 cars. Count exactly how many cars were going strictly over 80 km/h.",
    "flag": "10000",
    "hints": [
      { "level": 1, "cost": 50, "text": "In NumPy, `speeds > 80` gives an array of True/False. np.sum() treats True as 1. Try np.sum(speeds > 80)." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import numpy as np\nspeeds = np.array([50] * 40000 + [90] * 10000)\n",
      "visible_code": "import numpy as np\n# 'speeds' is loaded. Count speeds over 80.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_19",
    "name": "Visual: The Hidden Shape",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The arrays `X` and `Y` contain thousands of coordinates. Plot them on a scatter graph to visually reveal the hidden letter.",
    "flag": "W",
    "hints": [
      { "level": 1, "cost": 50, "text": "Write `plt.scatter(X, Y)` and then `plt.show()`." }
    ],
    "workspace": {
      "output_type": "plot",
      "hidden_setup": "import matplotlib.pyplot as plt\nX = [1, 2, 3, 4, 5] * 200\nY = [5, 1, 3, 1, 5] * 200\n",
      "visible_code": "import matplotlib.pyplot as plt\n# 'X' and 'Y' are loaded. Plot them as a scatter graph.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_20",
    "name": "Pandas: Price Hike",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The `Prices` column in the 10,000-row DataFrame needs a 10% tax added to it. Update the column, then print the `.sum()` of the new column.",
    "flag": "1100000.0",
    "hints": [
      { "level": 1, "cost": 50, "text": "Multiply the whole column at once: df['Prices'] = df['Prices'] * 1.10. Then print its sum." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\ndf = pd.DataFrame({'Prices': [100] * 10000})\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Add 10% to Prices and print the sum.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_21",
    "name": "Pandas: The Highest Roller",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: Sort the 10,000-row DataFrame by the `Purchases` column in descending order and find the top customer's `Name`.",
    "flag": "KING",
    "hints": [
      { "level": 1, "cost": 50, "text": "Use df.sort_values(by='Purchases', ascending=False). Then grab the first name using .iloc[0]." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\ndf = pd.DataFrame({'Name': ['A'] * 9999 + ['KING'], 'Purchases': [10] * 9999 + [99999]})\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Find the Name with the highest Purchases.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_22",
    "name": "NumPy: Matrix Inversion",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: `matrix` is a 50x50 NumPy array of 1s and 0s. Invert the matrix (swap 1s and 0s), then print the sum of the row at index 24.",
    "flag": "0",
    "hints": [
      { "level": 1, "cost": 50, "text": "Invert by subtracting from 1: `inverted = 1 - matrix`. Then sum the row: `sum(inverted[24])`." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import numpy as np\nmatrix = np.zeros((50, 50))\nmatrix[24, :] = 1\n",
      "visible_code": "import numpy as np\n# 'matrix' is loaded. Invert it and sum row 24.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_23",
    "name": "Visual: The Anomaly Spike",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: Plot the `days` list against the `traffic` list as a line plot. Find the massive spike. Enter the X-axis (day) value of the peak.",
    "flag": "99",
    "hints": [
      { "level": 1, "cost": 50, "text": "Use `plt.plot(days, traffic)` then `plt.show()`. Look at the X-axis under the tallest peak." }
    ],
    "workspace": {
      "output_type": "plot",
      "hidden_setup": "import matplotlib.pyplot as plt\ndays = list(range(100))\ntraffic = [10] * 99 + [5000]\n",
      "visible_code": "import matplotlib.pyplot as plt\n# 'days' and 'traffic' are loaded. Plot the line graph.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_24",
    "name": "Pandas: The Daily Drop",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The `df` contains 5,000 days of stock prices. Find the index (row number) where the price dropped the most compared to the day immediately before it.",
    "flag": "4999",
    "hints": [
      { "level": 1, "cost": 50, "text": "Pandas .diff() calculates the difference between consecutive rows. Use .idxmin() to find the index of the biggest negative drop." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\ndf = pd.DataFrame({'Price': [100] * 4999 + [10]})\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Find the index of the largest price drop.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_25",
    "name": "Pandas: String Cleaning",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The `City` column has 10,000 messy names. Clean up the strings to be title-cased and stripped of spaces, then find the most common city.",
    "flag": "Indore",
    "hints": [
      { "level": 1, "cost": 50, "text": "Chain string methods: df['City'].str.strip().str.title(). Then use .mode()[0]." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\ndf = pd.DataFrame({'City': [' iNdoRe '] * 6000 + ['bhopal'] * 4000})\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Clean 'City' and find the mode.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_26",
    "name": "The Biased Algorithm (Parameter Tuning)",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: Tweak the `threshold` variable in the script so exactly 42 candidates get approved from the hidden dataset.",
    "flag": "MODEL_TUNED_OK",
    "hints": [
      { "level": 1, "cost": 100, "text": "Adjust the threshold number and hit Run. Keep adjusting until the console says 'Approved: 42'." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "candidates_scores = list(range(5000))\n",
      "visible_code": "# Change this variable until exactly 42 candidates pass\nthreshold = 9000\n\n# --- Engine Logic ---\napproved = []\nfor score in candidates_scores:\n    if score > threshold:\n        approved.append(score)\n        \nprint(f\"Approved: {len(approved)}\")",
      "hidden_validation": "\nif len(approved) == 42:\n    print('\\nFLAG: MODEL_TUNED_OK')\n"
    }
  },
  {
    "id": "data_27",
    "name": "Data Leakage (Correlation)",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: Our predictive model is cheating. The `Target` variable is perfectly correlated with one of the 50 feature columns in `df`. Print the name of the leaking column.",
    "flag": "Feature_38",
    "hints": [
      { "level": 1, "cost": 100, "text": "Use df.corr() to generate a correlation matrix. Look for a column that has a perfect 1.0 correlation with 'Target'." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame(np.random.rand(100, 50), columns=[f'Feature_{i}' for i in range(50)])\ndf['Target'] = np.random.rand(100)\ndf['Feature_38'] = df['Target'] * 2.5\n",
      "visible_code": "import pandas as pd\n# 'df' is loaded. Print the correlation matrix to find the leak.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_28",
    "name": "Visual: The Outlier (Clustering)",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: We plotted 50,000 data points. There is one rogue bot account completely outside the clusters. Plot it, visually locate the outlier, and enter its Y-coordinate.",
    "flag": "850",
    "hints": [
      { "level": 1, "cost": 100, "text": "Write plt.scatter(df['X'], df['Y']) and plt.show(). The rogue point sits far away from the center mass." }
    ],
    "workspace": {
      "output_type": "plot",
      "hidden_setup": "import matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'X': np.random.randn(49999), 'Y': np.random.randn(49999)})\ndf.loc[49999] = [10, 850]\n",
      "visible_code": "import matplotlib.pyplot as plt\nimport pandas as pd\n# 'df' is loaded. Plot the scatter graph to find the outlier.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_29",
    "name": "The Gradient Descent",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: A mathematical optimization ball rolls down a hill. Start at `x = 15`. Loop 10 times: if `x` is even, divide it by 2 (using `//`). If `x` is odd, multiply by 3 and add 1. What is the final value of `x`?",
    "flag": "40",
    "hints": [
      { "level": 1, "cost": 100, "text": "Set up a for loop in range(10). Use the modulo operator `% 2 == 0` to check if the number is even." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "x = 15\n# Write the optimization loop for 10 iterations here:\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "data_30",
    "name": "The Broken Decision Tree (Debugging)",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: The script classifies users into 'Premium' or 'Basic' using `if/else` rules, but it's failing hidden test cases. Fix the logical `and`/`or` operators so it passes.",
    "flag": "LOGIC_FIXED",
    "hints": [
      { "level": 1, "cost": 100, "text": "Trace the logic. If a user needs 5 purchases OR to be over 30 years old, make sure the operator is 'or', not 'and'." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "purchases = 6\nage = 25\nstatus = \"Basic\"\n\n# Fix the logic below so this user becomes Premium\nif purchases > 5 and age > 30:\n    status = \"Premium\"\n\nprint(f\"User Status: {status}\")",
      "hidden_validation": "\nif status == \"Premium\" and \" or \" in _visible_code_submitted:\n    print('\\nFLAG: LOGIC_FIXED')\nelif status == \"Premium\":\n    print('\\nFLAG: LOGIC_FIXED')\n"
    }
  }
]