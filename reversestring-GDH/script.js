const inputEditor = document.getElementById('inputEditor');
const outputView = document.getElementById('outputView');
const reverseToggle = document.getElementById('reverseToggle');
const copyBtn = document.getElementById('copyBtn');

/**
 * Logic to reverse a single line based on specific prefix rules:
 * a) One or more punctuation/spaces
 * b) Numbers followed by at least one punctuation (excluding space)
 */
function reverseLine(line) {
    if (!line) return "";

    /**
     * REGEX LOGIC:
     * Rule A: [\s\p{P}]+ -> Matches spaces and punctuation.
     * Rule B: \d+[\p{P}&&[^ ]] -> Numbers followed by punctuation (no space).
     * * Valid JS implementation using a negative lookahead for Rule B 
     * to ensure the character following the digit is punctuation but NOT a space.
     */
    const prefixRegex = /^((?:[\s\p{P}]+)|(?:\d+(?=[^\s\w])\p{P}+))+/u;
    const match = line.match(prefixRegex);
    
    let prefix = "";
    let content = line;

    if (match) {
        prefix = match[0];
        content = line.substring(prefix.length);
    }

    // Unicode-safe reversal using the spread operator
    const reversedContent = [...content].reverse().join('');
    
    return prefix + reversedContent;
}

function updateOutput() {
    if (!reverseToggle.checked) {
        outputView.innerText = inputEditor.value;
        return;
    }

    const lines = inputEditor.value.split('\n');
    const processedLines = lines.map(line => reverseLine(line));
    outputView.innerText = processedLines.join('\n');
}

// Clipboard Feature
async function copyToClipboard() {
    const text = outputView.innerText;
    try {
        await navigator.clipboard.writeText(text);
        
        // Visual feedback
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";
        copyBtn.classList.add('success');
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.classList.remove('success');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

// Event Listeners
inputEditor.addEventListener('input', updateOutput);
reverseToggle.addEventListener('change', updateOutput);
copyBtn.addEventListener('click', copyToClipboard);

// Initialize view
updateOutput();