function revertirTexto() {
    // Obtener texto del input
    const texto = document.getElementById("inputTexto").value;

    // Invertir string
    const textoRevertido = texto.split("").reverse().join("");

    // Mostrar resultado
    document.getElementById("resultado").textContent = textoRevertido;
}