/**
 * Lógica central para invertir la cadena.
 * Es la función que ya analizaste.
 */
function invertirCadena(cadenaDeEntrada) {
    // Convierte en array -> Invierte el array -> Une el array en una cadena
    return cadenaDeEntrada.split('').reverse().join('');
}

/**
 * Función que se ejecuta al hacer clic en el botón.
 * Se encarga de leer el input y mostrar el resultado.
 */
function procesarInversion() {
    // 1. Obtener el valor del campo de entrada (input)
    const inputElement = document.getElementById('inputCadena');
    const cadenaOriginal = inputElement.value; // .value obtiene el texto

    // 2. Aplicar la lógica de inversión
    const cadenaInvertida = invertirCadena(cadenaOriginal);

    // 3. Mostrar el resultado en el div 'resultado'
    const resultadoElement = document.getElementById('resultado');
    
    if (cadenaOriginal.trim() === "") {
        // Muestra un mensaje si el campo está vacío (ignorando espacios)
        resultadoElement.textContent = "Por favor, introduce algún texto para invertir.";
    } else {
        // Muestra el resultado de la inversión
        resultadoElement.textContent = cadenaInvertida;
    }
}