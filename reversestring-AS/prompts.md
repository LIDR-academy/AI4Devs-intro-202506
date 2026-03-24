### Modelo empleado: Gemini 3.1 Pro

> Nota: solo se utilizó un prompt, por lo que este fue también el prompt final.

### Prompt empleado
ayudame con un ejercicio. tengo abierto VS code y clonado un repositorio, sobre el mismo existen los archivos index.html y script.js. necesito modificar estos archivos para implementar la siguiente feature:

Crea una página web con lógica en javascript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco AI4Devs devuelve sveD4IA, siendo case sensitive. Si el usuario introduce espacios, respétalos también, la única transformación será hacer un reverse de la string

Hazlo apoyado en el seed index.html y script.js que proporcionamos dentro de la carpeta template y que te comparto:

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

# Cómo debe ser la página
- Utiliza una estética moderna y agradable con una buena UX
- Agrega como título "AsensioDev Reverse String"
- Que tenga un input donde el usuario pueda introducir la string a transformar. Si la string es muy larga, que la UI se adapte a ese tamaño, sin perder de vista la buena experiencia de usuario
- Tendrá un botón para iniciar la transformación (reverse) de la string
- Tendrá una sección para mostrar el resultado con la string transformada (ya no input, sino otro componente para mostrar el resultado al usuario)
- Tendrá un botón que permita copiar la string output al usuario
- Recuerda, buena UX y buen UI

# Output
Dame los archivos index.html y script.js listos para usar
