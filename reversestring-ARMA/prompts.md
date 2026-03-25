# Prompts utilizados

## Chatbot utilizado
Claude (Anthropic) — Claude Code CLI

## Prompt 1 (único prompt utilizado)

> Crea una página web con lógica en javascript que invierta el orden de una cadena de texto.
>
> Ejemplo: si introduzco AI4Devs devuelve sveD4IA.
>
> Hazlo apoyado en el seed index.html y script.js que proporcionamos dentro de la carpeta template.
>
> Utiliza un chatbot, como ChatGPT o Gemini, no un asistente de código en IDE como Github Copilot.
>
> Para entregar, haz una pull request que incluya una carpeta copiada de template, con el nombre reversestring-iniciales (ejemplo reversestring-ARM). Debe incluir no solo el código generado, sino también, fundamental, el prompt utilizado y el chatbot utilizado en prompts.md. Si has usado más de un prompt hasta llegar a una solución adecuada, añade todos en orden. Añade además el prompt final en el comentario del pull request.

## Resultado

Con un solo prompt se generó:
- **index.html**: Página con un campo de texto, botón "Reverse" y área de resultado. Incluye estilos CSS inline con diseño centrado y gradiente.
- **script.js**: Lógica que usa `split('').reverse().join('')` para invertir el string. Soporta clic en botón y tecla Enter. Usa `textContent` en lugar de `innerHTML` para prevenir vulnerabilidades XSS.
