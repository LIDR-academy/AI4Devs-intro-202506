function reverseString() {
    // Obtenemos el valor del input
    const inputElement = document.getElementById('userInput');
    const resultElement = document.getElementById('result');
    
    const originalText = inputElement.value;
    
    // La magia: invertimos el texto
    const reversedText = originalText.split('').reverse().join('');
    
    // Mostramos el resultado en el HTML
    resultElement.innerText = reversedText;
}