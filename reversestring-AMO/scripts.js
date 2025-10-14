// scripts.js - Lógica para invertir cadenas de texto

// Referencias a los elementos del DOM
const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');

/**
 * Invierte una cadena de texto
 * @param {string} str - La cadena a invertir
 * @returns {string} - La cadena invertida
 */
function reverseString(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    
    // Método 1: Usando split, reverse y join
    return str.split('').reverse().join('');
    
    // Método alternativo (comentado): usando un bucle for
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;
}

/**
 * Actualiza la visibilidad del botón basado en la longitud del texto
 * @param {string} text - El texto actual
 */
function updateButtonVisibility(text) {
    if (text.length > 3) {
        reverseBtn.classList.remove('hidden');
    } else {
        reverseBtn.classList.add('hidden');
    }
}

/**
 * Muestra el resultado de la inversión
 * @param {string} originalText - El texto original
 * @param {string} reversedText - El texto invertido
 */
function showResult(originalText, reversedText) {
    resultText.textContent = reversedText;
    result.classList.remove('hidden');
    
    // Actualizar el aria-label del botón para accesibilidad
    reverseBtn.setAttribute('aria-label', `Invertir "${originalText}"`);
}

/**
 * Oculta el resultado
 */
function hideResult() {
    result.classList.add('hidden');
    resultText.textContent = '';
}

/**
 * Maneja el evento de entrada de texto
 */
function handleTextInput() {
    const text = textInput.value.trim();
    
    // Actualizar visibilidad del botón
    updateButtonVisibility(text);
    
    // Si hay texto, mostrar resultado en tiempo real
    if (text.length > 0) {
        const reversed = reverseString(text);
        showResult(text, reversed);
    } else {
        hideResult();
    }
}

/**
 * Maneja el clic del botón de invertir
 */
function handleReverseClick() {
    const text = textInput.value.trim();
    if (text.length > 0) {
        const reversed = reverseString(text);
        showResult(text, reversed);
    }
}

/**
 * Inicializa los event listeners
 */
function initializeEventListeners() {
    // Event listener para entrada de texto (tiempo real)
    textInput.addEventListener('input', handleTextInput);
    
    // Event listener para el botón
    reverseBtn.addEventListener('click', handleReverseClick);
    
    // Event listener para Enter en el input
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !reverseBtn.classList.contains('hidden')) {
            handleReverseClick();
        }
    });
}

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
function initializeApp() {
    // Verificar que todos los elementos necesarios existen
    if (!textInput || !reverseBtn || !result || !resultText) {
        console.error('Error: No se pudieron encontrar todos los elementos del DOM necesarios');
        return;
    }
    
    // Inicializar event listeners
    initializeEventListeners();
    
    // Configurar estado inicial
    updateButtonVisibility('');
    hideResult();
    
    console.log('Aplicación de inversión de cadenas inicializada correctamente');
}

// Inicializar la aplicación cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
