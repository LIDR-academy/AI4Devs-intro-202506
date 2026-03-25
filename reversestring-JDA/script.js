const inputField = document.getElementById('userInput');
const displayDiv = document.getElementById('result');

/**
 * Reverses a string using the spread operator
 * This handles surrogate pairs (emojis) correctly.
 */
const reverseString = (str) => {
    // Using [...str] instead of str.split('') is the "Pro" move
    return [...str].reverse().join('');
};

// The 'input' event captures typing, pasting, and deleting
inputField.addEventListener('input', (event) => {
    const val = event.target.value;
    // Update the display immediately
    displayDiv.textContent = reverseString(val);
});