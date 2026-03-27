// Selección de elementos del DOM
const userInput = document.getElementById("userInput")
const reverseBtn = document.getElementById("reverseBtn")
const resultText = document.getElementById("resultText")
const copyBtn = document.getElementById("copyBtn")

// Función para invertir el texto
reverseBtn.addEventListener("click", () => {
  const text = userInput.value

  if (text.trim() === "") {
    resultText.innerText = ""
    copyBtn.style.display = "none"
    return
  }

  // Lógica de inversión: convertir a array, invertir y unir
  const reversed = text.split("").reverse().join("")

  // Mostrar el resultado
  resultText.innerText = reversed

  // Mostrar el botón de copiar
  copyBtn.style.display = "block"
})

// Función para copiar al portapapeles
copyBtn.addEventListener("click", () => {
  const textToCopy = resultText.innerText

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Opcional: Pequeño feedback visual
      const originalText = copyBtn.innerHTML
      copyBtn.innerHTML = "Copied! ✅"
      setTimeout(() => {
        copyBtn.innerHTML = originalText
      }, 2000)
    })
    .catch((err) => {
      console.error("Error al copiar: ", err)
    })
})
