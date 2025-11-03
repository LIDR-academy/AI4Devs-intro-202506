const input = document.getElementById("texto");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const copiarBtn = document.getElementById("copiarBtn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

input.addEventListener("input", () => {
  const texto = input.value.trim();

  if (texto.length > 3 && texto.length <= 10) {
    boton.style.display = "inline-block";
    resultado.innerText = "";
    copiarBtn.style.display = "none";
  } else if (texto.length > 10) {
    boton.style.display = "none";
    mostrarResultado(texto);
  } else {
    boton.style.display = "none";
    resultado.innerText = "";
    copiarBtn.style.display = "none";
  }
});

function invertirCadena() {
  const texto = input.value.trim();
  if (texto) mostrarResultado(texto);
}

function mostrarResultado(texto) {
  const invertido = texto.split("").reverse().join("");
  resultado.innerText = invertido;
  copiarBtn.style.display = "inline-block";
  copiarBtn.innerText = "Copiar";
  copiarBtn.onclick = () => copiarTexto(invertido);
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    copiarBtn.innerText = "Copiado";
    setTimeout(() => (copiarBtn.innerText = "Copiar"), 2000);
  });
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeToggle.innerText = "Cambiar a tema claro";
  } else {
    themeToggle.innerText = "Cambiar a tema oscuro";
  }
});
