function reverseString() {
    const inputElement = document.getElementById('userInput');
    const resultElement = document.getElementById('result');
    
    const originalText = inputElement.value;
    
    const reversedText = originalText.split('').reverse().join('');
    
    resultElement.innerText = reversedText;
}

// Esta es la línea que pide el bot: conectamos el clic del botón con la función
document.getElementById('reverseButton').addEventListener('click', reverseString);