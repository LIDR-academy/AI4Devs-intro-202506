document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const reversedTextLabel = document.getElementById('reversedTextLabel');
    const copyButton = document.getElementById('copyButton');
    const validationFeedback = document.getElementById('validationFeedback');

    /**
     * Valida la cadena de entrada para prevenir inyecciones o entradas no deseadas.
     * @param {string} inputString - La cadena a validar.
     * @returns {boolean} True si la cadena es válida, false en caso contrario.
     */
    function isValidInput(inputString) {
        if (inputString.length < 3) {
            validationFeedback.textContent = 'Mínimo 3 caracteres.';
            return false;
        }

        // Expresión regular para detectar scripts, SQL, o caracteres de nueva línea.
        // Permite letras, números, espacios, y caracteres especiales comunes (.,!?'"-+&()@#$%/).
        // Prohíbe '<', '>', '\n', '\r', 'SCRIPT', 'SELECT', 'INSERT', 'DELETE', 'UPDATE', 'DROP', 'ALTER' (insensible a mayúsculas/minúsculas)
        const dangerousPatterns = /(<script[^>]*>|<\/script>|SELECT\b|INSERT\b|UPDATE\b|DELETE\b|DROP\b|ALTER\b|EXEC\b|--|;|\n|\r)/i;
        if (dangerousPatterns.test(inputString)) {
            validationFeedback.textContent = 'Entrada inválida: No se permiten scripts o comandos SQL.';
            return false;
        }

        validationFeedback.textContent = ''; // Limpiar mensaje de error si es válido
        return true;
    }

    /**
     * Invierte una cadena de texto.
     * @param {string} str - La cadena a invertir.
     * @returns {string} La cadena invertida.
     */
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    /**
     * Actualiza el label con la cadena invertida y gestiona la visibilidad del botón de copiar.
     */
    function updateReversedText() {
        const inputText = textInput.value;
        let reversedText = '';

        if (isValidInput(inputText)) {
            reversedText = reverseString(inputText);
            reversedTextLabel.textContent = reversedText;
            copyButton.classList.add('visible');
            copyButton.disabled = false;
        } else {
            reversedTextLabel.textContent = ''; // Limpiar si no es válido
            copyButton.classList.remove('visible');
            copyButton.disabled = true;
        }
    }

    // Escuchar el evento 'input' para actualización en tiempo real
    textInput.addEventListener('input', updateReversedText);

    // Funcionalidad para copiar al portapapeles
    copyButton.addEventListener('click', async () => {
        const textToCopy = reversedTextLabel.textContent;
        if (textToCopy) {
            try {
                await navigator.clipboard.writeText(textToCopy);
                alert('¡Texto copiado al portapapeles!');
            } catch (err) {
                console.error('Error al copiar el texto:', err);
                alert('Error al copiar el texto. Asegúrate de que tu navegador permita el acceso al portapapeles.');
            }
        }
    });

    // Inicializar el estado del botón y label al cargar la página
    updateReversedText();
});