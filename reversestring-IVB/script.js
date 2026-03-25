// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Get references to DOM elements
    const input = document.getElementById('textInput');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    /**
     * Function to reverse a string
     * @param {string} str
     * @returns {string}
     */
    function reverseString(str) {
        // Convert string to array, reverse it, then join back
        return str.split('').reverse().join('');
    }

    /**
     * Handle button click
     */
    function handleReverse() {
        const value = input.value;

        // Basic validation
        if (!value) {
            result.textContent = 'Please enter a string.';
            return;
        }

        // Reverse string
        const reversed = reverseString(value);

        // Display result
        result.textContent = reversed;
    }

    // Attach event listener
    button.addEventListener('click', handleReverse);

    // Optional: allow Enter key to trigger reverse
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleReverse();
        }
    });
});