function reverseText() {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output').textContent = reversed;
}

function validateInput() {
    const input = document.getElementById('inputText2').value;
    const button = document.getElementById('reverseBtn2');
    button.disabled = input.length < 3;
}

function reverseText2() {
    const input = document.getElementById('inputText2').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output2').textContent = reversed;
}

function liveReverse() {
    const input = document.getElementById('inputText3').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output3').textContent = reversed;
}
