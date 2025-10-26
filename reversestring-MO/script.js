/* Reverse string page logic (Unicode-aware) */
(function(){
  const input = document.getElementById('textInput');
  const reverseBtn = document.getElementById('reverseBtn');
  const result = document.getElementById('result');

  function reverseString(str){
    return Array.from(str).reverse().join('');
  }

  function doReverse(){
    const src = input.value || '';
    const reversed = reverseString(src);
    result.textContent = reversed;
  }

  reverseBtn.addEventListener('click', doReverse);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') doReverse(); });
})();
