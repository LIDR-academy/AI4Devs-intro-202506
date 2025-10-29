function invertirTexto() {
    const input = document.getElementById("texto");
    const resultado = document.getElementById("resultado");

    const textoOriginal = input.value.trim();

    if (textoOriginal === "") {
        resultado.textContent = "Por favor, introduce un texto.";
        return;
    }

    const textoInvertido = textoOriginal.split("").reverse().join("");
    resultado.textContent = `Resultado: ${textoInvertido}`;
}
