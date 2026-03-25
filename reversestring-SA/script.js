// ─── String Reversal Logic ──────────────────────────────────
function reverseString(str) {
  return str.split('').reverse().join('');
}

// ─── DOM References ─────────────────────────────────────────
const input         = document.getElementById('inputText');
const output        = document.getElementById('outputText');
const reverseBtn    = document.getElementById('reverseBtn');
const clearBtn      = document.getElementById('clearBtn');
const copyBtn       = document.getElementById('copyBtn');
const charCount     = document.getElementById('charCount');
const outputSection = document.getElementById('outputSection');
const toastEl       = document.getElementById('toast');
const pips          = [
  document.getElementById('pip1'),
  document.getElementById('pip2'),
  document.getElementById('pip3'),
];

const MIN_CHARS = 4; // more than 3
let wasEnabled  = false;

// ─── Input handler (real-time) ───────────────────────────────
input.addEventListener('input', () => {
  const val = input.value;
  const len = val.length;

  // 1. Update character counter
  charCount.textContent = `${len} carácter${len !== 1 ? 'es' : ''}`;

  // 2. Update pip dots
  updatePips(len);

  // 3. Enable / disable confirm button
  updateButtonState(len);

  // 4. Live-update reversed output
  if (len >= MIN_CHARS) {
    liveUpdate(val, false);
  } else if (len === 0) {
    resetOutput();
  } else {
    // 1–3 chars: faded preview
    liveUpdate(val, true);
  }
});

// ─── Live output (no confirm animation) ─────────────────────
function liveUpdate(val, faded) {
  outputSection.classList.add('visible');
  output.style.opacity = faded ? '0.3' : '1';
  output.textContent = reverseString(val);
}

// ─── Reset to placeholder ────────────────────────────────────
function resetOutput() {
  outputSection.classList.remove('visible');
  output.innerHTML = '<span class="placeholder-text">El resultado aparecerá aquí</span>';
  output.style.opacity = '1';
}

// ─── Pip dots ────────────────────────────────────────────────
function updatePips(len) {
  pips.forEach((pip, i) => {
    if (i < len) pip.classList.add('filled');
    else         pip.classList.remove('filled');
  });
}

// ─── Button enable / disable ─────────────────────────────────
function updateButtonState(len) {
  const shouldEnable = len >= MIN_CHARS;

  if (shouldEnable && !wasEnabled) {
    reverseBtn.disabled = false;
    reverseBtn.classList.remove('just-unlocked');
    void reverseBtn.offsetWidth; // reflow to restart animation
    reverseBtn.classList.add('just-unlocked');
    wasEnabled = true;
  } else if (!shouldEnable && wasEnabled) {
    reverseBtn.disabled = true;
    wasEnabled = false;
  }
}

// ─── Confirm button click ────────────────────────────────────
reverseBtn.addEventListener('click', () => {
  if (reverseBtn.disabled) return;
  confirmResult();
});

// ─── Confirm on Enter ────────────────────────────────────────
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey && !reverseBtn.disabled) {
    e.preventDefault();
    confirmResult();
  }
});

// ─── Confirm: re-animate the result ─────────────────────────
function confirmResult() {
  animateText(output, reverseString(input.value));
  output.style.opacity = '1';

  reverseBtn.classList.remove('pulse');
  void reverseBtn.offsetWidth;
  reverseBtn.classList.add('pulse');
  setTimeout(() => reverseBtn.classList.remove('pulse'), 600);

  showToast('¡Resultado confirmado!');
}

// ─── Char-by-char animation ───────────────────────────────────
function animateText(el, text) {
  el.innerHTML = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${i * 28}ms`;
    span.classList.add('char-drop');
    el.appendChild(span);
  });
}

// ─── Clear ───────────────────────────────────────────────────
clearBtn.addEventListener('click', () => {
  input.value = '';
  resetOutput();
  charCount.textContent = '0 caracteres';
  updatePips(0);
  updateButtonState(0);
  input.focus();
});

// ─── Copy ────────────────────────────────────────────────────
copyBtn.addEventListener('click', () => {
  const text = output.textContent;
  if (!text || text === 'El resultado aparecerá aquí') return;

  navigator.clipboard.writeText(text).then(() => {
    showToast('¡Copiado al portapapeles!');
    copyBtn.classList.add('copied');
    setTimeout(() => copyBtn.classList.remove('copied'), 1500);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('¡Copiado!');
  });
});

// ─── Toast ───────────────────────────────────────────────────
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 2200);
}
