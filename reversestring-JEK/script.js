document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const reverseBtn = document.getElementById("reverseBtn");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copyBtn");
  
    // Función para invertir el texto
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
  
    // Evento del botón Reverse
    reverseBtn.addEventListener("click", () => {
      const text = inputText.value.trim();
      if (text === "") {
        output.textContent = "Please enter text to reverse.";
        return;
      }
      const reversed = reverseString(text);
      output.textContent = reversed;
    });
  
    // Evento del botón Copy
    copyBtn.addEventListener("click", async () => {
      const text = output.textContent;
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-clipboard"></i> Copy';
        }, 1500);
      } catch (err) {
        alert("Failed to copy text: " + err);
      }
    });
  });
  