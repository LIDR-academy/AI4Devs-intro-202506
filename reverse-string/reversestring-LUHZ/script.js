/**
 * Actualiza el resultado en tiempo real y muestra u oculta el botón según la longitud del texto.
 */
function handleInputChange() {
  const input = document.getElementById('inputText');
  const text = input.value.trim();
  const button = document.getElementById('reverseBtn');

  // Mostrar el botón solo si hay más de 3 caracteres
  button.style.display = text.length > 3 ? 'inline-block' : 'none';

  // Actualizar la vista en tiempo real
  updateReversedText(text);
}

/**
 * Invierte el texto introducido en el input.
 * @param {string} text - Cadena a invertir
 * @returns {string} - Cadena invertida
 */
function reverse(text) {
  return text.split('').reverse().join('');
}

/**
 * Muestra en pantalla la cadena invertida (en tiempo real).
 * @param {string} text - Cadena a invertir y mostrar
 */
function updateReversedText(text) {
  const result = document.getElementById('result');
  result.textContent = text ? reverse(text) : '';
}

/**
 * Se ejecuta al hacer clic en el botón (opcional si ya se ve el resultado en tiempo real).
 */
function reverseString() {
  const input = document.getElementById('inputText');
  const text = input.value.trim();
  updateReversedText(text);
}
