const input = document.getElementById('textInput');
const liveText = document.getElementById('liveText');
const reverseBtn = document.getElementById('reverseBtn');
const reversedText = document.getElementById('reversedText');

input.addEventListener('input', () => {
  const value = input.value.trim();
  liveText.textContent = value;
  reversedText.textContent = '';
  
  if (value.length >= 3) {
    reverseBtn.style.display = 'inline-block';
  } else {
    reverseBtn.style.display = 'none';
  }
});

reverseBtn.addEventListener('click', () => {
  const original = input.value.trim();
  const reversed = original.split('').reverse().join('');
  reversedText.textContent = `🔁 ${reversed}`;
});
