 **Section 2: Data Pipelines**.

### 25 Easy Problems (150 Coins)

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
**PS:** Directive: The `prices` list has 10,000 items. Count exactly how many times the cursed number `13` appears in the dataset. Format the flag as `<count>_DATA`.
**Hint:** Lists have a built-in `.count()` method. Try `print(f"{prices.count(13)}_DATA")`.
**Implementation:** Preload a generated list of integers. They execute the count function and append `_DATA`.

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

**Name:** List Comprehension: Even Squares Filter
**PS:** Directive: The pre-loaded list `raw_numbers` contains 10,000 integers. Use a list comprehension to square all even numbers and assign the result to `even_squares`.
**Hint:** Use a comprehension with a conditional: `[x**2 for x in raw_numbers if x % 2 == 0]`.
**Implementation:** Preload raw_numbers with 10,000 integers in hidden_setup_b64. Student writes a list comprehension filtering even values and squaring them into even_squares. Hidden validation verifies sum and length.

**Name:** Filter Pipeline: High Value Transactions
**PS:** Directive: The pre-loaded list `ledger` contains 8,000 transaction dictionaries with keys `'id'` and `'amount'`. Use `filter()` with a lambda to extract transactions with `amount > 5000` into a list named `high_value`.
**Hint:** Wrap filter in list: `high_value = list(filter(lambda t: t['amount'] > 5000, ledger))`.
**Implementation:** Preload 8,000 transaction dictionaries in ledger. Student applies filter() with a lambda expression to isolate high-value entries into high_value. Hidden validation checks extracted ID sequence.

**Name:** Map Transformation: Domain Extractor
**PS:** Directive: The pre-loaded list `emails` contains 5,000 user email addresses. Use `map()` to extract the normalized lowercase domain name (after '@') for each address into a list named `domains`.
**Hint:** Use map with string split: `domains = list(map(lambda e: e.split('@')[1].lower(), emails))`.
**Implementation:** Preload 5,000 uppercase email strings. Student applies map() with lambda string parsing to generate normalized lowercase domains. Hidden validation confirms list parity.

**Name:** String Slicing: Telemetry Decimation
**PS:** Directive: The pre-loaded string `sensor_stream` contains 20,000 comma-delimited hex readings. Split it, extract every 5th reading starting from index 3 up to index 1500, join them with hyphens, and store in `decimated_stream`.
**Hint:** Split the string into a list, slice using `[3:1500:5]`, and join with `'-'.join(...)`.
**Implementation:** Preload comma-delimited hex string. Student splits string, extracts stride slice [3:1500:5], and joins with hyphens. Hidden validation verifies exact reconstructed string.

**Name:** Dictionary Aggregation: Category Totalizer
**PS:** Directive: The pre-loaded list `inventory_records` contains 6,000 items, each structured as `{'category': str, 'quantity': int}`. Aggregate the total quantity by category into a dictionary named `category_totals`.
**Hint:** Iterate through records and accumulate: `category_totals[cat] = category_totals.get(cat, 0) + qty`.
**Implementation:** Preload 6,000 record dictionaries. Student aggregates quantities per category into a dictionary category_totals. Hidden validation checks dictionary keys and accumulated values.

**Name:** Set Logic: Telemetry Drift Audit
**PS:** Directive: Two pre-loaded sets, `baseline_hosts` and `active_hosts` (each containing 5,000 hostnames), have drifted. Find all hostnames that appear in exactly one of the two sets, and store them in a set named `drifted_hosts`.
**Hint:** Use symmetric difference operator `^` or method `baseline_hosts.symmetric_difference(active_hosts)`.
**Implementation:** Preload two overlapping sets of 5,000 hostname strings. Student computes symmetric difference into drifted_hosts. Hidden validation tests set equivalence.

**Name:** Matrix Flatten: Non-Zero Coordinate Unroll
**PS:** Directive: The pre-loaded 2D list `sparse_grid` (80x80) contains integers. Use a nested list comprehension to extract all coordinate tuples `(r, c)` where `sparse_grid[r][c] != 0` into a list named `active_coords`.
**Hint:** Nest row and col loops: `[(r, c) for r in range(80) for c in range(80) if sparse_grid[r][c] != 0]`.
**Implementation:** Preload 80x80 2D sparse integer grid. Student unrolls non-zero indices into coordinate tuples via nested comprehension. Hidden validation checks extracted coordinate list.

**Name:** Zip Merge: Key-Value Pairing
**PS:** Directive: Two pre-loaded lists `sensor_keys` and `calibration_factors` contain 3,000 elements each. Combine them into a dictionary named `cal_map` using `zip()` and a dict comprehension, retaining only entries where factor > 1.0.
**Hint:** Use dictionary comprehension with zip: `{k: v for k, v in zip(sensor_keys, calibration_factors) if v > 1.0}`.
**Implementation:** Preload key and factor arrays of length 3,000. Student zips lists and filters threshold into cal_map dictionary. Hidden validation tests paired dictionary contents.

**Name:** Tuple Sort: Multi-Key Priority Queue
**PS:** Directive: The pre-loaded list `packets` contains 4,000 tuples `(priority, timestamp, payload)`. Sort `packets` into `sorted_packets` such that priority is in ascending order (1 before 5), and timestamp is descending (newest first).
**Hint:** Sort using a tuple key: `sorted_packets = sorted(packets, key=lambda p: (p[0], -p[1]))`.
**Implementation:** Preload 4,000 packet tuples. Student applies multi-key lambda sorting with inverted secondary timestamp key into sorted_packets. Hidden validation checks order invariants.

**Name:** Frequency Counter: Rare Event Detector
**PS:** Directive: The pre-loaded list `error_codes` contains 10,000 event log codes. Find the least frequent error code. If multiple share the minimum frequency, pick the lexicographically smallest, and store in `rarest_code`.
**Hint:** Use `collections.Counter(error_codes)`, find minimum count, and sort candidates.
**Implementation:** Preload 10,000 event codes with rare anomalies. Student computes frequency counts and determines the minimum occurrence item into rarest_code. Hidden validation checks tie-broken answer.

### 20 Medium Problems (400 Coins)

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

**Name:** Pandas: IQR Outlier Trimming
**PS:** Directive: The pre-loaded DataFrame `df` has a numeric column `readings` (5,000 rows). Filter out all outliers beyond 1.5 IQR from the quartiles into `clean_df`, and compute `clean_mean = round(clean_df['readings'].mean(), 2)`.
**Hint:** Compute `q1 = df['readings'].quantile(0.25)` and `q3 = df['readings'].quantile(0.75)`. Filter between `q1 - 1.5*iqr` and `q3 + 1.5*iqr`.
**Implementation:** Preload 5,000-row DataFrame with injected Gaussian outliers. Student applies IQR quartile filtering to extract clean_mean. Hidden validation confirms rounded mean.

**Name:** NumPy: Z-Score Anomaly Isolation
**PS:** Directive: The pre-loaded 1D NumPy array `accelerometer` contains 8,000 vibration samples. Compute the Z-score for each element: Z = (x - mean) / std. Identify all elements where |Z| > 3.0 and store the count in `outlier_count`.
**Hint:** Calculate mean and std with `np.mean()` and `np.std()`. Then do `np.sum(np.abs(z) > 3.0)`.
**Implementation:** Preload 8,000 sensor samples with extreme vibration spikes. Student computes vectorized Z-scores and tallies threshold violations into outlier_count. Hidden validation checks count.

**Name:** Pandas: Multi-Level GroupBy Aggregation
**PS:** Directive: The pre-loaded DataFrame `sales_df` has columns `['region', 'product', 'revenue', 'units']` with 12,000 rows. Group by `region`, compute the total `revenue` sum, and store the region name with the highest total revenue in `top_region`.
**Hint:** Aggregate with `sales_df.groupby('region')['revenue'].sum()` and call `.idxmax()`.
**Implementation:** Preload 12,000-row transaction DataFrame. Student executes group-by revenue aggregation and identifies top performing region into top_region. Hidden validation verifies region string.

**Name:** Pandas: Group-Wise Median Imputation
**PS:** Directive: In DataFrame `sensor_df` (6,000 rows), the `pressure` column contains missing values (`NaN`). Impute each missing pressure using the median of its corresponding `device_id` group, and store the total column sum rounded to 2 decimals in `imputed_sum`.
**Hint:** Use transform: `sensor_df['pressure'] = sensor_df.groupby('device_id')['pressure'].transform(lambda g: g.fillna(g.median()))`.
**Implementation:** Preload 6,000-row telemetry dataset with 15% NaN entries. Student applies grouped median imputation via transform and computes imputed_sum. Hidden validation verifies aggregated float.

**Name:** Pandas: Relational Join and Drift Reconciler
**PS:** Directive: Merge `orders_df` (5,000 rows) and `customers_df` (1,000 rows) on `cust_id`. Filter for rows where `status == 'active'` and `tier == 'platinum'`, and store the total `amount` sum rounded to 2 decimal places in `platinum_total`.
**Hint:** Merge with `pd.merge(orders_df, customers_df, on='cust_id')` and filter with boolean masking.
**Implementation:** Preload relational orders and customer DataFrames. Student executes inner merge and composite condition filtering to calculate platinum_total. Hidden validation checks float sum.

**Name:** NumPy: Euclidean Distance Matrix Broadcast
**PS:** Directive: The pre-loaded array `coords` represents 500 2D points (shape 500x2). Using NumPy broadcasting, compute the pairwise Euclidean distance matrix and store the maximum distance rounded to 4 decimal places in `max_dist`.
**Hint:** Broadcast with `diff = coords[:, None, :] - coords[None, :, :]` and take `np.sqrt(np.sum(diff**2, axis=-1))`.
**Implementation:** Preload 500 2D point coordinates. Student performs vectorized broadcasting to construct Euclidean distance matrix and extracts max_dist. Hidden validation validates maximum distance.

**Name:** Pandas: Pivot Table Reshaping
**PS:** Directive: The DataFrame `traffic_log` (8,000 rows) records network traffic with columns `['source_subnet', 'dest_port', 'packet_count']`. Construct a pivot table, find the subnet generating the highest packet count to port 443, and store in `target_subnet`.
**Hint:** Construct `traffic_log.pivot_table(index='source_subnet', columns='dest_port', values='packet_count', aggfunc='sum')` and query column 443.
**Implementation:** Preload 8,000-row network traffic log. Student constructs pivot table and isolates highest volume subnet for port 443 into target_subnet. Hidden validation checks subnet string.

**Name:** Pandas: Rolling Volatility Detection
**PS:** Directive: In DataFrame `telemetry_ts` (43,200 minutely rows with DatetimeIndex), compute a 60-minute rolling standard deviation on `temperature`. Find the exact timestamp where rolling volatility peaked, and store as a string in `peak_time`.
**Hint:** Calculate `telemetry_ts['temperature'].rolling('60min').std()` and retrieve `str(rolling_std.idxmax())`.
**Implementation:** Preload 30-day time-series telemetry DataFrame. Student executes rolling time-window standard deviation and locates the timestamp of max variance. Hidden validation checks timestamp string.

**Name:** Visual: Cumulative Distribution Knee
**PS:** Directive: The array `latencies` holds 10,000 server response latencies (ms). Plot the empirical CDF using matplotlib, identify the 95th percentile latency threshold, and store this integer value in `p95_latency`.
**Hint:** Plot `plt.plot(latencies, np.linspace(0, 1, len(latencies)))` and `plt.show()`, or calculate `int(np.percentile(latencies, 95))`.
**Implementation:** Preload 10,000 server latency values. Right pane displays the cumulative probability curve. Student inspects or calculates 95th percentile cutoff into p95_latency. Hidden validation checks integer value.

**Name:** Pandas: Regex Tokenizer & IP Masking
**PS:** Directive: The DataFrame `raw_logs` contains 7,000 rows with a string column `log_entry`. Extract the IPv4 address two-octet prefix (e.g., '10.14') from each log, and store the most common subnet prefix in `top_subnet`.
**Hint:** Extract with `raw_logs['log_entry'].str.extract(r'(\d{1,3}\.\d{1,3})')` and take `.mode()[0]`.
**Implementation:** Preload 7,000 connection log strings. Student uses regex extraction in Pandas to isolate IP prefixes and finds the mode. Hidden validation verifies top subnet string.

### 15 Hard Problems (750 Coins)

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

**Name:** ML Metric: ROC-AUC Rank Statistic
**PS:** Directive: The pre-loaded arrays `y_true` (binary 0/1, 2,000 samples) and `y_scores` (probabilities) represent classifier predictions. Calculate the exact ROC-AUC score rounded to 4 decimal places using the rank statistic formula, and store in `auc_score`.
**Hint:** Compute rank vector with `np.argsort(np.argsort(y_scores)) + 1` and apply Mann-Whitney U formula.
**Implementation:** Preload 2,000 ground truth and probability score pairs. Student implements Wilcoxon-Mann-Whitney rank statistic to calculate ROC-AUC into auc_score. Hidden validation verifies rounded metric.

**Name:** ML Metric: Macro F1-Score Matrix
**PS:** Directive: The pre-loaded arrays `y_true` and `y_pred` contain 3,000 predictions across 4 classes (0, 1, 2, 3). Compute the Macro-averaged F1-score across all 4 classes, and store the result rounded to 4 decimal places in `macro_f1`.
**Hint:** For each class, compute Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = 2*P*R/(P+R), then average across classes.
**Implementation:** Preload 3,000 4-class prediction arrays. Student computes per-class precision and recall harmonic means and calculates unweighted macro mean into macro_f1. Hidden validation checks float value.

**Name:** Optimization: Batch Gradient Descent Convergence
**PS:** Directive: Fit a linear model y = w*x + b on pre-loaded arrays `X` and `y` (1,000 samples). Starting from w=0, b=0, run 100 iterations of batch gradient descent with alpha=0.05. Store the final weight `w` rounded to 4 decimal places in `final_weight`.
**Hint:** In each step: `dw = np.sum((y_hat - y) * X) / N` and `w -= alpha * dw`. Run loop for 100 iterations.
**Implementation:** Preload 1,000 continuous observation pairs. Student writes batch gradient descent loop with analytical loss derivatives updating weight and bias into final_weight. Hidden validation tests parameter value.

**Name:** Clustering: K-Means Inertia Computation
**PS:** Directive: The pre-loaded array `data_points` contains 1,500 2D coordinates and `centroids` contains 3 cluster centers. Compute the total within-cluster sum of squares (inertia), and store the result rounded to 2 decimal places in `total_inertia`.
**Hint:** Find squared distance from each point to every centroid, take minimum for each point, and sum them up.
**Implementation:** Preload 1,500 points across 3 clusters and centroid coordinates. Student computes point-to-centroid squared Euclidean distance minimums and sums into total_inertia. Hidden validation verifies inertia.

**Name:** Dimensionality: PCA Explained Variance Ratio
**PS:** Directive: The pre-loaded matrix `features` is a centered (1000, 5) dataset. Compute the covariance matrix and its eigenvalues. Determine the fraction of total variance explained by the top 2 principal components, and store rounded to 4 decimals in `explained_var_ratio`.
**Hint:** Compute `cov = (features.T @ features) / (N - 1)`, eigenvalues with `np.linalg.eigvalsh()`, sort descending, and divide sum(top 2) by total sum.
**Implementation:** Preload 1000x5 centered multivariate dataset. Student computes covariance matrix eigenvalues to determine top-2 variance explanation ratio into explained_var_ratio. Hidden validation checks ratio.

**Name:** Preprocessing: Robust Scaler Implementation
**PS:** Directive: Implement Robust Scaling from scratch on the (2000, 4) array `sensor_features`: for each column, subtract median and divide by IQR (Q3 - Q1). Find the maximum value in the scaled matrix rounded to 3 decimal places and store in `max_scaled_val`.
**Hint:** Compute median with `np.median(..., axis=0)` and IQR with `np.percentile()`. Scale and find `round(float(np.max(scaled)), 3)`.
**Implementation:** Preload 2,000x4 feature matrix with extreme outliers. Student implements column-wise median subtraction and interquartile range division into max_scaled_val. Hidden validation checks max scaled value.

**Name:** Loss Function: Multi-Class Cross-Entropy
**PS:** Directive: The pre-loaded array `y_true_onehot` is a (1500, 3) binary one-hot matrix, and `y_prob` contains predicted probabilities. Compute categorical cross-entropy loss with epsilon 1e-15, and store rounded to 4 decimals in `cross_entropy_loss`.
**Hint:** Calculate `-np.mean(np.sum(y_true_onehot * np.log(np.clip(y_prob, 1e-15, 1.0)), axis=1))`.
**Implementation:** Preload 1,500 one-hot true label and predicted probability matrices. Student calculates numerical categorical cross-entropy with log-clipping into cross_entropy_loss. Hidden validation verifies loss float.

**Name:** Optimization: Elastic Net Penalty Evaluation
**PS:** Directive: An Elastic Net regularizer has lambda=0.1 and L1-ratio=0.5. Given the pre-loaded weight vector `weights` (length 500), compute penalty P(w) = lambda * [0.5 * sum(|w|) + 0.25 * sum(w^2)], and store rounded to 4 decimals in `penalty_value`.
**Hint:** Calculate `l1 = np.sum(np.abs(weights))` and `l2 = np.sum(weights**2)`. Compute penalty with the given formula.
**Implementation:** Preload 500 regression weights. Student calculates composite L1 and L2 regularizer penalty with lambda 0.1 and rho 0.5 into penalty_value. Hidden validation checks float penalty.

**Name:** Evaluation: Matthews Correlation Coefficient
**PS:** Directive: The binary prediction arrays `y_actual` and `y_predicted` have 5,000 imbalanced entries. Construct the confusion matrix (TP, TN, FP, FN), compute the Matthews Correlation Coefficient (MCC), and store rounded to 4 decimals in `mcc_score`.
**Hint:** Compute TP, TN, FP, FN, then evaluate `(TP*TN - FP*FN) / sqrt((TP+FP)*(TP+FN)*(TN+FP)*(TN+FN))`.
**Implementation:** Preload 5,000 imbalanced binary ground truths and classifier predictions. Student constructs confusion matrix and calculates MCC metric into mcc_score. Hidden validation verifies correlation value.

**Name:** Visual: K-Means Elbow Method Optimal K
**PS:** Directive: The pre-loaded arrays `k_values` (1 to 8) and `inertias` represent K-Means clustering results. Plot the elbow curve, visually locate the optimal cluster count K where inertia reduction abruptly flattens, and store in `optimal_k`.
**Hint:** Execute `plt.plot(k_values, inertias, marker='o')` and `plt.show()`. Look for the inflection point (elbow) on the curve.
**Implementation:** Preload cluster numbers and WCSS inertia scores. Right pane displays the elbow plot showing sharp inflection at K=4. Student inspects plot and enters optimal_k. Hidden validation verifies K value.
