  // Initialize display with 0
        document.getElementById('display').value = '0';

        // Appends a value to the display, handling decimal points and initial state
        function appendToDisplay(value) {
            const display = document.getElementById('display');
            let currentValue = display.value;

            // Remove initial '0' when starting a new number
            if (currentValue === '0' && value !== '.') {
                currentValue = '';
            }

            // Prevent multiple decimal points in a single number
            if (value === '.') {
                const lastNumber = currentValue.split(/[+\-*/%]/).pop();
                if (lastNumber.includes('.')) {
                    return; // Don't add another decimal point
                }
            }

            // Append the value and update display
            display.value = currentValue + value;
        }

        // Clears the display and resets to 0
        function clearDisplay() {
            document.getElementById('display').value = '0';
        }

        // Evaluates the expression and displays the result or an error
        function calculate() {
            const display = document.getElementById('display');
            try {
                // Prevent evaluation of empty or invalid expressions
                if (!display.value || display.value === '0') {
                    return;
                }
                const result = eval(display.value);
                // Ensure result is a number and not undefined
                if (typeof result === 'number' && !isNaN(result)) {
                    display.value = result;
                } else {
                    display.value = 'Error';
                }
            } catch (error) {
                display.value = 'Error';
            }
        }