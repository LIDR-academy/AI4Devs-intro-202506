document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const button = document.getElementById("reverseBtn");
  const result = document.getElementById("result");

  // Function to reverse text
  const reverseText = (text) => text.split("").reverse().join("");

  // Asynchronous update as user types
  input.addEventListener("input", () => {
    const text = input.value;

    // Enable or disable button based on input length
    button.disabled = text.length < 3;

    // Update reversed text asynchronously
    setTimeout(() => {
      result.textContent = reverseText(text);
    }, 0);
  });

  // Button click handler (optional action)
  button.addEventListener("click", () => {
    const text = input.value;
    result.textContent = reverseText(text);
  });
});