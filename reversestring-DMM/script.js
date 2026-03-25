/**
 * Lógica para invertir texto en tiempo real
 */
document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('userInput');
    const displayElement = document.getElementById('resultText');

    // Escuchamos el evento 'input' para actualización inmediata
    inputElement.addEventListener('input', (event) => {
        const text = event.target.value;

        if (text.trim().length === 0) {
            displayElement.textContent = "El texto invertido aparecerá aquí";
            displayElement.classList.add('placeholder-text');
            return;
        }

        // Lógica de reversión usando spread operator y métodos de array (ES6+)
        const reversed = [...text].reverse().join('');
        
        displayElement.textContent = reversed;
        displayElement.classList.remove('placeholder-text');
    });
});