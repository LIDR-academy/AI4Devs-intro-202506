document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reverseForm');
  const input = document.getElementById('inputString');
  const resultContainer = document.getElementById('resultContainer');
  const resultText = document.getElementById('resultText');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const original = input.value.trim();
    if (!original) {
      resultContainer.classList.add('hidden');
      return;
    }

    const reversed = original.split('').reverse().join('');
    resultText.textContent = reversed;
    resultContainer.classList.remove('hidden');
  });
});
