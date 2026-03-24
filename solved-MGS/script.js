document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('text-input');
  const btn = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const charCount = document.getElementById('char-count');
  const placeholder = document.getElementById('placeholder');
  const minHint = document.getElementById('min-hint');

  // Disabled state management
  function updateButtonState() {
    const length = input.value.trim().length;
    const isValid = length > 3;

    btn.disabled = !isValid;

    if (isValid) {
      btn.classList.remove('btn-disabled');
      btn.classList.add('btn-enabled');
      minHint.style.opacity = '0';
    } else {
      btn.classList.add('btn-disabled');
      btn.classList.remove('btn-enabled');
      minHint.style.opacity = '1';
    }
  }

  // Initialize as disabled
  updateButtonState();

  // Listen on every keystroke
  input.addEventListener('input', updateButtonState);

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function animateResult(text) {
    resultContainer.classList.remove('hidden');
    resultContainer.classList.add('visible');
    placeholder.style.display = 'none';
    resultText.textContent = '';
    charCount.textContent = text.length + ' chars';

    let i = 0;
    const speed = Math.max(20, Math.min(80, 1200 / text.length));

    function typeChar() {
      if (i < text.length) {
        resultText.textContent += text[i];
        i++;
        setTimeout(typeChar, speed);
      } else {
        resultText.classList.add('done');
        setTimeout(() => resultText.classList.remove('done'), 600);
      }
    }

    typeChar();
  }

  function handleSubmit() {
    if (btn.disabled) return;
    const value = input.value.trim();
    const reversed = reverseString(value);
    animateResult(reversed);
  }

  btn.addEventListener('click', handleSubmit);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSubmit();
  });

  // Glitch effect on hover for the title
  const title = document.getElementById('main-title');
  if (title) {
    title.addEventListener('mouseenter', () => {
      title.setAttribute('data-glitch', 'active');
      setTimeout(() => title.removeAttribute('data-glitch'), 400);
    });
  }
});
