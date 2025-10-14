// Función pura para invertir una cadena
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Elementos del DOM
const input = document.getElementById('textInput');
const button = document.getElementById('reverseButton');
const result = document.getElementById('result');

// Función de evento
function handleReverse() {
    const text = input.value.trim();
    if (text === '') {
        result.textContent = 'Nada que invertir…';
        result.style.opacity = 1;
        return;
    }

    const reversed = reverseString(text);
    result.style.opacity = 0;

    setTimeout(() => {
        result.textContent = reversed;
        result.style.opacity = 1;
    }, 150);
}

// Escuchar eventos
button.addEventListener('click', handleReverse);

// Soporte de accesibilidad con teclado (Enter)
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleReverse();
    }
});
