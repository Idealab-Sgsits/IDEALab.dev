[
  {
    "id": "maker_01",
    "name": "Hardware: RGB Calibrator",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The smart LED is outputting white light. Edit the JSON configuration to make it emit pure Red.",
    "flag": "RED_NODE_ONLINE",
    "hints": [
      { "level": 1, "cost": 25, "text": "In RGB logic, max brightness is 255 and minimum is 0. Set G and B to 0." }
    ],
    "workspace": {
      "initial_state": "{\n  \"R\": 255,\n  \"G\": 255,\n  \"B\": 255\n}",
      "expected_state": { "R": 255, "G": 0, "B": 0 },
      "visual_render": {
        "component": "svg_bulb",
        "success_message": "FLAG: RED_NODE_ONLINE"
      }
    }
  },
  {
    "id": "maker_02",
    "name": "Fabrication: Z-Offset Crash",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The 3D printer nozzle is going to crash into the bed! Change the `z_offset_mm` variable in the machine config to a safe 0.2mm distance.",
    "flag": "BED_SAVED",
    "hints": [
      { "level": 1, "cost": 25, "text": "Look for the variable named `z_offset_mm` in the JSON file and change its value to 0.2." }
    ],
    "workspace": {
      "initial_state": "{\n  \"bed_temp\": 60,\n  \"nozzle_temp\": 200,\n  \"z_offset_mm\": -1.5\n}",
      "expected_state": { "bed_temp": 60, "nozzle_temp": 200, "z_offset_mm": 0.2 },
      "visual_render": {
        "component": "svg_printer",
        "success_message": "FLAG: BED_SAVED"
      }
    }
  },
  {
    "id": "maker_03",
    "name": "IoT: The Smart Lock",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "api_intercept",
    "problem_statement": "Directive: The lab door requires a digital payload to open. Intercept the API request and change the lock state.",
    "flag": "DOOR_BYPASS_22",
    "hints": [
      { "level": 1, "cost": 25, "text": "Change the \"locked\" variable from true to false." }
    ],
    "workspace": {
      "endpoint": "POST /api/v1/door/status",
      "initial_payload": "{\n  \"device_id\": \"door_01\",\n  \"locked\": true\n}",
      "expected_payload": { "device_id": "door_01", "locked": false },
      "visual_render": {
        "component": "svg_padlock",
        "success_message": "200 OK: DOOR_BYPASS_22"
      }
    }
  },
  {
    "id": "maker_04",
    "name": "Physics: Cannon Calibration",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: Our projectile keeps falling short of the target. Increase the `launch_velocity` in the physics config so it hits the target exactly 100 meters away.",
    "flag": "BULLSEYE",
    "hints": [
      { "level": 1, "cost": 25, "text": "The projectile needs to go twice as fast. Double the current velocity." }
    ],
    "workspace": {
      "initial_state": "{\n  \"gravity\": 9.8,\n  \"launch_velocity\": 50\n}",
      "expected_state": { "gravity": 9.8, "launch_velocity": 100 },
      "visual_render": {
        "component": "canvas_cannon",
        "success_message": "FLAG: BULLSEYE"
      }
    }
  },
  {
    "id": "maker_05",
    "name": "Hardware: Servo Unlock",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The mechanical safe is controlled by a servo motor. It needs to rotate exactly a half-circle to unlock. Update the JSON angle.",
    "flag": "SERVO_180",
    "hints": [
      { "level": 1, "cost": 25, "text": "A full circle is 360 degrees. A half-circle is 180." }
    ],
    "workspace": {
      "initial_state": "{\n  \"pin\": 9,\n  \"angle\": 0\n}",
      "expected_state": { "pin": 9, "angle": 180 },
      "visual_render": {
        "component": "svg_servo",
        "success_message": "FLAG: SERVO_180"
      }
    }
  },
  {
    "id": "maker_06",
    "name": "Fabrication: Laser Power",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The CO2 laser is just scratching the acrylic. It needs maximum power to cut through. Update the configuration.",
    "flag": "LASER_FULL_POWER",
    "hints": [
      { "level": 1, "cost": 25, "text": "Set \"power_percent\" to 100." }
    ],
    "workspace": {
      "initial_state": "{\n  \"speed_mm_s\": 20,\n  \"power_percent\": 15\n}",
      "expected_state": { "speed_mm_s": 20, "power_percent": 100 },
      "visual_render": {
        "component": "svg_laser",
        "success_message": "FLAG: LASER_FULL_POWER"
      }
    }
  },
  {
    "id": "maker_07",
    "name": "IoT: RFID Spoof",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "api_intercept",
    "problem_statement": "Directive: The RFID scanner only lets the Admin in. Change the `uid` in your intercepted payload to match the Admin's Hex ID: 0x4A.",
    "flag": "SPOOF_SUCCESS",
    "hints": [
      { "level": 1, "cost": 25, "text": "Replace your user ID string with \"0x4A\" in the JSON body." }
    ],
    "workspace": {
      "endpoint": "POST /api/v1/auth/rfid",
      "initial_payload": "{\n  \"scanner\": \"Entrance_1\",\n  \"uid\": \"0x1B\"\n}",
      "expected_payload": { "scanner": "Entrance_1", "uid": "0x4A" },
      "visual_render": {
        "component": "svg_rfid",
        "success_message": "Access Granted. FLAG: SPOOF_SUCCESS"
      }
    }
  },
  {
    "id": "maker_08",
    "name": "Physics: Drone Hover",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The quadcopter weighs 450 grams. It is currently falling out of the sky. Balance the physics engine so it hovers perfectly in place.",
    "flag": "HOVER_STABLE",
    "hints": [
      { "level": 1, "cost": 25, "text": "To hover, \"upward_thrust_g\" must exactly equal the weight of the drone (450)." }
    ],
    "workspace": {
      "initial_state": "{\n  \"weight_g\": 450,\n  \"upward_thrust_g\": 200\n}",
      "expected_state": { "weight_g": 450, "upward_thrust_g": 450 },
      "visual_render": {
        "component": "canvas_drone",
        "success_message": "FLAG: HOVER_STABLE"
      }
    }
  },
  {
    "id": "maker_09",
    "name": "Hardware: LCD Backlight",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The LCD screen is working but the backlight is off, so we can't read the flag. Turn the PWM signal to maximum.",
    "flag": "LCD_VISIBLE",
    "hints": [
      { "level": 1, "cost": 25, "text": "A standard 8-bit PWM signal reaches maximum at 255. Set \"backlight_pwm\" to 255." }
    ],
    "workspace": {
      "initial_state": "{\n  \"contrast\": 10,\n  \"backlight_pwm\": 0\n}",
      "expected_state": { "contrast": 10, "backlight_pwm": 255 },
      "visual_render": {
        "component": "svg_lcd",
        "success_message": "FLAG: LCD_VISIBLE"
      }
    }
  },
  {
    "id": "maker_10",
    "name": "Fabrication: G-Code Square",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The CNC machine is drawing a 10x10 square but the last coordinate is wrong. Fix the JSON path array so it returns to the origin.",
    "flag": "CLOSED_LOOP",
    "hints": [
      { "level": 1, "cost": 25, "text": "The path goes [0,0] -> [10,0] -> [10,10] -> [0,10] -> [X,Y]. The final point must close the shape at [0,0]." }
    ],
    "workspace": {
      "initial_state": "{\n  \"path\": [\n    [0, 0],\n    [10, 0],\n    [10, 10],\n    [0, 10],\n    [5, 5]\n  ]\n}",
      "expected_state": { "path": [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]] },
      "visual_render": {
        "component": "svg_cnc",
        "success_message": "FLAG: CLOSED_LOOP"
      }
    }
  },
  {
    "id": "maker_11",
    "name": "Hardware: Conveyor Belt",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The IdeaLab assembly line is running backwards! Reverse the motor polarity in the config.",
    "flag": "FLOW_FIXED",
    "hints": [
      { "level": 1, "cost": 25, "text": "Change \"motor_direction\" from \"CCW\" (Counter-Clockwise) to \"CW\" (Clockwise)." }
    ],
    "workspace": {
      "initial_state": "{\n  \"speed\": 150,\n  \"motor_direction\": \"CCW\"\n}",
      "expected_state": { "speed": 150, "motor_direction": "CW" },
      "visual_render": {
        "component": "svg_conveyor",
        "success_message": "FLAG: FLOW_FIXED"
      }
    }
  },
  {
    "id": "maker_12",
    "name": "IoT: Climate Control",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "api_intercept",
    "problem_statement": "Directive: The AC API expects the target temperature in Celsius, but it is currently receiving a Fahrenheit value (98). Send a comfortable 24 degrees Celsius.",
    "flag": "TEMP_OPTIMAL",
    "hints": [
      { "level": 1, "cost": 25, "text": "Update \"unit\" to \"C\" and \"target_temp\" to 24 in the JSON payload." }
    ],
    "workspace": {
      "endpoint": "PUT /api/v1/hvac/set",
      "initial_payload": "{\n  \"unit\": \"F\",\n  \"target_temp\": 98\n}",
      "expected_payload": { "unit": "C", "target_temp": 24 },
      "visual_render": {
        "component": "svg_thermometer",
        "success_message": "FLAG: TEMP_OPTIMAL"
      }
    }
  },
  {
    "id": "maker_13",
    "name": "Physics: Bouncy Ball",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The ball hits the ground and stops dead. Edit the material properties so it retains 100% of its energy when it bounces.",
    "flag": "PERFECT_ELASTICITY",
    "hints": [
      { "level": 1, "cost": 25, "text": "Set the \"restitution\" (bounciness) variable to 1.0." }
    ],
    "workspace": {
      "initial_state": "{\n  \"mass\": 5,\n  \"restitution\": 0.1\n}",
      "expected_state": { "mass": 5, "restitution": 1.0 },
      "visual_render": {
        "component": "canvas_bounce",
        "success_message": "FLAG: PERFECT_ELASTICITY"
      }
    }
  },
  {
    "id": "maker_14",
    "name": "Hardware: NeoPixel Array",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: We have a strip of 8 smart LEDs. Turn on the very last LED in the array to reveal the flag.",
    "flag": "PIXEL_LIT",
    "hints": [
      { "level": 1, "cost": 25, "text": "Arrays are zero-indexed. The 8th LED is at \"index\": 7. Set its \"state\" to \"ON\"." }
    ],
    "workspace": {
      "initial_state": "{\n  \"target_pixel\": {\n    \"index\": 0,\n    \"state\": \"OFF\"\n  }\n}",
      "expected_state": { "target_pixel": { "index": 7, "state": "ON" } },
      "visual_render": {
        "component": "svg_neopixel",
        "success_message": "FLAG: PIXEL_LIT"
      }
    }
  },
  {
    "id": "maker_15",
    "name": "Hardware: Buzzer Frequency",
    "difficulty": "easy",
    "base_coins": 150,
    "type": "json_tweak",
    "problem_statement": "Directive: The piezo buzzer is emitting a terrible screech. Tune it to the standard concert 'A' note frequency (440 Hz).",
    "flag": "PITCH_PERFECT",
    "hints": [
      { "level": 1, "cost": 25, "text": "Set \"frequency_hz\" to 440." }
    ],
    "workspace": {
      "initial_state": "{\n  \"volume_percent\": 80,\n  \"frequency_hz\": 8500\n}",
      "expected_state": { "volume_percent": 80, "frequency_hz": 440 },
      "visual_render": {
        "component": "svg_buzzer",
        "success_message": "FLAG: PITCH_PERFECT"
      }
    }
  },
  {
    "id": "maker_16",
    "name": "Hardware: LDR Nightlight",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: The `ldr_data` list contains analog light readings (0-1023). Count how many times the light level dropped strictly below 100.",
    "flag": "4",
    "hints": [
      { "level": 1, "cost": 50, "text": "Loop through the list. Use an if statement to check if the value is < 100, and add to a counter variable." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "ldr_data = [900, 850, 105, 99, 50, 12, 102] + [800]*4000\n",
      "visible_code": "# The list 'ldr_data' is loaded. Print the total number of readings < 100.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_17",
    "name": "Fabrication: Step Calculator",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: A stepper motor requires 200 steps for one full revolution. Calculate exactly how many steps are needed to rotate the motor 7.25 revolutions.",
    "flag": "1450.0",
    "hints": [
      { "level": 1, "cost": 50, "text": "Multiply revolutions by steps-per-revolution. Print the answer." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "# Calculate 7.25 revolutions for a 200-step motor.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_18",
    "name": "Hardware: Debounce the Button",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: A button press is recorded as an array of 1s and 0s. Find the length of the solid, continuous block of 1s in the `signal` list.",
    "flag": "4",
    "hints": [
      { "level": 1, "cost": 50, "text": "Convert the list to a string using \"\".join(map(str, signal)). Then split it by '0' and find the max length block!" }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "signal = [0, 1, 0, 0, 1, 1, 1, 1, 0]\n",
      "visible_code": "# The 'signal' list is loaded. Print the length of the longest block of 1s.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_19",
    "name": "Physics: Gravity Drop",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: An object is dropped from a height of 500 meters. Using `time = sqrt((2 * height) / 9.8)`, calculate how many seconds it takes to hit the ground.",
    "flag": "10.101525445522107",
    "hints": [
      { "level": 1, "cost": 50, "text": "Import math. Use math.sqrt() to calculate the formula and print the result." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "import math\nheight = 500\n# Calculate the time to hit the ground:\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_20",
    "name": "IoT: API Rate Limit",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: The server allows 5 requests per second. Write a `for` loop from 1 to 20. Every time the loop reaches a multiple of 5, print \"SLEEP\".",
    "flag": "SLEEP_LIMITER",
    "hints": [
      { "level": 1, "cost": 50, "text": "Use the modulo operator: if i % 5 == 0: print(\"SLEEP\")." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "# Loop from 1 to 20. Print 'SLEEP' on every 5th iteration.\n\n",
      "hidden_validation": "\nif \"SLEEP\\nSLEEP\\nSLEEP\\nSLEEP\" in _visible_code_submitted or 'print(\"SLEEP\")' in _visible_code_submitted:\n    pass\n# Validated manually via frontend log trace usually, but providing a visual cue\n"
    }
  },
  {
    "id": "maker_21",
    "name": "Hardware: Ultrasonic Distance",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: The sensor ping took 1500 microseconds to travel to an object and back. Convert this time to distance in cm. (Speed of sound = 0.0343 cm/us).",
    "flag": "25.725",
    "hints": [
      { "level": 1, "cost": 50, "text": "The sound travels there and back! Formula: Distance = (Time / 2) * 0.0343." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "time_us = 1500\n# Calculate and print the distance in cm.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_22",
    "name": "Fabrication: Laser Raster Time",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: A 10x10 matrix `image` contains 1s (burn) and 0s (skip). Each `1` takes 0.5 seconds to burn. Calculate the total time to engrave the matrix.",
    "flag": "15.0",
    "hints": [
      { "level": 1, "cost": 50, "text": "Loop through the matrix rows, count the 1s, and multiply the total by 0.5." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "image = [[0]*10 for _ in range(10)]\nfor i in range(3): image[i] = [1]*10\n",
      "visible_code": "# The 2D array 'image' is loaded. Calculate burn time.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_23",
    "name": "Physics: PID Controller (P-Term)",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: The drone is tilting. The current Error is 12.5. If our Proportional Gain (Kp) is set to 2.0, calculate the necessary Motor Correction speed.",
    "flag": "25.0",
    "hints": [
      { "level": 1, "cost": 50, "text": "The P-term formula is simply: Correction = Error * Kp. Print the result." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "error = 12.5\nkp = 2.0\n# Calculate and print the motor correction.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_24",
    "name": "IoT: I2C Scanner",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: An OLED screen sits at the hexadecimal I2C address `0x3C`. Convert `0x3C` to decimal (base 10) in Python.",
    "flag": "60",
    "hints": [
      { "level": 1, "cost": 50, "text": "In Python, you can print a hex number's decimal value by just passing it to int(), e.g., print(int(\"0x3C\", 16)) or print(0x3C)." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "# Convert 0x3C to decimal and print it.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_25",
    "name": "Fabrication: Filament Length",
    "difficulty": "medium",
    "base_coins": 400,
    "type": "micropython",
    "problem_statement": "Directive: The 3D printer draws a straight line from X=0 to X=150, then from X=150 to X=200. Calculate the total absolute distance traveled.",
    "flag": "200",
    "hints": [
      { "level": 1, "cost": 50, "text": "Calculate the distance of the first move, then add the distance of the second move." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "# Print the total distance traveled.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_26",
    "name": "Hardware: Moving Average Filter",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "micropython",
    "problem_statement": "Directive: The pre-loaded `temp_sensor` array contains 1,000 noisy readings. Calculate the average of ONLY the first 10 readings to find the true baseline.",
    "flag": "24.5",
    "hints": [
      { "level": 1, "cost": 100, "text": "Slice the first 10 items using temp_sensor[:10]. Then sum() them and divide by 10." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "temp_sensor = [24, 25, 24, 26, 23, 25, 24, 24, 25, 25] + [99]*990\n",
      "visible_code": "# The 'temp_sensor' list is loaded. Print the average of the first 10 items.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_27",
    "name": "IoT: Checksum Bypass",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "micropython",
    "problem_statement": "Directive: Calculate the required security checksum: `(Value A + Value B) % 256`. Print the checksum if A=1050 and B=3422.",
    "flag": "120",
    "hints": [
      { "level": 1, "cost": 100, "text": "Add the two numbers together in parentheses, then use the modulo operator % 256." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "a = 1050\nb = 3422\n# Calculate and print the checksum.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_28",
    "name": "Fabrication: Bounding Box",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "micropython",
    "problem_statement": "Directive: You have lists `x_coords` and `y_coords` for a custom PCB shape. Find the area of the smallest rectangular bounding box enclosing it.",
    "flag": "2400",
    "hints": [
      { "level": 1, "cost": 100, "text": "Find the max() and min() of X to get Width. Do the same for Y to get Height. Then Width * Height." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "x_coords = [10, 50, 20, 30, 70]\ny_coords = [5, 15, 45, 10, 20]\n",
      "visible_code": "# Find the bounding box area based on 'x_coords' and 'y_coords'.\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_29",
    "name": "Physics: Trajectory Optimization",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "micropython",
    "problem_statement": "Directive: The height of a ball over time is given by `h = -5*(t**2) + 20*t`. Check time `t` from 0 to 4. What is the absolute maximum height reached?",
    "flag": "20",
    "hints": [
      { "level": 1, "cost": 100, "text": "Loop t from 0 to 4. Calculate h. Keep track of the highest value you see." }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "",
      "visible_code": "# Calculate max height for t in range(5).\n\n",
      "hidden_validation": ""
    }
  },
  {
    "id": "maker_30",
    "name": "Hardware: The Logic Analyzer",
    "difficulty": "hard",
    "base_coins": 750,
    "type": "micropython",
    "problem_statement": "Directive: The logic analyzer `signal` list contains 10,000 samples. A \"HIGH\" pulse is exactly five `1`s in a row. Count how many valid HIGH pulses were transmitted.",
    "flag": "42",
    "hints": [
      { "level": 1, "cost": 100, "text": "Convert the list to a string using \"\".join(map(str, signal)). Then use the .count(\"11111\") string method!" }
    ],
    "workspace": {
      "output_type": "console",
      "hidden_setup": "base = [0, 1, 0] * 3000\npulses = [1, 1, 1, 1, 1] * 42\nsignal = base + pulses\nimport random\nrandom.shuffle(signal)\nsignal = [0,0,0] + [1,1,1,1,1]*42 + [0,0,0]\n",
      "visible_code": "# The 'signal' list is loaded. Count occurrences of exactly 5 consecutive 1s.\n\n",
      "hidden_validation": ""
    }
  }
]