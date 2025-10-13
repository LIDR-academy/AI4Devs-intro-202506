// Reverse String Application
// This script handles real-time string reversal functionality

// Function to reverse a string
function reverseString(inputValue) {
    if (!inputValue || inputValue.trim() === '') {
        return '';
    }
    
    // Reverse the string using split, reverse, and join
    return inputValue.split('').reverse().join('');
}

// Function to update output in real-time
function updateReversedOutput() {
    const inputElement = document.getElementById('inputString');
    const outputElement = document.getElementById('outputString');
    const copyButton = document.getElementById('copyBtn');
    const reverseButton = document.getElementById('reverseBtn');
    const inputValue = inputElement.value;
    
    // Only show output and buttons when input has more than 3 characters
    if (inputValue.length > 3) {
        const reversedString = reverseString(inputValue);
        outputElement.textContent = reversedString;
        copyButton.classList.add('show');
        reverseButton.classList.add('show');
    } else {
        outputElement.textContent = '';
        copyButton.classList.remove('show');
        reverseButton.classList.remove('show');
    }
}

// Function to copy text to clipboard
function copyToClipboard() {
    const outputElement = document.getElementById('outputString');
    const textToCopy = outputElement.textContent;
    
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(function() {
            // Visual feedback for successful copy
            const copyButton = document.getElementById('copyBtn');
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<span class="copy-icon"></span>Copied!';
            copyButton.style.backgroundColor = '#28a745';
            
            setTimeout(function() {
                copyButton.innerHTML = originalText;
                copyButton.style.backgroundColor = '#6C757D';
            }, 1500);
        }).catch(function(err) {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputString');
    
    // Add event listener for real-time input changes
    inputElement.addEventListener('input', updateReversedOutput);
    
    // Add event listener for keyup to handle all typing events
    inputElement.addEventListener('keyup', updateReversedOutput);
    
    // Add event listener for paste events
    inputElement.addEventListener('paste', function() {
        // Small delay to allow paste content to be processed
        setTimeout(updateReversedOutput, 10);
    });
    
    // Initial state - no output or buttons visible
    updateReversedOutput();
});
