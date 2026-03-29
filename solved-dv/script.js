const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

function reverseString(text) {
  return text.split("").reverse().join("");
}

reverseBtn.addEventListener("click", () => {
  const inputValue = textInput.value;
  const reversedValue = reverseString(inputValue);
  result.textContent = reversedValue;
});

copyBtn.addEventListener("click", async () => {
  const reversedText = result.textContent;

  if (!reversedText) {
    return;
  }

  try {
    await navigator.clipboard.writeText(reversedText);
    copyBtn.textContent = "Copied ✅";

    setTimeout(() => {
      copyBtn.innerHTML = "Copy &#x1F4CB;";
    }, 1500);
  } catch (error) {
    console.error("Clipboard copy failed:", error);
  }
});