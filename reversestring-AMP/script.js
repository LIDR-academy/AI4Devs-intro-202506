document.addEventListener('DOMContentLoaded', () => {

    // 1. OBTENCIÓN DE ELEMENTOS DEL DOM
    const stringInput = document.getElementById('stringInput');
    const reverseButton = document.getElementById('reverseButton');
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    // 2. FUNCIÓN PARA INVERTIR LA CADENA DE TEXTO
    const reverseString = (str) => {
        // El método split('') convierte el string en un array de caracteres.
        // El método reverse() invierte el orden del array.
        // El método join('') une los elementos del array en un nuevo string.
        return str.split('').reverse().join('');
    };

    // 3. EVENTO CLICK PARA EL BOTÓN 'REVERSE'
    reverseButton.addEventListener('click', () => {
        const originalString = stringInput.value;
        
        if (originalString.trim() === '') {
            resultDiv.textContent = '';
            copyButton.style.display = 'none'; // Oculta el botón de copiar si no hay resultado
            return;
        }
        
        const reversedString = reverseString(originalString);
        resultDiv.textContent = reversedString;
        copyButton.style.display = 'inline-block'; // Muestra el botón de copiar
        copyButton.textContent = 'Copy 📋'; // Restaura el texto original del botón
    });

    // 4. EVENTO CLICK PARA EL BOTÓN 'COPY'
    copyButton.addEventListener('click', async () => {
        try {
            // Usa la API moderna del portapapeles para copiar el texto
            await navigator.clipboard.writeText(resultDiv.textContent);
            
            // Feedback visual para el usuario
            copyButton.textContent = 'Copied! 👍';
            
            // Opcional: restaurar el texto del botón después de unos segundos
            setTimeout(() => {
                copyButton.textContent = 'Copy 📋';
            }, 2000);

        } catch (err) {
            console.error('Error al copiar el texto: ', err);
            // Podrías mostrar un mensaje de error al usuario aquí
        }
    });

});