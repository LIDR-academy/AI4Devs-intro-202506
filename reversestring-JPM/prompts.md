# Prompts Utilizados para el Ejercicio Reverse String

## Chatbot Utilizado
Claude Sonnet 4 (Cursor)

## Prompt Inicial
```
Eres un desarrollador frontend senior.

Necesito crear una página web que me permita invertir el orden de una cadena de texto.

Requisitos funcionales:

* Recibir una cadena de texto en un fomulario básico donde se reciba en un input, el texto a invertir

* El llamado a la acción debe ser un botón con el nombre: Invertir Texto

Base de código:

* Utiliza @script.js para escribir la lógica de la página
* Utiliza @index.html para agregar el formulario 

UI

* Define un formulario simple pero agradable

* Un título, un subtítulo con una descripción breve de la utilidad de la página, un input con un placeholder que diga: "ingresa el texto a invertir" y un botón que permita invertir 

* Usa como referencia visual para la UI, la iamgen @reversestring-example.png 

Restricciones

* Manten todo el desarrollo dentro de los límites de los archivos actuales @index.html y @script.js 

* No agregues frameworks de estilo robustos, la página debe ser básica en dependencias externas

* De preferencia utiliza bootstrap como framework CSS
```

## Prompt de Mejora 1
```
Perfecto, funcionó correctament.

Ahora necesito que modifiques la UI y lógica de la página para agregar dos nuevas características:

1. El botón debe aparecer cuando haya texto suficiente, más de 3 letras en el input

2. La cadena de texto que el usuario escriba en el input, se debe invertir en tiempo real. No debe depender del botón: Invertir Texto
```

## Prompt de Corrección
```
Por alguna razón, el botón: Invertir Texto, sale incluso si no he escrito nada dentro del input. No sale oculto por defecto. Tendrá que ver algo el placeholder?
```

## Prompt Final
```
Perfecto, funcionó. Ahora, como ya no dependemos del botón para invertir texto. Por favor, elimínalo
```
