const TextApp = {
    // Configuración y selectores
    settings: {
        minLength: 3,
        placeholderMsg: "El texto invertido aparecerá aquí",
        errorMsg: "No hay texto suficiente (mínimo 3 letras)"
    },

    // 1. Lógica Pura (Transformación)
    reverse: (str) => [...str].reverse().join(''),

    // 2. Gestión de la Interfaz (UI)
    updateDisplay: function(content, isError = false) {
        const display = document.getElementById('resultText');
        display.textContent = content;
        
        // Cambiamos el estilo visual si es un mensaje de estado o el resultado
        if (isError) {
            display.classList.add('placeholder-text');
        } else {
            display.classList.remove('placeholder-text');
        }
    },

    // 3. Manejador de Eventos
    handleInput: function(event) {
        const value = event.target.value.trim();

        // Validación: Campo vacío
        if (value.length === 0) {
            this.updateDisplay(this.settings.placeholderMsg, true);
            return;
        }

        // Validación: Mínimo de caracteres
        if (value.length < this.settings.minLength) {
            this.updateDisplay(this.settings.errorMsg, true);
            return;
        }

        // Si pasa las validaciones, invertimos
        const result = this.reverse(value);
        this.updateDisplay(result, false);
    },

    // 4. Inicialización
    init: function() {
        const input = document.getElementById('userInput');
        if (input) {
            // Usamos bind(this) para no perder el contexto del objeto TextApp
            input.addEventListener('input', this.handleInput.bind(this));
        }
    }
};

// Arrancamos la aplicación
TextApp.init();