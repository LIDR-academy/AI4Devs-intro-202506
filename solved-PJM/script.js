/**
 * Reverse String ES
 * Invierte el orden de los caracteres de una cadena de texto.
 * Ejemplo: "AI4Devs" → "sveD4IA"
 */

/**
 * Invierte los caracteres de un string.
 * @param {string} str - La cadena a invertir.
 * @returns {string} La cadena invertida.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

/**
 * Lee el valor del input, lo invierte y lo muestra en pantalla.
 */
function reverseString() {
    const input = document.getElementById('inputText');
    const resultBlock = document.getElementById('resultBlock');
    const outputText = document.getElementById('outputText');

    const value = input.value.trim();

    if (!value) {
        input.focus();
        return;
    }

    const reversed = reverse(value);

    outputText.textContent = reversed;

    // Mostrar bloque resultado con animación
    resultBlock.classList.remove('visible');
    void resultBlock.offsetWidth; // forzar reflow para reiniciar animación
    resultBlock.classList.add('visible');
}

/**
 * Copia el resultado al portapapeles y muestra confirmación breve.
 */
function copyResult() {
    const text = document.getElementById('outputText').textContent;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        const confirm = document.getElementById('copyConfirm');
        confirm.classList.add('show');
        setTimeout(() => confirm.classList.remove('show'), 1800);
    });
}

// Permitir disparar la inversión con la tecla Enter
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputText').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') reverseString();
    });
});
