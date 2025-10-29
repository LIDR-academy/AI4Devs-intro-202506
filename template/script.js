const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("botonInvertir");

input.addEventListener("input", () => {
    const textoOriginal = input.value;

    // Mostrar el botón solo si hay más de 3 caracteres
    if (textoOriginal.length > 3) {
        boton.style.display = "inline-block";
    } else {
        boton.style.display = "none";
    }

    // Mostrar el texto invertido en tiempo real
    if (textoOriginal.trim() === "") {
        resultado.textContent = "";
    } else {
        const textoInvertido = textoOriginal.split("").reverse().join("");
        resultado.textContent = `Resultado: ${textoInvertido}`;
    }
});

// Función opcional del botón (por ejemplo, alerta)
function mostrarAlerta() {
    alert("Texto actual invertido mostrado en tiempo real 😉");
}
