document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById('textInput');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    /**
     * Reverse string utility
     */
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    /**
     * Handle input changes with state logic
     */
    function handleInputChange() {
        const value = input.value;

        if (value.length < 4) {
            // 🔄 Modo tiempo real
            result.textContent = reverseString(value);
            button.style.display = 'none';

        } else {
            // ⛔ Modo bloqueado (espera botón)
            button.style.display = 'inline-block';
            // ⚠️ NO actualizamos el resultado aquí
        }
    }

    /**
     * Handle button click (final calculation)
     */
    function handleButtonClick() {
        const value = input.value;

        if (value.length >= 4) {
            result.textContent = reverseString(value);
        }
    }

    // Evento principal
    input.addEventListener('input', handleInputChange);

    // Evento del botón
    button.addEventListener('click', handleButtonClick);
});