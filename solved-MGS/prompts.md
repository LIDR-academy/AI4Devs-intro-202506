# Chatbot utilizado y prompts empleados

## Chatbot utilizado

He utilizado **Claude**, en su **interfaz web de chat**, con el modelo **Opus 4.6**.

---

## Prompt 1

```text
Eres un experto en desarrollo frontend.

Necesito que generes una interfaz web en html, con un input de tipo texto, un botón submit, y una zona para mostrar un texto resultante de manera atractiva.

La lógica, escrita en javascript ejecutable en navegador y sin usar ningún framework, debe capturar el valor del input cuando el usuario clique el botón Enviar, y mostrar en la zona de resultados el string del input invertido de orden, caracter por caracter. Por ejemplo, si el texto introducido es "Macarrones", el resultado debe ser "senorracaM".

La interfaz debe tener un diseño moderno y usable, con una estética techy, y que no recuerde a estética generada por IA ni a templates HTML genéricos, debe ser digna de ser mostrada en una revista de diseño. Usa tailwind en su versión CDN para desarrollar los elementos.

El formato de entrega debe ser un archivo HTML llamado index.html, basado en esta plantilla base:

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

Más un archivo javascript llamado script.js, donde haya toda la lógica de la aplicación web.
```

---

## Prompt 2 (iteración)

```text
Perfecto, vamos a hacer una segunda iteración:

El botón enviar debe tener por defecto un estado deshabilitado, claramente visible e identificable por el usuario con lenguaje UI. Deberá habilitarse y permitir ser clicado solo cuando el string introducido en el input tenga una longitud más de 3 caracteres.
```
