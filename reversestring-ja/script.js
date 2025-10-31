// Obtener elementos del DOM
const wordInput = document.getElementById('wordInput');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');
const reversedWord = document.getElementById('reversedWord');
const charCount = document.getElementById('charCount');

/**
 * Función que invierte una cadena de texto
 * @param {string} str - Cadena a invertir
 * @returns {string} - Cadena invertida
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Actualiza la interfaz según el contenido del input
 */
function updateUI() {
    const text = wordInput.value.trim();
    const length = text.length;
    
    // Actualizar contador de caracteres
    charCount.textContent = `${length} ${length === 1 ? 'carácter' : 'caracteres'}`;
    
    // Mostrar/ocultar botón según la longitud (más de 3 caracteres)
    if (length > 3) {
        reverseBtn.classList.add('show');
    } else {
        reverseBtn.classList.remove('show');
        result.classList.remove('show');
    }
}

/**
 * Muestra la cadena invertida en la interfaz
 */
function showReversed() {
    const text = wordInput.value.trim();
    if (text.length > 3) {
        reversedWord.textContent = reverseString(text);
        result.classList.add('show');
    }
}

// Event Listeners

// Actualizar UI mientras se escribe
wordInput.addEventListener('input', () => {
    updateUI();
    // Si el resultado ya está visible, actualizarlo en tiempo real
    if (result.classList.contains('show')) {
        showReversed();
    }
});

// Invertir al hacer click en el botón
reverseBtn.addEventListener('click', showReversed);

// Permitir presionar Enter para invertir
wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && wordInput.value.trim().length > 3) {
        showReversed();
    }
});