const inputText = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const reversedText = document.getElementById('reversedText');

// Función para invertir la cadena
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Escuchar cambios en tiempo real
inputText.addEventListener('input', () => {
  const text = inputText.value;
  const reversed = reverseString(text);
  reversedText.textContent = reversed;

  // Mostrar botón solo si hay más de 3 letras
  if (text.replace(/\s/g, '').length > 3) {
    reverseBtn.style.display = 'inline-block';
  } else {
    reverseBtn.style.display = 'none';
  }
});

// También invierte el texto si se pulsa el botón manualmente
reverseBtn.addEventListener('click', () => {
  const text = inputText.value;
  const reversed = reverseString(text);
  reversedText.textContent = reversed;
});
