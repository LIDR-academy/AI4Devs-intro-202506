
Prompt 1:
------------------------------------------------------------------------
eres un experto en promt engenering, dame un promp en ingles para:
generar una pagina web con html y javascript para 
Create a **web page with JavaScript logic that reverses the order of a string**.

Example: if I input `AI4Devs`, it should return `sveD4IA`.
usa como base del html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>
y dame el codigo javascript aparte

Promt 2:
------------------------------------------------------------------------
You are a senior frontend developer.

Your task is to create a simple, clean, and user-friendly web page using HTML and JavaScript.

Requirements:
- Use the following HTML structure as the base:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

- Add UI elements inside the <body>:
  - A text input field where the user can type a string
  - A button labeled "Reverse"
  - A paragraph or div to display the result

- The JavaScript (in a separate file called script.js) must:
  - Read the input string
  - Reverse the string
  - Display the reversed result dynamically on the page (without reloading)

- Example behavior:
  Input: AI4Devs
  Output: sveD4IA

- Use plain JavaScript (no frameworks)
- Write clean, readable, and well-commented code
- Use best practices for DOM manipulation and event handling

Output format:
1. Final full HTML code
2. Separate JavaScript file (script.js)

Promt 3:
------------------------------------------------------------------------
Haz los cambios necesarios para lograr:
El botón debe aparecer solo cuando haya texto suficiente, es decir, más de 3 letras.
La cadena invertida debe actualizarse en tiempo real, de forma que no dependa del botón.

Promt 4:
------------------------------------------------------------------------
No esta correcto, el funcionamiento seria:
1. mientras se introducen caracteres se va mostrando el reverse string actualizado, siempre que sea menor que 4 y el boton estara oculto.
2. cuando se introduzcan 4 o mas caracteres se dejara de actualizar el reverse string y se mostrara el boton.
3. cuando se hace click en el boton se ejecuta el reverse string con el texto completo y se actualiza el resultado.