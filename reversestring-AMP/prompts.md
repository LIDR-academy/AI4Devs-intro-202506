# Prompts y Modelo Utilizado

## Chatbot Utilizado

El código y la estructura de este proyecto fueron generados utilizando **Gemini 2.5 PRO (versión preliminar)**, un Large Language Model desarrollado por Google.

---

## Prompts Utilizados

A continuación se detallan los prompts utilizados en orden cronológico para llegar a la solución final.

### Prompt 1: Generación de la PoC completa

> Eres un desarrollador fullstack senior y debes hacer una PoC, llamada reverse string. Debes guiarte por el archivo adjunto readme.md y el diseño debe ser similar a la imagen adjunta. te basaras en dos archivos:
>
> 1.  index.html: contiene el front-end
> 2.  script.js: contiene la lógica del back-end
>
> debes entregar el código para ambos archivos. Adicionalmente, realizar un set pequeño de pruebas para verificar el correcto funcionamiento de la app.
>
> debes crear un archivo donde se explique el funcionamiento y como ejecutarlo en local
>
> **Archivos adjuntos:**
>
> 1.  `README.md` (con los requisitos del proyecto)
> 2.  `reversestring-example.png` (con el diseño de referencia)

### Prompt 2: Creación del archivo de prompts

> ahora genera un archivo prompts.md donde indiques el modelo utilizado para la generación del código y ademas genera el listado detallado de prompts utilizados, incluso este

### Prompt 3: Implementación de funcionalidades en tiempo real

> implementa las siguientes funciones: 
> El botón debe aparecer cuando haya texto suficiente, más de 3 letras
> Que te de la cadena en tiempo real, que no dependa del botón.
>
> actualiza todos los archivos necesarios