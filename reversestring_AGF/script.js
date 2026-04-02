// Seleccionamos el input y el área donde mostraremos el texto invertido
const textInput = document.getElementById("textInput");
const reversedText = document.getElementById("reversedText");

// Escuchamos el evento "input" para detectar cambios en tiempo real
textInput.addEventListener("input", function () {
  const originalText = textInput.value;

  // Convertimos el texto en array, lo invertimos y lo unimos de nuevo
  const reversed = originalText.split("").reverse().join("");

  // Mostramos el resultado en pantalla
  reversedText.textContent = reversed;
});