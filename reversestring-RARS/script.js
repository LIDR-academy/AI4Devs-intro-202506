function updateReversedText() {
  const input = document.getElementById("inputText").value;
  const result = document.getElementById("result");
  const copyBtn = document.getElementById("copyBtn");

  if (input.length > 3) {
    const reversed = input.split("").reverse().join("");
    result.textContent = reversed;
    copyBtn.style.display = "inline-block";
  } else {
    result.textContent = "";
    copyBtn.style.display = "none";
  }
}

function copyToClipboard() {
  const resultText = document.getElementById("result").textContent;
  if (!resultText) return;
  navigator.clipboard.writeText(resultText).then(() => {
    alert("Copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
}
