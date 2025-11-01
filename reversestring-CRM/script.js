const sourceText = document.getElementById('source-text');
const reversedText = document.getElementById('reversed-text');
const copyButton = document.getElementById('copy-button');

const MIN_LENGTH = 4;

function reverseString(value) {
    const normalized = value.normalize('NFC');
    return [...normalized].reverse().join('');
}

function updateUI() {
    const currentValue = sourceText.value;
    const trimmedValue = currentValue.trim();
    const reversedValue = currentValue ? reverseString(currentValue) : '—';

    reversedText.textContent = reversedValue || '—';

    if (trimmedValue.length >= MIN_LENGTH) {
        copyButton.classList.add('visible');
        copyButton.disabled = false;
    } else {
        copyButton.classList.remove('visible');
        copyButton.disabled = true;
    }
}

async function copyResult() {
    const result = reversedText.textContent;
    if (!result || result === '—') {
        return;
    }

    const originalLabel = copyButton.textContent;
    try {
        await navigator.clipboard.writeText(result);
        copyButton.textContent = '¡Copiado!';
    } catch (error) {
        console.error('No se pudo copiar el texto:', error);
        copyButton.textContent = 'No se pudo copiar';
    } finally {
        copyButton.disabled = true;
        setTimeout(() => {
            copyButton.textContent = originalLabel;
            copyButton.disabled = false;
        }, 1500);
    }
}

sourceText.addEventListener('input', updateUI);
copyButton.addEventListener('click', copyResult);

updateUI();

