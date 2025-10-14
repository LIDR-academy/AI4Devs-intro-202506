## Chatbot utilizado

ChatGPT 5

## Prompt

Actúa como un brillante **Desarrollador/a Frontend** con enfoque en **JavaScript Vanilla y accesibilidad**, habituado/a a trabajar con **plantillas preexistentes** y **buenas prácticas de desarrollo software**.
El objetivo a cumplir es el de desarrollar una **página web** basada en el *seed* `index.html` y `script.js` adjunto que **invierta el orden de una cadena de texto** introducida por el usuario.
Ejemplo: entrada `AI4Devs` → salida `sveD4IA`.
La solución debe estar en **HTML + JavaScript vanilla**, sin frameworks, y funcionar con un **evento de clic** en un botón y/o **teclado**.
Se deben **modificar exclusivamente** el *seed* (`index.html`, `script.js`).

1. **Estructura base (no crear archivos nuevos):**
   - Reutiliza `index.html` y `script.js` adjuntos.
   - En `index.html`, crea:
     - Un input de texto que indique "Escribe un texto".
     - Un botón para invertir el contenido del texto introducido.
     - Incluye un contenedor para mostrar el resultado.
2. **Lógica en `script.js`:**
   - Implementa una función **pura** `reverseString(str)` que:
     - Dada una cadena del input, la invierta la invierta y la retorne **respetando mayúsculas/minúsculas y símbolos** tal cual.
   - Muestra el resultado en el contenedor y muestra al usuario que el proceso ha sido realizado exitosamente.
3. **Validaciones mínimas y UX:**
   - Si el input está vacío, debe mostrarse vacío o con un mensaje tipo “Nada que invertir…”.
   - Accesibilidad: aplica buenas prácticas de accesibilidad.
4. **UI:**
   - La web debe ser **responsive**.
   - Genera una web moderna y atractiva. Utiliza un estilo minimalista pero profesional.
   - Incluye un Header informe al usuario de dónde está y qué hace la web.
   - Incluye una sección de "creador" que indique que soy yo: Jesús García García, <jesusggarci@gmail.com>
   - Aplica efectos en la generación.

Ejemplos:

- **Entrada:** `AI4Devs` → **Salida esperada:** `sveD4IA`
- **Entrada:** `Chat-GPT` → **Salida esperada:** `TPG-tahC`
- **Entrada:** `¡Hola!` → **Salida esperada:** `!aloH¡`

Revisa la generación y asegura que la solución propuesta es funcional.
