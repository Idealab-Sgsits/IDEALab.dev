 **Section 2: Data Pipelines**.

### 15 Easy Problems (150 Coins)

*Focus: 1-line native Python tricks. The data is pre-loaded into massive arrays or long strings so they cannot eyeball the answer.*

**Name:** The Best Seller
**PS:** Directive: The pre-loaded list `sales` contains 10,000 daily transaction amounts. Find the absolute highest sale amount in the dataset.
**Hint:** Python has a built-in `max()` function. Try `print(max(sales))`.
**Implementation:** Preload `sales` with 10,000 random integers. They must run the code to get the specific 5-digit max number.

**Name:** Invoice Cleanup
**PS:** Directive: The list `invoices` contains 5,000 strings with messy whitespace. Clean them all, then print the exact invoice string located at index `402`.
**Hint:** Strings have a `.strip()` method. You can clean the specific index directly: `print(invoices[402].strip())`.
**Implementation:** Preload a massive list of strings. They fetch and clean one specific index.

**Name:** The Imposter
**PS:** Directive: The pre-loaded list `ids` contains 5,000 integers, but one ID was accidentally entered as a text string. Find the string!
**Hint:** Loop through the list and check the type: `if type(item) == str: print(item)`.
**Implementation:** They must write a loop to search the 5,000-item list for the single string anomaly.

**Name:** Total Revenue
**PS:** Directive: Add up all 8,000 numbers in the `revenue` list to find the exact total earnings.
**Hint:** You don't need a loop. Just use the built-in `sum()` function.
**Implementation:** They write `print(sum(revenue))` to get a massive integer total.

**Name:** Customer Demographics
**PS:** Directive: The `data` string contains 5,000 customer ages separated by commas (e.g., "22,45..."). Split this string into a list and find the age at index `2999`.
**Hint:** Use the string `.split(",")` method, save it to a list, then print index `2999`.
**Implementation:** Preload a massive comma-separated string. They must split it to find the specific value.

**Name:** The Cursed Batch
**PS:** Directive: The `prices` list has 10,000 items. Count exactly how many times the cursed number `13` appears in the dataset.
**Hint:** Lists have a built-in `.count()` method. Try `print(prices.count(13))`.
**Implementation:** Preload a generated list of integers. They execute the count function.

**Name:** Reverse Logistics
**PS:** Directive: The string `encrypted_log` is 5,000 characters of gibberish. Reverse the entire string, then print just the first 10 characters to get the flag.
**Hint:** Reverse the string using `[::-1]`, then slice the first 10 characters using `[:10]`.
**Implementation:** Preload a massive string. They write `print(encrypted_log[::-1][:10])`.

**Name:** Unique Visitors
**PS:** Directive: Our website traffic log `ips` contains 20,000 IP addresses with heavy duplication. Exactly how many *unique* IPs visited today?
**Hint:** Converting a list into a `set()` automatically deletes duplicates. Then check the `len()`.
**Implementation:** Preload an array of IPs. They write `print(len(set(ips)))`.

**Name:** Inventory Lookup
**PS:** Directive: The `stock` dictionary holds 5,000 items. Retrieve the exact quantity of the key `"Quantum_Processor"`.
**Hint:** Access dictionary values using brackets and the key name: `print(stock["Quantum_Processor"])`.
**Implementation:** Preload a massive dictionary. They query the specific key.

**Name:** Discount Error
**PS:** Directive: The `transactions` list has 10,000 integers (both positive and negative). Find the sum of all the numbers, then convert the final answer to an absolute (positive) number.
**Hint:** Sum the list first, then wrap it in the absolute value function: `abs(sum(transactions))`.
**Implementation:** They do math on a large array to get a final positive integer.

**Name:** Average Rating
**PS:** Directive: The `ratings` list has 100,000 customer scores. Calculate the exact mathematical average (mean).
**Hint:** Add them all up with `sum()` and divide by the `len()` of the list.
**Implementation:** They write `print(sum(ratings) / len(ratings))`.

**Name:** The VIP Customer
**PS:** Directive: The `names` list has 5,000 lowercase names. However, exactly one name is already properly Capitalized. Find it!
**Hint:** Loop through the names. Python strings have an `.istitle()` method that checks if the first letter is capitalized.
**Implementation:** They write a loop checking for the capitalization anomaly.

**Name:** Grid Search
**PS:** Directive: The `grid` is a 100x100 2D list of data points. Retrieve the data point located at row index `47`, column index `82`.
**Hint:** To access lists inside lists, use double brackets: `print(grid[row][column])`.
**Implementation:** Preload a massive 2D matrix.

**Name:** Feedback Count
**PS:** Directive: The `reviews` variable is a 50,000-character text block. Count exactly how many times the exact word "FAIL" appears.
**Hint:** Use the `.count("FAIL")` method directly on the string variable.
**Implementation:** They execute a string count on a giant text block.

**Name:** Floor Division
**PS:** Directive: The `items` array has 5,000 different warehouse quantities. You need to pack them into boxes of 12. Find the floor division `// 12` of the item at index `344`.
**Hint:** Access the item first, then use the `//` operator.
**Implementation:** They write `print(items[344] // 12)`.

### 10 Medium Problems (400 Coins)

*Focus: Pandas, NumPy, Data Cleaning, and leveraging the Right Pane for data visualization.*

**Name:** Pandas: The Defaulter
**PS:** Directive: A DataFrame `df` holds 10,000 user balances. Find the `User_ID` of the one person whose balance is exactly `-999`.
**Hint:** Filter the DataFrame directly: `df[df['Balance'] == -999]['User_ID']`.
**Implementation:** Preload `pandas` and a massive `df`.

**Name:** Pandas: The Empty Shelf
**PS:** Directive: The inventory DataFrame `df` has 50 columns. Exactly one column is completely empty (`NaN`). Drop the empty column, then print the total number of columns remaining.
**Hint:** Pandas has a `.dropna(axis=1, how='all')` function to drop empty columns. Then check `len(df.columns)`.
**Implementation:** Preload a 50-column `df`. They apply dropna and count.

**Name:** NumPy: Catch the Speeding Ticket
**PS:** Directive: A NumPy array `speeds` holds data for 50,000 cars. Count exactly how many cars were going strictly over 80 km/h.
**Hint:** In NumPy, `speeds > 80` gives an array of True/False values. `np.sum()` treats True as 1. Try `np.sum(speeds > 80)`.
**Implementation:** Preload a massive `speeds` array. They execute the boolean sum.

**Name:** Visual: The Hidden Shape
**PS:** Directive: The arrays `X` and `Y` contain 10,000 random-looking coordinates. Plot them on a scatter graph to visually reveal the hidden letter.
**Hint:** We imported `matplotlib.pyplot as plt`. Write `plt.scatter(X, Y)` and then `plt.show()`.
**Implementation:** Right pane renders the matplotlib graph showing a giant letter (e.g., 'W'). They type the letter as the flag.

**Name:** Pandas: Price Hike
**PS:** Directive: The `Prices` column in the 10,000-row DataFrame needs a 10% tax added to it. Update the column, then print the `.sum()` of the new column.
**Hint:** Multiply the whole column at once: `df['Prices'] = df['Prices'] * 1.10`. Then sum it.
**Implementation:** They do column-wise math and aggregate it.

**Name:** Pandas: The Highest Roller
**PS:** Directive: Sort the 10,000-row DataFrame by the `Purchases` column in descending order and find the top customer's `Name`.
**Hint:** Use `df.sort_values(by='Purchases', ascending=False)`. Then grab the first name using `.iloc[0]`.
**Implementation:** They chain the sort and extract methods.

**Name:** NumPy: Matrix Inversion
**PS:** Directive: `matrix` is a 50x50 NumPy array of 1s and 0s. Invert the matrix (swap 1s and 0s), then print the sum of the row at index `24`.
**Hint:** In NumPy, invert a binary matrix by subtracting it from 1: `inverted = 1 - matrix`. Then sum the row: `sum(inverted[24])`.
**Implementation:** They invert a matrix and slice a row for aggregation.

**Name:** Visual: The Anomaly Spike
**PS:** Directive: Plot the `days` list against the `traffic` list as a line plot. There is a massive, abnormal traffic spike on one specific day. Look at the graph and enter that day number.
**Hint:** Use `plt.plot(days, traffic)` then `plt.show()`. Find the X-axis value of the tallest peak.
**Implementation:** Right pane renders a line chart. They visually identify the X-coordinate of the anomaly.

**Name:** Pandas: The Daily Drop
**PS:** Directive: The `df` contains 5,000 days of stock prices. Find the index (row number) where the price dropped the most compared to the day immediately before it.
**Hint:** Pandas `.diff()` calculates the difference between consecutive rows. Then use `.idxmin()` to find the index of the biggest negative drop.
**Implementation:** They calculate rolling differences on a large dataset.

**Name:** Pandas: String Cleaning
**PS:** Directive: The `City` column has 10,000 messy names (e.g., '  iNdoRe  '). Clean up the strings to be title-cased and stripped of spaces, then find the most common city.
**Hint:** Chain string methods: `df['City'].str.strip().str.title()`. Then use `.mode()[0]` to find the most frequent.
**Implementation:** They clean a massive text column and aggregate it.

### 5 Hard Problems (750 Coins)

*Focus: Machine Learning concepts, logical loops, and parameter tuning. Logic runs on hidden validation sets.*

**Name:** The Biased Algorithm (Parameter Tuning)
**PS:** Directive: Our loan approval script is rejecting everyone! Tweak the `income_weight` and `credit_score_weight` variables at the top of the script so exactly 42 candidates get approved from the hidden test pool.
**Hint:** You don't need to rewrite the function logic. Just adjust the two math variables and hit Run until the terminal says exactly 42 were approved.
**Implementation:** Code has a working logic loop on a hidden 5,000-user dataset. They must trial-and-error the hyperparameters.

**Name:** Data Leakage (Correlation)
**PS:** Directive: Our predictive model is cheating. The `Target` variable is perfectly correlated with one of the 50 feature columns in the DataFrame `df`. Print the name of the leaking column.
**Hint:** Use `df.corr()` to generate a correlation matrix. Look for a column that has a perfect `1.0` correlation with the 'Target' row.
**Implementation:** They run a correlation matrix on a 50-column DF to spot the leak.

**Name:** Visual: The Outlier (Clustering)
**PS:** Directive: We plotted 50,000 data points. There are normal clusters, but one rogue bot account is completely outside them. Plot it, visually locate the outlier, and enter its Y-coordinate.
**Hint:** Write `plt.scatter(df['X'], df['Y'])` and `plt.show()`. The rogue point will be visually obvious, sitting far away from the main blobs.
**Implementation:** Right pane shows the plot. The outlier sits at a distinct Y value (e.g., Y=850).

**Name:** The Gradient Descent
**PS:** Directive: A mathematical optimization ball rolls down a hill. Start at `x = 8593`. Loop 50 times: if `x` is even, divide it by 2 (using integer division `//`). If `x` is odd, multiply by 3 and add 1. What is the final value of `x`?
**Hint:** Set up a `for` loop `in range(50)`. Use the modulo operator `% 2 == 0` to check if the number is even.
**Implementation:** They write a Collatz conjecture loop for 50 iterations to find the specific integer output.

**Name:** The Broken Decision Tree (Debugging)
**PS:** Directive: The script classifies users into 'Premium' or 'Basic' using `if/else` rules, but it has a logical bug. It’s failing the hidden test cases. Fix the logical `and` / `or` operators so it passes.
**Hint:** Trace the `if/else` logic carefully. If a user needs 5 purchases OR to be over 30 years old, make sure the operator is `or`, not `and`.
**Implementation:** Preload a buggy `if/elif` block. They tweak the logic operators to make the output match the required target on a hidden dataset.