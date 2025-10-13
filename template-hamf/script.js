// DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyBtn = document.getElementById('copyBtn');
const notification = document.getElementById('notification');

// Reverse text function
const reverseString = (str) => {
    return str.split('').reverse().join('');
};

// Show notification
const showNotification = (message, type = 'success') => {
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
};

// Handle copy button click
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(outputText.value);
        showNotification('Copied to clipboard!');
    } catch (err) {
        // Fallback for older browsers
        outputText.select();
        document.execCommand('copy');
        showNotification('Copied to clipboard!');
    }
});

// Real-time text reversal on input
inputText.addEventListener('input', () => {
    const text = inputText.value;

    if (text) {
        const reversed = reverseString(text);
        outputText.value = reversed;
        copyBtn.disabled = false;
    } else {
        outputText.value = '';
        copyBtn.disabled = true;
    }
});
