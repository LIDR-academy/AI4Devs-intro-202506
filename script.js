// script.js

// Reverse a string by grapheme clusters (keeps emojis/accents intact).
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  // Fallback: code point–aware
  return Array.from(str).reverse().join("");
}

function wireUI() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  const reversedLabel = document.getElementById("reversedLabel");

  if (!input || !result) {
    console.error(
      "[Reverse String] Missing DOM nodes. Expected #inputText and #result (and optional #reversedLabel)."
    );
    return;
  }

  const update = () => {
    const value = input.value || "";
    const reversed = reverseString(value);
    result.textContent = reversed;
    if (reversedLabel) reversedLabel.textContent = `Reversed string: ${reversed || "—"}`;
  };

  input.addEventListener("input", update);

  // Prefill a sample and render once
  if (!input.value) input.value = "AI4Devs";
  update();

  console.log("[Reverse String] Wired. Live updates active.");
}

// Safe init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", wireUI);
} else {
  wireUI();
}