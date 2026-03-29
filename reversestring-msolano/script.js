const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");

inputText.addEventListener("input", function () {
    const text = inputText.value;

    // Mostrar el botón solo si el texto tiene más de 3 caracteres
    if (text.length > 3) {
        reverseBtn.style.display = "inline-block";
    } else {
        reverseBtn.style.display = "none";
    }

    // Actualizar el texto invertido en tiempo real
    result.textContent = text.split("").reverse().join("");
});