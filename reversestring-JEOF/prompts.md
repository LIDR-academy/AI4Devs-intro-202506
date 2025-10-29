# Prompts Utilizados para Reverse String

## Prompt Inicial

```text
Necesito crear una página web con lógica en JavaScript que invierta el orden de una cadena de texto. 

Ejemplo: si introduzco "AI4Devs" debe devolver "sveD4IA".

Tengo dos archivos de inicio:
- index.html: Un archivo HTML básico que carga script.js
- script.js: Un archivo JavaScript vacío

Por favor, crea una solución completa que incluya:
1. Una interfaz web sencilla con un campo de entrada y un botón
2. La función JavaScript que invierta la cadena de texto
3. Un diseño moderno y limpio para la interfaz

Utiliza los métodos nativos de JavaScript para invertir la cadena (split, reverse, join).
```

## Chatbot Utilizado

**Chatbot:** Claude (Auto/Cursor AI Assistant)
**Fecha:** 2025-01-27

## Notas sobre la Solución

La solución implementada utiliza el método más común y eficiente en JavaScript:

- `str.split('')` - Convierte la cadena en un array de caracteres
- `.reverse()` - Invierte el orden del array
- `.join('')` - Une los caracteres de nuevo en una cadena

También se incluyeron métodos alternativos comentados en el código para referencia educativa.
