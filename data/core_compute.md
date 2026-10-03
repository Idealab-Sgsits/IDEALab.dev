**Section 3: Core Compute**.

### 25 Easy Problems (150 Coins, 5–10 Mins)

*Focus: Classic 101 programming bugs—infinite loops, off-by-one errors, and syntax slip-ups.*

**Name:** The Infinite Staircase
**PS:** The robot is supposed to walk down 10 steps and stop, but it keeps drilling into the basement forever. Fix the loop.
**Hint:** Look closely at the `while (steps > 0)` loop. Is the counter actually decreasing?
**Implementation:** Preload a script with `steps++` instead of `steps--`. Fixing it prints the flag.

**Name:** Identity Crisis
**PS:** The vault should only open if the access level is exactly 9. Right now, it's opening for everyone!
**Hint:** In programming, a single equals sign (`=`) assigns a value, but you need to *compare* values.
**Implementation:** The `if` statement says `if (accessLevel = 9)`. They must change it to `==`.

**Name:** Off By One
**PS:** We have a list of 5 secret agents. The code is trying to print the last agent's name, but the system is crashing with an "Out of Bounds" error.
**Hint:** Remember how arrays and lists count. If there are 5 items, what is the index of the last item?
**Implementation:** Preload an array of size 5, and a loop going `for i in range(1, 6):` or `for (int i = 0; i <= 5; i++)`. They must fix the boundaries.

**Name:** The Swapper’s Dilemma
**PS:** The script tries to swap the values of `Battery` and `Power`, but they both just end up being the same number.
**Hint:** You can't just pour one glass into another without losing what was in the second glass. You need a temporary holding variable (or a Python tuple swap).
**Implementation:** Preload `a = b; b = a;`. They must change it to `temp = a; a = b; b = temp;` (or `a, b = b, a`).

**Name:** The Overwritten Total
**PS:** The cashier's program is supposed to add up the prices of all 5 items, but it only ever charges the price of the very last item.
**Hint:** Look at how the total is calculated. Are you *adding* to the total, or just replacing it entirely?
**Implementation:** The loop says `total = price[i]`. They must change it to `total += price[i]`.

**Name:** Integer Illusion
**PS:** We divided the ₹500 prize between 2 teams. The math says they each get ₹250, but the computer insists it's 250.0... wait, no, the computer says it's 0?
**Hint:** Look at the division symbol. Are you doing regular division or something else?
**Implementation:** Preload Python code using `500 % 2` or `500 // 3` incorrectly. They must fix the operator to `/`.

**Name:** The Greedy Vending Machine
**PS:** The vending machine is supposed to subtract the cost of the chips from your balance, but your balance keeps going up!
**Hint:** Check the math symbols. You want to subtract, not add or multiply.
**Implementation:** Preload `balance -= -cost` or `balance += cost`. They must fix the sign.

**Name:** Reverse Gear
**PS:** The engine is trying to count backward from 10 to 1, but it instantly finishes without doing anything.
**Hint:** Look at the condition in the `for` loop. If you start at 10, should you keep going while `i < 1` or while `i > 0`?
**Implementation:** Preload `for (int i = 10; i < 0; i--)`. They must change `<` to `>`.

**Name:** Boolean Blindness
**PS:** The VIP room requires you to be over 18 AND on the guest list. But right now, an underaged kid not on the list just walked in!
**Hint:** Check the logic operators. `||` (OR) means only one condition needs to be true. You want `&&` (AND).
**Implementation:** The code uses `if (age > 18 || onList == true)`. They must change it to `&&` (or `and` in Python).

**Name:** The Missing Break
**PS:** The traffic light is supposed to turn Red, but it immediately turns Green and then Yellow all at once!
**Hint:** In a `switch` statement (or equivalent chained if/else), what stops the code from falling through to the next case?
**Implementation:** Preload a `switch/case` block missing the `break;` statements.

**Name:** String Glitch
**PS:** The system is trying to say "Hello World", but it's printing "WorldHello".
**Hint:** Look at how the strings are being glued (concatenated) together. Order matters!
**Implementation:** Preload `greeting = word2 + word1`. They must swap the variables around.

**Name:** Case Closed
**PS:** The password is "admin", but the system rejects "Admin" and "ADMIN". Make the system accept it regardless of capitalization.
**Hint:** Before checking if the input matches "admin", convert the user's input to lowercase entirely.
**Implementation:** Preload a script. They must add `.toLowerCase()` or `.lower()` to the input string before the `==` check.

**Name:** The Lost Return
**PS:** The complex math function is doing all the right calculations, but it's giving us back a big fat `null` (or `None`).
**Hint:** The function did the work, but it forgot to hand the answer back to the main program. Look at the very end of the function.
**Implementation:** Preload a function that calculates a result but is missing the `return result;` line at the bottom.

**Name:** Array's First Step
**PS:** The security scanner checks the first 4 bays (Bay 1 to 4), but it completely ignores the zeroth bay!
**Hint:** In programming, we don't start counting from 1. Where should your loop begin?
**Implementation:** Preload `for(int i = 1; i < 5; i++)`. They must change it to start at `0`.

**Name:** Absolute Zero
**PS:** The system is trying to figure out if a number is even by dividing it by zero. The whole system is crashing!
**Hint:** To check for an even number, you don't divide by 0. You look for the remainder when divided by 2.
**Implementation:** Preload `if (num % 0 == 0)`. They must change it to `num % 2 == 0`.


**Name:** The Type Mismatch
**PS:** The cluster orchestrator crashed with a TypeError while registering a server node. Convert the numeric node ID so it can combine with the text label.
**Hint:** In Python, you cannot directly add a string and an integer. Convert the integer using str() or use an f-string.
**Implementation:** Preload a script attempting `item + node_id`. The student wraps `node_id` with `str()` to produce 'Server Node #42' and trigger the flag.

**Name:** Mutable Default Menace
**PS:** The background worker's task queue is leaking jobs across separate batches because of Python's mutable default argument behavior.
**Hint:** Default parameter lists in Python are instantiated only once when the function is defined. Use queue=None and initialize queue = [] inside the function body.
**Implementation:** Preload `def add_task(task, queue=[])`. The student updates the parameter to `queue=None` and initializes an empty list inside the function.

**Name:** Tuple Immutability Shock
**PS:** The autopilot altitude updater failed because waypoints were defined as immutable tuples. Fix the update logic so coordinates update to (10, 20, 50).
**Hint:** Tuples cannot be modified after creation. Either convert coords to a list before updating, or construct a new tuple with the updated value.
**Implementation:** Preload code attempting item assignment on a tuple `coords[2] = 50`. The student creates a new tuple or converts to a list, resulting in `(10, 20, 50)`.

**Name:** Dictionary Key Despair
**PS:** The credential gateway throws an unhandled KeyError when a user profile omits the optional clearance level. Retrieve the level safely with a fallback default of 1.
**Hint:** Direct key indexing throws a KeyError when the key does not exist. Use the dictionary's .get(key, default_value) method.
**Implementation:** Preload direct index lookup on missing key `user_profile['clearance_level']`. The student replaces it with `.get('clearance_level', 1)` to handle missing keys.

**Name:** The Shadowed Sum
**PS:** The scoring engine crashes with 'TypeError: int object is not callable' because a local variable overwrote Python's built-in sum function.
**Hint:** Avoid naming variables after built-in Python functions like sum. Rename the initial variable so the built-in sum() function works again.
**Implementation:** Preload a script where `sum = 100` shadows the built-in `sum()` function. The student renames the variable to restore the built-in and evaluate `total == 160`.

**Name:** String Strip Slip
**PS:** The authentication filter sent dirty tokens with whitespace to the backend API because the string strip method wasn't saved back to the variable.
**Hint:** In Python, string methods do not modify strings in-place. You must assign the returned result back to the variable: raw_token = raw_token.strip().
**Implementation:** Preload `raw_token.strip()` without assignment. The student reassigns `raw_token = raw_token.strip()` to strip surrounding whitespace.

**Name:** List Multiplication Trap
**PS:** Modifying cell (0, 0) of the sensor matrix accidentally sets the first element of all three rows to 1 due to shallow list multiplication.
**Hint:** Multiplying a list containing a list replicates references to the exact same list. Use a list comprehension [[0] * 3 for _ in range(3)] to create independent rows.
**Implementation:** Preload `grid = [[0] * 3] * 3`. The student replaces it with a list comprehension `[[0] * 3 for _ in range(3)]` to create unique row instances.

**Name:** Negative Slicing Surrender
**PS:** The crash telemetry reporter is always missing the critical final event because an explicit -1 stop index excludes the last element in slice notation.
**Hint:** The upper bound in Python slices is non-inclusive. To slice all the way to the end of a list using negative indexing, omit the stop parameter entirely: logs[-3:].
**Implementation:** Preload `logs[-3:-1]`. The student changes the slice to `logs[-3:]` to include the final element 'ready'.

**Name:** The Premature Generator
**PS:** The thruster controller halted before ignition because the countdown sequence dropped the final T-0 countdown tick.
**Hint:** Python range() stops one step before the stop value. To include 0 when stepping by -1, set the stop boundary to -1.
**Implementation:** Preload `range(5, 0, -1)`. The student adjusts the range to `range(5, -1, -1)` to include 0 in the sequence.

**Name:** Floating Point Precision Trap
**PS:** A micro-payment transaction validator rejected a legitimate 0.3 credit balance because direct float equality comparison failed on IEEE 754 precision artifacts.
**Hint:** Binary floating point numbers cannot represent 0.1 or 0.2 exactly. Use round(total_credit, 2) == 0.3 or abs(total_credit - 0.3) < 1e-9 for floating point comparisons.
**Implementation:** Preload `total_credit == 0.3`. The student uses `round(total_credit, 2) == 0.3` or an epsilon comparison to evaluate `is_valid` as True.
### 20 Medium Problems (400 Coins, 10–20 Mins)

*Focus: Classic algorithmic logic, nested loops, and data structure slip-ups.*

**Name:** Fibonacci's Folly
**PS:** The sequence is supposed to go 0, 1, 1, 2, 3, 5. But our generator is stuck repeating 0, 1, 1, 1, 1, 1.
**Hint:** When shifting the numbers forward in a Fibonacci sequence, you have to update the older number *before* the newer number, or else you overwrite your data!
**Implementation:** Preload the loop: `next = a + b; b = next; a = b;`. They must fix the variable swap order to `a = b; b = next;`.

**Name:** Palindrome Paradox
**PS:** The function checks if a word is spelled the same backward and forward. It works for "racecar", but it crashes when checking standard words.
**Hint:** The code has two pointers, one at the start of the word and one at the end. To move them towards the middle, the left one goes up, but the right one must go...
**Implementation:** Preload a while loop checking `str[left] == str[right]`. The bug is `left++; right++;`. They must change it to `right--`.

**Name:** The Fake Prime
**PS:** The prime number checker works great for large numbers, but it thinks the number `2` is NOT a prime number.
**Hint:** Look at the loop's starting and ending conditions. A prime is divisible only by 1 and itself. Does the loop try to divide 2 by 2?
**Implementation:** The code loop goes `for(int i=2; i<=num; i++)`. It should be `i < num` or check the base case `if(num == 2) return true`.

**Name:** Matrix Misstep
**PS:** The drone is trying to scan the main diagonal of a 3x3 grid (top-left to bottom-right). But it's just scanning the first row three times!
**Hint:** To scan the diagonal, the row index and the column index must be exactly the same (0,0 then 1,1 then 2,2).
**Implementation:** Preload `sum += grid[0][i];`. They must change it to `sum += grid[i][i];`.

**Name:** Factorial Freeze
**PS:** The recursive function is trying to calculate 5! (5 * 4 * 3 * 2 * 1). But it keeps multiplying into negative infinity until the computer runs out of memory.
**Hint:** Every recursive function needs a "base case" to tell it when to stop. When should a factorial stop multiplying?
**Implementation:** Preload a recursive function missing the `if (n <= 1) return 1;` line at the top.

**Name:** Two Sum Trap
**PS:** The code is looking for two distinct numbers in the list that add up to 10. But right now, it’s cheating by just adding the number 5 to itself!
**Hint:** Look at the nested loops. The second loop shouldn't start at the very beginning of the list again. It should start right after the first loop's current position.
**Implementation:** Preload `for(int j = 0; ...)`. They must fix the inner loop to start at `j = i + 1`.

**Name:** Anagram Agony
**PS:** The code checks if "Listen" and "Silent" are anagrams by sorting the letters. It says they aren't!
**Hint:** Computers treat uppercase 'L' and lowercase 'l' as completely different characters. Clean the strings before sorting them.
**Implementation:** Preload code that directly sorts. They must add a `.toLowerCase()` conversion before sorting.

**Name:** The Missing Link
**PS:** The code is trying to walk through a chain of connected nodes to find the end. But it's stuck staring at the very first node forever.
**Hint:** Inside the `while` loop, you have to tell the pointer to actually move to the *next* node.
**Implementation:** Preload a standard Linked List traversal: `while(curr != null) { print(curr.val); }`. They must add `curr = curr.next;` inside the loop.

**Name:** The Biased Coin
**PS:** The random number generator is supposed to give a number between 1 and 10. But sometimes it spits out a 0!
**Hint:** `random() % 10` generates numbers from 0 to 9. How do you shift that entire range up by one?
**Implementation:** Preload `int result = rand() % 10;`. They must add `+ 1`.

**Name:** Bitwise Blunder
**PS:** The hacker's script checks if a number is even using binary bitwise operations, but the logic is flipped. It thinks 4 is odd!
**Hint:** In binary, every odd number ends in a 1, and every even number ends in a 0. If you do `number & 1`, what should the result be for an even number?
**Implementation:** Preload `if ((num & 1) == 1)`. They must change it to `== 0`.


**Name:** Binary Search First Occurrence
**PS:** The audit log indexer needs to find the earliest timestamp entry for duplicate events, but the binary search returns an arbitrary middle match instead of the first occurrence.
**Hint:** When arr[mid] == target, store mid as a candidate answer and continue searching the left half by setting right = mid - 1.
**Implementation:** Preload a binary search returning on first hit. The student stores `result = mid` and continues narrowing the left partition `right = mid - 1`.

**Name:** Stack Invariant Violation
**PS:** The code syntax validator accepts unclosed opening brackets like '(()' as valid expressions because it forgets to check if the bracket stack is empty upon completion.
**Hint:** Even if no unmatched closing brackets appear, open brackets might remain in the stack. Check that len(stack) == 0 at the end.
**Implementation:** Preload a parenthesis matching function ending in `return True`. The student updates the termination condition to `return len(stack) == 0`.

**Name:** Queue FIFO Flip
**PS:** A real-time telemetry pipe reversed packet delivery order because its internal queue implementation called pop() from the tail instead of the head.
**Hint:** In a First-In-First-Out queue, the item removed must be the oldest item added. Calling pop() removes from the end; use pop(0) to remove from the front.
**Implementation:** Preload a Queue class with `self.items.pop()`. The student modifies it to `self.items.pop(0)` to preserve first-in-first-out semantics.

**Name:** Recursive Power Overflow
**PS:** The cryptography key generator crashed with RecursionError when an exponent of 0 was provided because the base case assumed n is always at least 1.
**Hint:** Any number raised to the power of 0 equals 1. Add if n == 0: return 1 as the primary base case.
**Implementation:** Preload a recursive function with base case `if n == 1: return x`. The student replaces it with `if n == 0: return 1` to handle zero exponentiation.

**Name:** Two Pointers Container Collapse
**PS:** The hydraulic capacity calculator produces sub-optimal water volume results because its two-pointer loop always advances the left wall instead of the shorter wall.
**Hint:** In the two-pointer container problem, you must advance the pointer with the smaller height: if heights[left] < heights[right]: left += 1 else: right -= 1.
**Implementation:** Preload container loop with unconditional `left += 1`. The student implements conditional pointer shifts based on the shorter vertical bar to find max area 100.

**Name:** String Anagram Hash Collision
**PS:** The text indexer fails with an unhashable type error when grouping anagrams because it attempts to use a mutable list as a dictionary key.
**Hint:** Dictionary keys must be hashable and immutable. Convert the frequency count list into a tuple using tuple(counts) so it can serve as a valid map key.
**Implementation:** Preload anagram grouper using `key = counts`. The student casts the list to `tuple(counts)` to provide an immutable dictionary key.

**Name:** Cycle Detection Infinite Wander
**PS:** Memory leak detector hangs in infinite traversal because the fast pointer in Floyd's cycle finding algorithm moves at the same speed as the slow pointer.
**Hint:** In Floyd's Cycle Detection algorithm, the fast pointer must move twice as fast as the slow pointer: fast = fast.next.next.
**Implementation:** Preload linked list cycle check with `fast = fast.next`. The student corrects it to `fast = fast.next.next` to establish Floyd's 2-speed invariant.

**Name:** Interval Merge Gap
**PS:** The calendar scheduling aggregator shrunk booking slots when a smaller meeting took place entirely within an existing larger reservation block.
**Hint:** When an interval is swallowed by a previous larger interval, setting prev[1] = current[1] shrinks it. Use prev[1] = max(prev[1], current[1]).
**Implementation:** Preload interval merger with `prev[1] = current[1]`. The student changes it to `prev[1] = max(prev[1], current[1])` to prevent boundary shrinkage.

**Name:** Binary Search Tree Boundary Drift
**PS:** The database index validator mistakenly marked an invalid binary search tree as healthy because it only checked immediate children rather than ancestral range boundaries.
**Hint:** A valid BST requires every node in the right subtree to be greater than the root ancestor. Pass low and high limits to recursive calls: is_valid_bst(node.left, low, node.val).
**Implementation:** Preload BST validator checking local children only. The student enforces `low < root.val < high` across recursive subtrees.

**Name:** Rotated Sorted Array Pivot Drop
**PS:** The ring buffer search routine missed items sitting directly on the right boundary of a rotated sorted array due to an overly strict inequality check.
**Hint:** Check the boundary comparison in the right-half condition. If the target equals nums[right], a strict < excludes it; change it to <= nums[right].
**Implementation:** Preload rotated binary search with `nums[mid] < target < nums[right]`. The student fixes `< nums[right]` to `<= nums[right]` to catch right-edge elements.
### 15 Hard Problems (750 Coins, 20–30 Mins)

*Focus: Sneaky pointer issues, off-by-one window boundaries, and dynamic logic.*

**Name:** Binary Search Blunder
**PS:** The search algorithm is incredibly fast, but if the target number is missing from the list, the program gets stuck in an infinite loop instead of saying "Not Found".
**Hint:** When adjusting the `left` and `right` boundaries after checking the middle, you can't just set them equal to the middle. You already checked the middle! Move one step past it.
**Implementation:** Preload a Binary Search where `left = mid;` and `right = mid;`. They must fix it to `left = mid + 1;` and `right = mid - 1;`.

**Name:** The Sliding Window
**PS:** The code is trying to find the longest sequence of consecutive 1s in an array. It works, but the final length it calculates is always exactly 1 character too short.
**Hint:** If a sequence starts at index 2 and ends at index 4, how many characters is that? `4 - 2` is 2, but the sequence contains 3 characters! (Indexes 2, 3, and 4).
**Implementation:** Preload `maxLength = Math.max(maxLength, right - left);`. They must add `+ 1` to the length calculation.

**Name:** The Reference Riddle
**PS:** We are generating a list of multiple different coordinate paths. But when the code prints the final list, every single path is an exact copy of the very last path generated!
**Hint:** In Python (and Java/JS), appending a list inside another list just stores a *reference* to the original list. If you change the original, the saved ones change too. You need to append a *copy*.
**Implementation:** Preload Python code doing `results.append(temp_list)`. They must fix it to `results.append(temp_list.copy())` or `results.append(temp_list[:])`.

**Name:** Merge Sort Mayhem
**PS:** The code splits the array in half perfectly and sorts them. But when it tries to merge the two halves back together, it leaves out the last few numbers if one half empties out faster than the other.
**Hint:** Look at the end of the merge function. After the main `while` loop finishes, you need two extra mini-loops to sweep up any remaining elements in the left or right halves.
**Implementation:** Preload a merge function that is missing the final `while(i < left.length)` and `while(j < right.length)` cleanup loops.

**Name:** The Climbing Stairs
**PS:** You can climb 1 or 2 steps at a time. The code uses Dynamic Programming to find how many ways to reach the top. But it crashes instantly if you ask it how to climb a staircase with exactly 1 step.
**Hint:** The code initializes the base cases `dp[1] = 1;` and `dp[2] = 2;` right at the start. What happens if the array `dp` was only created with a size of 1? It throws an Out of Bounds error on `dp[2]`.
**Implementation:** Preload the initialization. They must add a check at the very top: `if (n == 1) return 1;` before touching the `dp` array.

**Name:** The LCS Dynamic Transition
**PS:** The genomic sequence aligner reported an LCS length of 0 for matching strands because its DP transition used min() instead of max() on non-matching characters.
**Hint:** In the Longest Common Subsequence DP table, when characters differ, you carry forward the longest subsequence found so far: use max(dp[i-1][j], dp[i][j-1]).
**Implementation:** Preload LCS grid with `min(dp[i-1][j], dp[i][j-1])`. The student corrects the transition to `max()` to properly compute subsequence lengths.

**Name:** Graph Traversal Cycle Trap
**PS:** The network topology analyzer crashes with RecursionError when checking for redundant loop cycles because nodes are added to the visited set only after visiting neighbors.
**Hint:** Mark the current node as visited immediately upon entering the DFS function (visited.add(node) at top). If you wait until after iterating neighbors, cycles recurse indefinitely.
**Implementation:** Preload cycle detection DFS adding to visited after neighbor loops. The student shifts `visited.add(node)` to the top of `dfs()` to detect cyclic backlinks.

**Name:** Sliding Window Pointer Regress
**PS:** The stream deduplicator over-counted unique character sequence lengths on palindromic patterns like 'abba' because the sliding window left pointer drifted backwards.
**Hint:** When encountering a previously seen character, the left pointer must never move backward. Use left = max(left, last_seen[char] + 1).
**Implementation:** Preload sliding window with unconstrained `left = last_seen[char] + 1`. The student wraps it in `max(left, ...)` to ensure monotonic forward window movement.

**Name:** Power of Four False Positive
**PS:** The memory partitioner accepts block sizes that are powers of 2 (like 8 or 32) when allocating 4-way associative cache lines, instead of strictly powers of 4.
**Hint:** Every power of 4 is a power of 2, but also satisfies (n - 1) % 3 == 0 (or n % 3 == 1). Add this modular check to eliminate false power-of-two positives like 8 and 32.
**Implementation:** Preload `n > 0 and (n & (n - 1)) == 0`. The student adds `and n % 3 == 1` to strictly filter for powers of 4.

**Name:** 0-1 Knapsack Direction Error
**PS:** The payload cargo optimizer duplicated single-instance equipment items because the 1D DP table updated capacities from left to right instead of right to left.
**Hint:** In 1D dynamic programming for 0-1 Knapsack, you must iterate capacity backwards (range(capacity, weight - 1, -1)) so you don't reuse the current item multiple times.
**Implementation:** Preload 1D knapsack looping forward `range(weight, capacity + 1)`. The student reverses the loop `range(capacity, weight - 1, -1)` to prevent item duplication.

**Name:** Dijkstra Priority Inversion
**PS:** The routing protocol selected sub-optimal high-latency paths because its priority queue stored node names before edge weights, sorting by alphabetic name rather than shortest distance.
**Hint:** Python's heapq sorts tuples by their first element. The distance must be the first element in the tuple: (dist, node) rather than (node, dist).
**Implementation:** Preload Dijkstra algorithm storing `(node, dist)` in the priority queue. The student flips tuple ordering to `(dist, node)` so the min-heap sorts by distance.

**Name:** Topological Sort Cycle Omission
**PS:** The build dependency resolver attempted to compile packages in impossible cyclic dependency graphs because Kahn's topological sort failed to check if all tasks were processed.
**Hint:** If a dependency graph contains a cycle, Kahn's algorithm cannot resolve all nodes. Verify len(order) == num_tasks; if not, return [].
**Implementation:** Preload Kahn's algorithm returning partial orders on cyclic inputs. The student checks `len(order) == num_tasks` to return an empty array on cycles.

**Name:** Monotonic Stack Temperature Index
**PS:** The weather forecast span tracker threw IndexErrors because the monotonic stack pushed raw temperature values rather than day index positions.
**Hint:** To calculate the distance between days (i - prev_idx), the monotonic stack must track list indices, not raw temperature values. Change stack.append(temp) to stack.append(i).
**Implementation:** Preload monotonic stack with `stack.append(temp)`. The student alters it to `stack.append(i)` to enable correct index distance arithmetic.

**Name:** Trie Prefix Over-Match
**PS:** The dictionary lookup autocompleter returned full word matches for partial prefixes because the search method omitted the terminal node end-of-word boolean check.
**Hint:** In a prefix tree, a path match is only a valid complete word if the terminal node's end-of-word flag is set. Change return True in search to return node.is_end.
**Implementation:** Preload Trie class with `search` unconditionally returning `True`. The student updates it to `return node.is_end` to distinguish prefixes from full words.

**Name:** Two Unique Numbers Bit Isolation
**PS:** The signal demultiplexer failed to separate two distinct radio beacon IDs from a stream of paired echoes because its bitmask calculation cleared rather than isolated the discriminating bit.
**Hint:** To isolate the lowest set bit in binary, use x & (-x) using two's complement. x & (x - 1) clears the lowest set bit rather than isolating it.
**Implementation:** Preload bitmask algorithm with `diff_bit = xor_all & (xor_all - 1)`. The student corrects it to `xor_all & (-xor_all)` to isolate the distinguishing bit.
