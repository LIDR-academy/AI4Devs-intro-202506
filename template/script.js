/* app.js
 * Funciones para invertir texto y enlazar la UI.
 */

/**
 * Invierte un string completo, respetando caracteres compuestos y emojis
 * cuando es posible (Intl.Segmenter). Si no está disponible, recurre a
 * dividir por puntos de código.
 * @param {string} texto
 * @returns {string}
 */
function invertirTexto(texto) {
  if (typeof texto !== "string") return "";
  // Preferimos segmentación por grafemas si existe (maneja emojis y letras con acentos combinados)
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    const seg = new Intl.Segmenter("es", { granularity: "grapheme" });
    const grafemas = Array.from(seg.segment(texto), s => s.segment);
    return grafemas.reverse().join("");
  }
  // Fallback razonable: dividir por puntos de código (maneja pares sustitutos)
  return Array.from(texto).reverse().join("");
}

/** Maneja el click del botón y muestra el resultado. */
function onInvertirClick() {
  const entrada = document.getElementById("input-texto");
  const salida  = document.getElementById("resultado");
  const texto = entrada.value || "";
  salida.textContent = invertirTexto(texto);
}

// --- Enlazar eventos al cargar ---
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-invertir").addEventListener("click", onInvertirClick);

  // Validación con ejemplos requeridos.
  const ejemplos = {
    "Hormiga": "agimroH",
    "Amarillo": "olliramA",
    "Banco": "ocnaB",
    "Rastrillo": "ollirtsaR"
  };
  const estado = document.getElementById("test-status");
  let ok = true;
  const fallos = [];
  for (const [entrada, esperado] of Object.entries(ejemplos)) {
    const obtenido = invertirTexto(entrada);
    if (obtenido !== esperado) {
      ok = false;
      fallos.push({ entrada, esperado, obtenido });
      console.assert(false, `Fallo: "${entrada}" -> esperado "${esperado}", obtenido "${obtenido}"`);
    } else {
      console.assert(true, `OK: ${entrada} -> ${obtenido}`);
    }
  }
  if (ok) {
    estado.textContent = "Validación automática: todos los ejemplos fueron invertidos correctamente.";
    estado.classList.add("ok");
  } else {
    estado.textContent = "Validación automática: hay discrepancias en los ejemplos. Revisa la consola para detalles.";
    estado.classList.add("err");
  }
});

// Exportar para posibles pruebas externas
window.invertirTexto = invertirTexto;
