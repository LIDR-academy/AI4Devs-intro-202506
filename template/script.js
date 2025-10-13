/**
 * Reverse a string safely (handles emojis, accents, Unicode)
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = Array.from(segmenter.segment(str), s => s.segment);
    return graphemes.reverse().join("");
  }
  return Array.from(str).reverse().join("");
}

/**
 * Initialize app logic: live reverse + button visibility
 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("text-input");
  const output = document.getElementById("output");
  const status = document.getElementById("status");
  const button = document.getElementById("btn-reverse");

  const updateOutput = () => {
    const text = input.value;
    status.textContent = "";

    // Show or hide button based on text length
    if (text.trim().length > 3) {
      button.style.display = "inline-block";
    } else {
      button.style.display = "none";
    }

    // If input is empty, show validation message
    if (!text.trim()) {
      output.textContent = "";
      status.textContent = "Please enter a valid text.";
      return;
    }

    // Real-time reversed text
    output.textContent = reverseString(text);
  };

  // Update result in real-time
  input.addEventListener("input", updateOutput);

  // Button only acts as optional re-trigger (no dependency)
  button.addEventListener("click", () => {
    output.textContent = reverseString(input.value);
    input.focus();
  });
});
