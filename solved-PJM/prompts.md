# Conversación — Reverse String ES

**Chatbot:** Claude  
**Modelo:** Sonnet 4.6

---

## Turno 1 — Usuario

**Archivos adjuntos:**
- `index.html` (estructura base vacía)
- `script.js` (vacío)

**Prompt:**

> Crea una **página web con lógica en javascript que invierta el orden de una cadena de texto**.
>
> Ejemplo: si introduzco `AI4Devs` devuelve `sveD4IA`.
>
> Hazlo apoyado en los ficheros `index.html` y `script.js` adjunta.

---

## Turno 1 — Asistente

Se generaron dos ficheros con diseño editorial (papel crema, tipografía Playfair Display + DM Mono):

### `script.js`

```javascript
/**
 * Invierte los caracteres de un string.
 * @param {string} str - La cadena a invertir.
 * @returns {string} La cadena invertida.
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseString() {
    const input = document.getElementById('inputText');
    const resultBlock = document.getElementById('resultBlock');
    const outputText = document.getElementById('outputText');
    const value = input.value.trim();
    if (!value) { input.focus(); return; }
    const reversed = reverse(value);
    outputText.textContent = reversed;
    resultBlock.classList.remove('visible');
    void resultBlock.offsetWidth;
    resultBlock.classList.add('visible');
}

function copyResult() {
    const text = document.getElementById('outputText').textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        const confirm = document.getElementById('copyConfirm');
        confirm.classList.add('show');
        setTimeout(() => confirm.classList.remove('show'), 1800);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputText').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') reverseString();
    });
});
```

### `index.html` (estructura principal)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reverse String</title>
    <!-- Google Fonts: Playfair Display + DM Mono -->
    <!-- CSS con variables: --ink, --paper, --accent, --muted, --border -->
</head>
<body>
    <!-- Input con label, botón "Invertir", bloque resultado con animación -->
    <!-- Soporte para tecla Enter -->
    <!-- Botón "Copiar" con feedback visual -->
    <script src="script.js"></script>
</body>
</html>
```

**Funcionalidades incluidas:**
- Inversión de cadena vía `split('').reverse().join('')`
- Disparo con botón o tecla `Enter`
- Copia al portapapeles con confirmación visual
- Diseño editorial: fondo papel crema, tipografía serif/mono, acento rojo
- Animación de entrada con `fadeUp`

---

## Turno 2 — Usuario

> Ahora necesito que me des el `prompt.md` de toda esta conversación. Por favor pon en la cabecera:  
> **Chatbot: Claude — Modelo: Sonnet 4.6**

---

## Turno 2 — Asistente

Generación del presente fichero `prompt.md` con el resumen completo de la conversación.
