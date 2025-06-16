document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("botonInvertir");
  boton.addEventListener("click", function () {
    const texto = document.getElementById("entradaTexto").value;
    const invertido = texto.split("").reverse().join("");
    document.getElementById("resultado").textContent = "Resultado: " + invertido;
  });
});
