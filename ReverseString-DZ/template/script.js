function reverseString(text) {
  return Array.from(text).reverse().join('');
}

function handleReverse() {
  const input = document.getElementById('textInput').value;
  const resultDiv = document.getElementById('result');

  if (!input) {
    resultDiv.innerText = "Please enter some text.";
    return;
  }

  const reversed = reverseString(input);
  resultDiv.innerText = "Reversed: " + reversed;
}
