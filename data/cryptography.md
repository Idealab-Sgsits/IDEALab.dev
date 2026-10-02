**Section 4: Cryptography & Patterns (Signal Interception)**, 

### 15 Easy Problems (150 Coins)

**Name:** Cryptography: Rotational Shift
**PS:** Directive: We intercepted a scrambled data packet. The encryption shifts every letter forward by 3 steps. Decode the payload.
**Hint:** This is a standard Caesar cipher. If A becomes D, what does the intercepted text spell?
**Evidence Board:** Text string `L Q G R U H`

**Name:** Protocol: Keyboard Walk
**PS:** Directive: The firewall uses a spatial routing key. Trace the physical path of the characters on a standard QWERTY keyboard. Name the geometric shape.
**Hint:** Physically look at your laptop keyboard and connect the listed keys with your finger.
**Evidence Board:** Sequence `Q -> W -> E -> D -> C -> X -> Z -> A -> Q`

**Name:** Protocol: Morse Pulse
**PS:** Directive: Intercepted a short-wave radio pulse. Dots are short bursts, dashes are long. Decode the sequence.
**Hint:** Use a standard International Morse Code chart. `....` is the letter H.
**Evidence Board:** Sequence `.... . .-.. .-.. ---`

**Name:** Protocol: Base Conversion
**PS:** Directive: The server dropped a raw binary packet. Convert the 8-bit binary sequence into standard ASCII text.
**Hint:** `01000110` is the letter F. Use an ASCII to Binary conversion chart.
**Evidence Board:** Sequence `01000110 01001100 01000001 01000111`

**Name:** Cryptography: The Reflection
**PS:** Directive: The data stream is inverted. The cipher reflects the alphabet (A becomes Z, B becomes Y). Decrypt the string.
**Hint:** This is an Atbash cipher. Write the alphabet forwards, then write it backwards underneath.
**Evidence Board:** Text string `H T H R G H`

**Name:** Sequence: Network Pulse
**PS:** Directive: The server emits a mathematical heartbeat. Predict the next number in the sequence.
**Hint:** Look at the relationship between the numbers. Add the last two numbers together to get the next one.
**Evidence Board:** Sequence `1, 1, 2, 3, 5, 8, __`

**Name:** Cryptography: Base64 Payload
**PS:** Directive: Intercepted a standard web-encoded payload. Decode it to reveal the plaintext flag.
**Hint:** Notice the `==` at the end of the string? That is a dead giveaway for Base64 encoding.
**Evidence Board:** String `SUQFQUxBQg==`

**Name:** Sequence: Hexadecimal Dump
**PS:** Directive: The memory block dumped a hex string. Translate the hex values into standard ASCII characters.
**Hint:** Hex pairs like `41` equal the letter 'A'. You can use a hex-to-ASCII table to convert.
**Evidence Board:** String `48 41 43 4B`

**Name:** Spatial: Visual Matrix
**PS:** Directive: An agent left a tactile grid encoding. Black dots represent 1s, white dots represent 0s. Decode the matrices.
**Hint:** A 3x2 matrix of raised dots is the international standard for Braille.
**Evidence Board:** Large stylized Braille characters for "CODE".

**Name:** Cryptography: Numeric Alphabet
**PS:** Directive: The terminal locked using a numeric cipher. Translate the sequence to text.
**Hint:** A1Z26 Cipher. A=1, B=2, C=3.
**Evidence Board:** Sequence `9-14-4-15-18-5`

**Name:** Protocol: The Aviation Channel
**PS:** Directive: Intercepted an audio-transcript from a secure channel. Extract the core message.
**Hint:** Look at the first letter of each phonetic word.
**Evidence Board:** Text `"Foxtrot Lima Alpha Golf"`

**Name:** Sequence: Alphanumeric Shift
**PS:** Directive: The password sequence combines numbers and letters. What is the next term?
**Hint:** The letter skips one alphabet forward. The number skips one odd number forward.
**Evidence Board:** Sequence `A1, C3, E5, G7, __`

**Name:** Spatial: Geometric Lock
**PS:** Directive: The firewall uses a geometric symbol substitution. Decode the lines and dots.
**Hint:** This is a Pigpen cipher. Look at how the lines form borders around the dots.
**Evidence Board:** SVG showing Pigpen cipher symbols for "SECRET".

**Name:** Protocol: Vowel Mutation
**PS:** Directive: The string was mutated. Every vowel was shifted to the NEXT vowel in the alphabet (A->E, E->I). Consonants are untouched. Reverse the mutation.
**Hint:** If the intercepted text has an 'E', it used to be an 'A'. Reverse the shift.
**Evidence Board:** Text string `JEVE`

**Name:** Cryptography: Mirror X-Y
**PS:** Directive: The packet was flipped across the X and Y spatial axes during transmission. Read the original string.
**Hint:** The text is completely upside down and backwards. Read it from right to left.
**Evidence Board:** Text `FLAG` rendered upside down via CSS `transform: rotate(180deg)`.

### 10 Medium Problems (400 Coins)

**Name:** Spatial: Coordinate Matrix
**PS:** Directive: Use the provided 5x5 key matrix. The intercepted coordinates are (2,3), (1,1), (4,1). Extract the text.
**Hint:** The first number is the row, the second number is the column. Cross-reference them on the board.
**Evidence Board:** A 5x5 grid of the alphabet (Polybius Square) and the coordinates.

**Name:** Protocol: Routing Spiral
**PS:** Directive: The data is stored in a 4x4 grid. The routing protocol reads the grid by starting at the top-right corner and spiraling inwards clockwise. Read the string.
**Hint:** Do not read left to right. Trace a spiral path with your eyes starting from the top right.
**Evidence Board:** A 4x4 grid containing the letters for "SYSTEMCOMPROMISE".

**Name:** Spatial: The Knight's Node
**PS:** Directive: Start at the top-left node. Trace the correct data path by only making valid chess Knight moves to spell a 4-letter word.
**Hint:** A Knight moves 2 squares in one direction, and 1 square perpendicular (L-shape).
**Evidence Board:** A 4x4 grid with letters, starting node highlighted.

**Name:** Cryptography: Alternating Channels
**PS:** Directive: The string was transmitted across two alternating frequency channels. Reconstruct the message.
**Hint:** This is a Rail Fence cipher. Write the letters zig-zagging up and down across two lines, then read straight across.
**Evidence Board:** Scrambled text `H L O E L`

**Name:** Cryptography: The Keyword Shift
**PS:** Directive: A standard Caesar shift won't work. The encryption shifts letters based on the keyword 'KEY'. Decrypt the payload.
**Hint:** This is a Vigenère cipher. 'K' shifts the first letter by 10, 'E' shifts the second by 4.
**Evidence Board:** Ciphertext `N E M Y` and Keyword `K E Y K`.

**Name:** Spatial: 3D Packet Reconstruction
**PS:** Directive: The 3D data packet was flattened into a 2D cross-shape. If reconstructed into a cube, which node is directly opposite 'A'?
**Hint:** In a standard 2D cube net, faces separated by exactly one square are always opposite each other.
**Evidence Board:** SVG or text block of a 2D cube net layout.

**Name:** Sequence: The Variable Shift
**PS:** Directive: The encryption shift isn't constant. The 1st letter shifted by 2, the 2nd by 3, the 3rd by 5, the 4th by 7. Decrypt the text.
**Hint:** The shift value follows the sequence of prime numbers. Shift them backwards.
**Evidence Board:** Ciphertext `Y R W K`

**Name:** Protocol: The Index Pointer
**PS:** Directive: The payload contains a text block and a pointer array. Extract the hidden flag.
**Hint:** The format is [LineNumber : WordNumber]. Find the 4th word of the 1st line.
**Evidence Board:** A 3-line paragraph and the pointers `[1:4]`.

**Name:** Sequence: Steganographic Font
**PS:** Directive: The encoding is hidden in the font weight. Heavy fonts equal 1, Light fonts equal 0. Extract the 5-bit binary string and convert to decimal.
**Hint:** Every bold letter is a 1. Every normal letter is a 0. Convert the 5 digits to base-10.
**Evidence Board:** A word where specific letters are styled with `font-weight: 900`.

**Name:** Spatial: Hexagonal Topology
**PS:** Directive: The routing path flows through a honeycomb structure. Start at 'H' and follow the directional vectors.
**Hint:** Each letter points to the next adjacent letter in the chain.
**Evidence Board:** SVG of a hex grid mapping a path.

### 5 Hard Problems (750 Coins)

**Name:** Spatial: Fragmented Key Overlay
**PS:** Directive: We intercepted two images of visual static. The key is fragmented across both images. Recombine them to reveal the data.
**Hint:** Use your browser inspector (F12) to move one image over the other. Set its CSS to `mix-blend-mode: multiply`.
**Evidence Board:** Two absolutely positioned `<img>` elements of static noise that form a word when overlapped.

**Name:** Cryptography: The Triple Layer
**PS:** Directive: The payload was encrypted in three layers: First reversed, then shifted backwards by 3 (Caesar), then converted to Base64. Unpack it.
**Hint:** Work strictly backwards. 1) Decode Base64. 2) Shift letters forward by 3. 3) Reverse the string.
**Evidence Board:** Base64 string `T0hYRFpF`

**Name:** Hardware: Logic Gate Circuit
**PS:** Directive: Validate the hardware circuit. Input Alpha is 1. Input Beta is 0. Trace the current through the AND, OR, and XOR gates. What is the final output (1 or 0)?
**Hint:** AND requires both to be 1. OR requires either to be 1. XOR requires them to be strictly different.
**Evidence Board:** SVG diagram of a logic gate circuit.

**Name:** Sequence: Polymorphic Derivation
**PS:** Directive: The sequence generation is polymorphic. Predict the next node.
**Hint:** Find the difference between the numbers. Then find the difference between *those* differences. Stop when the difference is constant.
**Evidence Board:** Sequence `2, 4, 11, 29, 64, __`

**Name:** Cryptography: Digraph Substitution
**PS:** Directive: The cipher blocks letters into pairs using a 5x5 grid based on the keyword 'HACK'. Decode the pair 'XQ'.
**Hint:** This is a Playfair Cipher. Draw a 5x5 grid, fill in H-A-C-K, then the rest of the alphabet. Form a rectangle with X and Q and pick opposite corners.
**Evidence Board:** Text "Keyword: HACK | Intercepted Pair: XQ"