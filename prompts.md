
Prompt #1
Se utiliza la técnica ASPECCT para la realización del código script.js e index.html

A — Acción
Crea una página web (HTML + JavaScript) que invierta el orden de una cadena de texto introducida por el usuario y muestre el resultado en pantalla.

S — Steps (Pasos)

Estructura del proyecto Usa la carpeta template/ con dos archivos: index.html y script.js. Enlaza script.js desde index.html (sin inline JS).
Interfaz mínima (HTML) Campo de texto (input o textarea) con etiqueta accesible (“Texto a invertir”). Botón “Invertir”. Contenedor de salida con el texto “Resultado:” y un elemento donde escribir la cadena invertida. Lógica (JS) Captura el valor del input al hacer clic en “Invertir” o al pulsar Enter. Valida: si está vacío o solo espacios, muestra un mensaje “Introduce un texto válido”. Invierte la cadena y escribe el resultado en el contenedor de salida. Mantén la función de inversión pura y testeable (p. ej., reverseString(str)), separada de la capa de UI. Compatibilidad y detalles Conserva espacios y signos de puntuación en su posición invertida natural (no elimines ni normalices). Debe manejar correctamente caracteres Unicode (acentos, eñes y emojis). No uses librerías externas. Accesibilidad y UX Asegura etiquetas asociadas (). Foco vuelve al input tras invertir. Muestra estados/errores de forma clara. Pruebas rápidas “AI4Devs” → “sveD4IA” “Hola mundo” → “odnum aloH” “” (vacío) → mensaje de validación “🙂🚀” → “🚀🙂” Entrega Proporciona el contenido final de index.html y script.js en el formato indicado en la Plantilla.
P — Persona
Actúa como Desarrollador Frontend con enfoque en vanilla JS, accesibilidad básica y buenas prácticas de separación de responsabilidades (HTML estructural, JS en archivo aparte).

E — Ejemplos
Entrada: AI4Devs → Salida: sveD4IA Entrada: abc (con espacios) → Salida: cba (conserva espacios extremos) Entrada: rápido → Salida: odípar Entrada: 🙂🚀 → Salida: 🚀🙂

C — Contexto Este ejercicio se integra en una plantilla existente (template/) y evalúa tu capacidad para vincular archivos, construir una UI mínima, escribir lógica limpia y reutilizable, y manejar Unicode.

C — Constraints (Restricciones) Tecnología: HTML5 + JavaScript nativo (sin frameworks ni CDNs). Arquitectura: nada de inline JS o CSS crítico para la lógica; todo el JS en script.js. Calidad: nombres claros, comentarios breves donde aporte valor, y sin código muerto. Compatibilidad: navegadores modernos. Unicode: la inversión debe respetar pares sustitutos (emojis) y caracteres combinados. Accesibilidad: labels, orden de tabulación razonable y mensajes de error legibles. Entrega: solo index.html y script.js.

T — Template (Plantilla de salida) Estructura de carpeta template/ ├─ index.html └─ script.js

Prompt #2 Bajo la misma ventana de contexto añadimos:

Remodela el codigo de tal manera que: El botón debe aparecer cuando haya texto suficiente, más de 3 letras Que te de la cadena en tiempo real, que no dependa del botón.