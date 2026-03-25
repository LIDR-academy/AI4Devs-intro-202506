/* ── Reverso — script.js ── */

const inputEl    = document.getElementById('inputText');
const outputEl   = document.getElementById('outputText');
const copyBtn    = document.getElementById('copyBtn');
const charCount  = document.getElementById('charCount');
const toast      = document.getElementById('toast');

let toastTimer = null;

/* Reverse a string */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/* Update the output in real-time */
inputEl.addEventListener('input', () => {
  const raw     = inputEl.value;
  const count   = raw.length;
  const reversed = reverseString(raw);

  /* Character counter */
  charCount.textContent = count;
  charCount.classList.toggle('active', count > 0);

  /* Output */
  if (count === 0) {
    outputEl.textContent = 'Your reversed string appears here…';
    outputEl.classList.add('placeholder');
    copyBtn.disabled = true;
    copyBtn.classList.remove('success');
  } else {
    outputEl.textContent = reversed;
    outputEl.classList.remove('placeholder');
    copyBtn.disabled = count <= 3;
  }
});

/* Copy button */
copyBtn.addEventListener('click', () => {
  const text = outputEl.textContent;
  if (!text || copyBtn.disabled) return;

  navigator.clipboard.writeText(text).then(() => {
    /* Visual feedback on button */
    copyBtn.classList.add('success');
    document.querySelector('.copy-label').textContent = 'Copied!';

    /* Toast */
    showToast();

    /* Reset button after 2 s */
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      copyBtn.classList.remove('success');
      document.querySelector('.copy-label').textContent = 'Copy';
    }, 2000);
  }).catch(() => {
    /* Fallback for older browsers */
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(outputEl);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    sel.removeAllRanges();
    showToast();
  });
});

/* Show the toast notification */
function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}