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
        inputTexto.classList.add("border-red-500", "ring-2", "ring-red-500");
    }

    function mostrarResultado(textoInvertido) {
        limpiarEstados();
        resultado.textContent = textoInvertido;
        resultado.classList.remove("d-none");
        alertaExito.classList.remove("d-none");

        timeoutId = setTimeout(() => {
            limpiarEstados();
            inputTexto.value = "";
            btnInvertir.classList.add("d-none");
        }, 10000);
    }

    function procesarTexto() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        const texto = inputTexto.value.trim();

        // Control de visibilidad del botón
        if (texto.length > 3) {
            btnInvertir.classList.remove("d-none");
        } else {
            btnInvertir.classList.add("d-none");
        }

        // Validación mínima
        if (texto.length === 0) {
            limpiarEstados();
            return;
        }

        if (texto.length < 3) {
            mostrarError("El texto debe tener al menos 3 caracteres.");
            return;
        }

        if (texto.length > 20) {
            mostrarError("El texto no puede superar los 20 caracteres.");
            return;
        }

        const textoInvertido = texto.split("").reverse().join("");
        mostrarResultado(textoInvertido);
    }

    // Tiempo real
    inputTexto.addEventListener("input", procesarTexto);

    // Botón (opcional)
    btnInvertir.addEventListener("click", procesarTexto);

    // Enter
    inputTexto.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            procesarTexto();
        }
    });
});
