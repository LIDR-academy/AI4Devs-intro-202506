const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

reverseBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text === "") {
    result.textContent = "Please enter text to reverse.";
    return;
  }
  const reversed = text.split("").reverse().join("");
  result.textContent = reversed;
});

copyBtn.addEventListener("click", () => {
  const text = result.textContent;
  if (text) {
    navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied ✅";
    setTimeout(() => (copyBtn.textContent = "Copy 📋"), 1500);
  }
});