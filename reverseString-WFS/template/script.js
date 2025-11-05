/**
 * Función para invertir el texto ingresado por el usuario
 */
function reverseText() {
    // Obtener el elemento input y su valor
    const inputElement = document.getElementById('inputText');
    const inputText = inputElement.value;

    // Validar que el campo no esté vacío
    if (inputText.trim() === '') {
        alert('Por favor, ingresa un texto para invertir');
        inputElement.focus();
        return;
    }

    // Invertir el texto usando diferentes métodos (puedes elegir el que prefieras)
    // Método 1: Usando split, reverse y join
    const reversedText = inputText.split('').reverse().join('');

    // Método 2 alternativo (comentado):
    // let reversedText = '';
    // for (let i = inputText.length - 1; i >= 0; i--) {
    //     reversedText += inputText[i];
    // }

    // Mostrar el resultado
    displayResult(reversedText);
}

/**
 * Función para mostrar el resultado en el DOM
 * @param {string} text - El texto invertido a mostrar
 */
function displayResult(text) {
    const resultDiv = document.getElementById('result');
    const resultTextDiv = document.getElementById('resultText');

    // Establecer el texto invertido
    resultTextDiv.textContent = text;

    // Mostrar el div de resultado con animación
    resultDiv.classList.add('show');
}

/**
 * Permitir invertir el texto al presionar Enter
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputText');
    
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseText();
        }
    });

    // Dar foco automático al campo de texto
    inputElement.focus();
});