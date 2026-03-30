const inputText = document.getElementById('inputText');
const output = document.getElementById('output');

inputText.addEventListener('input', function() {
    const reversed = this.value.split('').reverse().join('');
    output.textContent = reversed;
});