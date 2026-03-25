document.addEventListener("DOMContentLoaded", () => {
  // Estilos generales de la página
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "#f1f1f1";
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
  document.body.style.color = "#1f2937";

  // Contenedor principal
  const container = document.createElement("div");
  container.style.maxWidth = "1020px";
  container.style.margin = "36px 0 0 66px";

  // Título
  const title = document.createElement("h1");
  title.textContent = "Reverse String";
  title.style.fontSize = "68px";
  title.style.fontWeight = "700";
  title.style.margin = "0 0 20px 0";
  title.style.lineHeight = "1.1";

  // Input
  const input = document.createElement("input");
  input.type = "text";
  input.value = "Hello, welcome to AI4Devs";
  input.placeholder = "Write a text";
  input.style.width = "100%";
  input.style.maxWidth = "1000px";
  input.style.boxSizing = "border-box";
  input.style.fontSize = "32px";
  input.style.padding = "18px 24px";
  input.style.border = "2px solid #c8ced6";
  input.style.borderRadius = "10px";
  input.style.outline = "none";
  input.style.backgroundColor = "#f7f7f7";
  input.style.color = "#4b5563";

  // Botón reverse
  const reverseButton = document.createElement("button");
  reverseButton.textContent = "Reverse ??";
  reverseButton.style.marginTop = "16px";
  reverseButton.style.padding = "18px 26px";
  reverseButton.style.fontSize = "32px";
  reverseButton.style.fontWeight = "700";
  reverseButton.style.border = "none";
  reverseButton.style.borderRadius = "8px";
  reverseButton.style.backgroundColor = "#0d6efd";
  reverseButton.style.color = "#ffffff";
  reverseButton.style.cursor = "pointer";

  // Resultado
  const result = document.createElement("p");
  result.style.fontSize = "34px";
  result.style.margin = "36px 0 18px 0";
  result.style.color = "#2b2f36";

  // Botón copy
  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy ??";
  copyButton.style.padding = "18px 26px";
  copyButton.style.fontSize = "32px";
  copyButton.style.border = "none";
  copyButton.style.borderRadius = "8px";
  copyButton.style.backgroundColor = "#6c757d";
  copyButton.style.color = "#ffffff";
  copyButton.style.cursor = "pointer";

  // Función para invertir texto
  function reverseString(text) {
    return text.split("").reverse().join("");
  }

  // Mostrar resultado inicial
  result.textContent = reverseString(input.value);

  // Acción del botón Reverse
  reverseButton.addEventListener("click", () => {
    result.textContent = reverseString(input.value);
  });

  // También invertir al pulsar Enter
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      result.textContent = reverseString(input.value);
    }
  });

  // Acción del botón Copy
  copyButton.addEventListener("click", async () => {
    const textToCopy = result.textContent;

    if (!textToCopy) return;

    try {
      await navigator.clipboard.writeText(textToCopy);
      copyButton.textContent = "Copied ?";

      setTimeout(() => {
        copyButton.textContent = "Copy ??";
      }, 1500);
    } catch (error) {
      // Fallback por si clipboard no está disponible
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      copyButton.textContent = "Copied ?";
      setTimeout(() => {
        copyButton.textContent = "Copy ??";
      }, 1500);
    }
  });

  // Montar estructura
  container.appendChild(title);
  container.appendChild(input);
  container.appendChild(reverseButton);
  container.appendChild(result);
  container.appendChild(copyButton);
  document.body.appendChild(container);
});