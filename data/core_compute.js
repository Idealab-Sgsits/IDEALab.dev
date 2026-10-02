[
  {
    "id": "core_compute_01",
    "name": "The Infinite Staircase",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The robot is supposed to walk down 10 steps and stop, but it keeps drilling into the basement forever. Fix the loop.",
    "flag": "ROBOT_SAVED_99",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look closely at the `while steps > 0:` loop. Is the counter actually decreasing?" }
    ],
    "editor_state": {
      "visible_code": "steps = 10\n\n# The robot needs to reach step 0\nwhile steps > 0:\n    steps += 1  # Wait, is it going up or down?\n\nprint(f'Simulation ended. Robot is at step: {steps}')",
      "hidden_validation": "\nif steps == 0:\n    print('\\nFLAG: ROBOT_SAVED_99')\n"
    }
  },
  {
    "id": "core_compute_02",
    "name": "Integer Illusion",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "We divided the ₹500 prize between 2 teams. The math says they each get ₹250.0, but the computer insists it's 0. Fix the math operator.",
    "flag": "FAIR_SPLIT_22",
    "hints": [
      { "level": 1, "cost": 25, "text": "The modulo operator (%) gives the remainder. You need standard division (/)." }
    ],
    "editor_state": {
      "visible_code": "prize_pool = 500\nteams = 2\n\n# Calculate each team's share\nshare = prize_pool % teams \n\nprint(f\"Each team gets: ₹{share}\")",
      "hidden_validation": "\nif share == 250.0:\n    print('\\nFLAG: FAIR_SPLIT_22')\n"
    }
  },
  {
    "id": "core_compute_03",
    "name": "Identity Crisis",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The vault should only open if the access level is exactly 9. Right now, it's opening for access level 3!",
    "flag": "VAULT_SECURE_101",
    "hints": [
      { "level": 1, "cost": 25, "text": "In Python, a single equals sign (=) assigns a value. How do you compare values?" }
    ],
    "editor_state": {
      "visible_code": "access_level = 3\nvault_status = \"Locked\"\n\n# Check if access level is exactly 9\nif access_level = 9:\n    vault_status = \"Open\"\n\nprint(f\"Vault is {vault_status}\")",
      "hidden_validation": "\nif vault_status == \"Locked\" and access_level == 3:\n    print('\\nFLAG: VAULT_SECURE_101')\n"
    }
  },
  {
    "id": "core_compute_04",
    "name": "Off By One",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "We have a list of 5 agents. The code is trying to print the last agent's name, but the system is throwing an IndexError.",
    "flag": "AGENT_FOUND_007",
    "hints": [
      { "level": 1, "cost": 25, "text": "Remember how lists count. If there are 5 items, the first index is 0. What is the last?" }
    ],
    "editor_state": {
      "visible_code": "agents = [\"Aman\", \"Priya\", \"Rahul\", \"Neha\", \"Vikram\"]\n\n# Print the 5th agent in the list\nlast_agent = agents[5]\n\nprint(f\"Last agent is: {last_agent}\")",
      "hidden_validation": "\nif last_agent == \"Vikram\":\n    print('\\nFLAG: AGENT_FOUND_007')\n"
    }
  },
  {
    "id": "core_compute_05",
    "name": "The Swapper's Dilemma",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The script tries to swap the values of `battery` and `power`, but they both just end up being the same number.",
    "flag": "SWAP_SUCCESS_44",
    "hints": [
      { "level": 1, "cost": 25, "text": "Python has a very clean way to swap two variables on a single line: `a, b = b, a`." }
    ],
    "editor_state": {
      "visible_code": "battery = 100\npower = 50\n\n# Swap the values\nbattery = power\npower = battery\n\nprint(f\"Battery: {battery}, Power: {power}\")",
      "hidden_validation": "\nif battery == 50 and power == 100:\n    print('\\nFLAG: SWAP_SUCCESS_44')\n"
    }
  },
  {
    "id": "core_compute_06",
    "name": "The Overwritten Total",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The cashier's program should add up the prices of all 4 items, but it only charges the price of the very last item.",
    "flag": "BILL_PAID_789",
    "hints": [
      { "level": 1, "cost": 25, "text": "Are you *adding* to the total, or just replacing it entirely? Check your assignment operator." }
    ],
    "editor_state": {
      "visible_code": "prices = [120, 50, 30, 200]\ntotal = 0\n\nfor price in prices:\n    total = price\n\nprint(f\"Total Bill: ₹{total}\")",
      "hidden_validation": "\nif total == 400:\n    print('\\nFLAG: BILL_PAID_789')\n"
    }
  },
  {
    "id": "core_compute_07",
    "name": "The Greedy Vending Machine",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The machine should subtract the cost of the chips from your balance, but your balance keeps going up!",
    "flag": "SNACK_TIME_88",
    "hints": [
      { "level": 1, "cost": 25, "text": "Check the math symbols. You want to subtract, not add." }
    ],
    "editor_state": {
      "visible_code": "balance = 500\ncost = 40\n\n# Buy the chips\nbalance += cost\n\nprint(f\"Remaining balance: ₹{balance}\")",
      "hidden_validation": "\nif balance == 460:\n    print('\\nFLAG: SNACK_TIME_88')\n"
    }
  },
  {
    "id": "core_compute_08",
    "name": "Reverse Gear",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The engine is trying to count backward from 10 to 1, but it instantly finishes without doing anything.",
    "flag": "COUNTDOWN_GO",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the condition in the `while` loop. If you start at 10, should you keep going while `i < 1`?" }
    ],
    "editor_state": {
      "visible_code": "i = 10\ncount_logs = []\n\nwhile i < 1:\n    count_logs.append(i)\n    i -= 1\n\nprint(f\"Countdown sequence: {count_logs}\")",
      "hidden_validation": "\nif count_logs == [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]:\n    print('\\nFLAG: COUNTDOWN_GO')\n"
    }
  },
  {
    "id": "core_compute_09",
    "name": "Boolean Blindness",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The VIP room requires you to be over 18 AND on the guest list. A 16-year-old just got in because they were on the list!",
    "flag": "BOUNCER_ACTIVE",
    "hints": [
      { "level": 1, "cost": 25, "text": "Check the logic operators. `or` means only one condition needs to be true. You want both." }
    ],
    "editor_state": {
      "visible_code": "age = 16\non_list = True\naccess = False\n\nif age >= 18 or on_list:\n    access = True\n\nprint(f\"Access granted: {access}\")",
      "hidden_validation": "\nif access == False:\n    print('\\nFLAG: BOUNCER_ACTIVE')\n"
    }
  },
  {
    "id": "core_compute_10",
    "name": "The Impatient Grader",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "A student scored 85. The system correctly prints 'Grade B', but then also prints 'Grade C' right after it!",
    "flag": "GRADE_A_OKAY",
    "hints": [
      { "level": 1, "cost": 25, "text": "If you use multiple `if` statements, they all get checked. Use `elif` so it stops once it finds the right grade." }
    ],
    "editor_state": {
      "visible_code": "score = 85\ngrades_given = []\n\nif score >= 90:\n    grades_given.append('A')\nif score >= 80:\n    grades_given.append('B')\nif score >= 70:\n    grades_given.append('C')\n\nprint(f\"Grades awarded: {grades_given}\")",
      "hidden_validation": "\nif grades_given == ['B']:\n    print('\\nFLAG: GRADE_A_OKAY')\n"
    }
  },
  {
    "id": "core_compute_11",
    "name": "String Glitch",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The system is trying to say 'Hello World', but it's printing 'WorldHello'. Fix the concatenation.",
    "flag": "HELLO_WORLD_99",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at how the strings are being glued together. Order matters!" }
    ],
    "editor_state": {
      "visible_code": "word1 = \"Hello \"\nword2 = \"World\"\n\ngreeting = word2 + word1\nprint(greeting)",
      "hidden_validation": "\nif greeting.strip() == \"Hello World\":\n    print('\\nFLAG: HELLO_WORLD_99')\n"
    }
  },
  {
    "id": "core_compute_12",
    "name": "Case Closed",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The password is 'admin', but the system rejects 'Admin'. Make the system accept it regardless of capitalization.",
    "flag": "LOGIN_SUCCESS_1",
    "hints": [
      { "level": 1, "cost": 25, "text": "Convert the user_input to lowercase entirely using `.lower()` before checking." }
    ],
    "editor_state": {
      "visible_code": "user_input = \"Admin\"\nlogged_in = False\n\n# Make this check case-insensitive\nif user_input == \"admin\":\n    logged_in = True\n\nprint(f\"Logged In: {logged_in}\")",
      "hidden_validation": "\nif logged_in == True:\n    print('\\nFLAG: LOGIN_SUCCESS_1')\n"
    }
  },
  {
    "id": "core_compute_13",
    "name": "The Lost Return",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The math function does all the right calculations, but it gives us back `None`.",
    "flag": "MATH_GENIUS_33",
    "hints": [
      { "level": 1, "cost": 25, "text": "The function did the work, but it forgot to hand the answer back to the main program. Look at the end of the function." }
    ],
    "editor_state": {
      "visible_code": "def calculate_area(length, width):\n    area = length * width\n    # Something is missing here\n\nresult = calculate_area(5, 10)\nprint(f\"The area is: {result}\")",
      "hidden_validation": "\nif result == 50:\n    print('\\nFLAG: MATH_GENIUS_33')\n"
    }
  },
  {
    "id": "core_compute_14",
    "name": "Array's First Step",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The security scanner checks the 4 bays, but it completely skips the very first bay in the list!",
    "flag": "BAY_CLEARED_4",
    "hints": [
      { "level": 1, "cost": 25, "text": "In programming, we don't start counting from 1. Where should your loop begin?" }
    ],
    "editor_state": {
      "visible_code": "bays = [\"Bay_A\", \"Bay_B\", \"Bay_C\", \"Bay_D\"]\nscanned = []\n\nfor i in range(1, 4):\n    scanned.append(bays[i])\n\nprint(f\"Scanned bays: {scanned}\")",
      "hidden_validation": "\nif \"Bay_A\" in scanned and len(scanned) == 4:\n    print('\\nFLAG: BAY_CLEARED_4')\n"
    }
  },
  {
    "id": "core_compute_15",
    "name": "Absolute Zero",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The system is trying to figure out if a number is even by dividing it by zero. The system is crashing!",
    "flag": "DIVIDE_BY_TWO",
    "hints": [
      { "level": 1, "cost": 25, "text": "To check for an even number, you don't divide by 0. You look for the remainder when divided by 2." }
    ],
    "editor_state": {
      "visible_code": "num = 42\nis_even = False\n\n# Check if the number is even\nif num % 0 == 0:\n    is_even = True\n\nprint(f\"Is the number even? {is_even}\")",
      "hidden_validation": "\nif is_even == True:\n    print('\\nFLAG: DIVIDE_BY_TWO')\n"
    }
  },
  {
    "id": "core_compute_16",
    "name": "Fibonacci's Folly",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The sequence is supposed to go 0, 1, 1, 2, 3, 5. But our generator is stuck outputting 0, 1, 1, 1, 1, 1.",
    "flag": "FIBO_FIXED_112",
    "hints": [
      { "level": 1, "cost": 50, "text": "You are overwriting the old value of `a` before you calculate the next sequence! Use a temporary variable or python's multiple assignment `a, b = b, a + b`." }
    ],
    "editor_state": {
      "visible_code": "def generate_fibonacci(n):\n    sequence = []\n    a = 0\n    b = 1\n    for _ in range(n):\n        sequence.append(a)\n        next_val = a + b\n        b = next_val\n        a = b\n    return sequence\n\nresult = generate_fibonacci(6)\nprint(result)",
      "hidden_validation": "\nif result == [0, 1, 1, 2, 3, 5]:\n    print('\\nFLAG: FIBO_FIXED_112')\n"
    }
  },
  {
    "id": "core_compute_17",
    "name": "Palindrome Paradox",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The code uses two pointers to check if a word is spelled the same backwards. It crashes instantly on 'racecar'.",
    "flag": "RACECAR_WIN",
    "hints": [
      { "level": 1, "cost": 50, "text": "To move the pointers towards the middle, the left one goes up, but the right one must go down." }
    ],
    "editor_state": {
      "visible_code": "def is_palindrome(word):\n    left = 0\n    right = len(word) - 1\n    while left < right:\n        if word[left] != word[right]:\n            return False\n        left += 1\n        right += 1\n    return True\n\nstatus = is_palindrome(\"racecar\")\nprint(f\"Is palindrome? {status}\")",
      "hidden_validation": "\nif status == True:\n    print('\\nFLAG: RACECAR_WIN')\n"
    }
  },
  {
    "id": "core_compute_18",
    "name": "The Fake Prime",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The prime number checker thinks the number `2` is NOT a prime number.",
    "flag": "PRIME_TIME_2",
    "hints": [
      { "level": 1, "cost": 50, "text": "Look at the loop's condition. A prime is divisible only by 1 and itself. Does the loop incorrectly divide 2 by 2?" }
    ],
    "editor_state": {
      "visible_code": "def check_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, n + 1):\n        if n % i == 0:\n            return False\n    return True\n\nresult = check_prime(2)\nprint(f\"Is 2 prime? {result}\")",
      "hidden_validation": "\nif result == True:\n    print('\\nFLAG: PRIME_TIME_2')\n"
    }
  },
  {
    "id": "core_compute_19",
    "name": "Matrix Misstep",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The drone should scan the main diagonal of a 3x3 grid (top-left to bottom-right). But it's just scanning the first row!",
    "flag": "DIAGONAL_SCAN_OK",
    "hints": [
      { "level": 1, "cost": 50, "text": "To scan the diagonal, the row index and the column index must be exactly the same (0,0 then 1,1 then 2,2)." }
    ],
    "editor_state": {
      "visible_code": "grid = [\n    [10, 2, 3],\n    [4, 20, 6],\n    [7, 8, 30]\n]\ndiagonal_sum = 0\n\nfor i in range(3):\n    diagonal_sum += grid[0][i]\n\nprint(f\"Diagonal Sum: {diagonal_sum}\")",
      "hidden_validation": "\nif diagonal_sum == 60:\n    print('\\nFLAG: DIAGONAL_SCAN_OK')\n"
    }
  },
  {
    "id": "core_compute_20",
    "name": "Factorial Freeze",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The recursive function calculates 5!. But it keeps multiplying into negative infinity until it crashes.",
    "flag": "BASE_CASE_MET",
    "hints": [
      { "level": 1, "cost": 50, "text": "Every recursive function needs a 'base case' to tell it when to stop. When should a factorial stop?" }
    ],
    "editor_state": {
      "visible_code": "def factorial(n):\n    # Fix the missing base case here\n    \n    return n * factorial(n - 1)\n\n# Uncomment below to test once fixed\n# ans = factorial(5)\n# print(ans)",
      "hidden_validation": "\nans = factorial(5)\nif ans == 120:\n    print('\\nFLAG: BASE_CASE_MET')\n"
    }
  },
  {
    "id": "core_compute_21",
    "name": "Two Sum Trap",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The code looks for two distinct numbers that add up to 10. But it’s cheating by adding the number 5 to itself!",
    "flag": "TWO_SUM_SAFE",
    "hints": [
      { "level": 1, "cost": 50, "text": "The inner loop shouldn't start at 0 again. It should start right after the first loop's current position (`i + 1`)." }
    ],
    "editor_state": {
      "visible_code": "nums = [2, 5, 8, 3]\ntarget = 10\nfound_pair = []\n\nfor i in range(len(nums)):\n    for j in range(0, len(nums)):\n        if nums[i] + nums[j] == target:\n            found_pair = [nums[i], nums[j]]\n\nprint(f\"Pair found: {found_pair}\")",
      "hidden_validation": "\nif set(found_pair) == set([2, 8]):\n    print('\\nFLAG: TWO_SUM_SAFE')\n"
    }
  },
  {
    "id": "core_compute_22",
    "name": "Anagram Agony",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The code checks if 'Listen' and 'Silent' are anagrams by sorting the letters. It says they aren't!",
    "flag": "ANAGRAM_MATCH_4",
    "hints": [
      { "level": 1, "cost": 50, "text": "Computers treat uppercase and lowercase letters as completely different. Clean the strings before sorting." }
    ],
    "editor_state": {
      "visible_code": "def is_anagram(str1, str2):\n    # Needs a slight modification before sorting\n    return sorted(str1) == sorted(str2)\n\nstatus = is_anagram(\"Listen\", \"Silent\")\nprint(f\"Are they anagrams? {status}\")",
      "hidden_validation": "\nif status == True:\n    print('\\nFLAG: ANAGRAM_MATCH_4')\n"
    }
  },
  {
    "id": "core_compute_23",
    "name": "Node Navigator",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The code walks through a chain of connected nodes to find the end. But it's stuck on the first node forever.",
    "flag": "REACHED_END_NODE",
    "hints": [
      { "level": 1, "cost": 50, "text": "Inside the `while` loop, you have to tell the pointer to actually move to the `next` node." }
    ],
    "editor_state": {
      "visible_code": "class Node:\n    def __init__(self, val, next_node=None):\n        self.val = val\n        self.next = next_node\n\nhead = Node(1, Node(2, Node(3)))\ncurr = head\nlast_val = None\n\n# Find the last node's value\nwhile curr is not None:\n    last_val = curr.val\n    # Pointer is stuck!\n\nprint(f\"Last node value is: {last_val}\")",
      "hidden_validation": "\nif last_val == 3:\n    print('\\nFLAG: REACHED_END_NODE')\n"
    }
  },
  {
    "id": "core_compute_24",
    "name": "The Biased Coin",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The generator should give a number between 1 and 10. But it generates numbers from 0 to 9!",
    "flag": "RANDOM_ROLL_10",
    "hints": [
      { "level": 1, "cost": 50, "text": "`num % 10` generates numbers from 0 to 9. How do you shift that entire range up by one?" }
    ],
    "editor_state": {
      "visible_code": "import random\nrandom.seed(42) # Keeps output predictable for the test\n\nraw_number = random.randint(0, 100)\n\n# Get a number from 1 to 10\nresult = raw_number % 10\n\nprint(f\"Rolled: {result}\")",
      "hidden_validation": "\nif result == 2:\n    print('\\nFLAG: RANDOM_ROLL_10')\n"
    }
  },
  {
    "id": "core_compute_25",
    "name": "Bitwise Blunder",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The script checks if a number is even using binary bitwise AND, but the logic is flipped. It thinks 4 is odd!",
    "flag": "BIT_HACK_EVEN",
    "hints": [
      { "level": 1, "cost": 50, "text": "In binary, odd numbers end in 1, and even numbers end in 0. What does `num & 1` equal for an even number?" }
    ],
    "editor_state": {
      "visible_code": "num = 4\nis_even = False\n\nif (num & 1) == 1:\n    is_even = True\n\nprint(f\"Is {num} even? {is_even}\")",
      "hidden_validation": "\nif is_even == True:\n    print('\\nFLAG: BIT_HACK_EVEN')\n"
    }
  },
  {
    "id": "core_compute_26",
    "name": "Binary Search Blunder",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The search gets stuck in an infinite loop if the target is missing. Fix the pointer updates.",
    "flag": "BINARY_NOT_FOUND",
    "hints": [
      { "level": 1, "cost": 100, "text": "When adjusting boundaries, you can't set them equal to `mid`. Move one step past it: `mid + 1` or `mid - 1`." }
    ],
    "editor_state": {
      "visible_code": "def search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return True\n        elif arr[mid] < target:\n            left = mid  # Fix this\n        else:\n            right = mid # Fix this\n    return False\n\n# Uncomment to test. Be careful of infinite loops!\n# result = search([1, 3, 5, 7], 4)\n# print(result)",
      "hidden_validation": "\nimport signal\ndef handler(signum, frame): raise Exception()\nsignal.signal(signal.SIGALRM, handler)\nsignal.alarm(1)\ntry:\n    res = search([1, 3, 5, 7], 4)\n    if res == False:\n        print('\\nFLAG: BINARY_NOT_FOUND')\nexcept:\n    pass\n"
    }
  },
  {
    "id": "core_compute_27",
    "name": "The Sliding Window",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The sliding window finds the longest sequence, but its length calculation is exactly 1 character too short.",
    "flag": "WINDOW_SLIDE_MAX",
    "hints": [
      { "level": 1, "cost": 100, "text": "If a sequence starts at index 2 and ends at index 4, `4 - 2` is 2. But the sequence contains 3 characters! Add 1." }
    ],
    "editor_state": {
      "visible_code": "arr = [1, 1, 0, 1, 1, 1, 0]\nmax_len = 0\nleft = 3\nright = 5 # Representing the window [1, 1, 1]\n\n# Calculate length of the window\ncurrent_len = right - left\nmax_len = max(max_len, current_len)\n\nprint(f\"Max length is: {max_len}\")",
      "hidden_validation": "\nif max_len == 3:\n    print('\\nFLAG: WINDOW_SLIDE_MAX')\n"
    }
  },
  {
    "id": "core_compute_28",
    "name": "The Reference Riddle",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "When the code prints the final 2D list, every path inside it is an exact copy of the very last path generated!",
    "flag": "DEEP_COPY_WIN",
    "hints": [
      { "level": 1, "cost": 100, "text": "Appending a list stores a reference. You need to append a copy: `path[:]` or `path.copy()`." }
    ],
    "editor_state": {
      "visible_code": "results = []\npath = []\n\nfor i in range(1, 3):\n    path.append(i)\n    results.append(path) # Bug is here\n    \nprint(f\"Final paths: {results}\")",
      "hidden_validation": "\nif results == [[1], [1, 2]]:\n    print('\\nFLAG: DEEP_COPY_WIN')\n"
    }
  },
  {
    "id": "core_compute_29",
    "name": "Merge Sort Mayhem",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The merge function leaves out the last few numbers if one half empties out faster than the other.",
    "flag": "MERGE_CLEANUP_DONE",
    "hints": [
      { "level": 1, "cost": 100, "text": "After the main `while` loop, you need two extra `while` loops or list extends to sweep up the remaining elements." }
    ],
    "editor_state": {
      "visible_code": "def merge(left, right):\n    res = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] < right[j]:\n            res.append(left[i])\n            i += 1\n        else:\n            res.append(right[j])\n            j += 1\n    # Leftovers are ignored!\n    return res\n\nans = merge([1, 5], [2, 3, 6, 8])\nprint(ans)",
      "hidden_validation": "\nif ans == [1, 2, 3, 5, 6, 8]:\n    print('\\nFLAG: MERGE_CLEANUP_DONE')\n"
    }
  },
  {
    "id": "core_compute_30",
    "name": "The Climbing Stairs",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The code uses DP to find ways to climb stairs. But it crashes instantly if you ask it for exactly 1 step (n=1).",
    "flag": "DP_BASE_SAFE",
    "hints": [
      { "level": 1, "cost": 100, "text": "If n=1, the array only has a size of 2. `dp[2] = 2` will throw an IndexError. Add an early return for n=1." }
    ],
    "editor_state": {
      "visible_code": "def climb(n):\n    dp = [0] * (n + 1)\n    \n    dp[1] = 1\n    dp[2] = 2  # Crashes here if n == 1\n    \n    for i in range(3, n + 1):\n        dp[i] = dp[i-1] + dp[i-2]\n    return dp[n]\n\n# Uncomment to test\n# ways = climb(1)\n# print(ways)",
      "hidden_validation": "\ntry:\n    ways = climb(1)\n    if ways == 1:\n        print('\\nFLAG: DP_BASE_SAFE')\nexcept:\n    pass\n"
    }
  }
]