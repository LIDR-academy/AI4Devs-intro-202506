/**
 * Reverses a given string
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
function reverseString(str) {
    if (!str) return '';
    
    // Convert string to array, reverse it, and join back
    // This handles Unicode characters properly
    return Array.from(str).reverse().join('');
}

/**
 * Updates the result element with the reversed string
 */
function updateResult() {
    const inputElement = document.getElementById('inputString');
    const resultElement = document.getElementById('result');
    
    if (!inputElement || !resultElement) return;
    
    const inputValue = inputElement.value;
    const reversedValue = reverseString(inputValue);
    
    resultElement.textContent = reversedValue;
}

/**
 * Enables or disables the Reverse button based on input length
 */
function updateButtonState() {
    const inputElement = document.getElementById('inputString');
    const reverseBtn = document.getElementById('reverseBtn');
    
    if (!inputElement || !reverseBtn) return;
    
    const length = inputElement.value.length;
    reverseBtn.disabled = length < 3;
}

/**
 * Copies the reversed text to clipboard
 */
async function copyToClipboard() {
    const resultElement = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');
    
    if (!resultElement || !copyBtn) return;
    
    const textToCopy = resultElement.textContent;
    
    if (!textToCopy) {
        alert('Nothing to copy!');
        return;
    }
    
    try {
        // Modern clipboard API
        await navigator.clipboard.writeText(textToCopy);
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
        
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            copyBtn.textContent = 'Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            alert('Failed to copy text. Please select and copy manually.');
        }
        
        document.body.removeChild(textarea);
    }
}

/**
 * Initializes the event listeners when the DOM is fully loaded
 */
function initApp() {
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const inputElement = document.getElementById('inputString');
    
    if (reverseBtn) {
        reverseBtn.addEventListener('click', updateResult);
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyToClipboard);
    }
    
    if (inputElement) {
        // Live reverse on each input
        inputElement.addEventListener('input', () => {
            updateResult();
            updateButtonState();
        });
        
        // Allow pressing Enter to trigger reverse (if button enabled)
        inputElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !reverseBtn.disabled) {
                updateResult();
            }
        });
    }
    
    // Set initial reversed value and button state
    updateResult();
    updateButtonState();
}

// Wait for the DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM is already loaded
    initApp();
}