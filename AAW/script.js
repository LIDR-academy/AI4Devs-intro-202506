// script.js - String Reverser Logic

const inputText = document.getElementById('inputText');
const result = document.getElementById('result');

function reverseString(str) {
    return str.split('').reverse().join('');
}

inputText.addEventListener('input', function() {
    const value = this.value;
    
    if (value.trim() === '') {
        result.innerHTML = '<span class="placeholder">Your reversed text will appear here</span>';
    } else {
        const reversed = reverseString(value);
        result.textContent = reversed;
    }
});