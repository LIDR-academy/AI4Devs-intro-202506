// Selección de elementos del DOM
const inputText = document.getElementById('input-text');
const resultText = document.getElementById('result-text');
const copyBtn = document.getElementById('copy-btn');

const reverseString = (str) => {
    return str.split('').reverse().join('');
};


inputText.addEventListener('input', (e) => {
    const value = e.target.value;
    resultText.textContent = reverseString(value);
});

copyBtn.addEventListener('click', async () => {
    const textToCopy = resultText.textContent;

    if (!textToCopy) return;

    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Feedback visual
        const originalText = copyBtn.innerHTML;
        copyBtn.textContent = '¡Copiado! ✅';
        copyBtn.classList.replace('btn-copy', 'btn-success');

        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.replace('btn-success', 'btn-copy');
        }, 2000);

    } catch (err) {
        console.error('Error al copiar: ', err);
    }
});