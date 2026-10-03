### 25 Easy Problems (150 Coins)

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

**Name**: Flexbox Centering Crisis
**PS** : The confidential code has drifted off into the digital void due to a flexbox layout catastrophe. Realign the container so the contents land dead center.
**Hint**: Inspect the .vault-container in styles.css. The flex properties push elements to flex-end and apply a large translation offset.
**Implementation**: HTML houses the secret code inside `.vault-container` (hidden from Monaco). In `/styles.css`, `.vault-container` has `justify-content: flex-end`, `align-items: flex-end`, and `transform: translateX(120vw)`. The user changes these to `justify-content: center`, `align-items: center`, and removes the transform to bring the secret code into the center of the viewport.

**Name**: Grid Column Overlap
**PS** : A heavy metal shutter has locked into the exact same CSS grid coordinate as our security badge. Reconfigure the grid columns to reveal the badge.
**Hint**: In styles.css, both .keycard and .shutter occupy grid-column 1 and grid-row 1. Relocate the shutter or hide it.
**Implementation**: The grid board places both `.keycard` and `.shutter` in grid cell (1, 1). The user edits `/styles.css` to move `.shutter` to `grid-column: 2` or sets `display: none` on `.shutter` to uncover the keycard.

**Name**: The Inverted Opacity
**PS** : The mainframe rendered the decryption token, but zero opacity has masked it into total invisibility. Bring the token back to light.
**Hint**: Locate .token-text in styles.css and adjust its opacity property from 0 to 1.
**Implementation**: The `.token-text` element has `opacity: 0`. The user updates `opacity: 1` in `/styles.css` to make the token visible in the preview terminal.

**Name**: Collapsed Dimensions
**PS** : The safe drawer holding the verification passcode has its height and width clamped to zero with hidden overflow. Restore its natural proportions.
**Hint**: Check .safe-drawer in styles.css. Both width and height are 0px and overflow is hidden.
**Implementation**: The `.safe-drawer` container is collapsed with `width: 0px; height: 0px; overflow: hidden;`. The user expands the dimensions in `/styles.css` (e.g. `width: auto; height: auto;`) or sets `overflow: visible` to reveal the passcode.

**Name**: Attribute Sleuth
**PS** : A security badge carries a confidential credential in its data attribute, but nothing is drawn in the element body. Use CSS pseudo-elements with attr() to project the secret onto the screen.
**Hint**: In styles.css, add a ::before or ::after pseudo-element to .security-badge with content: attr(data-flag).
**Implementation**: The credential is held in HTML attribute `data-flag="..."`. The user writes `.security-badge::after { content: attr(data-flag); }` in `/styles.css` to render the attribute value onto the display.

**Name**: Visibility Hidden Trap
**PS** : The dossier entry preserves its physical space on screen, but CSS visibility: hidden is suppressing its render tree. Toggle the property.
**Hint**: In styles.css, change visibility: hidden to visibility: visible on .classified-line.
**Implementation**: The secret dispatch line is hidden via `visibility: hidden`. The student changes the rule in `/styles.css` to `visibility: visible` to expose the text.

**Name**: The Clipping Mask
**PS** : A razor-sharp clip-path polygon with 0px bounds has cropped out the credential banner entirely. Expand the polygon or cancel the clipping.
**Hint**: Set clip-path: none or clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) on .cred-banner in styles.css.
**Implementation**: The `.cred-banner` element has a zero-area polygon `clip-path: polygon(0 0, 0 0, 0 0)`. The student removes the clip-path or sets `clip-path: none` in `/styles.css` to reveal the banner.

**Name**: Scale to Zero
**PS** : The security console display text has been miniaturized to infinitesimal zero scale via CSS transforms. Enlarge it back to standard scale.
**Hint**: Find .console-output in styles.css and change transform: scale(0) to transform: scale(1).
**Implementation**: The `.console-output` text is shrunk using `transform: scale(0)`. Changing it to `transform: scale(1)` in `/styles.css` renders the output at normal reading size.

**Name**: Color Inversion Disguise
**PS** : The secret message was styled with transparent text against a transparent container. Assign a bold, vibrant foreground color to read it.
**Hint**: Change color: transparent to a visible color like #38bdf8 or white in styles.css.
**Implementation**: The `.hidden-glyph` element is styled with `color: transparent`. The user changes `color` to a high-contrast color (such as `#38bdf8` or `#ffffff`) in `/styles.css` to view the text.

**Name**: Flex Order Scramble
**PS** : The fragments of the keycard string have been jumbled across flexbox children using irregular order values. Sequence them 1 through 4.
**Hint**: Assign order: 1 to .seg-1, order: 2 to .seg-2, order: 3 to .seg-3, and order: 4 to .seg-4 in styles.css.
**Implementation**: Four HTML spans partition the keycard string. The CSS assigns scrambled `order` properties. The student updates the order indices in `/styles.css` sequentially (1 to 4) to reconstruct the string.


### 20 Medium Problems (400 Coins)

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

**Name**: Click Hijack Interceptor
**PS** : A malicious security handler is capturing click events on the authorization button and halting propagation before it reaches the voucher handler. Disarm the blocker.
**Hint**: Remove e.stopImmediatePropagation() and e.preventDefault() in script.js so the authorized listener in auth.js can execute.
**Implementation**: A capture phase listener in `/script.js` halts clicks on `#claim-btn`. The legitimate listener is in `/auth.js` (hidden). The student clears the blocking listener in `/script.js` and clicks the button in the preview pane to receive the voucher flag.

**Name**: Client-Side Regex Bypass
**PS** : The registration gate enforces a strict 3-character lowercase regex that rejects genuine clearance codes. Adjust the validation logic in script.js to trigger the authorization event.
**Hint**: Update script.js so window.dispatchEvent(new CustomEvent('authorized')) fires when the form is submitted with code 'BYPASS'.
**Implementation**: The form enforces `/^[a-z]{3}$/` on input value. The backend validator (`/validator.js`, hidden) listens for an `authorized` event. The user amends `/script.js` to accept uppercase input or dispatches the `authorized` event upon submit.

**Name**: LocalStorage Tamper Vault
**PS** : The gatekeeper script reads localStorage for the 'user_role' key. If it finds 'guest', access is forbidden. Tamper with localStorage in script.js to elevate role to 'admin'.
**Hint**: Set localStorage.setItem('user_role', 'admin') and call checkAccess() in script.js.
**Implementation**: The application verifies `localStorage.getItem('user_role')`. The student edits `/script.js` to execute `localStorage.setItem('user_role', 'admin')` and calls `checkAccess()` to trigger flag generation.

**Name**: SessionStorage Fragment Assembly
**PS** : The secure enclave verifies sessionStorage for an authorized debug override flag. Modify the session storage in script.js to unlock the payload.
**Hint**: Set sessionStorage.setItem('debug_override', 'true') and execute evaluateSession() in script.js.
**Implementation**: The vault checker in `/vault.js` checks `sessionStorage.getItem('debug_override') === 'true'`. The student sets the storage item to `'true'` and invokes `evaluateSession()` in `/script.js`.

**Name**: URL Hash Route Dispatcher
**PS** : A client-side hash router monitors window.location.hash for navigation events. Direct the router to '#admin_portal' to expose the administrative view.
**Hint**: Set window.location.hash = '#admin_portal' or trigger a hashchange event with that hash in script.js.
**Implementation**: The SPA router monitors hash updates. In `/script.js`, the student sets `window.location.hash = '#admin_portal'`, firing the route change listener that exposes the admin portal flag.

**Name**: Disabled Input Override
**PS** : The PIN verification interface has disabled the input element and set maxlength to 2, blocking entry of the four-digit passcode '7701'. Strip the constraints and submit.
**Hint**: In script.js, remove the disabled and readonly attributes from #pin-field, set its value to '7701', and click #submit-pin.
**Implementation**: The input element is constrained by `disabled`, `readonly`, and `maxlength="2"`. The student uses `/script.js` to remove attributes, sets value to `'7701'`, and triggers a click on `#submit-pin`.

**Name**: Custom Event Dispatcher
**PS** : The kernel message bus listens for a CustomEvent named 'kernel:unlock' bearing authorization key 'ALPHA_OMEGA'. Dispatch the event to breach the kernel.
**Hint**: Dispatch window.dispatchEvent(new CustomEvent('kernel:unlock', { detail: { authorizationKey: 'ALPHA_OMEGA' } })) in script.js.
**Implementation**: The kernel dispatcher (`/kernel.js`) waits for a specific `CustomEvent` with an auth key payload. The student writes and executes the event dispatch in `/script.js` to trigger the unlock.

**Name**: History State Navigator
**PS** : The browser session manager monitors popstate history transitions. Transition history state to { level: 'master' } to trigger administrative elevation.
**Hint**: Dispatch a PopStateEvent with state: { level: 'master' } or push state and invoke back() in script.js.
**Implementation**: The session manager listens on `window.onpopstate` for `state.level === 'master'`. The student triggers the navigation event with the required state payload via `/script.js`.

**Name**: Timer Hijack Race
**PS** : An auto-lock timer running on window.lockoutTimer disables the terminal button after 500ms. Abort the timeout using clearTimeout before clicking.
**Hint**: Call clearTimeout(window.lockoutTimer) and then document.getElementById('unlock-btn').click() in script.js.
**Implementation**: The system disables `#unlock-btn` after 500ms using `setTimeout`. In `/script.js`, the student clears `window.lockoutTimer` and immediately calls `.click()` on the button to claim the flag.

**Name**: Cookie Attribute Tampering
**PS** : The clearance gate verifies document.cookie for authorization credentials. Set cookie 'badge_tier=commander; path=/' and invoke verifyCookie() to pass.
**Hint**: In script.js, assign document.cookie = 'badge_tier=commander; path=/'; and call verifyCookie().
**Implementation**: The gatekeeper inspects `document.cookie` for `'badge_tier=commander'`. The student sets the cookie string in `/script.js` and calls `verifyCookie()` to unlock the badge info.


### 15 Hard Problems (750 Coins)

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

**Name**: JWT None Algorithm Bypass
**PS** : The client token parser accepts tokens signed with algorithm 'none'. Craft an unsigned JWT with header {'alg':'none'} and payload role 'root' to authenticate.
**Hint**: Base64 encode header JSON {'alg':'none','typ':'JWT'} and payload {'user':'admin','role':'root'}, join with a dot, add a trailing dot, and pass to verifyJWT(token).
**Implementation**: A client-side JWT parser in `/jwt_verifier.js` fails to enforce HMAC or RSA signatures when `header.alg === 'none'`. The user crafts a base64 encoded token with `role: 'root'` and passes it to `verifyJWT()` in `/script.js`.

**Name**: Prototype Pollution Infiltration
**PS** : The configuration merge engine processes arbitrary JSON keys into prototype chains without filtering __proto__. Inject isAdmin into Object.prototype to escalate to root.
**Hint**: Invoke mergeConfig(JSON.parse('{"__proto__": {"isAdmin": True}}')) and then call authenticateUser() in script.js.
**Implementation**: The merge function in `/merge_engine.js` allows mutating `Object.prototype`. The student injects `{ "__proto__": { "isAdmin": True } }` via `/script.js`, causing newly created empty objects to inherit `isAdmin = true`.

**Name**: Iframe PostMessage Eavesdrop
**PS** : An isolated sub-frame periodically broadcasts classified telemetry via window.parent.postMessage with wildcard target origin. Set up a window message listener to capture the broadcast.
**Hint**: Listen to window.addEventListener('message', (e) => { ... }) and display e.data.secret inside #inbox.
**Implementation**: An iframe in `/frame.html` broadcasts messages using `window.parent.postMessage({ type: 'TELEMETRY', secret: '...' }, '*')`. The student registers a window message event listener in `/script.js` to intercept and print the secret.

**Name**: WebSocket Handshake Emulation
**PS** : A simulated real-time socket transport endpoint requires a strict initial handshake packet with protocol 'wss' and subprotocol 'idealab-v2'. Dispatch the handshake to open the channel.
**Hint**: Send { protocol: 'wss', subprotocol: 'idealab-v2', token: 'SESSION_INIT' } using window.mockSocket.send() in script.js.
**Implementation**: A mock WebSocket driver in `/mock_socket.js` requires specific subprotocol negotiation. The student invokes `window.mockSocket.send()` with protocol `'wss'`, subprotocol `'idealab-v2'`, and token `'SESSION_INIT'` in `/script.js`.

**Name**: CORS Preflight Simulation
**PS** : An internal API gateway simulates CORS origin validation. Submit an authorized simulated request with Origin 'https://admin.idealab.internal' to retrieve the secret.
**Hint**: Call mockFetch('/api/vault', { headers: { 'Origin': 'https://admin.idealab.internal', 'X-Requested-With': 'XMLHttpRequest' } }) in script.js.
**Implementation**: The client simulates cross-origin request headers against an internal API. In `/script.js`, the student configures request headers with `'Origin': 'https://admin.idealab.internal'` and `'X-Requested-With': 'XMLHttpRequest'` to pass CORS verification.

**Name**: DOM Clobbering Escalation
**PS** : The global script relies on window.systemConfig.apiUrl without prior declaration. Inject named DOM elements into index.html to clobber window.systemConfig with value 'trusted'.
**Hint**: Inject <form id='systemConfig'><input name='apiUrl' value='trusted'></form> into the DOM or configure script.js to set it before checkConfig() runs.
**Implementation**: The evaluation script reads `window.systemConfig.apiUrl.value`. The student creates a form `<form id="systemConfig"><input name="apiUrl" value="trusted"></form>` to clobber the global property.

**Name**: Service Worker Cache Tamper
**PS** : The offline service worker controller looks up the cache entry at '/offline/key'. Pre-populate the cache mock with 'OFFLINE_AUTHORIZED' to bypass the network barrier.
**Hint**: Invoke window.mockCaches.put('/offline/key', 'OFFLINE_AUTHORIZED') and execute checkCache() in script.js.
**Implementation**: The client checks an offline CacheStorage entry `/offline/key`. The student calls `window.mockCaches.put('/offline/key', 'OFFLINE_AUTHORIZED')` and `checkCache()` via `/script.js` to satisfy the offline check.

**Name**: MutationObserver Leak Intercept
**PS** : An ephemeral injection routine inserts an element containing classified data and removes it within 10ms. Deploy a MutationObserver on document.body to intercept the fleeting node.
**Hint**: Instantiate a MutationObserver observing document.body with childList: True, and capture the text of any node with id 'ephemeral-secret'.
**Implementation**: A background script injects and immediately removes `#ephemeral-secret` within 10ms. The student configures a `MutationObserver` on `document.body` in `/script.js` to synchronously capture `addedNodes` before destruction.

**Name**: Web Worker Channel Hijack
**PS** : The background computing worker instance expects a command 'DISPATCH_KEY' with clearance level 9. Post the command message to the worker to receive the flag.
**Hint**: Execute window.mockWorker.postMessage({ cmd: 'DISPATCH_KEY', clearance: 9 }) in script.js.
**Implementation**: A mock web worker processes asynchronous commands via `postMessage()`. The student writes code in `/script.js` posting `{ cmd: 'DISPATCH_KEY', clearance: 9 }` to `window.mockWorker` to obtain the clearance response.

**Name**: CSS Keyframe Exfiltration
**PS** : A CSS keyframe animation named 'pulse' triggers animation events carrying secret data in the beacon target. Listen for the 'animationstart' event to exfiltrate the secret.
**Hint**: Add an event listener for 'animationstart' and read e.target.getAttribute('data-secret') when e.animationName is 'pulse'.
**Implementation**: CSS `@keyframes pulse` drives a beacon animation on `.pulse-beacon` which carries `data-secret`. The user listens for `animationstart` in `/script.js` and reads the target attribute to display the keyframe flag.

