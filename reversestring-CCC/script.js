const inputField = document.getElementById('inputText');
const button = document.getElementById('reverseBtn');
const result = document.getElementById('result');

// Show button only when input length > 3
inputField.addEventListener('input', () => {
  if (inputField.value.trim().length > 3) {
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
    result.textContent = ''; // clear result if input too short
  }
});

button.addEventListener('click', () => {
  const input = inputField.value;
  const reversed = input.split('').reverse().join('');
  result.textContent = reversed;
});
