## Easy (150 Coins)

**Name**: Snow Blindness
**PS** : A polar bear in a snowstorm. We lost the flag in the blizzard.
**Hint**: Check the colors in the CSS file. Can you read white text on a white background?
**Implementation**: Set `color: white` and `background-color: white` on the `<body>`. The student must change one of the hex codes or color names in the editor to make the text `IDEALAB_24` visible in the preview.

**Name**: The Z-Index Trap
**PS** : Something massive is blocking your view. Dig under it.
**Hint**: There is an invisible layer covering everything. Look for properties related to depth or layers.
**Implementation**: Place a black `<div>` covering the entire screen with `z-index: 9999; position: absolute;`. The flag is underneath it. They must delete the div or set its z-index to `-1`.

**Name**: Peekaboo
**PS** : The flag is right there on the screen, but it's playing hide and seek.
**Hint**: Check how the display property is set for the container holding the text.
**Implementation**: Put the flag string inside a `<div>` styled with `display: none`. They need to change it to `block` or `flex`.

**Name**: Ghost Protocol
**PS** : The text is here, but it's totally transparent.
**Hint**: How do ghosts turn invisible? Look for a property that controls transparency.
**Implementation**: The flag text container has `opacity: 0`. They must change it to `1`.

**Name**: The Developer's Secret
**PS** : Developers always leave notes for themselves. Sometimes they forget to delete them.
**Hint**: Look at the raw HTML structure. Are there any hidden comments?
**Implementation**: The live preview is totally blank, but the `index.html` file contains `<!-- FLAG: SGSITS_WINNER -->`. They just need to read the code.

**Name**: Microscopic
**PS** : You need a magnifying glass to read this one.
**Hint**: The text exists, but the font is just way too small.
**Implementation**: The flag container has `font-size: 0px`. They must increase it to something readable like `24px`.

**Name**: Off-Screen Excursion
**PS** : The flag has left the building. Bring it back to the center.
**Hint**: The element is pushed way out of the visible screen area using absolute positioning.
**Implementation**: Style the container with `position: absolute; left: -9999px`. They must reset it to `left: 50%` or `0`.

**Name**: Console Confession
**PS** : Not everything is meant for the main screen. Check the backend logs.
**Hint**: Where do developers print debugging messages in a browser? Press F12.
**Implementation**: A linked JavaScript file runs `console.log("Flag: TERMINAL_77")` on load. They must open the browser's developer tools to read it.

**Name**: Hover Hack
**PS** : The answer will only reveal itself when you point exactly at it.
**Hint**: The text changes color when your mouse is over it. Check the **ps**eudo-classes in CSS.
**Implementation**: Text is transparent by default but has a `:hover` CSS state that sets `color: red`. They can hover over the blank space in the preview or just read the CSS file.

**Name**: The Disabled Button
**PS** : The system locked the button. You need administrative override to click it.
**Hint**: Look at the button tag in the HTML. Why is it unclickable?
**Implementation**: A button says "Reveal Flag" but has the `disabled` attribute in HTML. They must delete the attribute in the code and click the button in the preview to trigger a `window.alert('FLAG_UNLOCKED')`.

**Name**: Buried Treasure
**PS** : The secret is buried in a hidden input field meant for the server.
**Hint**: HTML forms sometimes hold invisible data. Look for an input type that isn't meant to be seen.
**Implementation**: The HTML contains `<input type="hidden" value="INDORE_MP">`. They must change it to `type="text"` to see it, or just copy the value from the code.

**Name**: Claustrophobia
**PS** : The box is way too small to fit the entire message.
**Hint**: The text is overflowing the box, but the box is hiding the extra content. Check the CSS overflow rules.
**Implementation**: A `10px` by `10px` box has `overflow: hidden`, hiding a paragraph containing the flag. They must remove the rule or increase the height/width.

**Name**: Fog Glasses
**PS** : Everything is just a little too blurry to read.
**Hint**: There is a CSS filter applied to the whole page.
**Implementation**: The `<body>` tag has `filter: blur(20px)`. They must set the blur to `0px`.

**Name**: Contrast Clash
**PS** : You are staring right at it, but the colors are too similar.
**Hint**: The text color and background color are almost identical.
**Implementation**: Text is `#222222` and background is `#222223`. They must tweak the hex codes to separate them.

**Name**: Pseudo-Hiding
**PS** : The HTML is completely empty, yet the text is on the screen. How?
**Hint**: CSS can inject content directly into the page. Look for '::before' or '::after'.
**Implementation**: The HTML has an empty `<div>`, but the CSS has `div::after { content: "FLAG_CSS_MAGIC"; }`. They must spot it in the stylesheet.

## Medium (400 Coins)

**Name**: Flexbox Jumble
**PS** : The letters are all mixed up. Put them back in order.
**Hint**: The container uses Flexbox. Look at how the 'order' property is rearranging the HTML spans.
**Implementation**: Five `<span>` elements contain the letters of the flag. They are styled with flexbox, but their `order:` properties are scrambled (e.g., first letter has `order: 5`). They must fix the numbering in CSS to spell the flag.

**Name**: Rotated Reality
**PS** : You might need to stand on your head for this one.
**Hint**: The text container has been flipped and rotated using CSS transforms.
**Implementation**: The text is upside down and backwards using `transform: rotate(180deg) scaleX(-1)`. They must delete or reset the transform property.

**Name**: The Annoying Poha Plate
**PS** : A giant plate of Poha is blocking your view and kee**ps** following your cursor!
**Hint**: The image is tracking your mouse via JavaScript. Stop the script or delete the image tag.
**Implementation**: An image follows the cursor using a JS `mousemove` event, blocking a fixed text element underneath. They must delete the image from HTML or clear the JS file.

**Name**: Margin Mess
**PS** : All the characters collapsed into a single black dot.
**Hint**: The elements have wild negative margins pulling them into each other.
**Implementation**: The letters of the flag are in separate spans with wild margins (e.g., `margin-left: -150px`). They must reset all margins to `0` in the CSS.

**Name**: Speed Reader
**PS** : The text is flying by way too fast to read. Slow it down.
**Hint**: Check the CSS animation properties. The duration is set way too low.
**Implementation**: A CSS marquee animation moves the text across the screen in `0.05s`. They must change `animation-duration` to `5s` or remove the animation entirely.

**Name**: LocalStorage Loot
**PS** : We dropped a package in your browser's local warehouse.
**Hint**: Browsers can store data locally. Check the Application/Storage tab in your developer tools.
**Implementation**: The JS file silently runs `localStorage.setItem('secret_flag', 'IDEA_HACK_99')` on load. They must open DevTools -> Application -> Local Storage to find it.

**Name**: The Short Input
**PS** : The system asks for a password, but the input box won't let you type enough characters.
**Hint**: The HTML input element has a restriction on how many characters you can type.
**Implementation**: An input says "Type 'SGSITS_WINNER' to reveal", but has `maxlength="4"`. They must change the max length in HTML, type the phrase, and hit enter.

**Name**: Class Toggle Chaos
**PS** : There is way too much noise. Filter out the fakes.
**Hint**: There are 100 span tags, but only the ones with the class '.real' matter. Hide the rest using CSS.
**Implementation**: The HTML contains 100 random span tags with gibberish. The actual flag characters are scattered in spans with `class="real"`. They must write `.fake { display: none; }` to reveal the word.

**Name**: The SVG Mask
**PS** : Half of the text has been sliced off by a vector shape.
**Hint**: Look for a CSS clip-path or SVG mask property applied to the text container.
**Implementation**: A complex SVG path is acting as a `<clipPath>` in the HTML, cutting off the middle of the text horizontally. They must delete the clip path ID reference from the CSS.

**Name**: Blend Mode Magic
**PS** : The text is camouflaged perfectly into the background pattern.
**Hint**: The text uses a blend mode that makes it merge with the colors behind it.
**Implementation**: Black text is placed over a black-and-white patterned background with `mix-blend-mode: multiply`. They must change it to `normal` or remove the background image.

## Hard (700 Coins)

**Name**: The Puzzled Canvas
**PS** : The artwork is completely dark. Bring some color to the shapes to see the hidden message.
**Hint**: The shapes are drawn using the HTML5 Canvas API in JavaScript. All the fill styles are set to black (#000000). Change them.
**Implementation**: A `<canvas>` element uses JS to draw overlapping colored rectangles. The negative space spells a 4-letter flag. The `ctx.fillStyle` values in the JS tab are all `#000000`. They must edit the JS to use contrasting colors.

**Name**: Keypress Konami
**PS** : Execute the secret sequence to unlock the vault.
**Hint**: The JavaScript is listening for a specific combination of arrow keys. Read the logic to find the sequence.
**Implementation**: JS listens for a specific array of keycodes (e.g., Up, Up, Down, Left). They must read the keycodes in the JS file, click the preview, and press the sequence on their keyboard to trigger an alert with the flag.

**Name**: CSS Grid Labyrinth
**PS** : The path is there, but the tiles aren't glowing. Light them up.
**Hint**: A specific CSS class is assigned to certain grid cells via JS, but that class has no styling in the CSS file.
**Implementation**: A 10x10 HTML grid contains random letters. JS applies a `.path` class to specific cells that spell the flag, but `.path` is empty in the CSS file. They must add `.path { background-color: yellow; }` to see the highlighted letters.

**Name**: The Split Cookie
**PS** : The key was snapped in half. One piece is in the jar, the other is in your current session.
**Hint**: Check both the browser Cookies and Session Storage in your developer tools.
**Implementation**: Half the flag is stored as a document Cookie, the other half is generated dynamically in `sessionStorage`. They must check both storage locations in DevTools and manually combine the strings.

**Name**: Event Listener Trap
**PS** : The system has locked down your controls. No right-clicking, no selecting, no inspecting. Break the lock.
**Hint**: JavaScript is hijacking your mouse and keyboard events using preventDefault(). Delete the event listeners.
**Implementation**: Right-click, `F12`, and text selection are disabled via JS `preventDefault()` on the `window` object. The flag is in the DOM but unselectable. They must delete the event listeners in the Code tab, let the preview refresh, and then inspect or copy the hidden text.

