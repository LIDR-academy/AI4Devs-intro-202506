// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userInput");
    const button = document.getElementById("reverseButton");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {
        const originalText = input.value;
        const reversedText = originalText.split("").reverse().join("");
        result.textContent = reversedText;
    });
});