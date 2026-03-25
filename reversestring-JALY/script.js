(function () {
  const input = document.getElementById('textInput');
  const copyBtn = document.getElementById('copyBtn');
  const output = document.getElementById('output');

  // Reverse operation with Unicode-awareness
  function reverseString(str) {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const seg = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
      const parts = [...seg.segment(str)].map(s => s.segment);
      return parts.reverse().join('');
    }
    return Array.from(str).reverse().join('');
  }

  function updateOutput() {
    // maxlength already limits to 200; slice just in case of programmatic changes
    const text = input.value.slice(0, 200);
    const reversed = reverseString(text);
    output.textContent = reversed;
    copyBtn.disabled = reversed.length === 0;
  }

  function copyToClipboard() {
    const text = output.textContent || '';
    if (!text) return;
    navigator.clipboard?.writeText(text).then(() => {
      copyBtn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }],
        { duration: 120 }
      );
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } finally { document.body.removeChild(ta); }
    });
  }

  // Live update as user types
  input.addEventListener('input', updateOutput);

  // Allow Enter to do nothing special; we still update live
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') e.preventDefault();
  });

  copyBtn.addEventListener('click', copyToClipboard);

  // Initial state
  updateOutput();
})();