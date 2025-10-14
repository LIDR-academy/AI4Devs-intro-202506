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
    // Obtener el texto del input
    const inputElement = document.getElementById('inputText');
    const inputText = inputElement.value.trim();
    
    // Obtener el elemento donde mostrar el resultado
    const resultElement = document.getElementById('resultText');
    const copyBtn = document.getElementById('copyBtn');
    
    // Validar que hay texto para invertir
    if (inputText === '') {
        resultElement.textContent = '';
        copyBtn.disabled = true;
        return;
    }
    
    // Invertir el texto
    const reversedText = reverseText(inputText);
    
    // Mostrar el resultado
    resultElement.textContent = reversedText;
    
    // Habilitar el botón de copiar
    copyBtn.disabled = false;
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
    
    // Permitir usar Enter para invertir el texto
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseString();
        }
    });
    
    // Limpiar resultado cuando el input esté vacío
    inputElement.addEventListener('input', function() {
        if (this.value.trim() === '') {
            document.getElementById('resultText').textContent = '';
            document.getElementById('copyBtn').disabled = true;
        }
    });
});