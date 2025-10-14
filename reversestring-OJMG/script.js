// Aplicar estilos al body para centrar el contenido
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundColor = '#f4f4f9';

// Crear contenedor principal
const container = document.createElement('div');
container.style.width = '40%';
container.style.textAlign = 'center';
container.style.backgroundColor = '#fff';
container.style.padding = '20px';
container.style.borderRadius = '12px';
container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';

// Crear elementos
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Escribe un texto (3 - 100 caracteres)';
input.minLength = 3;
input.maxLength = 100;
input.style.width = '100%';
input.style.padding = '10px';
input.style.marginBottom = '15px';
input.style.fontSize = '16px';
input.style.border = '1px solid #ccc';
input.style.borderRadius = '8px';
input.style.outline = 'none';

// Crear caja de salida
const outputBox = document.createElement('textarea');
outputBox.readOnly = true;
outputBox.rows = 4;
outputBox.style.width = '100%';
outputBox.style.padding = '10px';
outputBox.style.fontSize = '16px';
outputBox.style.border = '1px solid #ccc';
outputBox.style.borderRadius = '8px';
outputBox.placeholder = 'Aquí aparecerá el texto invertido...';

// Función para invertir texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Evento input: se actualiza conforme el usuario escribe
input.addEventListener('input', () => {
    const text = input.value.trim();

    if (text.length >= 3 && text.length <= 100) {
        outputBox.value = reverseString(text);
    } else {
        outputBox.value = '';
    }
});

// Agregar elementos al contenedor y al body
container.appendChild(input);
container.appendChild(outputBox);
document.body.appendChild(container);
