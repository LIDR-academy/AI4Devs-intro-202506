// Reverse a string by grapheme clusters (keeps emojis/accents intact).
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  // Fallback: code point–aware reversal
  return Array.from(str).reverse().join("");
}

function init() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");

  const update = () => {
    const value = input.value || "";
    result.textContent = reverseString(value);
  };

  // Live update as the user types
  input.addEventListener("input", update);

  // Optional: show sample on load
  input.value = "AI4Devs";
  update();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
