// Función para borrar el texto del input
function clearText() {
    const inputElement = document.getElementById('inputString');
    const resultElement = document.getElementById('result');
    const button = document.querySelector('button');
    const clearButton = document.getElementById('clearButton');
    
    inputElement.value = '';
    resultElement.textContent = 'El resultado aparecerá aquí...';
    resultElement.style.color = 'white';
    button.style.display = 'none';
    clearButton.style.display = 'none';
}

// Función principal para invertir una cadena de texto
function reverseString() {
    // Obtener el elemento de entrada
    const inputElement = document.getElementById('inputString');
    const resultElement = document.getElementById('result');
    
    // Obtener el valor del input
    const inputText = inputElement.value.trim();
    
    // Validar que no esté vacío
    if (inputText === '') {
        resultElement.textContent = '⚠️ Por favor, introduce algún texto para invertir';
        resultElement.style.color = '#ff6b6b';
        return;
    }
    
    // Invertir la cadena usando múltiples métodos
    const reversedText = reverseStringMethod(inputText);
    
    // Mostrar el resultado
    resultElement.textContent = `Resultado: "${reversedText}"`;
    resultElement.style.color = '#00d2d3';
}

// Método 1: Usando split(), reverse() y join()
function reverseStringMethod(str) {
    return str.split('').reverse().join('');
}

// Método alternativo: Usando un bucle for
function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Método alternativo: Usando recursión
function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    }
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

// Método alternativo: Usando reduce()
function reverseStringReduce(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Función para manejar la tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputString');
    
    // Permitir invertir con la tecla Enter
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseString();
        }
    });
    
    // Limpiar el resultado cuando el usuario empiece a escribir
    inputElement.addEventListener('input', function() {
        const resultElement = document.getElementById('result');
        if (this.value === '') {
            resultElement.textContent = 'El resultado aparecerá aquí...';
            resultElement.style.color = 'white';
        }
    });
});

// Función adicional para demostrar diferentes métodos
function demonstrateMethods() {
    const testString = "AI4Devs";
    console.log("Método 1 (split/reverse/join):", reverseStringMethod(testString));
    console.log("Método 2 (bucle for):", reverseStringLoop(testString));
    console.log("Método 3 (recursión):", reverseStringRecursive(testString));
    console.log("Método 4 (reduce):", reverseStringReduce(testString));
}

// Ejecutar demostración en la consola
demonstrateMethods();
