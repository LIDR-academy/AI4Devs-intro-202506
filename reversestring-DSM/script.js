function handleInput() {
    const input = document.getElementById('inputString').value;
    const controls = document.getElementById('controls');
    const liveOutput = document.getElementById('liveOutput');

    liveOutput.textContent = input.split('').reverse().join('');

    controls.style.display = input.length > 3 ? 'block' : 'none';
}

function reverseInput() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('output').textContent = reversed;
}

function copyResult() {
    const text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text)
        .then(() => alert('Reversed text copied!'))
        .catch(err => alert('Failed to copy: ' + err));
}

function shareOnLinkedIn() {
    const text = document.getElementById('output').textContent;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://yourapp.example.com')}&summary=${encodeURIComponent('Check out my reversed string: ' + text)}`;
    window.open(url, '_blank');
}

