function reverseString() {
    const input = document.getElementById("inputText").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("output").innerText = reversed;
}
