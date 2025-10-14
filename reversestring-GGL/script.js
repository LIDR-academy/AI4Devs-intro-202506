const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

// Helper: count "letters" as non-space characters
function nonSpaceLength(s) {
  return s.replace(/\s/g, "").length;
}

// Reverse safely (better for Unicode than split(""))
function reverseString(s) {
  return Array.from(s).reverse().join("");
}

// Update UI in real time as the user types
function update() {
  const text = inputText.value;
  const enoughText = nonSpaceLength(text) > 3;

  // Show/hide the Reverse button based on length rule
  reverseBtn.classList.toggle("hidden", !enoughText);

  // Always compute and show reversed text in real time
  const reversed = text ? reverseString(text) : "";
  result.textContent = reversed;

  // Enable copy when there is result text
  copyBtn.disabled = reversed.length === 0;
}

// Copy handler (unchanged behavior; just disabled until there’s text)
copyBtn.addEventListener("click", () => {
  const text = result.textContent;
  if (!text) return;
  navigator.clipboard.writeText(text);
  const prev = copyBtn.textContent;
  copyBtn.textContent = "Copied ✅";
  setTimeout(() => (copyBtn.textContent = prev), 1200);
});

// Listen for typing
inputText.addEventListener("input", update);

// Initial state
update();