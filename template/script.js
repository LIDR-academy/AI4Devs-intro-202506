const input = document.getElementById('inputText');
const button = document.getElementById('reverseBtn');
const result = document.getElementById('result');

input.addEventListener('input', () => {
  const text = input.value;

  // Mostrar botón si hay más de 3 caracteres
  if (text.length > 3) {
    button.style.display = 'inline-block';
  } else {
    button.style.display = 'none';
  }

  // Mostrar resultado en tiempo real
  result.textContent = text.split('').reverse().join('');
});

button.addEventListener('click', () => {
  const text = input.value;
  result.textContent = text.split('').reverse().join('');
});
