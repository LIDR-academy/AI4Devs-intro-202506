/**
 * script.js
 * ----------------------------------------
 * Handles string reversal logic, dynamic UI updates, 
 * and clipboard operations for the Reverse String web app.
 * 
 * Author: Sergio (example)
 * Date: 2025-10-27
 */

document.addEventListener('DOMContentLoaded', () => {
    // === DOM ELEMENT REFERENCES ===
    const inputField = document.getElementById('inputString');
    const resultDisplay = document.getElementById('result');
    const reverseButton = document.getElementById('reverseBtn');
    const copyButton = document.getElementById('copyBtn');

    /**
     * Reverse the input string and display the result.
     * 
     * @function reverseString
     * @description Takes the text entered by the user, reverses it,
     *              and updates the result display area.
     *              If the input is shorter than 4 characters,
     *              a warning message is shown instead.
     * @returns {void}
     */
    const reverseString = () => {
        const input = inputField.value.trim();

        if (input.length < 3) {
            resultDisplay.textContent = '⚠️ Please enter more than 3 characters.';
            return;
        }

        const reversed = input.split('').reverse().join('');
        resultDisplay.textContent = reversed;
    };

    /**
     * Copy the reversed text to the clipboard.
     * 
     * @function copyToClipboard
     * @description Copies the currently displayed reversed string
     *              to the user's clipboard using the Clipboard API.
     *              If no valid text is available, an alert is shown.
     * @returns {void}
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

    /**
     * Show or hide the Reverse button based on input length.
     * 
     * @function handleInputChange
     * @description Monitors the input field and dynamically toggles
     *              the visibility of the "Reverse" button.
     *              The button appears only if the user enters more than 3 characters.
     * @returns {void}
     */
    const handleInputChange = () => {
        const inputLength = inputField.value.trim().length;
        reverseButton.style.display = inputLength >= 3 ? 'inline-block' : 'none';
    };

    // === EVENT LISTENERS ===
    inputField.addEventListener('input', handleInputChange);
    reverseButton.addEventListener('click', reverseString);
    copyButton.addEventListener('click', copyToClipboard);
});
