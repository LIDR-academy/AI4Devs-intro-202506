function reverse(text) {
    return text.split("").reverse().join("");
}

function syncUI() {
    const inputEl = document.getElementById("inputText");
    const btnEl = document.getElementById("btnInvertir");
    const outputEl = document.getElementById("output");

    const value = inputEl.value;
    const trimmed = value.trim();

    // Actualiza en tiempo real
    outputEl.innerText = reverse(value);

    // Muestra/oculta con clase 'show'
    btnEl.classList.toggle("show", trimmed.length > 3);
}

function reverseString() {
    syncUI();
}

document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.getElementById("inputText");
    inputEl.addEventListener("input", syncUI);
    syncUI();
});
