// Reverse a string safely (handles most unicode by spreading into code points)
function reverseString(str) {
  // [...str] turns the string into an array of code points, reverse it, join back
  return [...str].reverse().join('');
}

function $(id) {
  return document.getElementById(id);
}

// DOM elements
const input = $('inputText');
const output = $('outputText');
const reverseBtn = $('reverseBtn');
const copyBtn = $('copyBtn');

// Render helper
function render(text) {
  output.textContent = text || '';
}

// Do the reversal
function doReverse() {
  const value = input.value ?? '';
  const reversed = reverseString(value);
  render(reversed);
}

// Copy to clipboard with minimal feedback
async function doCopy() {
  const text = output.textContent || '';
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = original), 900);
  } catch (err) {
    // Fallback if clipboard API fails
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// Events
reverseBtn.addEventListener('click', doReverse);

// Allow pressing Enter inside the input to reverse immediately
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doReverse();
});

// Copy button
copyBtn.addEventListener('click', doCopy);

// Optional: preload an example like the screenshot
input.value = 'Hello, welcome to AI4Devs';
doReverse();