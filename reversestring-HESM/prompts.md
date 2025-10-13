# Prompt — Reverse String Web App

Como experto en prompt engineering y software development.
Realizar un prompt especifico para tarea descripta a continuaciónn. 

Crea una **página web con lógica en javascript que invierta el orden de una cadena de texto**. 

Ejemplo: si introduzco AI4Devs devuelve sveD4IA. 

Hazlo apoyado en el seed index.html y script.js que proporcionamos dentro de la carpeta template.

Contenido de index.html:

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

Estoy partiendo desde un repositorio que tiene un folder y dentro de esta los ficheros index.html prompst.md y script.js.

La imagen  de referencia es el estilo visual que debe tener la pagina web.

El prompt debe estar estructurad con las mejores practicas de prompting.
El resultado al enviar el prompt deben ser los códigos a utilizar dentro de index.html y script.js.

---

## Respuesta del chat con el prompt utilizado.
La respuesta de la consulta anterior, se ejecuto en un nuevo contexto de chat.
## Rol
Eres un experto en desarrollo de paginas web.

## Objetivo
Desarrollar una página web interactiva que invierta el orden de una cadena de texto.  
Debe incluir un campo de entrada, un botón para invertir el texto, un área de resultado y un botón para copiar el texto invertido.  
El diseño debe seguir el estilo mostrado en la imagen `reversestring-example.png` (moderno, centrado, con botones azules y grises, y tipografía limpia).

## Contexto del proyecto
- Repositorio base con carpeta `template/`
- Archivos iniciales:  
  - `index.html` (seed básico proporcionado)  
  - `script.js` (vacío o con estructura mínima)
- Al ejecutar el prompt, el modelo debe devolver el código completo actualizado de ambos archivos, respetando la estructura y agregando HTML, CSS (inline o embebido) y JavaScript funcional.

## Instrucciones detalladas
1. Mantener la estructura base de `index.html` proporcionada.
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
2. Añadir estilos minimalistas (pueden ser embebidos en `<style>`).  
3. Incluir un `input` para ingresar el texto, un botón para invertirlo, un `div` para mostrar el resultado, y otro botón para copiar el texto.  
4. Implementar toda la lógica de inversión de texto en `script.js`.  
5. Utilizar JavaScript nativo, sin librerías externas.  
6. El resultado debe coincidir visualmente con la referencia `reversestring-example.png`.  
7. Al presionar el botón “Reverse”, el texto del input debe invertirse y mostrarse en el área de resultado.  
8. Al presionar “Copy”, el texto invertido debe copiarse al portapapeles.  
9. El prompt debe producir solo los bloques de código, listos para copiar en los archivos `index.html` y `script.js`.

## Output esperado
El modelo debe devolver:

````markdown
### index.html
```html
<!-- Código HTML completo aquí -->
```

### script.js
```javascript
// Código JavaScript completo aquí
```
````

## Ejemplo de ejecución esperada

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reverse String</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 40px;
      max-width: 700px;
      margin: 0 auto;
    }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    input {
      width: 100%;
      padding: 15px;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    button {
      padding: 12px 24px;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-right: 10px;
    }
    .reverse-btn {
      background-color: #2563eb;
      color: #fff;
    }
    .copy-btn {
      background-color: #6b7280;
      color: #fff;
    }
    .result {
      font-size: 1.4rem;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Reverse String</h1>
  <input type="text" id="inputText" placeholder="Hello, welcome to AI4Devs">
  <button class="reverse-btn" id="reverseBtn">Reverse 🔄</button>
  <div class="result" id="result"></div>
  <button class="copy-btn" id="copyBtn">Copy 📋</button>

  <script src="script.js"></script>
</body>
</html>
```

### script.js
```javascript
document.getElementById('reverseBtn').addEventListener('click', () => {
  const input = document.getElementById('inputText').value;
  const reversed = input.split('').reverse().join('');
  document.getElementById('result').textContent = reversed;
});

document.getElementById('copyBtn').addEventListener('click', async () => {
  const text = document.getElementById('result').textContent;
  if (text) {
    await navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  }
});
```

---

## Prompt para opcionales del ejercicio

Modificar ambos codigos para el siguiente comportamiento:
- El botón de Reverse debe estar ausente mientras en el campo de texto haya menos de 3 caracteres.
- El botón de Reverse solo debe aparecer cuando la cantidad de caracteres en el campo de texto sea mayor a 3 letras
- El campo result debe mostrar el resultado de la acción Reverse en tiempo real mientras se ingresan caracteres en el campo de texto.