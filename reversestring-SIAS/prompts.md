# Prompt 1
Quiero un prompt que cree una **página web con lógica en javascript que invierta el orden de una cadena de texto**. Ejemplo: si introduzco AI4Devs devuelve sveD4IA. Hazlo apoyado en el seed index.html y script.js . El index.html de partida es: "<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Reverse String</title> </head> <body> <script src="script.js"></script> </body> </html>" . Dime el código para el fichero index.html y para el script.js

**Me propone el index.html y script.js directamente y me pregunta "Aquí tienes un prompt listo para usar con una IA (ChatGPT, Copilot, Cursor, etc.) que generará la página web usando index.html como seed y un script.js con la lógica para invertir texto." Le digo que si**

# Prompt 2
Create a small web project using two files: **index.html** and **script.js**.

Use the following index.html as the starting seed and modify it only if necessary to add input, button and result elements:

```html
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
```

Requirements:

* The page must allow the user to type a string
* Add a button that reverses the string using JavaScript
* The logic must be inside script.js
* Do not put JS logic inside index.html except the script tag
* Use DOM manipulation
* When the user types `AI4Devs` the result must be `sveD4IA`
* Use a function that reverses the string using split, reverse and join
* Show the result on the page without reloading

Output format:

1. Full code for index.html
2. Full code for script.js
3. No explanations, only code

