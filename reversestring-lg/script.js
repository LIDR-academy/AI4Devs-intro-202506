/**
 * Reverses the characters of a string.
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 * Example: reverseStr("AI4Devs") → "sveD4IA"
 */
function reverseStr(str) {
  return str.split("").reverse().join("");
}

function reverseString() {
  const input = document.getElementById("inputText").value;
  const outputSection = document.getElementById("outputSection");
  const outputText = document.getElementById("outputText");

  if (!input.trim()) return;

  outputText.textContent = reverseStr(input);
  outputSection.classList.add("visible");
}

function copyResult() {
  const text = document.getElementById("outputText").textContent;
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const feedback = document.getElementById("copyFeedback");
    feedback.classList.add("show");
    setTimeout(() => feedback.classList.remove("show"), 1800);
  });
}

// Allow triggering with Enter key
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputText").addEventListener("keydown", (e) => {
    if (e.key === "Enter") reverseString();
  });
});
