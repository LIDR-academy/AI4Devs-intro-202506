document.getElementById("invertButton").addEventListener("click", function () {
    const input = document.getElementById("textInput").value;
    const inverted = input.split("").reverse().join("");
    document.getElementById("result").textContent = inverted;
});
