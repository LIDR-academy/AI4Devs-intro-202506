// Referencias a los elementos del DOM
const textInput = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const resultSection = document.getElementById('resultSection');
const outputDisplay = document.getElementById('outputDisplay');
const copyBtn = document.getElementById('copyBtn');

// Función principal para invertir el texto
function reverseString(str) {
    // split('') separa cada caracter (incluyendo espacios)
    // reverse() invierte el arreglo
    // join('') vuelve a unir todo en un string
    return str.split('').reverse().join('');
}

// Evento click para el botón de transformar
reverseBtn.addEventListener('click', () => {
    const inputValue = textInput.value;
    
    // Validamos que haya texto
    if (inputValue.length === 0) {
        alert("Por favor, introduce algún texto primero.");
        return;
    }

    // Transformamos la string
    const reversed = reverseString(inputValue);

    // Mostramos el resultado
    outputDisplay.textContent = reversed;
    
    // Hacemos visible la sección de resultados
    resultSection.classList.add('visible');
    
    // Reseteamos el estado del botón de copiar (por si se usó antes)
    copyBtn.textContent = "Copiar al portapapeles";
});

// Evento click para el botón de copiar
copyBtn.addEventListener('click', async () => {
    const textToCopy = outputDisplay.textContent;
    
    try {
        // Utilizamos la API nativa del navegador para copiar al portapapeles
        await navigator.clipboard.writeText(textToCopy);
        
        // Feedback visual (UX)
        copyBtn.textContent = "¡Copiado con éxito!";
        
        // Lo devolvemos a la normalidad pasados 2 segundos
        setTimeout(() => {
            copyBtn.textContent = "Copiar al portapapeles";
        }, 2000);
        
    } catch (err) {
        console.error("Error al copiar al portapapeles: ", err);
        alert("Hubo un error al intentar copiar el texto.");
    }
});