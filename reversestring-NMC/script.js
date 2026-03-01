const copyBtn = document.getElementById('copyBtn');
const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const copyFeedback = document.getElementById('copyFeedback');

inputText.addEventListener('input', () => {
    const reversed = inputText.value.split('').reverse().join('');
    output.textContent = reversed;
    copyBtn.style.display = reversed ? 'inline-block' : 'none';
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent).then(() => {
        copyFeedback.textContent = '✅ Copied to clipboard!';
        setTimeout(() => { copyFeedback.textContent = ''; }, 3000);
    });
});
