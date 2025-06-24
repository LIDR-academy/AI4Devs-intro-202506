const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');

function reverseString(str) {
  return str.split('').reverse().join('');
}

function updateUI() {
  const value = textInput.value;
  result.textContent = reverseString(value);

  if (value.length > 3) {
    reverseBtn.classList.remove('hidden');
  } else {
    reverseBtn.classList.add('hidden');
  }
}

textInput.addEventListener('input', updateUI);

reverseBtn.addEventListener('click', () => {
  // Optional: force re-render when clicking button
  result.textContent = reverseString(textInput.value);
});
