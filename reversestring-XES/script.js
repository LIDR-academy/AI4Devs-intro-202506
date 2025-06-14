// String Reverser JavaScript Functions
// Multiple methods to reverse a string

// Method 1: Using built-in array methods (most common)
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop (more performant for large strings)
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using recursion (elegant but can cause stack overflow for very long strings)
function reverseString3(str) {
    if (str === '') return '';
    return str.charAt(str.length - 1) + reverseString3(str.substring(0, str.length - 1));
}

// Method 4: Using Array.from and reverse
function reverseString4(str) {
    return Array.from(str).reverse().join('');
}

// Method 5: Using spread operator (modern ES6 approach)
function reverseString5(str) {
    return [...str].reverse().join('');
}

// Method 6: Using reduce (functional programming approach)
function reverseString6(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Main function that uses Method 1 (most reliable and readable)
function reverseString(str) {
    return reverseString1(str);
}

// Utility Functions

// Check if a string is a palindrome
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === reverseString(clean);
}

// Count words in a string
function countWords(str) {
    return str.trim() === '' ? 0 : str.trim().split(/\s+/).length;
}

// DOM Manipulation Functions

// Update the result display and statistics
function updateResult() {
    const input = document.getElementById('inputString').value;
    const result = document.getElementById('result');
    const charCount = document.getElementById('charCount');
    const wordCount = document.getElementById('wordCount');
    const palindrome = document.getElementById('palindrome');
    
    if (input === '') {
        result.textContent = 'Your reversed text will appear here...';
        charCount.textContent = '0';
        wordCount.textContent = '0';
        palindrome.textContent = '❓';
    } else {
        const reversed = reverseString(input);
        result.textContent = reversed;
        charCount.textContent = input.length;
        wordCount.textContent = countWords(input);
        palindrome.textContent = isPalindrome(input) ? '✅' : '❌';
    }
}

// Set demo text in the input field
function setDemo(text) {
    document.getElementById('inputString').value = text;
    updateResult();
}

// Clear the input field
function clearInput() {
    document.getElementById('inputString').value = '';
    updateResult();
}

// Event Listeners and Initialization

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for real-time updates
    const inputField = document.getElementById('inputString');
    if (inputField) {
        inputField.addEventListener('input', updateResult);
    }
    
    // Initialize the display
    updateResult();
    
    // Console demo of different methods
    console.log('🔄 String Reversal Methods Demo:');
    console.log('Original: "Hello World!"');
    console.log('Method 1 (split/reverse/join):', reverseString1('Hello World!'));
    console.log('Method 2 (for loop):', reverseString2('Hello World!'));
    console.log('Method 3 (recursion):', reverseString3('Hello World!'));
    console.log('Method 4 (Array.from):', reverseString4('Hello World!'));
    console.log('Method 5 (spread operator):', reverseString5('Hello World!'));
    console.log('Method 6 (reduce):', reverseString6('Hello World!'));
    
    // Performance comparison for educational purposes
    console.log('\n📊 Performance Test (1000 iterations):');
    const testString = 'The quick brown fox jumps over the lazy dog';
    const iterations = 1000;
    
    // Test Method 1
    console.time('Method 1 (split/reverse/join)');
    for (let i = 0; i < iterations; i++) {
        reverseString1(testString);
    }
    console.timeEnd('Method 1 (split/reverse/join)');
    
    // Test Method 2
    console.time('Method 2 (for loop)');
    for (let i = 0; i < iterations; i++) {
        reverseString2(testString);
    }
    console.timeEnd('Method 2 (for loop)');
    
    // Test Method 5
    console.time('Method 5 (spread operator)');
    for (let i = 0; i < iterations; i++) {
        reverseString5(testString);
    }
    console.timeEnd('Method 5 (spread operator)');
});

// Additional Utility Functions

// Reverse words in a sentence (keep word order, reverse each word)
function reverseWordsInSentence(str) {
    return str.split(' ').map(word => reverseString(word)).join(' ');
}

// Reverse sentence order (reverse word order, keep words intact)
function reverseSentenceOrder(str) {
    return str.split(' ').reverse().join(' ');
}

// Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    return clean1 === clean2;
}

// Export functions for use in other modules (if using ES6 modules)
// Uncomment the following lines if you're using this as an ES6 module
/*
export {
    reverseString,
    reverseString1,
    reverseString2,
    reverseString3,
    reverseString4,
    reverseString5,
    reverseString6,
    isPalindrome,
    countWords,
    reverseWordsInSentence,
    reverseSentenceOrder,
    areAnagrams
};
*/