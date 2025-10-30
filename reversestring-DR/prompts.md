# Prompts y Chatbot utilizados

- **Chatbot**: ChatGPT (modelo GPT-5 Thinking)
- **Ejercicio**: Página web con JS que invierte una cadena de texto, usando la semilla de `template`.

## Prompt inicial (del alumno)

> “Dime paso a paso, pero me vas diciendo si ya terminé ese paso para continuar con el otro.”

## Interacciones clave

1. **Objetivo**: Copiar la carpeta `template` a `reversestring-DR` (o equivalente).
2. **Objetivo**: Implementar la función en JS para invertir una cadena y conectarla al HTML.

## Código sugerido por el chatbot

**script.js**

````javascript
function reverseString() {
  const input = document.getElementById("inputText").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("output").innerText = reversed;
}

**index.html (fragmento relevante)**
```html
<h1>Inversor de texto</h1>
<input type="text" id="inputText" placeholder="Escribe algo...">
<button onclick="reverseString()">Invertir</button>
<p>Resultado: <span id="output"></span></p>
<script src="script.js"></script>
````
