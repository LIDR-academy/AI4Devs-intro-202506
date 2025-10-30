# Prompts y Chatbot utilizados

- **Chatbot:** ChatGPT (modelo GPT-5)
- **Ejercicio:** Crear una página web con JavaScript que invierta el orden de una cadena de texto, partiendo de una plantilla base (`template`).

---

## Prompt inicial (del alumno)
> “Dime paso a paso, pero me vas diciendo si ya terminé ese paso para continuar con el otro.”

---

## Interacciones clave

1. **Objetivo 1:** Copiar la carpeta `template` a `reversestring-DR` para iniciar el ejercicio.  
2. **Objetivo 2:** Implementar una función en JavaScript que invierta una cadena de texto.  
3. **Objetivo 3:** Documentar los prompts utilizados en el archivo `prompts.md`.  
4. **Objetivo 4:** Agregar mejoras visuales y funcionales al proyecto (botón condicional, tiempo real y animación).

---

## Código sugerido por el chatbot (versión inicial)

**script.js**
```javascript
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
