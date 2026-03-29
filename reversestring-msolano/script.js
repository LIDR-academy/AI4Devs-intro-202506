document.getElementById("reverseBtn").addEventListener("click", function () {
    const input = document.getElementById("inputText").value;

    // Validación básica
    if (!input) {
        document.getElementById("result").textContent = "Please enter a value";
        return;
    }

    // Invertir cadena
    const reversed = input.split('').reverse().join('');

    // Mostrar resultado
    document.getElementById("result").textContent = reversed;
});