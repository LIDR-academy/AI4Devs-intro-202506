// Elementos del DOM
const inputString = document.getElementById('inputString');
const reverseBtn = document.getElementById('reverseBtn');
const resultLabel = document.getElementById('resultLabel');
const copyBtn = document.getElementById('copyBtn');
const copiedMessage = document.getElementById('copiedMessage');

// Función para invertir el string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Validar longitud del input y habilitar/deshabilitar botón
inputString.addEventListener('input', function() {
    const value = this.value;
    
    if (value.length >= 3) {
        reverseBtn.disabled = false;
    } else {
        reverseBtn.disabled = true;
    }
});

// Evento para invertir el string
reverseBtn.addEventListener('click', function() {
    const inputValue = inputString.value;
    
    if (inputValue.length >= 3) {
        const reversed = reverseString(inputValue);
        resultLabel.textContent = reversed;
    }
});

// Evento para permitir invertir con Enter
inputString.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !reverseBtn.disabled) {
        reverseBtn.click();
    }
});

// Evento para copiar el resultado
copyBtn.addEventListener('click', function() {
    const resultText = resultLabel.textContent;
    
    if (resultText) {
        // Copiar al clipboard
        navigator.clipboard.writeText(resultText).then(function() {
            // Mostrar mensaje de confirmación
            copiedMessage.classList.add('show');
            
            // Ocultar mensaje después de 2 segundos
            setTimeout(function() {
                copiedMessage.classList.remove('show');
            }, 2000);
        }).catch(function(err) {
            console.error('Error al copiar:', err);
        });
    }
});