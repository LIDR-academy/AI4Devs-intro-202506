const inputField = document.getElementById('userInput');
const statusBtn = document.getElementById('statusBtn');
const resultElement = document.getElementById('result');

/**
 * Main function triggered on every keystroke
 */
function handleLiveReverse() {
    const value = inputField.value;

    if (value.length >= 3) {
        // 1. Enable the status indicator
        statusBtn.disabled = false;

        // 2. Perform the reversal and display it
        resultElement.textContent = reverseString(value);
    } else {
        // 3. Reset UI if the string is too short
        statusBtn.disabled = true;
        resultElement.textContent = "";
    }
}

/**
 * Logic to reverse the string
 */
function reverseString(str) {
    return [...str].reverse().join('');
}