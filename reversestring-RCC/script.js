(() => {
    const input = document.getElementById('textInput');
    const result = document.getElementById('result');
    const button = document.getElementById('reverseBtn');

    // Función pura
    const reverseString = (text) => {
        return text.split('').reverse().join('');
    };

    const updateUI = () => {
        const value = input.value;

        // Resultado en tiempo real
        if (value) {
            result.textContent = reverseString(value);
            result.classList.add('visible');
        } else {
            result.textContent = '';
            result.classList.remove('visible');
        }

        // Mostrar botón solo si > 3 caracteres
        button.style.display = value.length > 3 ? 'block' : 'none';
    };

    // Evento principal
    input.addEventListener('input', updateUI);

    // UX (no lógica)
    button.addEventListener('click', () => {
        input.focus();
    });
})();