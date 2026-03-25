// ── Core logic ──────────────────────────────────────────────────────
// Uses split('') to turn the string into an array of characters,
// Array.prototype.reverse() to reverse that array in-place,
// and join('') to combine the characters back into a string.
function reverseString(input) {
  return input.split('').reverse().join('');
}

// ── DOM references ──────────────────────────────────────────────────
const inputEl  = document.getElementById('stringInput');
const btnEl    = document.getElementById('reverseBtn');
const resultEl = document.getElementById('result');

// ── Display helpers ─────────────────────────────────────────────────
function showResult(text) {
  resultEl.textContent = text;
  resultEl.className = 'result result--success';
}

function showError(message) {
  resultEl.textContent = message;
  resultEl.className = 'result result--error';
}

function clearResult() {
  resultEl.textContent = '';
  resultEl.className = 'result result--empty';
}

// ── Main handler ────────────────────────────────────────────────────
function handleReverse() {
  // Trim leading/trailing whitespace so "  " alone counts as empty
  const raw     = inputEl.value;
  const trimmed = raw.trim();

  if (trimmed.length === 0) {
    showError('Please enter a non-empty string.');
    return;
  }

  // Reverse the trimmed input so stray surrounding spaces don't pollute the result
  showResult(reverseString(trimmed));
}

// ── Event listeners ─────────────────────────────────────────────────
btnEl.addEventListener('click', handleReverse);

// Allow triggering the reverse with the Enter key
inputEl.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleReverse();
  }
});

// Clear stale results when the user starts typing again
inputEl.addEventListener('input', clearResult);
