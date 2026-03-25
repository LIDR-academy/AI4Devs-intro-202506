Chatbot: ChatGPT

Prompt 1: 

Necesito que generes un prompt en base a este requerimiento para una tarea de desarrollo de software con inteligencia artificial. El prompt debe ser para entregarselo a un agente / modelo de IA cualquiera que yo elija. 

Este es el requerimiento:
Crea una página web con lógica en javascript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco AI4Devs devuelve sveD4IA.

Requerimientos adicionales:
- El botón debe aparecer solo cuando haya texto suficiente, es decir, más de 3 letras
- La cadena invertida debe actualizarse en tiempo real, de forma que no dependa del botón. 






NOTA: Adjunto archivo index.html de ejemplo base. 
Además utiliza javascript pensado en dejarlo en un archivo aparte llamado script.js

Prompt 2:

Eres un desarrollador frontend experto. Tu tarea es implementar una solución completa, limpia y funcional basada en el siguiente requerimiento.

## CONTEXTO
Se cuenta con un archivo base `index.html` muy simple que ya incluye la referencia a `script.js`. :contentReference[oaicite:0]{index=0}

Debes construir una página web que permita invertir una cadena de texto ingresada por el usuario.

---

## REQUERIMIENTO PRINCIPAL

Crear una página web con lógica en JavaScript que:

- Permita ingresar una cadena de texto.
- Muestre la cadena invertida.

Ejemplo:
Input: `AI4Devs`  
Output: `sveD4IA`

---

## REQUERIMIENTOS FUNCIONALES

1. Debe existir un campo de entrada de texto (`input`).
2. Debe mostrarse el resultado invertido en pantalla.
3. La inversión del texto debe ocurrir en tiempo real mientras el usuario escribe (evento `input`).
4. Debe existir un botón (por ejemplo: "Invertir") PERO:
   - Solo debe mostrarse si el texto tiene más de 3 caracteres.
   - El botón NO es responsable de calcular el resultado (solo puede reforzar UX si se desea).
5. Si el texto tiene 3 o menos caracteres:
   - El botón debe estar oculto.
6. Si el input está vacío:
   - El resultado debe estar vacío.

---

## REQUERIMIENTOS TÉCNICOS

- Separar la lógica en un archivo `script.js`.
- No usar frameworks (solo JavaScript puro / Vanilla JS).
- Código limpio, legible y modular.
- Usar eventos adecuados (`addEventListener`).
- Evitar variables globales innecesarias.
- Manipular el DOM correctamente.

---

## REQUERIMIENTOS DE UI

- Interfaz simple pero clara.
- Debe incluir:
  - Input de texto
  - Contenedor para resultado
  - Botón condicional

---

## OUTPUT ESPERADO

Entrega:

1. Código completo de `index.html` (modificado desde el base).
2. Código completo de `script.js`.
3. Breve explicación de cómo funciona la lógica.

---

## CRITERIOS DE CALIDAD

- Código fácil de mantener
- Buenas prácticas de JavaScript
- Separación de responsabilidades
- UX simple pero correcta

---

## IMPORTANTE

No sobre-ingenierizar la solución. Mantenerla simple, clara y funcional.