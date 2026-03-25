(() => {
    const input = document.getElementById('textInput');
    const result = document.getElementById('result');
    const button = document.getElementById('reverseBtn');

    // Función pura para invertir texto
    const reverseString = (text) => {
        return text.split('').reverse().join('');
    };

    // Actualiza el resultado en tiempo real
    const handleInputChange = () => {
        const value = input.value;

        // Mostrar resultado en tiempo real
        result.textContent = value ? reverseString(value) : '';

        // Mostrar u ocultar botón
        if (value.length > 3) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };

    // Evento en tiempo real
    input.addEventListener('input', handleInputChange);

    // (Opcional UX) botón no calcula, solo refuerza interacción
    button.addEventListener('click', () => {
        input.focus();
    });
})();