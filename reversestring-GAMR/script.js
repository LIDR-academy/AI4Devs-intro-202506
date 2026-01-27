document.addEventListener("DOMContentLoaded", () => {
    const inputTexto = document.getElementById("texto");
    const btnInvertir = document.getElementById("btnInvertir");
    const resultado = document.getElementById("resultado");
    const alertaError = document.getElementById("alertaError");
    const alertaExito = document.getElementById("alertaExito");

    let timeoutId = null;

    function limpiarEstados() {
        alertaError.classList.add("d-none");
        alertaExito.classList.add("d-none");
        resultado.classList.add("d-none");
        inputTexto.classList.remove("border-red-500", "ring-2", "ring-red-500");
    }

    function mostrarError(mensaje) {
        limpiarEstados();
        alertaError.textContent = mensaje;
        alertaError.classList.remove("d-none");

        // Estilo Tailwind para error
        inputTexto.classList.add("border-red-500", "ring-2", "ring-red-500");
    }

    function mostrarExito(textoInvertido) {
        limpiarEstados();

        resultado.textContent = textoInvertido;
        resultado.classList.remove("d-none");

        alertaExito.classList.remove("d-none");

        inputTexto.value = "";

        // Ocultar resultado y alerta tras 10 segundos
        timeoutId = setTimeout(() => {
            limpiarEstados();
        }, 10000);
    }

    function invertirTexto() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        const texto = inputTexto.value.trim();

        if (texto.length < 3 || texto.length > 20) {
            mostrarError("El texto debe tener entre 3 y 20 caracteres.");
            return;
        }

        const textoInvertido = texto.split("").reverse().join("");
        mostrarExito(textoInvertido);
    }

    btnInvertir.addEventListener("click", invertirTexto);

    inputTexto.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            invertirTexto();
        }
    });
});