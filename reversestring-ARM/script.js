"use strict";

const input = document.getElementById("inputStr");
const output = document.getElementById("outputStr");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

function reverseUnicode(str) {
  return [...str].reverse().join("");
}

function updateCopyButtonVisibility() {
  const length = [...input.value].length;
  if (length > 3) {
    copyBtn.classList.add("visible");
  } else {
    copyBtn.classList.remove("visible");
  }
}

input.addEventListener("input", () => {
  output.textContent = reverseUnicode(input.value);
  updateCopyButtonVisibility();
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  updateCopyButtonVisibility();
  input.focus();
});

copyBtn.addEventListener("click", () => {
  const result = output.textContent;
  if (!result) return;

  navigator.clipboard
    .writeText(result)
    .then(() => {
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("copied");
      copyBtn.setAttribute("aria-label", "Copied to clipboard");

      setTimeout(() => {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("copied");
        copyBtn.setAttribute("aria-label", "Copy reversed text");
      }, 1800);
    })
    .catch(() => {
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(output);
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand("copy");
      sel.removeAllRanges();
    });
});
