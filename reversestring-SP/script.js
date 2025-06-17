// Lógica para invertir el texto en tiempo real y mostrar el botón Reverse solo si hay más de 3 caracteres

const input = document.getElementById('inputText');
const resultDiv = document.getElementById('result');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');

function updateResult() {
    const value = input.value;
    if (value.length > 3) {
        reverseBtn.style.display = 'inline-flex';
    } else {
        reverseBtn.style.display = 'none';
    }
    resultDiv.textContent = value.split('').reverse().join('');
}

input.addEventListener('input', updateResult);

// El botón Reverse ya no es necesario, pero si se quiere mantener alguna acción, puede estar vacío o mostrar un mensaje
reverseBtn.addEventListener('click', function() {
    // Ya no hace nada, el resultado es en tiempo real
});

copyBtn.addEventListener('click', function() {
    const result = resultDiv.textContent;
    if (result) {
        navigator.clipboard.writeText(result);
    }
}); 