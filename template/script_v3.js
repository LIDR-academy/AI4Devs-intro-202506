// Función pura: devuelve la cadena invertida preservando exactamente el contenido
function reverseString(input) {
  if (typeof input !== 'string') return '';

  // Preferente: segmentación por grafemas para robustez Unicode
  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    const parts = Array.from(segmenter.segment(input), s => s.segment);
    return parts.reverse().join('');
  }

  // Fallback seguro para la mayoría de casos Unicode
  return Array.from(input).reverse().join('');
}

(function () {
  const form = document.getElementById('reverseForm');
  const input = document.getElementById('textInput');
  const output = document.getElementById('resultOutput');

  function computeAndRender() {
    const value = input.value || '';
    const reversed = reverseString(value);
    output.textContent = reversed; // Evita XSS
  }

  // Actualiza el resultado en tiempo real mientras el usuario escribe
  input.addEventListener('input', computeAndRender);

  // Evita envío accidental del formulario al presionar Enter
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });
})();