/**
 * Función para invertir una cadena de texto
 * @param {string} str - La cadena a invertir
 * @returns {string} - La cadena invertida
 */
function reverseText(str) {
    return str.split('').reverse().join('');
}

/**
 * Función principal que se ejecuta al hacer click en el botón Reverse
 */
function reverseString() {
    const inputElement = document.getElementById('inputText');
    processInput(inputElement.value);
}

/**
 * Procesa el input y actualiza la UI en tiempo real
 * @param {string} inputText - El texto del input
 */
function processInput(inputText) {
    const trimmedText = inputText.trim();
    const resultElement = document.getElementById('resultText');
    const copyBtn = document.getElementById('copyBtn');
    const reverseBtn = document.getElementById('reverseBtn');
    
    // Mostrar/ocultar botón según la cantidad de caracteres
    if (trimmedText.length > 3) {
        reverseBtn.classList.add('visible');
    } else {
        reverseBtn.classList.remove('visible');
    }
    
    // Invertir texto en tiempo real si hay contenido
    if (trimmedText.length > 0) {
        const reversedText = reverseText(trimmedText);
        resultElement.textContent = reversedText;
        copyBtn.disabled = false;
    } else {
        resultElement.textContent = '';
        copyBtn.disabled = true;
    }
}

/**
 * Función para copiar el resultado al portapapeles
 */
function copyResult() {
    const resultText = document.getElementById('resultText').textContent;
    
    // Copiar al portapapeles usando la API moderna
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(resultText).then(() => {
            showCopyFeedback();
        }).catch(err => {
            console.error('Error al copiar: ', err);
            fallbackCopyToClipboard(resultText);
        });
    } else {
        // Fallback para navegadores más antiguos
        fallbackCopyToClipboard(resultText);
    }
}

/**
 * Método alternativo para copiar texto (fallback)
 * @param {string} text - Texto a copiar
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Error al copiar: ', err);
        alert('No se pudo copiar el texto');
    }
    
    document.body.removeChild(textArea);
}

/**
 * Muestra feedback visual cuando se copia el texto
 */
function showCopyFeedback() {
    const copyBtn = document.getElementById('copyBtn');
    const originalText = copyBtn.textContent;
    
    copyBtn.textContent = 'Copied! ✓';
    copyBtn.style.background = '#28a745';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '#6c757d';
    }, 2000);
}

/**
 * Configurar event listeners cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputText');
    
    // Procesar input en tiempo real
    inputElement.addEventListener('input', function(event) {
        processInput(event.target.value);
    });
    
    // Permitir usar Enter para invertir el texto (mantener funcionalidad)
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseString();
        }
    });
    
    // Procesar el valor inicial si existe
    processInput(inputElement.value);
});