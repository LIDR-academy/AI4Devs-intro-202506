He utilizado Claude code.

El prompt utilizado fue:
    Crea una **página web con lógica en javascript que invierta el orden de una cadena de texto**. 

    Ejemplo: si introduzco `AI4Devs` devuelve `sveD4IA`. 
    El botón debe aparecer solo cuando haya texto suficiente, es decir, más de 3 letras.
    La cadena invertida debe actualizarse en tiempo real, de forma que no dependa del botón.

    Hazlo en los archivos `index.html` y `script.js`.

La respuesta de Claude fue:
    Listo. Los archivos index.html y script.js están creados con la siguiente
    funcionalidad: 

    - Inversión en tiempo real: al escribir en el input, el texto invertido se
    actualiza instantáneamente debajo (usa [...str].reverse().join('') para
    manejar correctamente emojis y caracteres Unicode). 
    - Botón condicional: el botón "Copiar resultado" solo aparece cuando el 
    texto tiene más de 3 caracteres.
    - Botón funcional: copia el resultado invertido al portapapeles y muestra 
    un mensaje de confirmación breve. 

    Puedes abrir index.html directamente en el navegador para probarlo.

