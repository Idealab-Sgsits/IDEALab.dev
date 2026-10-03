**Section 6: Maker's Sandbox**.

We are splitting the environment across three simulated modes:

1. **JSON Config Tweaking:** (No coding, just changing variables like a game engine or 3D printer profile).
2. **API Intercept:** (A mock Postman UI where they edit JSON payloads to hack IoT devices).
3. **MicroPython Logic:** (Basic scripting to filter sensor data or control hardware).

### 15 Easy Problems (150 Coins)

*Focus: Zero coding. They edit JSON configuration files or API payloads and hit "Run" to see the visual SVG/Canvas output change on the right screen.*

**Name:** Hardware: RGB Calibrator
**PS:** Directive: The smart LED is outputting white light. Edit the JSON configuration to make it emit pure Red.
**Hint:** In RGB (Red, Green, Blue) logic, max brightness is 255 and minimum is 0.
**Implementation:** Left pane is a JSON editor with `{"R": 255, "G": 255, "B": 255}`. Right pane is an SVG glowing bulb. They set G and B to 0.

**Name:** Fabrication: Z-Offset Crash
**PS:** Directive: The 3D printer nozzle is going to crash into the bed! Change the `z_offset_mm` variable in the machine config to a safe 0.2mm distance.
**Hint:** Look for the variable named `z_offset_mm` in the JSON file and change its value.
**Implementation:** Left pane is JSON. Right pane is an SVG of a printer nozzle hitting a bed. Updating it moves the nozzle up and reveals the flag.

**Name:** IoT: The Smart Lock
**PS:** Directive: The lab door requires a digital payload to open. Intercept the API request and change the lock state.
**Hint:** Change the `"locked"` variable from `true` to `false`.
**Implementation:** Left pane is a mock Postman payload. Right pane is an SVG padlock that visually pops open to reveal the flag.

**Name:** Physics: Cannon Calibration
**PS:** Directive: Our projectile keeps falling short of the target. Increase the `launch_velocity` in the physics config so it hits the target exactly 100 meters away.
**Hint:** Double the current velocity.
**Implementation:** Right pane renders an HTML5 canvas ball trajectory. Tweaking the JSON makes the arc stretch further.

**Name:** Hardware: Servo Unlock
**PS:** Directive: The mechanical safe is controlled by a servo motor. It needs to rotate exactly a half-circle to unlock. Update the JSON angle.
**Hint:** A full circle is 360 degrees. A half-circle is 180.
**Implementation:** Right pane shows an SVG servo arm. Setting `{"angle": 180}` rotates the arm and drops the flag.

**Name:** Fabrication: Laser Power
**PS:** Directive: The CO2 laser is just scratching the acrylic. It needs maximum power to cut through. Update the configuration.
**Hint:** Set `"power_percent"` to 100.
**Implementation:** JSON tweak. SVG laser beam changes from thin/gray to thick/red.

**Name:** IoT: RFID Spoof
**PS:** Directive: The RFID scanner only lets the Admin in. Change the `"uid"` in your intercepted payload to match the Admin's Hex ID: `0x4A`.
**Hint:** Replace your user ID string with `"0x4A"` in the JSON body.
**Implementation:** API payload edit. Right pane shows an "Access Granted" terminal message.

**Name:** Physics: Drone Hover
**PS:** Directive: The quadcopter weighs 450 grams. It is currently falling out of the sky. Balance the physics engine so it hovers perfectly in place.
**Hint:** To hover, `"upward_thrust_g"` must exactly equal the weight of the drone.
**Implementation:** JSON tweak. Right pane shows a Canvas drone stabilizing in mid-air.

**Name:** Hardware: LCD Backlight
**PS:** Directive: The LCD screen is working but the backlight is off, so we can't read the flag. Turn the PWM signal to maximum.
**Hint:** Set `"backlight_pwm"` to 255.
**Implementation:** JSON tweak. Right pane shows a dark SVG screen that lights up to reveal text.

**Name:** Fabrication: G-Code Square
**PS:** Directive: The CNC machine is drawing a 10x10 square but the last coordinate is wrong. Fix the JSON path array so it returns to the origin (0,0).
**Hint:** The path goes (0,0) -> (10,0) -> (10,10) -> (0,10) -> (X,Y). The final point must close the shape.
**Implementation:** Left pane has an array of coordinates. Right pane draws the path.

**Name:** Hardware: Conveyor Belt
**PS:** Directive: The IdeaLab assembly line is running backwards! Reverse the motor polarity in the config.
**Hint:** Change `"motor_direction"` from `"CCW"` (Counter-Clockwise) to `"CW"` (Clockwise).
**Implementation:** JSON tweak. SVG gears switch rotation direction.

**Name:** IoT: Climate Control
**PS:** Directive: The AC API expects the target temperature in Celsius, but it is currently receiving a Fahrenheit value (98). Send a comfortable 24 degrees Celsius.
**Hint:** Update `"unit": "C"` and `"target_temp": 24` in the payload.
**Implementation:** API payload edit. Right pane SVG thermometer drops to the blue zone.

**Name:** Physics: Bouncy Ball
**PS:** Directive: The ball hits the ground and stops dead. Edit the material properties so it retains 100% of its energy when it bounces.
**Hint:** Set the `"restitution"` (bounciness) variable to 1.0.
**Implementation:** JSON tweak. Canvas ball starts bouncing endlessly.

**Name:** Hardware: NeoPixel Array
**PS:** Directive: We have a strip of 8 smart LEDs. Turn on the very last LED in the array to reveal the flag color.
**Hint:** Arrays are zero-indexed. The 8th LED is at `"index": 7`. Set its `"state"` to `"ON"`.
**Implementation:** JSON edit. SVG LED strip lights up the final bulb.

**Name:** Hardware: Buzzer Frequency
**PS:** Directive: The piezo buzzer is emitting a terrible screech. Tune it to the standard concert 'A' note frequency (440 Hz).
**Hint:** Set `"frequency_hz": 440`.
**Implementation:** JSON edit. Visual soundwaves change on the right pane.

### 10 Medium Problems (400 Coins)

*Focus: MicroPython scripts and basic logical loops. They write short scripts to process simulated hardware data.*

**Name:** Hardware: LDR Nightlight
**PS:** Directive: You have a list of analog light sensor readings (0-1023). Write a script to count how many times the light level dropped strictly below 100 (indicating complete darkness).
**Hint:** Loop through the pre-loaded `ldr_data` list. Use an `if` statement and a counter variable.
**Implementation:** Left pane Python editor. They process the sensor data array to get an integer.

**Name:** Fabrication: Step Calculator
**PS:** Directive: A stepper motor requires 200 steps for one full revolution. Calculate exactly how many steps are needed to rotate the motor 7.25 revolutions.
**Hint:** Multiply revolutions by steps-per-revolution. Print the answer.
**Implementation:** Python script. Simple math logic.

**Name:** Hardware: Debounce the Button
**PS:** Directive: We recorded a button press as an array of 1s and 0s. However, there is electrical noise (a 1 surrounded by 0s). Write a script to find the length of the actual, true button press (continuous 1s).
**Hint:** Loop through the list. If you see a `1`, check if the next item is also a `1`.
**Implementation:** Pre-loaded list like `[0, 1, 0, 0, 1, 1, 1, 1, 0]`. They must extract the length of the solid block (4).

**Name:** Physics: Gravity Drop
**PS:** Directive: An object is dropped from a height of 500 meters. Using the formula `time = sqrt((2 * height) / 9.8)`, calculate how many seconds it takes to hit the ground.
**Hint:** We pre-imported `math`. Use `math.sqrt()` to calculate the formula and print the result.
**Implementation:** Python editor. They write the physics formula.

**Name:** IoT: API Rate Limit
**PS:** Directive: The server allows a maximum of 5 requests per second. You have an array of 20 payload strings. Write a loop that processes exactly 5 items, then prints "SLEEP".
**Hint:** Loop with a counter. Use the modulo operator `if counter % 5 == 0: print("SLEEP")`.
**Implementation:** Python scripting a rate-limiter logic.

**Name:** Hardware: Ultrasonic Distance
**PS:** Directive: The HC-SR04 sensor ping took 1500 microseconds to travel to the object and back. Convert this time to distance in centimeters. (Speed of sound = 0.0343 cm/us).
**Hint:** The sound travels there and back! Formula: `Distance = (Time / 2) * 0.0343`.
**Implementation:** Python math calculation.

**Name:** Fabrication: Laser Raster Time
**PS:** Directive: The CO2 laser is engraving an image represented by a 2D array of 1s (burn) and 0s (skip). Each 1 takes 0.5 seconds to burn. Calculate the total time to engrave the matrix.
**Hint:** Use a nested `for` loop (loop through rows, then loop through pixels). Count the 1s and multiply by 0.5.
**Implementation:** Pre-loaded 2D array. Nested loop logic.

**Name:** Physics: PID Controller (P-Term)
**PS:** Directive: The drone is tilting! The current Error is 12.5 degrees. If our Proportional Gain (Kp) is set to 2.0, calculate the necessary Motor Correction speed.
**Hint:** The P-term formula is simply: `Correction = Error * Kp`.
**Implementation:** Simple Python math for a control systems concept.

**Name:** IoT: I2C Scanner
**PS:** Directive: We scanned the hardware bus and found a list of hexadecimal addresses. The standard OLED screen sits at address `0x3C`. Convert `0x3C` to decimal (base 10) in Python to find its ID.
**Hint:** In Python, you can print a hex number's decimal value by just passing it to `int()`.
**Implementation:** They execute `print(int("0x3C", 16))` or just `print(0x3C)`.

**Name:** Fabrication: Filament Length
**PS:** Directive: The 3D printer draws a straight line from X=0 to X=150, then from X=150 to X=200. Calculate the total absolute distance traveled.
**Hint:** Calculate the distance of the first move, then add the distance of the second move.
**Implementation:** Basic 1D distance geometry.

### 5 Hard Problems (750 Coins)

*Focus: Processing noisy data, multi-step logic, and extracting signals from hardware simulations.*

**Name:** Hardware: Moving Average Filter
**PS:** Directive: The pre-loaded `temp_sensor` array contains 1,000 readings, but it suffers from extreme electrical noise. Write a script to calculate the average of the first 10 readings to find the true baseline temperature.
**Hint:** Slice the first 10 items of the list using `temp_sensor[:10]`. Then `sum()` them and divide by 10.
**Implementation:** Python editor. DSP (Digital Signal Processing) fundamentals without the heavy math.

**Name:** IoT: Checksum Bypass
**PS:** Directive: The secure server rejects our JSON payload because the checksum is missing. The checksum is calculated as: `(Value A + Value B) % 256`. Calculate and print the required checksum if A=1050 and B=3422.
**Hint:** Add the two numbers together, then use the modulo operator `% 256`.
**Implementation:** Python scripting a networking packet checksum.

**Name:** Fabrication: Bounding Box
**PS:** Directive: You have a list of X-coordinates and a list of Y-coordinates for a custom PCB shape. Find the area of the smallest rectangular bounding box that can completely enclose the shape.
**Hint:** Find the `max()` and `min()` of the X array to get the Width. Do the same for the Y array to get the Height. Then Width * Height.
**Implementation:** Python arrays and geometry processing.

**Name:** Physics: Trajectory Optimization
**PS:** Directive: The ball must clear a 10-meter wall. The current height over time is given by the formula `h = -5*(t**2) + 20*t`. Write a loop to check time `t` from 0 to 4. What is the absolute maximum height reached?
**Hint:** Create a variable `max_h = 0`. Loop `t` from 0 to 4, calculate `h`, and if `h > max_h`, update it.
**Implementation:** Python logic loop evaluating a kinematic equation over time.

**Name:** Hardware: The Logic Analyzer
**PS:** Directive: We hooked a logic analyzer to a digital pin. The array `signal` contains 10,000 samples. A "HIGH" pulse is represented by a sequence of exactly five `1`s in a row. Count how many valid HIGH pulses were transmitted.
**Hint:** Convert the list into a string using `"".join(map(str, signal))`. Then use the `.count("11111")` string method!
**Implementation:** Pre-loaded massive array. Tests their ability to manipulate lists into strings for fast pattern recognition.