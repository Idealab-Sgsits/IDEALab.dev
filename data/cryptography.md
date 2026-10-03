**Section 4: Cryptography & Patterns (Signal Interception)**, 

### 25 Easy Problems (150 Coins)

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
**Evidence Board:** Text string `H T H R G H _ X I B K G L`

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

**Name:** Cryptography: The Atbash Inversion
**PS:** Directive: Intercepted an inverted transmission. The sender mirrored the Latin alphabet across the A-Z spectrum (A becomes Z, B becomes Y), leaving numerals and symbols intact. Decrypt the secret token.
**Hint:** This is an Atbash cipher. Reflect each letter across the alphabet (C becomes X, R becomes I, etc.). Symbols and digits remain in place.
**Evidence Board:** XIBKGL_ZGYZHS_31

**Name:** Cryptography: Caesar Five
**PS:** Directive: We captured a beacon transmission rotated forward by 5 positions in the alphabet. Reverse the Caesar rotation to extract the operational flag.
**Hint:** Shift each letter backwards by 5 steps (or forward by 21). H shifts back to C, W shifts back to R.
**Evidence Board:** HWDUYT_HFJXFW_32

**Name:** Cryptography: Half Rotation
**PS:** Directive: The communication channel applies an exact 13-step symmetric rotational permutation. Recover the access code.
**Hint:** ROT13 rotates characters by 13 positions (half of the 26-letter alphabet). Applying ROT13 a second time restores the plaintext.
**Evidence Board:** PELCGB_EBGGUVEGRRA_33

**Name:** Protocol: Hex Stream Extraction
**PS:** Directive: A telemetry module performed a raw hex dump of the registration token. Convert the space-delimited hexadecimal byte stream to ASCII.
**Hint:** Convert each two-digit hex value into its ASCII character equivalent (0x43 is C, 0x52 is R, 0x5F is _).
**Evidence Board:** 43 52 59 50 54 4F 5F 48 45 58 44 45 43 4F 44 45 5F 33 34

**Name:** Protocol: Continuous Wave Telegraphy
**PS:** Directive: Intercepted an emergency CW radio pulse. Morse characters are separated by spaces and words by slashes. Decode the audio telegraphy.
**Hint:** Use the international Morse code lookup table: -.-. is C, .-. is R, ..--.- is _, ...-- is 3, ..... is 5.
**Evidence Board:** -.-. .-. -.-- .--. - --- / ..--.- / -- --- .-. ... . / ..--.- / ...-- .....

**Name:** Protocol: Base64 Authorization Blob
**PS:** Directive: An intercepted HTTP authorization header contained an encoded credential blob. Decode the Base64 stream to reveal the agent identity.
**Hint:** The trailing double-equals == indicates standard Base64 padding. Decode the ASCII string directly.
**Evidence Board:** Q1JZUFRPX0JBU0U2NF8zNg==

**Name:** Hardware: Logic Analyzer Octets
**PS:** Directive: A hardware logic analyzer tapped an 8-bit parallel bus during initialization. Convert the 8-bit binary octets to ASCII text.
**Hint:** Each 8-bit block represents a character in standard ASCII. 01000011 in decimal is 67, which corresponds to capital C.
**Evidence Board:** 01000011 01010010 01011001 01010000 01010100 01001111 01011111 01000010 01001001 01001110 01011111 00110011 00110111

**Name:** Sequence: Alphanumeric Indices
**PS:** Directive: Intercepted a transmission encoded with ordinal alphanumeric indices where A=1 through Z=26. Underscores and numbers delineate segments. Decode the token.
**Hint:** Map each number back to its alphabet position: 3 is C, 18 is R, 25 is Y, 16 is P, 20 is T, 15 is O.
**Evidence Board:** 3-18-25-16-20-15_14-21-13-2-5-18_38

**Name:** Spatial: Mason Cipher Grid
**PS:** Directive: An operative marked a secret geometric grid cipher using Pigpen enclosure notations. Enclosures represent grid cell shapes and dots. Translate the symbols.
**Hint:** Standard Pigpen cipher: Grid 1 (A-I), Grid 2 with dots (J-R), X-grid (S-V), X-grid with dots (W-Z). Cross-reference each geometric enclosure.
**Evidence Board:** [G1-TR] [G2-BR-DOT] [G4-RIGHT-DOT] [G2-BL-DOT] [G3-LEFT] [G2-MR-DOT] _ [G2-BL-DOT] [G1-BR] [G1-BL] [G2-BL-DOT] [G1-MC] [G2-MC-DOT] _ 39

**Name:** Protocol: Layered Hex Base64
**PS:** Directive: The intercepted data block was serialized in two layers: first Base64 encoded, then dumped as raw hex ASCII. Unwrap both layers to extract the flag.
**Hint:** Work strictly in reverse: first decode hexadecimal to ASCII bytes, then decode the resulting Base64 string.
**Evidence Board:** 51314A5A55465250583031565446524A55315246554638304D413D3D

### 20 Medium Problems (400 Coins)

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

**Name:** Cryptography: Vigenere Polyalphabetic
**PS:** Directive: A periodic polyalphabetic cipher was applied to encrypt this mission directive using the keyword CIPHER. Decrypt the ciphertext.
**Hint:** Subtract the shift value of each keyword letter from the ciphertext letter modulo 26. C shifts by 2, I shifts by 8, P shifts by 15.
**Evidence Board:** Keyword: CIPHER | Ciphertext: EZNWXF_XQVLRVTM_41

**Name:** Cryptography: Playfair Digraph Grid
**PS:** Directive: We intercepted digraph pairs encoded using a 5x5 Playfair matrix generated from the keyword MATRIX. Decode the pair stream.
**Hint:** Use the 5x5 Playfair square with keyword MATRIX (I and J combined). For rectangle pairs, select opposite corners in the same row. For same row or column, apply circular shifts.
**Evidence Board:** Key: MATRIX | Digraphs: DT WQ AP SH RV GM MI _ 42

**Name:** Cryptography: Rail Fence Three Depth
**PS:** Directive: The signal was transposed across three alternate tracks in a zig-zag rail fence pattern. Rebuild the original sequence.
**Hint:** Reconstruct the 3-rail fence lattice. Trace top rail, middle rail, and bottom rail in a zig-zag wave across 19 characters.
**Evidence Board:** Rails: 3 | Intercept: CTAE_RPORIFNE4Y_LC3

**Name:** Cryptography: Columnar Transposition
**PS:** Directive: The message was written into a rectangular grid and read out column by column according to the alphabetical order of key CIPHER. Recover the text.
**Hint:** Key CIPHER has 6 columns with alphabetical order: C(1), E(2), H(3), I(4), P(5), R(6). Write columns into a 3x6 grid and read row by row.
**Evidence Board:** Key: CIPHER | Columns: C_N TU4 PL_ RCA YOR OM4

**Name:** Cryptography: Affine Modular Mapping
**PS:** Directive: The alphabet underwent modular affine transformation E(x) = (7*x + 11) mod 26. Invert the affine transformation to recover the plaintext.
**Hint:** The modular multiplicative inverse of 7 mod 26 is 15 (since 7*15 = 105 = 4*26 + 1). Compute D(y) = 15*(y - 11) mod 26.
**Evidence Board:** E(x) = (7x + 11) mod 26 | Ciphertext: ZAXMOF_LUUPYN_45

**Name:** Cryptography: Autokey Keystream
**PS:** Directive: An autokey cipher was used where the keystream begins with primer KEY and continues with the plaintext characters themselves. Decrypt the message.
**Hint:** First decrypt with K, E, Y. The recovered letters immediately become the next key letters to decrypt subsequent characters.
**Evidence Board:** Primer: KEY | Intercept: MVWRKM_PNHOEXM_46

**Name:** Cryptography: Beaufort Symmetrical Cipher
**PS:** Directive: An Italian reciprocal Beaufort cipher scrambled the transmission using key SHIELD via formula C = (K - P) mod 26. Reverse the cipher.
**Hint:** Beaufort is reciprocal: P = (K - C) mod 26. Subtract the ciphertext letter from the repeated keyword letter modulo 26.
**Evidence Board:** Key: SHIELD | Ciphertext: QQKPSP_RDIKGPBO_47

**Name:** Cryptography: Frequency Clue Substitution
**PS:** Directive: Intercepted a monoalphabetic substitution payload. A cryptanalyst recovered part of the alphabet mapping: B=C, O=R, W=Y, L=P, U=T, K=O. Complete the decryption.
**Hint:** Substitute the crib mapping back into the ciphertext. Use English letter frequency patterns (the high-frequency digraph QU and common suffix CY) to deduce the remaining letters.
**Evidence Board:** Crib: B->C, O->R, W->Y, L->P, U->T, K->O | Ciphertext: BOWLUK_XOCPYCJBW_48

**Name:** Spatial: Snake Route Transposition
**PS:** Directive: The 20-character payload was written into a 4x5 matrix in boustrophedon (snake alternating) order, then read vertically by columns. Unwind the path.
**Hint:** Write the 5 column groups into a 4x5 matrix. Row 0 reads L->R, Row 1 reads R<-L, Row 2 reads L->R, Row 3 reads R<-L.
**Evidence Board:** Matrix: 4x5 Boustrophedon | Columns: CUT9 ROE4 YR_E P_SK TONA

**Name:** Spatial: Polybius Coordinate Decryption
**PS:** Directive: Intercepted numeric coordinate pairs corresponding to a 5x5 Polybius grid (where 11=A through 55=Z, I and J share 24). Extract the letters.
**Hint:** The first digit is row (1-5), the second digit is column (1-5). 13 is C, 42 is R, 54 is Y, 35 is P, 44 is T, 34 is O.
**Evidence Board:** 13 42 54 35 44 34 _ 35 34 31 54 12 24 45 43 _ 5 0

### 15 Hard Problems (750 Coins)

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

**Name:** Cryptography: RSA Small Exponent Cube
**PS:** Directive: A faulty RSA implementation used public exponent e=3 without message padding. The ciphertext is smaller than the modulus n. Extract the plaintext message.
**Hint:** Because m^3 < n, no modular wrap-around occurred. Compute the exact integer cube root of c, then convert the integer bytes to ASCII.
**Evidence Board:** e = 3 | c = 28168288599426912389650059530477028441113227282860888200679803133611319227579178722880798150499692444318714088020816918804671391219808383321

**Name:** Cryptography: RSA Fermat Factorization
**PS:** Directive: The target RSA public key modulus n was generated using two prime factors p and q that lie unusually close to each other. Factor n and decrypt ciphertext c.
**Hint:** Use Fermats factorization method: let a = ceil(sqrt(n)). Check if a^2 - n is a perfect square b^2. Then p = a - b and q = a + b, compute private exponent d, and decrypt c.
**Evidence Board:** n = 1000000000000000000000000000000002506000000000000000000000000000001553109 | e = 65537 | c = 68840194338180290760794658398331643020166872849357117917268184180391397

**Name:** Cryptography: Keystream Reuse Many-Time Pad
**PS:** Directive: Two distinct messages were encrypted using the exact same one-time pad keystream. Message 1 plaintext is known to be ATTACK_AT_DAWN_53!. Recover Message 2.
**Hint:** C1 XOR M1 yields the secret keystream K. Then C2 XOR K yields plaintext Message 2.
**Evidence Board:** M1: ATTACK_AT_DAWN_53! | C1: 121117300A303B151A25342B28352E666472 | C2: 1017353B19243407333C3C3B0E202C666670

**Name:** Protocol: Diffie-Hellman Discrete Log
**PS:** Directive: Intercepted a Diffie-Hellman key exchange over prime p=65537 with generator g=3. Alice public key is A=28514 and Bob is B=33041. Recover the shared secret and decrypt the payload.
**Hint:** Solve the discrete logarithm g^a = A mod p using trial powers or baby-step giant-step. Compute shared secret S = B^a mod p and XOR decrypt the hex payload with str(S).
**Evidence Board:** p = 65537, g = 3, A = 28514, B = 33041 | Payload: 736767426645607361676647576E60000301

**Name:** Cryptography: Feistel Round Inversion
**PS:** Directive: A 2-round Feistel network with round function F(R, K) = SHA256(R + K)[:len(L)] produced ciphertext blocks (L2, R2). Invert the rounds to reconstruct L0 + R0.
**Hint:** In a Feistel cipher, round 2 inversion gives: R1 = L2 and L1 = R2 XOR F(R1, K2). Then round 1 gives: R0 = L1 and L0 = R1 XOR F(R0, K1).
**Evidence Board:** K1: ROUNDKEY_ONE | K2: ROUNDKEY_TWO | L2: 383A7263AACC9EF4 | R2: 2D60224C43D8C74510

**Name:** Cryptography: AES-ECB Block Oracle
**PS:** Directive: An encryption oracle running AES-128 in ECB mode leaks identical 16-byte ciphertext blocks. The oracle maps unknown block 061994A578DAF8DF405357FE875E5DFF to a 16-byte prefix, and AA15566D980F664EFC4AF929D65B85C8 to the suffix block. Reconstruct the plaintext by probing the oracle.
**Hint:** In ECB mode, identical 16-byte plaintext blocks produce identical ciphertext blocks. Match intercepted blocks against the oracle dictionary.
**Evidence Board:** Query prefix block yields 061994A578DAF8DF405357FE875E5DFF. Target ciphertext: 061994A578DAF8DF405357FE875E5DFF AA15566D980F664EFC4AF929D65B85C8

**Name:** Hardware: LFSR Keystream Synchronization
**PS:** Directive: A 5-bit LFSR with feedback polynomial x^5 + x^3 + 1 generated a pseudo-random keystream initialized with seed state [1, 0, 1, 1, 0]. Synchronize the stream and decrypt the 19-byte payload.
**Hint:** Compute keystream bit feedback = s[4] XOR s[2] at each shift step starting from [1, 0, 1, 1, 0]. XOR the bitstream with the hex ciphertext bytes.
**Evidence Board:** Polynomial: x^5 + x^3 + 1 | Seed: [1, 0, 1, 1, 0] | Ciphertext: F7BB8AF71AD26538AF80F51DC97B20AC8C9279

**Name:** Protocol: Merkle-Damgard Hash Extension
**PS:** Directive: A server signs requests as MD5(secret || message) with a 16-byte secret. Original message action=read has MD5 hash e38eb7dc7dd0602f068f80695026c2cf. An extension appends &action=admin. Compute the extended MD5 digest and XOR decrypt the payload.
**Hint:** Total initial length is 16 + 11 = 27 bytes. Format the 64-byte Merkle-Damgard padding block and resume MD5 internal state from the original digest to compute the extended hash, then XOR decrypt the payload.
**Evidence Board:** SecretLen: 16 | OrigMsg: action=read | OrigMD5: e38eb7dc7dd0602f068f80695026c2cf | Append: &action=admin | Payload: 4B0731A667C9A21999D5BD29DA9DF9B030

**Name:** Cryptography: Merkle-Hellman Knapsack
**PS:** Directive: Decrypt the Merkle-Hellman knapsack ciphertext vector. Private superincreasing sequence is w=(2, 5, 11, 25, 53, 110, 225, 455), modulus q=887, multiplier r=135 (r^-1 mod q = 381).
**Hint:** Multiply each ciphertext value by r^-1 mod q (381 mod 887). Then use the greedy knapsack approach with w from 455 down to 2 to extract the 8 bits of each ASCII character.
**Evidence Board:** w = (2, 5, 11, 25, 53, 110, 225, 455), q = 887, r^-1 = 381 | Ciphertext: 1114, 1606, 1670, 1389, 2047, 1831, 2545, 1173, 1609, 897, 1389, 1828, 897, 1114, 1173, 2545, 2192, 1593

**Name:** Cryptography: ECC Point Multiplication
**PS:** Directive: On elliptic curve y^2 = x^3 + 3x + 7 (mod 991), generator point G = (2, 608). Alice computes shared point P = 5*G. Coordinate key is x*1000 + y. Decrypt the ciphertext.
**Hint:** Use elliptic curve group addition and doubling over F_991 to compute 5*G. Key is x*1000 + y. XOR decrypt each character with repeating digits of the key.
**Evidence Board:** Curve: y^2 = x^3 + 3x + 7 mod 991 | G: (2, 608) | Scalar: 5 | Ciphertext: 47535B58554B5E474B42544E4B46555B3732
