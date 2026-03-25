/**
 * 1. Lógica Pura (Transformación de datos)
 * Esta función es independiente del DOM. Podrías usarla en cualquier otro proyecto.
 */
const reverseString = (text) => [...text].reverse().join('');

/**
 * 2. Manejador de Interfaz (UI Handler)
 * Se encarga de coordinar la entrada, la transformación y la salida visual.
 */
const handleTextInput = (event) => {
    const displayElement = document.getElementById('resultText');
    const value = event.target.value;

    // Gestión de estado vacío
    if (!value.trim()) {
        displayElement.textContent = "El texto invertido aparecerá aquí";
        displayElement.classList.add('placeholder-text');
        return;
    }

    // Aplicamos la lógica y actualizamos la interfaz
    displayElement.textContent = reverseString(value);
    displayElement.classList.remove('placeholder-text');
};

/**
 * 3. Inicialización de Eventos
 * Solo una vez que el script carga, vinculamos las funciones a los elementos.
 */
const inputElement = document.getElementById('userInput');

if (inputElement) {
    inputElement.addEventListener('input', handleTextInput);
}