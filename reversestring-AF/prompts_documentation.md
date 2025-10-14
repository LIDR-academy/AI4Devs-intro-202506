# Prompts Utilizados para Crear la Aplicación Reverse String

## Chatbot utilizado: GitHub Copilot

## Prompt Principal

```
Actúa como un experto en programación y crea una interfaz web en index.html según la imagen de ejemplo en reversestring-example.png bajo las siguientes indicaciones y funcionalidades que se deben cumplir: 

Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco `AI4Devs` devuelve `sveD4IA`. 

Hazlo apoyado en el seed `index.html` y `script.js` que proporcionamos dentro de la carpeta template.

Requisitos específicos:
1. Interfaz similar a la imagen de ejemplo con:
   - Título "Reverse String"
   - Campo de entrada con placeholder "Hello, welcome to AI4Devs"
   - Botón "Reverse 🔄"
   - Área de resultado
   - Botón "Copy 📋"

2. Funcionalidades:
   - Invertir cadena de texto al hacer clic en "Reverse"
   - Copiar resultado al portapapeles con el botón "Copy"
   - Validación de entrada vacía
   - Feedback visual al copiar
   - Permitir usar Enter para ejecutar la función

3. Estilos:
   - Diseño limpio y moderno
   - Responsive
   - Colores y tipografía profesional
   - Estados hover y focus apropiados
```

## Consideraciones de Implementación

### Estructura HTML
- Estructura semántica con contenedor principal
- Campos de entrada y botones con IDs apropiados
- Estilos CSS embebidos para simplicidad

### Funcionalidad JavaScript
- Función `reverseText()` que invierte la cadena usando `split()`, `reverse()` y `join()`
- Función `reverseString()` principal que maneja la lógica del botón
- Función `copyResult()` con soporte para API moderna de clipboard y fallback
- Event listeners para Enter y limpieza automática

### Características Extra Implementadas
- Validación de entrada vacía
- Feedback visual al copiar (botón cambia a "Copied! ✓")
- Soporte para tecla Enter
- Límite de caracteres en el input (1000)
- Diseño responsive
- Compatibilidad con navegadores antiguos (fallback para clipboard)

## Resultado Final
La aplicación cumple con todos los requisitos solicitados:
- ✅ Interfaz visual similar a la imagen de ejemplo
- ✅ Funcionalidad de inversión de cadenas
- ✅ Botón de copia al portapapeles
- ✅ Validaciones y feedback de usuario
- ✅ Diseño responsive y profesional