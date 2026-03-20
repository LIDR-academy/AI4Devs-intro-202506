function reverseText() {
    const input = document.getElementById("inputText").value;
    const resultElement = document.getElementById("resultText");

    if (!input.trim()) {
        resultElement.textContent = "⚠️ Please enter some text";
        return;
    }

    const reversed = input.split("").reverse().join("");
    resultElement.textContent = reversed;
}

function copyText() {
    const text = document.getElementById("resultText").textContent;

    if (!text) {
        alert("Nothing to copy!");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}