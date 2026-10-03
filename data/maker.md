**Section 6: Maker's Sandbox**.

We are splitting the environment across three simulated modes:

1. **JSON Config Tweaking:** (No coding, just changing variables like a game engine or 3D printer profile).
2. **API Intercept:** (A mock Postman UI where they edit JSON payloads to hack IoT devices).
3. **MicroPython Logic:** (Basic scripting to filter sensor data or control hardware).

### 25 Easy Problems (150 Coins)

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


**Name:** Hardware: Stepper Microstepping
**PS:** Directive: The CNC router stepper driver is vibrating roughly in full-step mode. Change the 'microsteps' setting in the motor config to 16 for smooth motion.
**Hint:** Change "microsteps" from 1 to 16 in the JSON file.
**Implementation:** Left pane is JSON motor config. Right pane is an SVG stepper motor. Setting "microsteps" to 16 dampens resonance and reveals the flag.

**Name:** IoT: MQTT Broker Topic
**PS:** Directive: The temperature telemetry is published to the wrong MQTT topic. Intercept the publishing payload and redirect it to 'sensors/lab/temp'.
**Hint:** Update the "topic" string to "sensors/lab/temp".
**Implementation:** Left pane is an MQTT publish payload. Right pane is an SVG message broker diagram. Redirecting the topic routes telemetry and displays the flag.

**Name:** Fabrication: Hotend PID Target
**PS:** Directive: We are printing with PETG filament which requires a nozzle temperature of 240 C. The printer is currently configured for PLA (205 C). Update the nozzle target in the JSON profile.
**Hint:** Set "nozzle_temp_c" to 240.
**Implementation:** Left pane is a 3D printer material profile JSON. Right pane is an SVG hotend thermometer. Raising the nozzle temperature to 240 C enables extrusion.

**Name:** Physics: Resistor Voltage Divider
**PS:** Directive: The ADC pin can only accept up to 3.3V from a 5V supply. To get exactly 2.5V at the midpoint, set resistor 'r2_ohms' equal to 'r1_ohms' (10000 ohms).
**Hint:** Set "r2_ohms" to 10000 to balance the divider.
**Implementation:** Left pane is a voltage divider circuit config. Right pane is an SVG schematic. Matching R2 to R1 outputs exactly 2.5V and triggers the flag.

**Name:** Hardware: OLED Contrast Tuning
**PS:** Directive: The SSD1306 OLED display is too dim in bright room light. Increase the display contrast value from 30 to the maximum 255.
**Hint:** Set the "contrast" property to 255.
**Implementation:** Left pane is an I2C display register JSON. Right pane is an SVG OLED panel. Setting contrast to 255 brightens the screen to reveal the flag.

**Name:** IoT: Smart Relay Toggle
**PS:** Directive: The ventilation exhaust fan is turned off during laser cutting. Intercept the smart relay command payload and energize relay channel 2.
**Hint:** Change "state" from "OFF" to "ON".
**Implementation:** Left pane is a smart relay REST payload. Right pane is an SVG relay module. Switching the state to ON turns on the ventilation fan and outputs the flag.

**Name:** Fabrication: SLA Exposure Time
**PS:** Directive: The resin 3D printer prints brittle parts because bottom layers are under-cured. Increase 'bottom_layer_exposure_sec' from 8 to 35 seconds.
**Hint:** Change "bottom_layer_exposure_sec" to 35 in the slicer profile JSON.
**Implementation:** Left pane is an SLA resin slicer profile JSON. Right pane is an SVG resin vat. Increasing bottom exposure to 35 seconds cures the base and reveals the flag.

**Name:** Hardware: PWM Fan Curve
**PS:** Directive: The enclosure heatsink temperature is rising. Increase cooling fan 'duty_cycle_pct' to 85% to prevent thermal throttling.
**Hint:** Set "duty_cycle_pct" to 85.
**Implementation:** Left pane is a cooling fan PWM JSON config. Right pane is an SVG fan tachometer. Setting duty cycle to 85% speeds up the fan and drops the flag.

**Name:** IoT: BLE Beacon UUID
**PS:** Directive: The lab indoor-navigation beacon is broadcasting an unconfigured UUID. Intercept the configuration API call and set the UUID to 'IDEALAB-MAKER-BEACON'.
**Hint:** Replace the zeros in the "uuid" field with "IDEALAB-MAKER-BEACON".
**Implementation:** Left pane is a BLE beacon config payload. Right pane is an SVG beacon radar. Setting the UUID synchronizes the beacon and reveals the flag.

**Name:** Physics: Spring Damping Ratio
**PS:** Directive: The robotic suspension bounces uncontrollably when landing. In the physics simulator config, set the damping ratio 'zeta' to 1.0 (critically damped) to eliminate oscillation.
**Hint:** Set the "zeta" damping ratio to 1.0.
**Implementation:** Left pane is a suspension physics config JSON. Right pane is a Canvas landing gear simulation. Setting zeta to 1.0 damps oscillation and displays the flag.

### 20 Medium Problems (400 Coins)

*Focus: MicroPython scripts and basic logical loops. They write short scripts to process simulated hardware data.*

**Name:** Hardware: LDR Nightlight
**PS:** Directive: You have a list of analog light sensor readings (0-1023). Write a script to count how many times the light level dropped strictly below 100 (indicating complete darkness). Format the flag as `<count>_MAKER`.
**Hint:** Loop through the pre-loaded `ldr_data` list. Use an `if` statement and a counter variable, then print `<count>_MAKER`.
**Implementation:** Left pane Python editor. They process the sensor data array to get the formatted flag.

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


**Name:** Hardware: PIR Motion Edge Counter
**PS:** Directive: The 'pir_samples' array records digital motion sensor levels sampled every 50ms (0 = still, 1 = motion). Count the total number of rising edges (transitions from 0 to 1).
**Hint:** Loop through pir_samples from index 1. If sample is 1 and previous sample was 0, increment counter.
**Implementation:** Python script processes digital motion samples to count rising edges (0 to 1 transitions).

**Name:** Hardware: PWM Duty Cycle Mapper
**PS:** Directive: MicroPython's 16-bit PWM timer accepts duty values from 0 to 65535. Given a desired LED brightness percentage of 72.5%, calculate the integer 16-bit duty value (rounded to nearest integer).
**Hint:** Formula: duty_u16 = round(65535 * (target_pct / 100.0)). Print the integer value.
**Implementation:** Python script converts percentage brightness to a 16-bit integer PWM timer value (0-65535).

**Name:** IoT: UART NMEA Packet Parser
**PS:** Directive: The GPS module transmits NMEA sentences over UART. From the preloaded raw stream 'uart_buffer', extract all sentences starting with '$GPGGA' and count how many valid checksums are terminated with '*'.
**Hint:** Split uart_buffer into lines. Count lines where line.startswith('$GPGGA') and '*' in line.
**Implementation:** Python script filters UART NMEA sentences starting with $GPGGA and verifies asterisks.

**Name:** Hardware: Temperature Threshold Filter
**PS:** Directive: The analog temperature probe 'adc_readings' holds 500 samples in millivolts. Convert mV to Celsius using 'temp_c = (mv - 500) / 10'. Count how many readings indicate an overheating condition above 45.0 C.
**Hint:** Count readings where mv > 950, which corresponds to temp_c > 45.0.
**Implementation:** Python script converts raw millivolts to Celsius and counts overheating threshold breaches.

**Name:** Fabrication: Extruder E-Steps Calibration
**PS:** Directive: We requested the 3D printer to extrude 100mm of filament, but measuring with calipers showed only 93.2mm was actually fed. Given the current E-steps value of 93.0 steps/mm, calculate the new calibrated E-steps value using 'new_e = current_e * (requested / actual)'. Round to 2 decimal places.
**Hint:** Use round(current_e * (requested_mm / actual_mm), 2). Print the float.
**Implementation:** Python script applies extrusion calibration formula to recalculate accurate 3D printer E-steps.

**Name:** IoT: Modbus RTU CRC16 Verification
**PS:** Directive: An industrial power meter returns Modbus frame bytes 'frame = [0x01, 0x03, 0x00, 0x00, 0x00, 0x0A]'. Implement the standard Modbus CRC-16 algorithm (polynomial 0xA001, initial 0xFFFF) over 'frame' and print the calculated 16-bit CRC in uppercase hexadecimal without 0x prefix.
**Hint:** Initialize crc = 0xFFFF. For each byte, crc ^= byte, then 8 times: if crc & 1: crc = (crc >> 1) ^ 0xA001 else crc >>= 1.
**Implementation:** Python script implements the Modbus RTU CRC16 checksum algorithm over serial frame bytes.

**Name:** Hardware: Ultrasonic Median Window Filter
**PS:** Directive: Ultrasonic distance sensors frequently suffer from acoustic multipath spikes. In the 'ping_distances' list, apply a 3-sample sliding median filter to smooth the values. Count how many anomalous raw readings differed from their median-filtered value by more than 15 cm.
**Hint:** For window w = sorted(ping_distances[i-1:i+2]), median is w[1]. Check if abs(ping_distances[i] - median) > 15.
**Implementation:** Python script applies a 3-point sliding median filter to eliminate ultrasonic multipath spikes.

**Name:** Physics: Rotary Encoder Quadrature State Machine
**PS:** Directive: A rotary encoder produces two digital channels (A, B). The preloaded list 'transitions' contains tuples of consecutive 2-bit states (prev_state, curr_state) where state = (A << 1) | B. CW rotation transitions are (0,1), (1,3), (3,2), (2,0) (+1 tick) while CCW transitions are (0,2), (2,3), (3,1), (1,0) (-1 tick). Compute the net encoder position starting from 0.
**Hint:** Define sets cw = {(0,1), (1,3), (3,2), (2,0)} and ccw = {(0,2), (2,3), (3,1), (1,0)}. Add 1 for CW, subtract 1 for CCW.
**Implementation:** Python script implements a 2-bit quadrature state machine to compute net rotary encoder rotation.

**Name:** IoT: CoAP Packet Header Extraction
**PS:** Directive: IoT smart meters use Constrained Application Protocol (CoAP). The byte list 'coap_header' contains the 4-byte header: byte 0 is (Ver[2b] | Type[2b] | TKL[4b]), byte 1 is Code, and bytes 2-3 are Message ID. Extract and print the 16-bit Message ID as an integer.
**Hint:** Calculate msg_id = (coap_header[2] << 8) | coap_header[3].
**Implementation:** Python script parses binary CoAP packet headers and extracts the big-endian 16-bit message ID.

**Name:** Fabrication: CNC Rapid Traverse Time
**PS:** Directive: A CNC mill executes rapid G00 moves between points in 'toolpath_xy' (list of [x, y] coordinates in mm). Rapid traverse speed is 3000 mm/min. Calculate the total traverse time in seconds using Euclidean distance between consecutive points. Round to 2 decimal places.
**Hint:** Calculate sqrt((x2-x1)**2 + (y2-y1)**2) for each segment. Sum and divide by (feed_rate_mm_min / 60.0).
**Implementation:** Python script computes Euclidean toolpath distances to calculate total CNC rapid traverse time.

### 15 Hard Problems (750 Coins)

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

**Name:** Hardware: 1D Kalman Filter Estimation
**PS:** Directive: A noisy barometer stream 'raw_pressure' (hPa) measures altitude. Implement a 1D scalar Kalman filter with process variance Q=0.01, measurement variance R=0.5, initial estimate x=1013.25, and initial error cov P=1.0. Process all samples in 'raw_pressure' and print the final filtered estimate rounded to 2 decimal places.
**Hint:** Update step: K = (P + Q) / (P + Q + R); x = x + K * (z - x); P = (1 - K) * (P + Q).
**Implementation:** Python script implements a scalar 1D Kalman filter to estimate true altitude from noisy pressure readings.

**Name:** Physics: PID Full Controller (PID Loop)
**PS:** Directive: Simulate a discrete PID motor velocity controller over 20 time steps (dt=0.05s). Setpoint is 100.0 RPM, starting from velocity 0.0 RPM. Constants: Kp=1.2, Ki=0.4, Kd=0.08. Velocity updates as 'vel += output * 0.1'. Calculate the final velocity after 20 iterations rounded to 2 decimal places.
**Hint:** For each step: error = setpoint - vel; integral += error * dt; derivative = (error - prev_error) / dt; output = kp*error + ki*integral + kd*derivative; vel += output * 0.1; prev_error = error.
**Implementation:** Python script implements a discrete PID control loop (Kp, Ki, Kd) to simulate motor velocity regulation.

**Name:** Hardware: Manchester Phase Encoding Decoder
**PS:** Directive: An RFID tag transmits data using IEEE 802.3 Manchester encoding, where bit '0' is represented by transition [LOW, HIGH] ([0, 1]) and bit '1' is represented by transition [HIGH, LOW] ([1, 0]). The list 'rfid_pulses' contains pairs of clock half-cycles. Decode the pulse train into an 8-bit binary string and convert it to its decimal integer value.
**Hint:** Iterate through rfid_pulses in steps of 2: pair = rfid_pulses[i:i+2]. If pair == [0, 1] bit is '0', if [1, 0] bit is '1'. Convert int(bits, 2).
**Implementation:** Python script decodes Manchester phase-encoded RFID pulses into binary data and converts to decimal.

**Name:** IoT: I2C Accelerometer Two's Complement
**PS:** Directive: An MPU6050 accelerometer returns acceleration on register 0x3B-0x3C as two bytes: high byte 0xFE and low byte 0x12. Combine them into a 16-bit signed integer using two's complement. If sensitivity scale factor is 16384 LSB/g, calculate acceleration in 'g' rounded to 3 decimal places.
**Hint:** val = (reg_high << 8) | reg_low; if val >= 0x8000: val -= 0x10000. Then val / sensitivity.
**Implementation:** Python script parses 16-bit two's complement accelerometer registers and converts to gravitational acceleration.

**Name:** Hardware: SPI Flash JEDEC ID Decoder
**PS:** Directive: A simulated SPI flash chip responds to command 0x9F (Read JEDEC ID) with 3 bytes: Manufacturer ID (0xEF for Winbond), Memory Type (0x40), and Capacity (0x18). Capacity code represents 2^Capacity bytes (e.g. 0x18 = 24 -> 2^24 bytes = 16 MB). The list 'spi_rx_stream' contains raw MISO bytes from a bus analyzer. Find the first occurrence of sequence starting with 0xEF, 0x40 and extract the capacity byte, then print flash capacity in Megabytes (MB).
**Hint:** Search for i where spi_rx_stream[i] == 0xEF and spi_rx_stream[i+1] == 0x40. Take spi_rx_stream[i+2] as cap_code. (2**cap_code) // (1024*1024).
**Implementation:** Python script parses SPI bus MISO bytes to detect JEDEC manufacturer ID and calculate flash memory capacity.

**Name:** Fabrication: Bresenham Line Drawing Steps
**PS:** Directive: A 2D pen plotter uses Bresenham's line algorithm to step from (0, 0) to (180, 75). Implement Bresenham's algorithm and count the total number of diagonal steps taken (where both X and Y increment simultaneously).
**Hint:** When stepping along the primary axis X, if the error accumulator causes Y to increment, that step is diagonal.
**Implementation:** Python script implements Bresenham's line algorithm to calculate simultaneous diagonal stepper motor steps.

**Name:** Hardware: Exponential Moving Average (EMA)
**PS:** Directive: A load cell weight sensor stream 'raw_grams' suffers from high-frequency vibrations. Implement an Exponential Moving Average (EMA) filter: 'ema = alpha * sample + (1 - alpha) * ema' with smoothing factor alpha=0.15 and initial ema equal to raw_grams[0]. Process all 50 samples in 'raw_grams' and print the final filtered weight rounded to 2 decimal places.
**Hint:** Initialize ema = raw_grams[0]. For sample in raw_grams[1:]: ema = 0.15 * sample + 0.85 * ema. Print round(ema, 2).
**Implementation:** Python script implements an Exponential Moving Average (EMA) IIR filter to remove load cell vibration noise.

**Name:** IoT: UART Serial Frame Parity Check
**PS:** Directive: A RS-485 telemetry bus transmits 9-bit UART frames formatted as (8 data bits, 1 even parity bit). The list 'uart_frames' contains 9-bit integers. A frame has valid even parity if the total count of 1s across all 9 bits is EVEN. Count how many frames in 'uart_frames' have parity errors (corrupted frames with an ODD number of 1s).
**Hint:** Count 1s in bin(frame). If count % 2 != 0, increment error counter.
**Implementation:** Python script verifies even parity on 9-bit serial telemetry frames to identify corrupted packets.

**Name:** Physics: FIR Low-Pass Filter Kernel
**PS:** Directive: Apply a 5-tap FIR low-pass filter kernel 'taps = [0.1, 0.2, 0.4, 0.2, 0.1]' over a noisy audio sensor signal 'audio_signal'. Perform discrete 1D convolution (valid mode, no padding). Find the maximum amplitude value in the resulting filtered signal, rounded to 2 decimal places.
**Hint:** For i in range(len(audio_signal) - len(taps) + 1): val = sum(taps[j] * audio_signal[i+j] for j in range(5)). Track max val.
**Implementation:** Python script computes discrete 1D convolution with a 5-tap FIR low-pass filter to find peak signal amplitude.

**Name:** Hardware: Logic Analyzer PWM Jitter Detection
**PS:** Directive: A digital logic analyzer sampled a 100 kHz PWM signal at 10 MHz (100 samples per period). The 'pwm_pulse_widths' list contains measured HIGH pulse durations in microseconds for 500 consecutive cycles. Nominal width is 45.0 us. Peak-to-peak jitter is defined as 'max(pwm_pulse_widths) - min(pwm_pulse_widths)'. Calculate the jitter in nanoseconds (1 us = 1000 ns).
**Hint:** Calculate (max(pwm_pulse_widths) - min(pwm_pulse_widths)) * 1000. Round to integer and print.
**Implementation:** Python script analyzes logic analyzer pulse widths to determine peak-to-peak PWM clock jitter in nanoseconds.

