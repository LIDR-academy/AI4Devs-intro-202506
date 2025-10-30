// Esperar a que el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Obtener los elementos del DOM ---
    const textInput = document.getElementById('textInput');
    const submitButton = document.getElementById('submitButton');
    const realTimeResult = document.getElementById('realTimeResult');
    const alertBox = document.getElementById('alertBox');
    const alertText = document.getElementById('alertText');
    const closeAlert = document.getElementById('closeAlert');

    // --- 2. Función para invertir el texto ---
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // --- 3. Escuchador de eventos para el input (tiempo real) ---
    // Verificar que textInput exista antes de añadir el listener
    if (textInput) {
        textInput.addEventListener('input', () => {
            const originalText = textInput.value;
            const reversedText = reverseString(originalText);

            // Actualizar el resultado en tiempo real
            if (realTimeResult) {
                if (originalText.length > 0) {
                    realTimeResult.textContent = reversedText;
                } else {
                    realTimeResult.textContent = '...'; // Placeholder si está vacío
                }
            }

            // Habilitar o deshabilitar el botón
            // Se habilita con 3 o más caracteres
            if (submitButton) {
                if (originalText.length >= 3) {
                    submitButton.disabled = false;
                } else {
                    submitButton.disabled = true;
                }
            }
        });
    }

    // --- 4. Escuchador de eventos para el botón (mostrar alerta) ---
    // Verificar que submitButton exista
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            if (realTimeResult && alertText && alertBox) {
                const reversedText = realTimeResult.textContent;
                
                // Llenar el texto de la alerta y mostrarla
                alertText.textContent = reversedText;
                alertBox.classList.remove('hidden');
                alertBox.classList.add('flex');
            }
        });
    }

    // --- 5. Escuchador de eventos para cerrar la alerta ---
    // Verificar que closeAlert exista
    if (closeAlert) {
        closeAlert.addEventListener('click', () => {
            if (alertBox) {
                alertBox.classList.add('hidden');
                alertBox.classList.remove('flex');
            }
        });
    }

    // Opcional: Cerrar la alerta si se hace clic fuera del modal
    // Verificar que alertBox exista
    if (alertBox) {
        alertBox.addEventListener('click', (event) => {
            // Si el clic fue en el fondo oscuro (el propio alertBox)
            if (event.target === alertBox) {
                alertBox.classList.add('hidden');
                alertBox.classList.remove('flex');
            }
        });
    }

});
