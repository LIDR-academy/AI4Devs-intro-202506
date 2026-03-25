# Parte 1 "Realiza el ejercicio"

## Prompt 1

Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto. Ejemplo: si introduzco `AI4Devs`, la aplicación debe devolver `sveD4IA`. Entrega solamente un archivo HTML con, como mínimo, la estructura del adjunto, y un js con la lógica de Javascript. Incluye las mejoras visuales que consideres necesarias para una buena experiencia de usuario.

### Respuesta

Aquí tienes los dos archivos listos. Esto es lo que incluye cada uno:

**`index.html`** — estructura + estilos:

- Diseño dark con grid de fondo y glow ambiental
- Tipografía editorial: **Syne** (display) + **DM Mono** (código/output)
- `textarea` para entrada multilínea con contador de caracteres en tiempo real
- Sección de resultado con animación de entrada (fade + slide)

**`script.js`** — lógica pura:

- `reverseString()` — usa `.split('').reverse().join('')`
- Animación de resultado: cada carácter cae uno a uno con delay escalonado
- Soporte de **Enter** para invertir rápido
- **Copia al portapapeles** con toast de confirmación
- **Shake** en el input si se intenta invertir vacío
- Live update: si ya hay resultado, se recalcula al escribir

# Parte 2 "Siguiente nivel"

## Prompt 2

Realiza mejoras sobre el código generado para que: 

- El botón sea clickeable sólo cuando se escriban en el cuadro de texto  más de tres letras. Representa visualmente esta característica, para que el usuario note un cambio en el botón luego de introducidos los  primeros tres caracteres. 
- La cadena invertida debe actualizarse en tiempo real en el sector de  resultados. Por lo tanto el botón sólo opera para "Confirmar" el trabajo una vez que el usuario termina de escribir el texto

### Respuesta

Ahora reescribo ambos archivos con las mejoras:

3 archivos editados

Now rewrite `script.js` completely:

Archivo creado, archivo editado, leyó un archivo

Aquí está el resumen de las mejoras aplicadas:

**Botón con umbral visual (`index.html` + `script.js`)**

- Arranca en estado `disabled`: fondo oscuro, texto *"Escribe al menos 4 caracteres"* y **3 pips** (●●●) que se van llenando de naranja a medida que escribís (1 pip = 1 char, máx. 3 mostrados)
- Al llegar al 4° carácter, el botón se **desbloquea** con un flash de luz (`unlock-flash`) y cambia su label a *"✓ Confirmar resultado"* en verde-amarillo
- Si se borra por debajo del umbral, vuelve al estado bloqueado automáticamente

**Resultado en tiempo real (`script.js`)**

- `input` event → `liveUpdate()` actualiza el output en cada tecla pulsada, sin animación
- Con 1–3 chars: el resultado aparece **atenuado** (opacidad 0.3) como preview
- Con 4+ chars: resultado nítido y actualizado al instante
- El botón **"Confirmar"** ya no invierte el texto (eso pasa en tiempo real); solo dispara la animación carácter-a-carácter + toast de confirmación + pulse glow
