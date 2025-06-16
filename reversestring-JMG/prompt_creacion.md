## Prompt utilizado en chatgpt para generar una aplicación web que invierte el orden de una cadena de texto 
_________________________________________________________


Se que eres un senior prompt engineer, me puedes ayudar a generar un buen promt para generar la siguiente aplicación web:
Crea una página web con lógica en javascript que invierta el orden de una cadena de texto.
Ejemplo: si introduzco AI4Devs devuelve sveD4IA.
Hazlo apoyado en el seed index.html y script.js que proporcionamos dentro de la carpeta template
el promt quiero que tenga el siguiente formato, que este en español, lo guardes en un fichero llamado prompts.md, que lo ejecute que guarde el resultado lo guarde en index.html y script.js y que me dejar descargar los 3 ficheros
# ToDo/Projects tracking system We are planning the backend for a simple ToDo/Projects tracking system that will be used by multiple users simultaneously. We want to follow DDD for the development of this system, and we also need to follow TDD and BDD. ## Tech Stack: - NodeJS - MySQL - Docker - Docker Compose ## Objects - ### Users: - #### Users are defined by: - UserID [system defined] - UserName [user provided, editable] - LoginID [unique, user-provided, no editable] - email [user provided, editable] - password [user provided, editable, follows password best practice] ### ToDo (Task) items: #### ToDo items are defined by: - ToDoID [system defined] - ToDoName (short description) [user provided, editable] - ToDoDescription (long description, details) [user provided, editable] - completed (closed) [user provided, editable, default is Open] - ### Projects: - #### Projects are defined by: - ProjectID [system defined] - ProjectName (short description) [user provided, editable] - ProjectDescription (long description, details) [user provided, editable] - ToDo Items assigned to the Project [user provided, editable] - completed (closed) [user provided, editable, default is Open]
