document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputString');
  const resultContainer = document.getElementById('resultContainer');
  const resultText = document.getElementById('resultText');
  const reverseButton = document.getElementById('reverseButton');

  // Función para invertir texto
  const reverseString = (str) => str.split('').reverse().join('');

  // Escuchar entrada en tiempo real
  input.addEventListener('input', () => {
    const text = input.value.trim();

    // Mostrar/ocultar el botón según la longitud del texto
    if (text.length > 3) {
      reverseButton.classList.remove('hidden');
    } else {
      reverseButton.classList.add('hidden');
    }

    // Actualizar el texto invertido en tiempo real
    if (text.length > 0) {
      resultText.textContent = reverseString(text);
      resultContainer.classList.remove('hidden');
    } else {
      resultContainer.classList.add('hidden');
    }
  });

  // También permitir que el usuario pulse el botón si desea "refrescar" manualmente
  reverseButton.addEventListener('click', () => {
    const text = input.value.trim();
    resultText.textContent = reverseString(text);
    resultContainer.classList.remove('hidden');
  });
});
