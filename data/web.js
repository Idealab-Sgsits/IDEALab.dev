[
  {
    "id": "frontend_ops_01",
    "name": "Snow Blindness",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "A polar bear in a snowstorm. We lost the flag in the blizzard.",
    "flag": "IDEALAB_24",
    "hints": [
      { "level": 1, "cost": 25, "text": "Check the CSS file. Something is matching the background." },
      { "level": 2, "cost": 50, "text": "Can you read white text on a white background? Change the color properties." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='snow'>IDEALAB_24</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { background-color: white; }\n.snow {\n  color: white;\n  font-size: 2rem;\n  font-family: sans-serif;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_02",
    "name": "The Z-Index Trap",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Something massive is blocking your view. Dig under it.",
    "flag": "FLAG_UNDER",
    "hints": [
      { "level": 1, "cost": 25, "text": "There is an invisible layer covering everything." },
      { "level": 2, "cost": 50, "text": "Look for properties related to depth or layers in the CSS." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='blocker'></div>\n<div class='flag'>FLAG_UNDER</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }\n.blocker { position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: black; z-index: 999; }\n.flag { font-size: 3rem; color: black; z-index: 1; position: relative; }", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_03",
    "name": "Peekaboo",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The flag is right there on the screen, but it's playing hide and seek.",
    "flag": "SGSITS_GHOST",
    "hints": [
      { "level": 1, "cost": 25, "text": "Check how the display property is set." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='hidden-flag'>SGSITS_GHOST</div>", "is_editable": true, "is_visible": true },
        "/styles.css": { "content": ".hidden-flag {\n  display: none;\n  font-size: 2rem;\n  font-family: monospace;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_04",
    "name": "Ghost Protocol",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The text is here, but it's totally transparent.",
    "flag": "INVISIBLE_99",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look for a property that controls transparency in CSS." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='ghost'>INVISIBLE_99</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".ghost {\n  opacity: 0;\n  font-size: 3rem;\n  font-weight: bold;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_05",
    "name": "The Developer's Secret",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Developers always leave notes for themselves. Sometimes they forget to delete them.",
    "flag": "DEVS_KNOW_ALL",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the raw HTML structure. Read it carefully." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<!-- FLAG: DEVS_KNOW_ALL -->\n<div>Nothing to see here! The page is working normally.</div>", "is_editable": true, "is_visible": true },
        "/styles.css": { "content": "body { font-family: sans-serif; text-align: center; margin-top: 50px; }", "is_editable": false, "is_visible": false }
      },
      "active_file": "/index.html"
    }
  },
  {
    "id": "frontend_ops_06",
    "name": "Microscopic",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "You need a magnifying glass to read this one.",
    "flag": "ANT_MAN_007",
    "hints": [
      { "level": 1, "cost": 25, "text": "The text exists, but the font size is way too small." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='tiny'>ANT_MAN_007</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".tiny {\n  font-size: 0px;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_07",
    "name": "Off-Screen Excursion",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The flag has left the building. Bring it back to the center.",
    "flag": "COME_BACK_MP",
    "hints": [
      { "level": 1, "cost": 25, "text": "The element is pushed way out of the visible screen area using absolute positioning." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='lost'>COME_BACK_MP</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".lost {\n  position: absolute;\n  left: -9999px;\n  font-size: 2rem;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_08",
    "name": "Console Confession",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Not everything is meant for the main screen. Check the backend logs.",
    "flag": "TERMINAL_77",
    "hints": [
      { "level": 1, "cost": 25, "text": "Where do developers print debugging messages in a browser? Press F12." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>Check the logs. The UI is clean.</div>", "is_editable": true, "is_visible": true },
        "/script.js": { "content": "console.log('The flag is hidden here: TERMINAL_77');", "is_editable": false, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  },
  {
    "id": "frontend_ops_09",
    "name": "Hover Hack",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The answer will only reveal itself when you point exactly at it.",
    "flag": "MOUSE_TRAP",
    "hints": [
      { "level": 1, "cost": 25, "text": "Check the pseudo-classes in CSS like :hover." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='hover-me'>MOUSE_TRAP</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".hover-me {\n  color: transparent;\n  font-size: 3rem;\n  cursor: crosshair;\n}\n.hover-me:hover {\n  color: red;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_10",
    "name": "The Disabled Button",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The system locked the button. You need administrative override to click it.",
    "flag": "FLAG_UNLOCKED",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look at the button tag in the HTML. Why is it unclickable?" }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<button disabled id='btn'>Reveal Flag</button>", "is_editable": true, "is_visible": true },
        "/script.js": { "content": "document.getElementById('btn').addEventListener('click', () => alert('FLAG_UNLOCKED'));", "is_editable": false, "is_visible": true }
      },
      "active_file": "/index.html"
    }
  },
  {
    "id": "frontend_ops_11",
    "name": "Buried Treasure",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The secret is buried in a hidden input field meant for the server.",
    "flag": "INDORE_MP",
    "hints": [
      { "level": 1, "cost": 25, "text": "HTML forms sometimes hold invisible data. Check the input types." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>Look deeper...</div>\n<input type='hidden' value='INDORE_MP'>", "is_editable": true, "is_visible": true }
      },
      "active_file": "/index.html"
    }
  },
  {
    "id": "frontend_ops_12",
    "name": "Claustrophobia",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The box is way too small to fit the entire message.",
    "flag": "BOXED_IN_22",
    "hints": [
      { "level": 1, "cost": 25, "text": "The text is overflowing the box, but the CSS is hiding the overflow." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='box'>\n  <p>Here is some text and eventually the flag is BOXED_IN_22</p>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".box {\n  width: 10px;\n  height: 10px;\n  overflow: hidden;\n  border: 1px solid red;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_13",
    "name": "Fog Glasses",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "Everything is just a little too blurry to read.",
    "flag": "BLURRY_VISION",
    "hints": [
      { "level": 1, "cost": 25, "text": "There is a CSS filter applied to the body." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>BLURRY_VISION</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body {\n  filter: blur(20px);\n  font-size: 3rem;\n  font-weight: bold;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_14",
    "name": "Contrast Clash",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "You are staring right at it, but the colors are too similar.",
    "flag": "SQUINT_HARD",
    "hints": [
      { "level": 1, "cost": 25, "text": "The text color and background color are almost exactly identical hex codes." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='contrast'>SQUINT_HARD</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { background-color: #222223; }\n.contrast {\n  color: #222222;\n  font-size: 3rem;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_15",
    "name": "Pseudo-Hiding",
    "difficulty": "easy",
    "base_coins": 150,
    "problem_statement": "The HTML is completely empty, yet the text is on the screen. How?",
    "flag": "FLAG_CSS_MAGIC",
    "hints": [
      { "level": 1, "cost": 25, "text": "CSS can inject content directly into the page. Look for '::before' or '::after'." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='magic'></div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".magic::after {\n  content: 'FLAG_CSS_MAGIC';\n  font-size: 2rem;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_16",
    "name": "Flexbox Jumble",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The letters are all mixed up. Put them back in order.",
    "flag": "FLEX_IT",
    "hints": [
      { "level": 1, "cost": 50, "text": "The container uses Flexbox. Look at how the 'order' property rearranges HTML elements." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='flex'>\n  <span class='s1'>T</span>\n  <span class='s2'>X</span>\n  <span class='s3'>F</span>\n  <span class='s4'>_</span>\n  <span class='s5'>L</span>\n  <span class='s6'>I</span>\n  <span class='s7'>E</span>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".flex { display: flex; font-size: 2rem; }\n.s1 { order: 7; }\n.s2 { order: 4; }\n.s3 { order: 1; }\n.s4 { order: 5; }\n.s5 { order: 2; }\n.s6 { order: 6; }\n.s7 { order: 3; }", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_17",
    "name": "Rotated Reality",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "You might need to stand on your head for this one.",
    "flag": "UPSIDE_DOWN_88",
    "hints": [
      { "level": 1, "cost": 50, "text": "The text container has been flipped and rotated using CSS transforms." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='flip'>UPSIDE_DOWN_88</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".flip {\n  transform: rotate(180deg) scaleX(-1);\n  display: inline-block;\n  font-size: 3rem;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_18",
    "name": "The Annoying Poha Plate",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "A giant plate of Poha is blocking your view and keeps following your cursor!",
    "flag": "POHA_JALEBI_00",
    "hints": [
      { "level": 1, "cost": 50, "text": "The image is tracking your mouse via JavaScript." },
      { "level": 2, "cost": 75, "text": "Delete the image tag from the HTML or clear out the JS file completely." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div id='container'>\n  <div id='flag'>POHA_JALEBI_00</div>\n  <img id='poha' src='https://placehold.co/150x150/orange/white?text=Poha' />\n</div>", "is_editable": true, "is_visible": true },
        "/styles.css": { "content": "body { overflow: hidden; margin: 0; background: #eee; cursor: crosshair; }\n#flag {\n  position: absolute;\n  z-index: 1;\n  font-size: 24px;\n  font-weight: bold;\n  top: -100px;\n  left: -100px;\n  pointer-events: none;\n}\n#poha {\n  position: absolute;\n  z-index: 2;\n  width: 150px;\n  height: 150px;\n  top: -150px;\n  left: -150px;\n  pointer-events: none;\n}", "is_editable": true, "is_visible": true },
        "/script.js": { "content": "document.addEventListener('mousemove', (e) => {\n  const flag = document.getElementById('flag');\n  const img = document.getElementById('poha');\n  if(flag && img) {\n    flag.style.left = (e.clientX - 90) + 'px';\n    flag.style.top = (e.clientY - 15) + 'px';\n    img.style.left = (e.clientX - 75) + 'px';\n    img.style.top = (e.clientY - 75) + 'px';\n  }\n});", "is_editable": true, "is_visible": true }
      },
      "active_file": "/index.html"
    }
  },
  {
    "id": "frontend_ops_19",
    "name": "Margin Mess",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "All the characters collapsed into a single black dot.",
    "flag": "UNCOLLAPSE",
    "hints": [
      { "level": 1, "cost": 50, "text": "The elements have wild negative margins pulling them into each other." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>\n  <span class='m'>U</span><span class='m'>N</span><span class='m'>C</span><span class='m'>O</span><span class='m'>L</span><span class='m'>L</span><span class='m'>A</span><span class='m'>P</span><span class='m'>S</span><span class='m'>E</span>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".m {\n  margin-left: -50px;\n  font-size: 3rem;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_20",
    "name": "Speed Reader",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The text is flying by way too fast to read. Slow it down.",
    "flag": "FLASH_99",
    "hints": [
      { "level": 1, "cost": 50, "text": "Check the CSS animation properties. The duration is set way too low." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='marquee'>FLASH_99</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { overflow: hidden; }\n@keyframes run {\n  0% { left: -10%; }\n  100% { left: 110%; }\n}\n.marquee {\n  position: absolute;\n  animation: run 0.05s linear infinite;\n  font-size: 3rem;\n  font-weight: bold;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_21",
    "name": "LocalStorage Loot",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "We dropped a package in your browser's local warehouse.",
    "flag": "IDEA_HACK_99",
    "hints": [
      { "level": 1, "cost": 50, "text": "Check the Application/Storage tab in your browser's Developer Tools." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>Data transferred securely.</div>", "is_editable": true, "is_visible": true },
        "/script.js": { "content": "localStorage.setItem('secret_flag', 'IDEA_HACK_99');", "is_editable": false, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  },
  {
    "id": "frontend_ops_22",
    "name": "The Short Input",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The system asks for a password, but the input box won't let you type enough characters.",
    "flag": "1337_WIN",
    "hints": [
      { "level": 1, "cost": 50, "text": "The HTML input element has a restriction (maxlength) on how many characters you can type." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<input type='text' id='inp' maxlength='4' placeholder='Type SGSITS_WINNER'>", "is_editable": true, "is_visible": true },
        "/script.js": { "content": "document.getElementById('inp').addEventListener('input', function() {\n  if(this.value === 'SGSITS_WINNER') alert('FLAG: 1337_WIN');\n});", "is_editable": false, "is_visible": true }
      },
      "active_file": "/index.html"
    }
  },
  {
    "id": "frontend_ops_23",
    "name": "Class Toggle Chaos",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "There is way too much noise. Filter out the fakes.",
    "flag": "REALITY",
    "hints": [
      { "level": 1, "cost": 50, "text": "Only spans with the class '.real' matter. Hide the rest using CSS display property." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>\n  <span class='fake'>X</span><span class='real'>R</span><span class='fake'>Y</span><span class='real'>E</span><span class='fake'>Z</span><span class='real'>A</span><span class='fake'>W</span><span class='real'>L</span><span class='fake'>Q</span><span class='real'>I</span><span class='fake'>P</span><span class='real'>T</span><span class='fake'>M</span><span class='real'>Y</span>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { font-size: 3rem; font-family: monospace; letter-spacing: 5px; }", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_24",
    "name": "The SVG Mask",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "Half of the text has been sliced off by a vector shape.",
    "flag": "HALF_FLAG_44",
    "hints": [
      { "level": 1, "cost": 50, "text": "Look for a CSS clip-path or SVG mask property applied to the text container." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<svg width='0' height='0'>\n  <clipPath id='cut'>\n    <rect x='0' y='0' width='100%' height='15px'/>\n  </clipPath>\n</svg>\n<div class='masked'>HALF_FLAG_44</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".masked {\n  clip-path: url(#cut);\n  font-size: 4rem;\n  font-weight: bold;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_25",
    "name": "Blend Mode Magic",
    "difficulty": "medium",
    "base_coins": 400,
    "problem_statement": "The text is camouflaged perfectly into the background pattern.",
    "flag": "CAMO_FLAG",
    "hints": [
      { "level": 1, "cost": 50, "text": "The text uses a CSS mix-blend-mode that makes it merge with the colors behind it." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='bg'>\n  <div class='text'>CAMO_FLAG</div>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { margin: 0; }\n.bg {\n  width: 100vw;\n  height: 100vh;\n  background: repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.text {\n  color: black;\n  mix-blend-mode: color-burn;\n  font-size: 5rem;\n  font-weight: bold;\n}", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_26",
    "name": "The Puzzled Canvas",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The artwork is completely dark. Bring some color to the shapes to see the hidden message.",
    "flag": "DARK_ART",
    "hints": [
      { "level": 1, "cost": 100, "text": "The shapes are drawn using the Canvas API in JavaScript." },
      { "level": 2, "cost": 150, "text": "All fill styles are set to black (#000000). Change the text fillStyle to a contrasting color." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<canvas id='c' width='400' height='200'></canvas>", "is_editable": false, "is_visible": true },
        "/script.js": { "content": "const ctx = document.getElementById('c').getContext('2d');\n// Background\nctx.fillStyle = '#000000';\nctx.fillRect(0, 0, 400, 200);\n// Text\nctx.fillStyle = '#000000';\nctx.font = '40px sans-serif';\nctx.fillText('DARK_ART', 50, 100);", "is_editable": true, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  },
  {
    "id": "frontend_ops_27",
    "name": "Keypress Konami",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "Execute the secret sequence to unlock the vault.",
    "flag": "KONAMI_PRO",
    "hints": [
      { "level": 1, "cost": 100, "text": "The JavaScript is listening for a specific combination of arrow keys." },
      { "level": 2, "cost": 150, "text": "Click the preview window and type Up, Up, Down, Left on your keyboard." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>Enter the sequence. Click here first to focus.</div>", "is_editable": false, "is_visible": true },
        "/script.js": { "content": "let k = [];\ndocument.addEventListener('keydown', (e) => {\n  k.push(e.key);\n  if (k.join('').includes('ArrowUpArrowUpArrowDownArrowLeft')) {\n    alert('FLAG: KONAMI_PRO');\n  }\n});", "is_editable": false, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  },
  {
    "id": "frontend_ops_28",
    "name": "CSS Grid Labyrinth",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The path is there, but the tiles aren't glowing. Light them up.",
    "flag": "GRID",
    "hints": [
      { "level": 1, "cost": 100, "text": "A specific CSS class (.path) is assigned to certain grid cells, but it has no styling." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div class='grid'>\n  <div class='path'>G</div><div>X</div><div class='path'>R</div><div>Y</div>\n  <div class='path'>I</div><div>Z</div><div class='path'>D</div><div>A</div>\n</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": ".grid {\n  display: grid;\n  grid-template-columns: repeat(4, 50px);\n  font-size: 2rem;\n  text-align: center;\n}\n/* Add styling for .path below */\n", "is_editable": true, "is_visible": true }
      },
      "active_file": "/styles.css"
    }
  },
  {
    "id": "frontend_ops_29",
    "name": "The Split Cookie",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The key was snapped in half. One piece is in the jar, the other is in your current session.",
    "flag": "HALF_BAKED_99",
    "hints": [
      { "level": 1, "cost": 100, "text": "Check both the browser Cookies and Session Storage in your developer tools." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div>Data fragmented...</div>", "is_editable": false, "is_visible": true },
        "/script.js": { "content": "document.cookie = 'part1=HALF_; path=/';\nsessionStorage.setItem('part2', 'BAKED_99');", "is_editable": false, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  },
  {
    "id": "frontend_ops_30",
    "name": "Event Listener Trap",
    "difficulty": "hard",
    "base_coins": 750,
    "problem_statement": "The system has locked down your controls. No right-clicking, no selecting, no inspecting. Break the lock.",
    "flag": "UNTOUCHABLE_404",
    "hints": [
      { "level": 1, "cost": 100, "text": "JavaScript is hijacking your mouse and keyboard events using preventDefault()." },
      { "level": 2, "cost": 150, "text": "Delete the event listeners in the JS file and the preview will refresh." }
    ],
    "editor_state": {
      "files": {
        "/index.html": { "content": "<div id='secret'>UNTOUCHABLE_404</div>", "is_editable": false, "is_visible": true },
        "/styles.css": { "content": "body { color: transparent; } /* Selection is required to read */\n::selection { color: black; background: yellow; }", "is_editable": false, "is_visible": true },
        "/script.js": { "content": "window.addEventListener('contextmenu', e => e.preventDefault());\nwindow.addEventListener('selectstart', e => e.preventDefault());\nwindow.addEventListener('keydown', e => {\n  if(e.key === 'F12') e.preventDefault();\n});", "is_editable": true, "is_visible": true }
      },
      "active_file": "/script.js"
    }
  }
]