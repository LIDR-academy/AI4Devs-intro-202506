// Obtener referencias a los elementos del DOM
const inputTextElement = document.getElementById('inputText');
const reverseButton = document.getElementById('reverseButton');
const outputTextElement = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');
const feedbackMessage = document.getElementById('feedbackMessage');

/**
 * Invierte una cadena de texto.
 * Utiliza Array.from() para manejar correctamente caracteres Unicode como emojis.
 * @param {string} str La cadena a invertir.
 * @returns {string} La cadena invertida.
 */
function reverseString(str) {
    return Array.from(str).reverse().join('');
}

// Asignar el evento click al botón de revertir
reverseButton.addEventListener('click', () => {
    const originalText = inputTextElement.value;
    const reversedText = reverseString(originalText);
    outputTextElement.value = reversedText;
    feedbackMessage.textContent = '¡Texto invertido con éxito!';
    setTimeout(() => {
        feedbackMessage.textContent = ''; // Limpiar mensaje después de 3 segundos
    }, 3000);
});

// Asignar el evento click al botón de copiar
copyButton.addEventListener('click', () => {
    // Seleccionar el texto en la caja de salida
    outputTextElement.select();
    // Para dispositivos móviles que pueden no soportar select() o para compatibilidad
    outputTextElement.setSelectionRange(0, 99999); // Para móviles

    // Intentar copiar usando la API moderna del portapapeles
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(outputTextElement.value)
            .then(() => {
                feedbackMessage.textContent = '¡Texto copiado al portapapeles!';
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                }, 3000);
            })
            .catch(err => {
                console.error('Error al copiar texto con navigator.clipboard: ', err);
                feedbackMessage.textContent = 'No se pudo copiar el texto. Intenta hacerlo manualmente.';
            });
    } else {
        // Fallback para navegadores antiguos o entornos sin navigator.clipboard
        try {
            document.execCommand('copy');
            feedbackMessage.textContent = '¡Texto copiado al portapapeles (método antiguo)!';
            setTimeout(() => {
                feedbackMessage.textContent = '';
            }, 3000);
        } catch (err) {
            console.error('Error al intentar copiar con document.execCommand: ', err);
            feedbackMessage.textContent = 'Tu navegador no soporta la copia automática.';
        }
    }
});