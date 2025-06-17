// Función para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función para mostrar el resultado en tiempo real
function showRealTimeResult(text) {
    const resultDiv = document.getElementById('result');
    const reversedTextElement = document.getElementById('reversedText');
    
    if (text.length > 0) {
        const reversedText = reverseString(text);
        reversedTextElement.textContent = reversedText;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.style.display = 'none';
    }
}

// Función para copiar el texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Cambiar temporalmente el texto del botón para dar feedback
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '¡Copiado!';
        copyBtn.classList.remove('btn-outline-secondary');
        copyBtn.classList.add('btn-success');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('btn-success');
            copyBtn.classList.add('btn-outline-secondary');
        }, 2000);
    }).catch(function(err) {
        console.error('Error al copiar: ', err);
        alert('No se pudo copiar el texto');
    });
}

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const copyBtn = document.getElementById('copyBtn');
    
    // Asegurar que el resultado esté oculto al cargar la página
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    
    // Verificar estado inicial del input
    const initialText = textInput.value || '';
    showRealTimeResult(initialText);
    
    // Manejar el botón de copiar
    copyBtn.addEventListener('click', function() {
        const reversedText = document.getElementById('reversedText').textContent;
        if (reversedText) {
            copyToClipboard(reversedText);
        }
    });
    
    // Invertir texto en tiempo real
    textInput.addEventListener('input', function() {
        const currentText = textInput.value;
        showRealTimeResult(currentText);
    });
});
