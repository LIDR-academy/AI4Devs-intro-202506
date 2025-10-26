/**
 * Function to reverse the order of characters in a given string (sentence).
 * @param {string} sentence - The input string.
 * @returns {string} The string with all characters reversed.
 */
function reverseSentence(sentence) {
    if (!sentence || typeof sentence !== 'string') {
        return "";
    }

    // 1. Split the sentence into an array of individual characters.
    // The empty string ('') delimiter ensures every character is separated.
    const charactersArray = sentence.split('');

    // 2. Reverse the order of elements (characters) in the array.
    const reversedCharactersArray = charactersArray.reverse();

    // 3. Join the characters back into a single string.
    const reversedSentence = reversedCharactersArray.join('');

    return reversedSentence;
    
    // Simplified single-line version of the above logic:
    // return sentence.split('').reverse().join('');
}

/**
 * Main function to handle the button click event and update the DOM.
 */
function handleReverse() {
    // 1. Get the input sentence from the textarea.
    const sentenceInput = document.getElementById('sentenceInput');
    const inputSentence = sentenceInput.value;

    // 2. Reverse the sentence character by character.
    const reversedResult = reverseSentence(inputSentence);

    // 3. Display the result in the output textarea.
    const resultOutput = document.getElementById('resultOutput');
    resultOutput.value = reversedResult;
}

// Attach the 'handleReverse' function to the 'click' event of the button.
document.getElementById('reverseButton').addEventListener('click', handleReverse);