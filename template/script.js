document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("botonInvertir");
  const entrada = document.getElementById("entradaTexto");
  const resultado = document.getElementById("resultado");

  // Escucha el cambio en el input
  entrada.addEventListener("input", function () {
    if (entrada.value.length >= 3) {
      boton.style.display = "inline-block";
    } else {
      boton.style.display = "none";
      resultado.textContent = "";  // Opcional: limpia resultado si se borra texto
    }
  });

  // Acción del botón
  boton.addEventListener("click", function () {
    const texto = entrada.value;
    const invertido = texto.split("").reverse().join("");
    resultado.textContent = "Resultado: " + invertido;
  });
});
