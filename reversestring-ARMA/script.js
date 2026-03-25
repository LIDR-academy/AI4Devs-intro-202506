document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputText');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function showResult() {
        const text = input.value.trim();
        const span = document.createElement('span');

        if (text === '') {
            span.className = 'placeholder';
            span.textContent = 'Your reversed text will appear here';
        } else {
            span.textContent = reverseString(text);
        }

        result.replaceChildren(span);
    }

    button.addEventListener('click', showResult);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            showResult();
        }
    });
});
