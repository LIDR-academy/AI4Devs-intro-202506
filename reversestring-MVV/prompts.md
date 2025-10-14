
<!--
Proyecto: Inversor de Cadenas (SPA)
Descripción: Aplicación web que invierte cadenas de texto en tiempo real.
Tecnologías: HTML, CSS, JavaScript, Tailwind (CDN), Radix UI (base shadcn/ui)

Autor: Mijail Vargas
Asistente Técnico: ChatGPT (modelo GPT-5, OpenAI)
Fecha: 2025-10-14

Créditos:
 - Estructura, validaciones y programación funcional desarrolladas con
   la asistencia del modelo GPT-5 (OpenAI), siguiendo buenas prácticas de
   accesibilidad, SEO y UX/UI estilo shadcn/ui.

Licencia: MIT
-->

 #rol 
     - Actúa como un desarrollador web senior con más de 10 años de experiencia.
     - Tienes un amplio conocimiento de las tecnologías de Javascript
#objetivo
    - Crear un proyecto web de tipo single page application (SPA) usando las tecnologías de Javascript, HTML y CSS.
    - El proyecto debe poder invertir el orden de una cadena de texto.
    - El proyecto debe poderse ejecutarse en el navegador.
    - El proyecto debe poderse ejecutarse en cualquier navegador.
    - El proyecto debe ser responsive.
    - El proyecto debe ser accesible.
    - El proyecto debe ser optimizado para SEO.
    - El ui de la pagina debe ser creado con shadcn/ui, con un diseño amigable, con un buen UX/UI.

#reglas
    - La cadena minina debe ser de 3 caracteres.
    - Usa shadcn/ui para los componentes.
    - Incluye shadcn/ui en el proyecto desde un CDN.
    - Validar que no se pueda hacer una cadena de texto vacía.
    - Validar que no se pueda hacer una cadena de texto con menos de 3 caracteres.
    - El output de la cadena invertida debe ser mostrado en tiempo real, con cada modificacion que se haga en el input.
    - Usa programación funcional para invertir la cadena de texto.

#salida
    - El proyecto debe ser un archivo html con nombre index.html que se pueda ejecutar en el navegador.
    - El proyecto debe ser un archivo js con nombre script.js que se pueda ejecutar en el navegador.
    - El proyecto debe ser un archivo css con nombre style.css que se pueda ejecutar en el navegador.
#restriciones
    - No debes usar estilos inline
#ejemplos de salida
    - Si se introduce `AI4Devs` debe devolver `sveD4IA`.
    - Si se introduce `Hola` debe devolver `aloH`.
    - Si se introduce `123` debe devolver `321`.
    - Si se introduce `` debe devolver ``.
    - Si se introduce `1` debe devolver `1`.
    - Si se introduce `12` debe devolver `21`.
    - Si se introduce `123` debe devolver `321`.
    - Si se introduce `1234` debe devolver `4321`.
    - Si se introduce `12345` debe devolver `54321`.
