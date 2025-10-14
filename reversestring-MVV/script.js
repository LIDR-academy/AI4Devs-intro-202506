// SPA mínima (una sola vista) con salida en tiempo real.
// Programación funcional para invertir la cadena.
// Manejo de emojis y pares sustitutos: usar code points.

(function () {
    const $ = (sel) => document.querySelector(sel);
    const form = $('#reverse-form');
    const input = $('#inputText');
    const errorEl = $('#inputError');
    const resultEl = $('#result');
    const submitBtn = $('#submitBtn');
    const clearBtn = $('#clearBtn');
  
    // ---- Functional core ----
    // reverse: String -> String (pura, sin efectos)
    const reverse = (str) =>
      Array
        .from(str)                 // code points (no rompe emojis)
        .reduceRight((acc, ch) => acc + ch, ''); // reduceRight = FP
  
    // validate: String -> String|null (mensaje de error o null)
    const validate = (value) => {
      const trimmed = (value ?? '').trim();
      if (trimmed.length === 0) return 'La cadena no puede estar vacía.';
      if (trimmed.length < 3) return 'La cadena debe tener al menos 3 caracteres.';
      return null;
    };
  
    // renderError: String|null -> void
    const renderError = (msg) => {
      if (msg) {
        errorEl.textContent = msg;
        errorEl.hidden = false;
        input.setAttribute('aria-invalid', 'true');
      } else {
        errorEl.textContent = '';
        errorEl.hidden = true;
        input.setAttribute('aria-invalid', 'false');
      }
    };
  
    // renderResult: String -> void
    const renderResult = (value) => {
      // Reglas: si inválido, mostramos guion y no invertimos
      const msg = validate(value);
      renderError(msg);
  
      if (msg) {
        resultEl.textContent = '—';
        submitBtn.disabled = true;
        return;
      }
  
      const out = reverse(value);
      resultEl.textContent = out;
      submitBtn.disabled = false;
  
      // Mejora de SEO para SPA: actualiza el título con el resultado
      document.title = `Resultado: ${out} — Inversor de Cadenas`;
    };
  
    // ---- Eventos ----
    // Salida en tiempo real con cada modificación
    input.addEventListener('input', (e) => {
      renderResult(e.target.value);
    });
  
    // Submit: evita recargar, refuerza validación y mueve foco al resultado
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      renderResult(input.value);
      if (!errorEl.hidden) {
        input.focus();
        return;
      }
      resultEl.focus();
      history.replaceState({}, document.title, location.pathname);
    });
  
    clearBtn.addEventListener('click', () => {
      input.value = '';
      renderError(null);
      resultEl.textContent = 'Nada por mostrar todavía.';
      submitBtn.disabled = true;
      input.focus();
      document.title = 'Inversor de Cadenas — SPA accesible (shadcn-style)';
    });
  
    // Estado inicial
    submitBtn.disabled = true;
  })();