const TextApp = {
    // Lógica
    reverse: (str) => [...str].reverse().join(''),
    
    // Evento
    onInput: function(e) {
        const result = document.getElementById('resultText');
        const text = e.target.value;
        
        result.textContent = text ? this.reverse(text) : "Esperando texto...";
    },
    
    // Inicio
    init: function() {
        document.getElementById('userInput').addEventListener('input', (e) => this.onInput(e));
    }
};

TextApp.init();