document.addEventListener('DOMContentLoaded', () => {

    // 1. OBTENCIÓN DE ELEMENTOS DEL DOM
    const stringInput = document.getElementById('stringInput');
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    // 2. FUNCIÓN PARA INVERTIR LA CADENA DE TEXTO
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };

    // 3. EVENTO 'INPUT' PARA LA ACTUALIZACIÓN EN TIEMPO REAL
    stringInput.addEventListener('input', () => {
        const originalString = stringInput.value;

        // Comprueba si la longitud del texto es mayor a 3
        if (originalString.length > 3) {
            const reversedString = reverseString(originalString);
            resultDiv.textContent = reversedString;
            
            // Muestra el botón de copiar
            copyButton.style.display = 'inline-block';
            copyButton.textContent = 'Copy 📋'; // Restaura el texto del botón si se había copiado antes
        } else {
            // Si es 3 o menos, vacía el resultado y oculta el botón
            resultDiv.textContent = '';
            copyButton.style.display = 'none';
        }
    });

    // 4. EVENTO CLICK PARA EL BOTÓN 'COPY'
    copyButton.addEventListener('click', async () => {
        try {
            // Usa la API moderna del portapapeles para copiar el texto
            await navigator.clipboard.writeText(resultDiv.textContent);
            
            // Feedback visual para el usuario
            copyButton.textContent = 'Copied! 👍';
            
            // Opcional: restaurar el texto del botón después de 2 segundos
            setTimeout(() => {
                copyButton.textContent = 'Copy 📋';
            }, 2000);

        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }
    });

});