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

// Criterio de habilitación: más de 3 letras/caracteres no vacíos
function isEligible(value) {
  return (value || '').trim().length > 3;
}

(function () {
  const form = document.getElementById('reverseForm');
  const input = document.getElementById('textInput');
  const button = document.getElementById('reverseBtn');
  const output = document.getElementById('resultOutput');

  function computeAndRender() {
    const value = input.value || '';
    const reversed = reverseString(value);
    output.textContent = reversed; // Evita XSS
  }

  // Mostrar/ocultar el botón según la longitud del texto
  input.addEventListener('input', function () {
    const show = isEligible(input.value);
    if (show) {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });

  // Enter dentro del input (submit del form)
  form.addEventListener('submit', function (event) {
    const eligible = isEligible(input.value);
    if (!eligible) {
      event.preventDefault();
      // Resultado vacío cuando no hay suficiente texto
      output.textContent = '';
      return;
    }
    event.preventDefault();
    computeAndRender();
  });

  // Click explícito en el botón
  button.addEventListener('click', function () {
    // Si el botón está visible, también ejecutamos
    if (!button.hidden) {
      computeAndRender();
    }
  });
})();