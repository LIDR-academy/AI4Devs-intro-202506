# LLM usado: Google Gemini 2.5 Flash
# Promt usado:

Comportate como un programador con una experiencia minima de 5 años en html, css y javascript.

Necesito que me hagas una pagina web para un ejercicio practico de un curso divido en 2 archivos, un index.html y un script.js. El ejercicio consiste invertir el orden de una cadena de texto, ejemplo: si introduzco AI4Devs devuelve sveD4AI. Pero tener en cuenta las siguientes consideraciones:

1. Un input de tipo texto que valide cadenas de texto valida, un mínimo de 3 caracteres, prohibe cadenas de tipo scripts, sql o demas cosas que no sean de un párrafo, puede tener carácteres especiales, pero no saltos de línea.

2. Que muestre la cadena en tiempo real en otro label, que no dependa de un botón, siempre y cuando la cedena sea de mas de 3 carácteres.

3. Debajo del label que va mostrando en tiempo real la cadena invertida, dejar un botón que sirva para copiar en el portapapeles el texto invertido, mostrar y habilitar el botón solo cuando la cadena invertida sea válida.

4. Un diseño css agradable minimalista, no incluyas mas de lo necesario, pero que tenga una minima buena visaulización, bien alineados el input, el botón y el texto a mostrar.

Puedes usar el html siguiente de bse pra el index.html:

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

Espero 2 archivos, un index.html y un script.js con todo lo necesario para solucionar lo planteado anteriormente, considera que estara en la misma ruta de carpeta, en el html no debe haber ninguna logica de un script, para esta el archio script.ts.
