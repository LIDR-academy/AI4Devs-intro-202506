const input = document.getElementById('textInput');
const button = document.getElementById('reverseBtn');
const result = document.getElementById('result');

// Mostrar el botón solo si hay más de 3 caracteres
input.addEventListener('input', () => {
  if (input.value.length > 3) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
    result.textContent = ''; // Limpia el resultado si el texto es muy corto
  }
});

// Función para invertir el string
button.addEventListener('click', () => {
  const reversed = input.value.split('').reverse().join('');
  result.textContent = reversed;
});
