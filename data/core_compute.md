**Section 3: Core Compute**.

### 15 Easy Problems (150 Coins, 5–10 Mins)

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

### 10 Medium Problems (400 Coins, 10–20 Mins)

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

### 5 Hard Problems (750 Coins, 20–30 Mins)

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