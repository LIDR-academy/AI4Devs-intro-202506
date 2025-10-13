// Elements
const inputEl = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const resultEl = document.getElementById('result');
const statusEl = document.getElementById('status');

/**
 * Reverse a string with Unicode awareness.
 * Uses Intl.Segmenter (grapheme clusters) when available,
 * otherwise falls back to Array.from which is surrogate-pair aware.
 */
function reverseStringUnicode(str) {
  try {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const seg = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      const graphemes = [];
      for (const s of seg.segment(str)) graphemes.push(s.segment);
      return graphemes.reverse().join('');
    }
  } catch (_) { /* ignore and fall back */ }
  return Array.from(str).reverse().join('');
}

function setStatus(msg, ok = false) {
  statusEl.textContent = msg || '';
  statusEl.classList.toggle('ok', !!ok);
}

/** Core update called on every input change */
function updateRealtime() {
  const value = inputEl.value || '';

  // 1) Real-time result
  const reversed = reverseStringUnicode(value);
  resultEl.textContent = reversed;

  // 2) Toggle Reverse button visibility:
  //    - Hidden when length <= 3
  //    - Visible only when length > 3
  if (value.length > 3) {
    reverseBtn.classList.remove('hidden');
  } else {
    reverseBtn.classList.add('hidden');
  }

  // 3) Enable/disable Copy button
  copyBtn.disabled = reversed.length === 0;

  // Clear transient status when typing
  setStatus('');
}

/** Explicit reverse action (optional, since we already do real-time) */
function handleReverse() {
  // Recompute to be safe, then show a tiny status
  const reversed = reverseStringUnicode(inputEl.value || '');
  resultEl.textContent = reversed;
  copyBtn.disabled = reversed.length === 0;
  setStatus(reversed ? 'Text reversed.' : 'Nothing to reverse.');
}

/** Copy action */
async function handleCopy() {
  const text = resultEl.textContent || '';
  if (!text) {
    setStatus('No result to copy.');
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setStatus('Copied to clipboard!', true);
  } catch {
    setStatus('Could not copy to clipboard.');
  }
}

/** Events */
inputEl.addEventListener('input', updateRealtime);
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleReverse();
});
reverseBtn.addEventListener('click', handleReverse);
copyBtn.addEventListener('click', handleCopy);

// Initialize UI state on load
updateRealtime();