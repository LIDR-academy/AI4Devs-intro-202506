const input  = document.getElementById('inputText');
const output = document.getElementById('output');

input.addEventListener('input', () => {
    const value = input.value;

    if (value.length === 0) {
        output.textContent = '—';
        output.classList.add('empty');
    } else {
        output.textContent = value.split('').reverse().join('');
        output.classList.remove('empty');
    }
});
