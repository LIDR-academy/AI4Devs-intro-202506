// Obtener referencias a los elementos del DOM
const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");
const resultContainer = document.getElementById("resultContainer");
const charCount = document.getElementById("charCount");

/**
 * Función para invertir un string
 * Utiliza el método de array para manejar correctamente caracteres Unicode
 * incluyendo emojis y caracteres especiales
 * @param {string} str - El string a invertir
 * @returns {string} - El string invertido
 */
function reverseString(str) {
  // Convertir el string a array, invertir y volver a unir
  // Esto maneja correctamente caracteres Unicode y emojis
  return Array.from(str).reverse().join("");
}

/**
 * Función principal que maneja el evento de input
 * Se ejecuta cada vez que el usuario escribe en el campo
 */
function handleInput() {
  const value = inputText.value;

  // Actualizar contador de caracteres
  const length = Array.from(value).length;
  charCount.textContent = `${length} caracter${length !== 1 ? "es" : ""}`;

  // Si el campo está vacío, mostrar mensaje placeholder
  if (value === "") {
    resultText.textContent = "Tu texto invertido aparecerá aquí...";
    resultText.classList.add("empty");
    resultContainer.classList.remove("active");
    return;
  }

  // Invertir el texto y mostrarlo
  const reversed = reverseString(value);
  resultText.textContent = reversed;
  resultText.classList.remove("empty");
  resultContainer.classList.add("active");
}

// Event Listener para detectar cambios en tiempo real
inputText.addEventListener("input", handleInput);

// Enfoque automático al cargar la página
window.addEventListener("load", () => {
  inputText.focus();
});

// Prevenir el envío del formulario (aunque ya tiene onsubmit="return false")
document.getElementById("reverseForm").addEventListener("submit", (e) => {
  e.preventDefault();
});
