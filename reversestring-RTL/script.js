function reverseString() {
    const input = document.getElementById("inputText").value;

    // Invertir la cadena
    const reversed = input.split("").reverse().join("");

    // Mostrar resultado
    document.getElementById("result").textContent = reversed;
}