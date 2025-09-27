// This script contains the logic to reverse a string either
// interactively as the user types or when the button is clicked.
// It waits for the DOM to load before attaching event listeners.

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputString');
    const reverseButton = document.getElementById('reverseButton');
    const outputDiv = document.getElementById('output');

    /**
     * Reverse the characters in a given string.
     *
     * @param {string} str The input string to reverse.
     * @returns {string} The reversed string.
     */
    function reverseString(str) {
        // Convert the string into an array of characters, reverse it,
        // then join back into a string. This handles Unicode characters
        // correctly by converting to an array with Array.from.
        return Array.from(str).reverse().join('');
    }

    /**
     * Update the output area with the reversed value of the input field.
     */
    function updateOutput() {
        const originalValue = inputField.value;
        const reversedValue = reverseString(originalValue);
        outputDiv.textContent = reversedValue;
    }

    // Update output in real time as the user types.
    inputField.addEventListener('input', updateOutput);

    // Also allow reversing on button click for convenience.
    reverseButton.addEventListener('click', updateOutput);

    // Initialize output (in case of pre-filled value)
    updateOutput();
});
