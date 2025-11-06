// reverse string function
function reverseString(str) {
    return str.split("").reverse().join("");
}

// DOM elements
const input = document.getElementById("inputString");
const output = document.getElementById("output");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");

// on click reverse
reverseBtn.addEventListener("click", () => {
    const reversed = reverseString(input.value);
    output.textContent = reversed;
});

// copy text logic
copyBtn.addEventListener("click", () => {
    if (!output.textContent) return;
    navigator.clipboard.writeText(output.textContent)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Error copying:", err));
});
