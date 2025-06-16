const input = document.getElementById("textInput");
const button = document.getElementById("reverseBtn");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  const value = input.value;

  // Mostrar botón si hay más de 3 caracteres
  button.style.display = value.length > 3 ? "inline-block" : "none";

  // Mostrar texto invertido en tiempo real
  output.textContent = value.split("").reverse().join("");
});

// El botón queda por si luego se le quiere dar funcionalidad adicional
button.addEventListener("click", () => {
  alert("¡Texto invertido actualizado!");
});