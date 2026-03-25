const inputElement = document.getElementById('userInput');
const displayElement = document.getElementById('resultText');

inputElement.addEventListener('input', (event) => {
    const text = event.target.value;

    if (!text.trim()) {
        displayElement.textContent = "El texto invertido aparecerá aquí";
        displayElement.classList.add('placeholder-text');
        return;
    }

    displayElement.textContent = [...text].reverse().join('');
    displayElement.classList.remove('placeholder-text');
});