(function() {
  const MIN_LEN = 3;
  const input = document.getElementById('textInput');
  const copyBtn = document.getElementById('copyBtn');
  const resultEl = document.getElementById('result');
  const copiedTip = document.getElementById('copiedTip');
  const lenTip = document.getElementById('lenTip');

  // Reverse the input string and show result when length >= MIN_LEN
  const reverseString = (str) => Array.from(str).reverse().join('');

  const updateUI = () => {
    const text = input.value;
    const len = text.length;
    const remaining = Math.max(0, MIN_LEN - len);

    // Update / show "characters left" tooltip
    if (remaining > 0) {
      const label = remaining === 1 ? 'character' : 'characters';
      lenTip.textContent = `${remaining} ${label} left`;
      lenTip.hidden = false;
    } else {
      lenTip.hidden = true;
    }

    // Show reversed result only when 3+ characters
    if (len >= MIN_LEN) {
      const reversed = reverseString(text);
      resultEl.textContent = reversed;
      copyBtn.disabled = reversed.length === 0;
    } else {
      resultEl.textContent = '';
      copyBtn.disabled = true;
    }
  };

  // Copy reversed text to clipboard with tooltip feedback
  const copyToClipboard = async () => {
    const text = resultEl.textContent;
    try {
      await navigator.clipboard.writeText(text);
      showCopiedTooltip();
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showCopiedTooltip();
    }
  };

  let tipTimer = null;
  const showCopiedTooltip = () => {
    copiedTip.hidden = false;
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => { copiedTip.hidden = true; }, 1200);
  };

  // Events
  input.addEventListener('input', updateUI);
  copyBtn.addEventListener('click', copyToClipboard);

  // Initialize UI
  updateUI();
})();