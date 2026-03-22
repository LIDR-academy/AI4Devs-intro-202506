const inputText = document.getElementById('inputText');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');
const copiedMsg = document.getElementById('copiedMsg');

function reverseString(str) {
    return [...str].reverse().join('');
}

inputText.addEventListener('input', () => {
    const text = inputText.value;
    const reversed = reverseString(text);

    result.textContent = text ? reversed : '';

    if (text.length > 3) {
        copyBtn.classList.add('visible');
    } else {
        copyBtn.classList.remove('visible');
    }
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(result.textContent).then(() => {
        copiedMsg.classList.add('show');
        setTimeout(() => copiedMsg.classList.remove('show'), 1500);
    });
});
