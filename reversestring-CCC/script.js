document.getElementById('reverseBtn').addEventListener('click', function() {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = reversed;
});
