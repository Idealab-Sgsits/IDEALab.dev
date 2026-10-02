[
  {
    "id": "reasoning_01",
    "name": "Cryptography: Rotational Shift",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: We intercepted a scrambled data packet. The encryption shifts every letter forward by 3 steps. Decode the payload.",
    "flag": "INDORE",
    "hints": [
      { "level": 1, "cost": 25, "text": "This is a standard Caesar cipher. If A becomes D, what does the intercepted text spell?" }
    ],
    "evidence_board": {
      "type": "text",
      "content": "L Q G R U H"
    }
  },
  {
    "id": "reasoning_02",
    "name": "Protocol: Keyboard Walk",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The firewall uses a spatial routing key. Trace the physical path of the characters on a standard QWERTY keyboard. Name the geometric shape.",
    "flag": "RECTANGLE",
    "hints": [
      { "level": 1, "cost": 25, "text": "Physically look at your laptop keyboard and connect the listed keys with your finger." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "Q -> W -> E -> D -> C -> X -> Z -> A -> Q"
    }
  },
  {
    "id": "reasoning_03",
    "name": "Protocol: Morse Pulse",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: Intercepted a short-wave radio pulse. Dots are short bursts, dashes are long. Decode the sequence.",
    "flag": "HELLO",
    "hints": [
      { "level": 1, "cost": 25, "text": "Use a standard International Morse Code chart. '....' is the letter H." }
    ],
    "evidence_board": {
      "type": "text",
      "content": ".... . .-.. .-.. ---"
    }
  },
  {
    "id": "reasoning_04",
    "name": "Protocol: Base Conversion",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The server dropped a raw binary packet. Convert the 8-bit binary sequence into standard ASCII text.",
    "flag": "FLAG",
    "hints": [
      { "level": 1, "cost": 25, "text": "01000110 is the letter F. Use an ASCII to Binary conversion chart." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "01000110 01001100 01000001 01000111"
    }
  },
  {
    "id": "reasoning_05",
    "name": "Cryptography: The Reflection",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The data stream is inverted. The cipher reflects the alphabet (A becomes Z, B becomes Y). Decrypt the string.",
    "flag": "SGSITS",
    "hints": [
      { "level": 1, "cost": 25, "text": "This is an Atbash cipher. Write the alphabet forwards, then write it backwards underneath." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "H T H R G H"
    }
  },
  {
    "id": "reasoning_06",
    "name": "Sequence: Network Pulse",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The server emits a mathematical heartbeat. Predict the next number in the sequence.",
    "flag": "13",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the relationship between the numbers. Add the last two numbers together to get the next one." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "1, 1, 2, 3, 5, 8, __"
    }
  },
  {
    "id": "reasoning_07",
    "name": "Cryptography: Base64 Payload",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: Intercepted a standard web-encoded payload. Decode it to reveal the plaintext flag.",
    "flag": "IDEALAB",
    "hints": [
      { "level": 1, "cost": 25, "text": "Notice the '==' at the end of the string? That is a dead giveaway for Base64 encoding." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "SUQFQUxBQg=="
    }
  },
  {
    "id": "reasoning_08",
    "name": "Sequence: Hexadecimal Dump",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The memory block dumped a hex string. Translate the hex values into standard ASCII characters.",
    "flag": "HACK",
    "hints": [
      { "level": 1, "cost": 25, "text": "Hex pairs like '41' equal the letter 'A'. You can use a hex-to-ASCII table to convert." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "48 41 43 4B"
    }
  },
  {
    "id": "reasoning_09",
    "name": "Spatial: Visual Matrix",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: An agent left a tactile grid encoding. Black dots represent 1s, white dots represent 0s. Decode the matrices.",
    "flag": "CODE",
    "hints": [
      { "level": 1, "cost": 25, "text": "A 3x2 matrix of raised dots is the international standard for Braille." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='font-size: 5rem; letter-spacing: 15px;'>⠉⠕⠙⠑</div>"
    }
  },
  {
    "id": "reasoning_10",
    "name": "Cryptography: Numeric Alphabet",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The terminal locked using a numeric cipher. Translate the sequence to text.",
    "flag": "INDORE",
    "hints": [
      { "level": 1, "cost": 25, "text": "A1Z26 Cipher. A=1, B=2, C=3." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "9-14-4-15-18-5"
    }
  },
  {
    "id": "reasoning_11",
    "name": "Protocol: The Aviation Channel",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: Intercepted an audio-transcript from a secure channel. Extract the core message.",
    "flag": "FLAG",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the first letter of each phonetic word." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "\"Foxtrot Lima Alpha Golf\""
    }
  },
  {
    "id": "reasoning_12",
    "name": "Sequence: Alphanumeric Shift",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The password sequence combines numbers and letters. What is the next term?",
    "flag": "I9",
    "hints": [
      { "level": 1, "cost": 25, "text": "The letter skips one alphabet forward. The number skips one odd number forward." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "A1, C3, E5, G7, __"
    }
  },
  {
    "id": "reasoning_13",
    "name": "Spatial: Geometric Lock",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The firewall uses a geometric symbol substitution. Decode the lines and dots.",
    "flag": "SECRET",
    "hints": [
      { "level": 1, "cost": 25, "text": "This is a Pigpen cipher. Look at how the lines form borders around the dots." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='font-family: sans-serif; text-align: center; font-size: 24px;'>&#x25A1; &#x25A0; &#x25B3; (Mockup: Replace with Pigpen SVG)</div>"
    }
  },
  {
    "id": "reasoning_14",
    "name": "Protocol: Vowel Mutation",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The string was mutated. Every vowel was shifted to the NEXT vowel in the alphabet (A->E, E->I). Consonants are untouched. Reverse the mutation.",
    "flag": "JAVA",
    "hints": [
      { "level": 1, "cost": 25, "text": "If the intercepted text has an 'E', it used to be an 'A'. Reverse the shift." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "JEVE"
    }
  },
  {
    "id": "reasoning_15",
    "name": "Cryptography: Mirror X-Y",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Directive: The packet was flipped across the X and Y spatial axes during transmission. Read the original string.",
    "flag": "FLAG",
    "hints": [
      { "level": 1, "cost": 25, "text": "The text is completely upside down and backwards. Read it from right to left." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='transform: rotate(180deg); font-size: 4rem; font-weight: bold; display: inline-block;'>FLAG</div>"
    }
  },
  {
    "id": "reasoning_16",
    "name": "Spatial: Coordinate Matrix",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: Use the provided 5x5 key matrix. The intercepted coordinates are (2,3), (1,1), (4,1). Extract the text.",
    "flag": "HAP",
    "hints": [
      { "level": 1, "cost": 50, "text": "The first number is the row, the second number is the column. Cross-reference them on the board." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<pre style='font-size: 1.5rem; line-height: 1.5;'>  1 2 3 4 5\n1 A B C D E\n2 F G H I J\n3 K L M N O\n4 P Q R S T\n5 U V W X Y</pre><br><p style='font-size: 1.2rem;'>Coordinates: (2,3), (1,1), (4,1)</p>"
    }
  },
  {
    "id": "reasoning_17",
    "name": "Protocol: Routing Spiral",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The data is stored in a 4x4 grid. The routing protocol reads the grid by starting at the top-right corner and spiraling inwards clockwise. Read the string.",
    "flag": "SYSTEMCOMPROMISE",
    "hints": [
      { "level": 1, "cost": 50, "text": "Do not read left to right. Trace a spiral path with your eyes starting from the 'S' in the top right." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<pre style='font-size: 2rem; letter-spacing: 10px;'>I M O S\nM P R Y\nO E I S\nC M E T</pre>"
    }
  },
  {
    "id": "reasoning_18",
    "name": "Spatial: The Knight's Node",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: Start at the highlighted node. Trace the correct data path by only making valid chess Knight moves to spell a 4-letter word.",
    "flag": "DATA",
    "hints": [
      { "level": 1, "cost": 50, "text": "A Knight moves 2 squares in one direction, and 1 square perpendicular (L-shape)." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<pre style='font-size: 2rem; letter-spacing: 10px;'><span style='color: #00ff00; font-weight: bold;'>D</span> - - -\n- - A -\n- T - -\n- - - A</pre>"
    }
  },
  {
    "id": "reasoning_19",
    "name": "Cryptography: Alternating Channels",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The string was transmitted across two alternating frequency channels. Reconstruct the message.",
    "flag": "HELLO",
    "hints": [
      { "level": 1, "cost": 50, "text": "This is a Rail Fence cipher. Write the letters zig-zagging up and down across two lines, then read straight across." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "H L O E L"
    }
  },
  {
    "id": "reasoning_20",
    "name": "Cryptography: The Keyword Shift",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: A standard Caesar shift won't work. The encryption shifts letters based on the keyword 'KEY'. Decrypt the payload.",
    "flag": "DATA",
    "hints": [
      { "level": 1, "cost": 50, "text": "This is a Vigenère cipher. 'K' shifts the first letter by 10, 'E' shifts the second by 4." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "Ciphertext: N E M Y  |  Keyword: K E Y K"
    }
  },
  {
    "id": "reasoning_21",
    "name": "Spatial: 3D Packet Reconstruction",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The 3D data packet was flattened into a 2D cross-shape. If reconstructed into a cube, which node is directly opposite 'A'?",
    "flag": "C",
    "hints": [
      { "level": 1, "cost": 50, "text": "In a standard 2D cube net, faces separated by exactly one square are always opposite each other." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<pre style='font-size: 1.5rem;'>     [A]\n [D] [B] [C]\n     [E]\n     [F]</pre>"
    }
  },
  {
    "id": "reasoning_22",
    "name": "Sequence: The Variable Shift",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The encryption shift isn't constant. The 1st letter shifted by 2, the 2nd by 3, the 3rd by 5, the 4th by 7. Decrypt the text.",
    "flag": "WORD",
    "hints": [
      { "level": 1, "cost": 50, "text": "The shift value follows the sequence of prime numbers. Shift them backwards." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "Y R W K"
    }
  },
  {
    "id": "reasoning_23",
    "name": "Protocol: The Index Pointer",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The payload contains a text block and a pointer array. Extract the hidden flag.",
    "flag": "SYSTEM",
    "hints": [
      { "level": 1, "cost": 50, "text": "The format is [LineNumber : WordNumber]. Find the 4th word of the 1st line." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<p style='font-family: monospace; font-size: 1.2rem;'>1. The firewall blocked the system breach.<br>2. Override was successful today.<br>3. Data secured.</p><p style='font-weight: bold; margin-top: 20px;'>Pointers: [1:4]</p>"
    }
  },
  {
    "id": "reasoning_24",
    "name": "Sequence: Steganographic Font",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The encoding is hidden in the font weight. Heavy fonts equal 1, Light fonts equal 0. Extract the 5-bit binary string and convert to decimal.",
    "flag": "9",
    "hints": [
      { "level": 1, "cost": 50, "text": "Every bold letter is a 1. Every normal letter is a 0. Convert the 5 digits to base-10." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='font-size: 3rem;'><span style='font-weight: 200'>L</span><span style='font-weight: 900'>O</span><span style='font-weight: 200'>G</span><span style='font-weight: 200'>I</span><span style='font-weight: 900'>C</span></div>"
    }
  },
  {
    "id": "reasoning_25",
    "name": "Spatial: Hexagonal Topology",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Directive: The routing path flows through a honeycomb structure. Start at 'H' and follow the directional vectors.",
    "flag": "HIVE",
    "hints": [
      { "level": 1, "cost": 50, "text": "Each letter points to the next adjacent letter in the chain." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='font-family: sans-serif; text-align: center; font-size: 24px;'>[HEX GRID MOCKUP: H -> I -> V -> E]</div>"
    }
  },
  {
    "id": "reasoning_26",
    "name": "Spatial: Fragmented Key Overlay",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: We intercepted two images of visual static. The key is fragmented across both images. Recombine them to reveal the data.",
    "flag": "OVERLAY",
    "hints": [
      { "level": 1, "cost": 100, "text": "Use your browser inspector (F12) to move one image over the other. Set its CSS to `mix-blend-mode: multiply`." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='position: relative; width: 300px; height: 100px; background: #eee;'><div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(45deg, transparent, transparent 10px, #ccc 10px, #ccc 20px);'></div><div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: repeating-linear-gradient(-45deg, transparent, transparent 10px, #999 10px, #999 20px);'></div></div>"
    }
  },
  {
    "id": "reasoning_27",
    "name": "Cryptography: The Triple Layer",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: The payload was encrypted in three layers: First reversed, then shifted backwards by 3 (Caesar), then converted to Base64. Unpack it.",
    "flag": "HACKER",
    "hints": [
      { "level": 1, "cost": 100, "text": "Work strictly backwards. 1) Decode Base64. 2) Shift letters forward by 3. 3) Reverse the string." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "T0hYRFpF"
    }
  },
  {
    "id": "reasoning_28",
    "name": "Hardware: Logic Gate Circuit",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: Validate the hardware circuit. Input Alpha is 1. Input Beta is 0. Trace the current through the AND, OR, and XOR gates. What is the final output (1 or 0)?",
    "flag": "1",
    "hints": [
      { "level": 1, "cost": 100, "text": "AND requires both to be 1. OR requires either to be 1. XOR requires them to be strictly different." }
    ],
    "evidence_board": {
      "type": "html",
      "content": "<div style='font-family: monospace; font-size: 1.2rem;'><p>A (1) ----[AND]----<br>B (0) --/      \\<br>                [OR] ---> ?<br>A (1) ----[XOR]----/<br>B (0) --/</p></div>"
    }
  },
  {
    "id": "reasoning_29",
    "name": "Sequence: Polymorphic Derivation",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: The sequence generation is polymorphic. Predict the next node.",
    "flag": "125",
    "hints": [
      { "level": 1, "cost": 100, "text": "Find the difference between the numbers. Then find the difference between *those* differences. Stop when the difference is constant." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "2, 4, 11, 29, 64, __"
    }
  },
  {
    "id": "reasoning_30",
    "name": "Cryptography: Digraph Substitution",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Directive: The cipher blocks letters into pairs using a 5x5 grid based on the keyword 'HACK'. Decode the pair 'XQ'.",
    "flag": "WE",
    "hints": [
      { "level": 1, "cost": 100, "text": "This is a Playfair Cipher. Draw a 5x5 grid, fill in H-A-C-K, then the rest of the alphabet. Form a rectangle with X and Q and pick opposite corners." }
    ],
    "evidence_board": {
      "type": "text",
      "content": "Keyword: HACK | Intercepted Pair: XQ"
    }
  }
]