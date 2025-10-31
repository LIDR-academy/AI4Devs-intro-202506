# Prompts Utilizados

## Chatbot utilizado
**Claude (Anthropic) - Sonnet 4.5**

---

## Prompt 1 (Inicial)
```
tengo que hacer una pagina que contenga un input donde el usuario escribe una palabra, al tener texto (mas de 3 letras) se debe mostrar un boton que al hacer click debe mostrar la palabra en reverso, al ir escribiendo debe mostrar el reverso, te puedes guiar por el readme.md del fork

https://github.com/jaraleasp/AI4Devs-intro-202506.git
```

**Resultado:** El chatbot generó una página completa con todo el código en un solo archivo HTML.

---

## Prompt 2 (Clarificación)
```
este es el readme:

Reverse string ES
Crea una página web con lógica en javascript que invierta el orden de una cadena de texto.
Ejemplo: si introduzco `AI4Devs` devuelve `sveD4IA`.
Hazlo apoyado en el seed `index.html` y `script.js` que proporcionamos dentro de la carpeta template
Utiliza un chatbot, como ChatGPT o Gemini, no un asistente de código en IDE como Github Copilot.
Para entregar, haz una pull request que incluya una carpeta copiada de template, con el nombre `reversestring-iniciales` (ejemplo `reversestring-ARM`). Debe incluir no solo el código generado, sino también, fundamental, el prompt utilizado y el chatbot utilizado en `prompts.md`. Si has usado más de un prompt hasta llegar a una solución adecuada, añade todos en orden. Añade además el prompt final en el comentario del pull request.
¡Éxitos!
El contenido de este repositorio es parte del programa AI4Devs de LIDR.co. Puedes encontrar toda la información en la página oficial __https://lidr.co/ia-devs__
```

**Resultado:** El chatbot generó correctamente los archivos separados:
- `index.html` - Estructura HTML con estilos CSS
- `script.js` - Lógica JavaScript separada
- `prompts.md` - Este archivo de documentación

---

## Funcionalidades Implementadas

✅ Input para escribir texto  
✅ Validación: botón solo aparece con más de 3 caracteres  
✅ Función `reverseString()` que invierte la cadena  
✅ Al hacer click, muestra el texto invertido  
✅ Actualización en tiempo real mientras se escribe (después del primer click)  
✅ Contador de caracteres  
✅ Posibilidad de presionar Enter para invertir  
✅ Diseño moderno y responsive  

---

## Ejemplo de uso
- Input: `AI4Devs`
- Output: `sveD4IA`
