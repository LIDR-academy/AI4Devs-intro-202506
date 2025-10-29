/**
 * Función que invierte el orden de una cadena de texto
 * @param {string} str - La cadena de texto a invertir
 * @returns {string} - La cadena invertida
 */
function reverseString(str) {
    // Si se llama desde el botón sin parámetro, obtener del input
    if (str === undefined) {
        const inputElement = document.getElementById('inputString');
        const resultElement = document.getElementById('result');
        
        if (!inputElement || !resultElement) {
            console.error('Elementos HTML no encontrados');
            return;
        }
        
        const inputValue = inputElement.value;
        
        if (inputValue.trim() === '') {
            resultElement.textContent = 'Por favor, ingresa una cadena de texto';
            resultElement.style.backgroundColor = '#ffebee';
            resultElement.style.color = '#c62828';
            return;
        }
        
        const reversed = reverseStringLogic(inputValue);
        resultElement.textContent = reversed;
        resultElement.style.backgroundColor = '#e8f5e9';
        resultElement.style.color = '#2e7d32';
    } else {
        // Si se llama con parámetro, usar lógica de inversión
        return reverseStringLogic(str);
    }
}

/**
 * Lógica principal para invertir una cadena
 * @param {string} str - La cadena a invertir
 * @returns {string} - La cadena invertida
 */
function reverseStringLogic(str) {
    // Método 1: Usando split, reverse y join (método más común)
    return str.split('').reverse().join('');
    
}

// Permitir invertir al presionar Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputString');
    if (inputElement) {
        inputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                reverseString();
            }
        });
    }
});

