// Obtener referencias a los elementos del DOM
const textInput = document.getElementById("textInput");
const resultText = document.getElementById("resultText");

/**
 * Invierte el orden de los caracteres de una cadena
 * @param {string} str - La cadena a invertir
 * @returns {string} La cadena invertida
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Maneja el evento de entrada del usuario
 * Actualiza el resultado con el texto invertido
 */
function handleInput() {
  const inputValue = textInput.value;

  if (inputValue.trim() === "") {
    // Si el input está vacío, mostrar mensaje placeholder
    resultText.textContent = "El texto invertido aparecerá aquí";
    resultText.classList.add("empty");
  } else {
    // Invertir y mostrar el texto
    const reversed = reverseString(inputValue);
    resultText.textContent = reversed;
    resultText.classList.remove("empty");
  }
}

// Event listener para detectar cambios en tiempo real
textInput.addEventListener("input", handleInput);

// Focus automático en el input al cargar la página
textInput.focus();
