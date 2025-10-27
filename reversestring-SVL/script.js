/**
 * script.js
 * Logic for reversing a string and copying the result.
 * Author: Sergio (example)
 * Description: Simple UI for reversing user input and copying to clipboard.
 */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const inputField = document.getElementById('inputString');
    const resultDisplay = document.getElementById('result');
    const reverseButton = document.getElementById('reverseBtn');
    const copyButton = document.getElementById('copyBtn');

    /**
     * Reverse the input string and display the result.
     */
    const reverseString = () => {
        const input = inputField.value.trim();
        if (input === '') {
            resultDisplay.textContent = '⚠️ Please enter some text.';
            return;
        }

        // Split string into characters, reverse, and join back
        const reversed = input.split('').reverse().join('');
        resultDisplay.textContent = reversed;
    };

    /**
     * Copy the reversed text to the clipboard.
     */
    const copyToClipboard = () => {
        const text = resultDisplay.textContent;
        if (!text || text.startsWith('⚠️')) {
            alert('Nothing to copy yet!');
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => alert('✅ Reversed string copied to clipboard!'))
            .catch(err => console.error('Clipboard copy failed:', err));
    };

    // Event listeners for buttons
    reverseButton.addEventListener('click', reverseString);
    copyButton.addEventListener('click', copyToClipboard);
});
