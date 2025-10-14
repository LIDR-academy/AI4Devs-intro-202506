(function () {
  const input = document.getElementById('textInput');
  const btn = document.getElementById('reverseBtn');
  const result = document.getElementById('result');

  function reverseString(str) {
    // Solución simple para el reto (suficiente para el caso solicitado):
    return str.split('').reverse().join('');
  }

  function handleReverse() {
    const value = input.value ?? '';
    const reversed = reverseString(value);
    result.textContent = reversed;
  }

  btn.addEventListener('click', handleReverse);

  // Opcional: permitir Enter dentro del input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleReverse();
    }
  });
})();