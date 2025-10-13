Actua como desarrollador web para desarrollar una página web con lógica en javascript que invierta el orden de una cadena de texto. Ejemplo: si introduzco AI4Devs devuelve sveD4AI.
Restricciones:
- La página debe basarse en el fichero adjunto index.html y guardar la logica de javascript en el fichero script.js.
- Longitud mínima de texto que puede invertirse: 3 caracteres.
Resultado: 
Realizar tres aproximaciones dentro de la misma página, cada una dentro de una sección diferente, para probar distintas complejidades a la hora de invertir el orden de la cadena de texto:
- Aproximación 1. Incluye una caja de texto donde se introduce el texto a invertir y un botón invertir
el orden. Al pulsar el botón invertir, el botón comprobará que se cumplen las restricciones de longitud, si no se cumplen devolverá un mensaje con la situación, si se cumple, realizará la inversión del texto. El texto invertido lo mostrará al lado de la caja de texto en un span de html, con un título de texto invertido
- Aproximación 2. Incluye una caja de texto donde se introduce el texto a invertir y un botón invertir
el orden. El botón invertir no se activará hasta que el texto no cumpla las restricciones de longitud. Una vez activado, al pulsarse, realizará la inversión del texto. El texto invertido lo mostrará al lado de la caja de texto en un span de html, con un título de texto invertido
- Aproximación 3. Incluye una caja de texto donde se introduce el texto a invertir. Controla los eventos de escritura en la caja para que una vez que cumpla los criterios de longitud de cadena, vaya realizando la inversión de la cadena en tiempo real con cada modificación de la caja de texto. El texto invertido lo mostrará al lado de la caja de texto en un span de html, con un título de texto invertido
