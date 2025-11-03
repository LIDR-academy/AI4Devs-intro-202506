(function() {
  const input = document.getElementById('textInput');
  const reverseBtn = document.getElementById('reverseBtn');
  const copyBtn = document.getElementById('copyBtn');
  const resultEl = document.getElementById('result');
  const tooltip = document.getElementById('copiedTip');

  // Enable/disable Reverse button based on input value
  const updateReverseButton = () => {
    const hasValue = input.value.trim().length > 0;
    reverseBtn.disabled = !hasValue;
  };

  // Reverse the input string and show result
  const reverseString = (str) => {
    // Use Array.from to better handle surrogate pairs
    return Array.from(str).reverse().join('');
  };

  const doReverse = () => {
    const text = input.value;
    const reversed = reverseString(text);
    resultEl.textContent = reversed;
    copyBtn.disabled = reversed.length === 0;
  };

  // Copy reversed text to clipboard with tooltip feedback
  const copyToClipboard = async () => {
    const text = resultEl.textContent;
    try {
      await navigator.clipboard.writeText(text);
      showTooltip();
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showTooltip();
    }
  };

  let tipTimer = null;
  const showTooltip = () => {
    tooltip.hidden = false;
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => { tooltip.hidden = true; }, 1200);
  };

  // Events
  input.addEventListener('input', updateReverseButton);
  reverseBtn.addEventListener('click', doReverse);
  copyBtn.addEventListener('click', copyToClipboard);

  // Initialize UI state
  updateReverseButton();
})();