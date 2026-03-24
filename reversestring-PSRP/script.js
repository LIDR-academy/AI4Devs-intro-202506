/**
 * Reverses a given string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 * Example: reverseString("AI4Devs") => "sveD4IA"
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Copies the content of the output paragraph to the clipboard.
 */
function copyToClipboard() {
    const output = document.getElementById('outputText').textContent;
    if (!output) return;
    navigator.clipboard.writeText(output).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
}

// Wire up button click handlers after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reverseBtn').addEventListener('click', function () {
        const input = document.getElementById('inputText').value;
        document.getElementById('outputText').textContent = reverseString(input);
    });

    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
});
