// Crear la estructura HTML dinámicamente
document.body.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            padding: 40px;
            background-color: #f5f5f5;
        }
        
        h1 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
        }
        
        .input-container {
            margin-bottom: 20px;
        }
        
        input[type="text"] {
            width: 100%;
            max-width: 1000px;
            padding: 20px;
            font-size: 18px;
            border: 2px solid #ddd;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s;
        }
        
        input[type="text"]:focus {
            border-color: #007bff;
        }
        
        .button {
            padding: 15px 30px;
            font-size: 18px;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s;
            margin-bottom: 30px;
        }
        
        .reverse-btn {
            background-color: #007bff;
            color: white;
        }
        
        .reverse-btn:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
        }
        
        .reverse-btn:active {
            transform: translateY(0);
        }
        
        .result {
            font-size: 32px;
            color: #333;
            margin-bottom: 20px;
            min-height: 50px;
        }
        
        .copy-btn {
            background-color: #6c757d;
            color: white;
        }
        
        .copy-btn:hover {
            background-color: #5a6268;
            transform: translateY(-2px);
        }
        
        .copy-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            transform: none;
        }
    </style>
    
    <h1>Reverse String</h1>
    
    <div class="input-container">
        <input 
            type="text" 
            id="inputText" 
            placeholder="Hello, welcome to AI4Devs"
            value="Hello, welcome to AI4Devs"
        >
    </div>
    
    <button class="button reverse-btn" id="reverseBtn">
        Reverse 🔄
    </button>
    
    <div class="result" id="result"></div>
    
    <button class="button copy-btn" id="copyBtn" disabled>
        Copy 📋
    </button>
`;

// Función para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Obtener elementos del DOM
const inputText = document.getElementById('inputText');
const reverseBtn = document.getElementById('reverseBtn');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Evento para el botón Reverse
reverseBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text.trim() !== '') {
        const reversed = reverseString(text);
        result.textContent = reversed;
        copyBtn.disabled = false;
    }
});

// Evento para el botón Copy
copyBtn.addEventListener('click', () => {
    const textToCopy = result.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Feedback visual
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied! ✓';
            copyBtn.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '#6c757d';
            }, 2000);
        });
    }
});

// También permitir invertir con la tecla Enter
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        reverseBtn.click();
    }
});