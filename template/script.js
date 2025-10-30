// Get DOM elements
const inputString = document.getElementById('inputString');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');
const modeRadios = document.querySelectorAll('input[name="mode"]');

// State management
let currentMode = 'button';

// Reverse string utility
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check if input meets minimum length requirement (3+ characters)
function meetsMinLength(str) {
    return str.trim().length >= 3;
}

// Update button visibility based on input length and mode
function updateButtonVisibility() {
    const inputValue = inputString.value;
    
    if (currentMode === 'button' && meetsMinLength(inputValue)) {
        reverseBtn.classList.remove('hidden');
    } else {
        reverseBtn.classList.add('hidden');
    }
}

// Display reversed string
function displayReversedString() {
    const inputValue = inputString.value;
    const trimmedValue = inputValue.trim();
    
    if (trimmedValue === '') {
        result.textContent = '';
        return;
    }
    
    if (!meetsMinLength(inputValue)) {
        result.textContent = '';
        return;
    }
    
    result.textContent = reverseString(inputValue);
}

// Handle button click
function handleButtonClick() {
    displayReversedString();
}

// Handle input changes
function handleInput() {
    updateButtonVisibility();
    
    // In real-time mode, update result as user types
    if (currentMode === 'realtime') {
        displayReversedString();
    } else {
        // In button mode, clear result when typing
        result.textContent = '';
    }
}

// Handle mode change
function handleModeChange(e) {
    currentMode = e.target.value;
    updateButtonVisibility();
    
    // Clear result when switching modes
    result.textContent = '';
    
    // If switching to real-time mode, display result immediately if valid
    if (currentMode === 'realtime' && meetsMinLength(inputString.value)) {
        displayReversedString();
    }
}

// Event listeners
reverseBtn.addEventListener('click', handleButtonClick);
inputString.addEventListener('input', handleInput);

modeRadios.forEach(radio => {
    radio.addEventListener('change', handleModeChange);
});

// Enter key support in button mode
inputString.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && currentMode === 'button' && meetsMinLength(inputString.value)) {
        handleButtonClick();
    }
});

// Initialize button visibility
updateButtonVisibility();