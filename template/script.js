function invertirCadena(texto) {
  return [...texto].reverse().join('');
}

document.getElementById('invertirBtn').addEventListener('click', function () {
  const entrada = document.getElementById('textoInput').value;
  const invertido = invertirCadena(entrada);
  document.getElementById('resultado').textContent = invertido;
});
