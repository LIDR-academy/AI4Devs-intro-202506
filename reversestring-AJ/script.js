/**
 * Función que invierte una cadena de texto
 * Toma el valor del input, lo invierte y muestra el resultado
 */
function reverseString() {
    // Obtener el valor del input
    const input = document.getElementById('inputString');
    const inputValue = input.value;

    // Validar que el input no esté vacío
    if (inputValue.trim() === '') {
        alert('Por favor, ingresa una cadena de texto');
        return;
    }

    // Invertir la cadena usando split, reverse y join
    // split('') convierte el string en array de caracteres
    // reverse() invierte el orden del array
    // join('') une el array de vuelta en un string
    const reversedString = inputValue.split('').reverse().join('');

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    const reversedText = document.getElementById('reversedText');
    
    reversedText.textContent = reversedString;
    resultDiv.classList.add('show');
}

// Permitir invertir la cadena presionando Enter
document.getElementById('inputString').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        reverseString();
    }
});
