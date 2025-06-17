// String Reverser - Real-time Implementation
// AI4Devs Certification Exercise

class StringReverser {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.currentReversedText = '';
    }

    // Initialize DOM elements
    initializeElements() {
        this.inputText = document.getElementById('inputText');
        this.reverseBtn = document.getElementById('reverseBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.resultSection = document.getElementById('resultSection');
        this.resultText = document.getElementById('resultText');
        this.copyFeedback = document.getElementById('copyFeedback');
        this.buttonGroup = document.querySelector('.button-group');
    }

    // Bind event listeners
    bindEvents() {
        // Real-time input processing
        this.inputText.addEventListener('input', (e) => {
            this.handleInputChange(e.target.value);
        });

        // Manual reverse button (when visible)
        this.reverseBtn.addEventListener('click', () => {
            this.reverseString(this.inputText.value);
        });

        // Copy functionality
        this.copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });

        // Enter key support for accessibility
        this.inputText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.inputText.value.length > 3) {
                this.reverseString(this.inputText.value);
            }
        });

        // Focus input on page load
        window.addEventListener('load', () => {
            this.inputText.focus();
        });
    }

    // Handle input changes with real-time processing
    handleInputChange(inputValue) {
        const trimmedValue = inputValue.trim();
        
        // Update button visibility based on character count
        this.updateButtonVisibility(trimmedValue.length);
        
        // Real-time reversal for any input
        if (trimmedValue.length > 0) {
            this.reverseString(trimmedValue, true); // true = real-time mode
        } else {
            this.clearResult();
        }
    }

    // Update button visibility based on input length
    updateButtonVisibility(inputLength) {
        const shouldShowReverseBtn = inputLength > 3;
        
        if (shouldShowReverseBtn) {
            this.reverseBtn.style.display = 'flex';
            this.buttonGroup.classList.remove('single-button');
        } else {
            this.reverseBtn.style.display = 'none';
            this.buttonGroup.classList.add('single-button');
        }
    }

    // Core string reversal logic
    reverseString(text, isRealTime = false) {
        if (!text || typeof text !== 'string') {
            this.clearResult();
            return;
        }

        try {
            // Multiple reversal methods for robustness
            const reversed = this.performReversal(text);
            
            // Update the result
            this.updateResult(reversed, isRealTime);
            
            // Store current result
            this.currentReversedText = reversed;
            
        } catch (error) {
            console.error('Error reversing string:', error);
            this.showError();
        }
    }

    // Perform the actual string reversal using multiple methods
    performReversal(text) {
        // Method 1: Using built-in array methods (most common)
        const method1 = text.split('').reverse().join('');
        
        // Method 2: Manual loop (for verification)
        let method2 = '';
        for (let i = text.length - 1; i >= 0; i--) {
            method2 += text[i];
        }
        
        // Verify both methods produce same result
        if (method1 !== method2) {
            console.warn('Reversal methods produced different results');
        }
        
        return method1;
    }

    // Update the result display
    updateResult(reversedText, isRealTime = false) {
        this.resultText.textContent = reversedText;
        this.resultText.classList.remove('result-placeholder');
        this.resultSection.classList.add('has-result');
        
        // Enable copy button
        this.copyBtn.disabled = false;
        
        // Add subtle animation for real-time updates
        if (isRealTime) {
            this.resultText.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.resultText.style.transform = 'scale(1)';
            }, 150);
        }
    }

    // Clear the result display
    clearResult() {
        this.resultText.textContent = 'Your reversed text will appear here...';
        this.resultText.classList.add('result-placeholder');
        this.resultSection.classList.remove('has-result');
        this.copyBtn.disabled = true;
        this.currentReversedText = '';
    }

    // Copy result to clipboard
    async copyToClipboard() {
        if (!this.currentReversedText) return;

        try {
            // Modern clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(this.currentReversedText);
            } else {
                // Fallback for older browsers
                this.fallbackCopyToClipboard(this.currentReversedText);
            }
            
            this.showCopyFeedback();
            
        } catch (error) {
            console.error('Failed to copy text:', error);
            // Try fallback method
            this.fallbackCopyToClipboard(this.currentReversedText);
        }
    }

    // Fallback copy method for older browsers
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showCopyFeedback();
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }
        
        document.body.removeChild(textArea);
    }

    // Show copy success feedback
    showCopyFeedback() {
        this.copyFeedback.classList.add('show');
        setTimeout(() => {
            this.copyFeedback.classList.remove('show');
        }, 2000);
    }

    // Show error state
    showError() {
        this.resultText.textContent = 'Error processing text. Please try again.';
        this.resultText.style.color = '#ef4444';
        this.resultSection.classList.remove('has-result');
        this.copyBtn.disabled = true;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StringReverser();
});

// Add some utility functions for potential future enhancements
const StringUtils = {
    // Check if string is palindrome
    isPalindrome: (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    },
    
    // Count characters
    getCharCount: (str) => ({
        total: str.length,
        letters: str.replace(/[^a-zA-Z]/g, '').length,
        numbers: str.replace(/[^0-9]/g, '').length,
        spaces: str.replace(/[^ ]/g, '').length
    }),
    
    // Reverse words individually (keeping word positions)
    reverseWords: (str) => {
        return str.split(' ')
                  .map(word => word.split('').reverse().join(''))
                  .join(' ');
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StringReverser, StringUtils };
}