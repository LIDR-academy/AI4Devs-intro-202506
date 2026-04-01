/**
 * script.js
 * Reverse String Tool — Core Logic
 * -----------------------------------
 * Reverses the character order of a given string.
 * Example: "HOLA MUNDO" → "ODNUM ALOH"
 */

/**
 * Reverses the characters of a string.
 * @param {string} str - The input string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    if (typeof str !== "string") return "";
    return str.split("").reverse().join("");
}

/**
 * Handles the button click event:
 * reads the input, reverses it, and displays the result.
 */
function handleReverse() {
    const input = document.getElementById("inputText");
    const resultLabel = document.getElementById("resultLabel");
    const resultWrapper = document.getElementById("resultWrapper");
    const charCount = document.getElementById("charCount");

    const original = input.value;
    const reversed = reverseString(original);

    if (original.trim() === "") {
        resultLabel.textContent = "⚠  Ingresa algún texto primero.";
        resultWrapper.classList.add("visible", "empty");
        resultWrapper.classList.remove("has-result");
        return;
    }

    resultWrapper.classList.remove("empty");
    resultWrapper.classList.add("visible", "has-result");

    // Animate characters appearing one by one
    resultLabel.textContent = "";
    [...reversed].forEach((char, i) => {
        setTimeout(() => {
            resultLabel.textContent += char;
        }, i * 18);
    });

    charCount.textContent = `${reversed.length} caracteres`;
}

/**
 * Clears input and result.
 */
function handleClear() {
    const input = document.getElementById("inputText");
    const resultWrapper = document.getElementById("resultWrapper");
    const charCount = document.getElementById("charCount");

    input.value = "";
    resultWrapper.classList.remove("visible", "has-result", "empty");
    charCount.textContent = "";
    input.focus();
}

// Allow pressing Enter inside the textarea (Ctrl+Enter) to trigger reverse
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            handleReverse();
        }
    });
});