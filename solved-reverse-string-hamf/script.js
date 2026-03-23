document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const result = document.getElementById('result');
  const copyBtn = document.getElementById('copyBtn');
  const clearBtn = document.getElementById('clearBtn');

  input.addEventListener('input', () => {
    const value = input.value;
    const show = value.length > 3;

    result.textContent = show ? value.split('').reverse().join('') : '';
    result.classList.toggle('hidden', !show);
    copyBtn.classList.toggle('hidden', !show);
    clearBtn.classList.toggle('hidden', value.length === 0);
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(result.textContent);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    result.textContent = '';
    result.classList.add('hidden');
    copyBtn.classList.add('hidden');
    clearBtn.classList.add('hidden');
    input.focus();
  });
});
