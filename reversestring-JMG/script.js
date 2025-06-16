function invertirTexto() {
    const texto = document.getElementById('inputTexto').value;
    const textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultado').innerText = textoInvertido;
}
