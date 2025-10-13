// Función que invierte una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Función que toma el input del usuario y muestra el resultado invertido
function reverseInput() {
    const input = document.getElementById('inputString').value;
    const reversed = reverseString(input);
    document.getElementById('result').textContent = `Reversed string: ${reversed}`;
}
