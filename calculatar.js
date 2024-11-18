 // JavaScript code to handle calculator functionality
        document.addEventListener('DOMContentLoaded', () => {
            let inputField = document.getElementById('input'); // Changed variable name
            let buttons = document.querySelectorAll('button');
            let currentInput = '';

            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const value = e.target.innerText;

                    if (value === '=') {
                        try {
                            currentInput = eval(currentInput.replace('x', '*')); // Replace 'x' with '*' for multiplication
                            inputField.value = currentInput;
                        } catch {
                            inputField.value = "Error"; // Handle any errors
                        }
                    } else if (value === 'C') {
                        currentInput = ''; // Clear the input
                        inputField.value = currentInput;
                    } else {
                        currentInput += value; // Append button value
                        inputField.value = currentInput;
                    }
                });
            });
        });
    