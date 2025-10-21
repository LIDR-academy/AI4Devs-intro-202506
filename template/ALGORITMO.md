# Detalles técnicos del algoritmo de inversión

## Objetivo
Invertir un texto **por completo**, asegurando consistencia con los ejemplos proporcionados y mejorando la compatibilidad con caracteres modernos (emojis, acentos combinados).

## Enfoque
Se implementa la función:

```js
function invertirTexto(texto) {
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    const seg = new Intl.Segmenter("es", { granularity: "grapheme" });
    const grafemas = Array.from(seg.segment(texto), s => s.segment);
    return grafemas.reverse().join("");
  }
  return Array.from(texto).reverse().join("");
}
```

### ¿Por qué `Intl.Segmenter`?
- Segmenta por **grafemas**, no por simples caracteres UTF-16.
- Un “grafema” es lo que el usuario **percibe como un carácter**, incluso si internamente son varios puntos de código (por ejemplo, 👨‍👩‍👧‍👦 o letras con acentos combinados).
- De esta manera, al invertir, no se rompen emojis ni combinaciones de acentos.

### Fallback con `Array.from(texto)`
- Cuando `Intl.Segmenter` no está disponible (navegadores muy antiguos), se usa `Array.from(texto)` que itera por **puntos de código** (code points), manejando correctamente pares sustitutos (surrogate pairs).
- Aunque no cubre todos los casos de grafemas extendidos, es sustancialmente más correcto que usar `split("")`.

## Complejidad temporal y espacial
- **Tiempo**: O(n), donde *n* es el número de grafemas (o puntos de código en el fallback). Segmentar y luego invertir es lineal.
- **Espacio**: O(n) para almacenar el arreglo intermedio antes de invertir.

## Validación
Se incluyen pruebas en `app.js` que verifican los ejemplos requeridos al cargar la página:

- `Hormiga` → `agimroH`
- `Amarillo` → `olliramA`
- `Banco` → `ocnaB`
- `Rastrillo` → `ollirtsaR`

Si alguna falla, se registra un mensaje en la consola y se muestra un aviso en la interfaz.
