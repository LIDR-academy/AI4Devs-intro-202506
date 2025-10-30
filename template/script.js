// Reversa segura por puntos de código (maneja emojis y acentos compuestos mejor que split(''))
function reverseByCodePoints(str) {
    return Array.from(str).reverse().join("");
  }
  
  const input  = document.getElementById("textInput");
  const out    = document.getElementById("output");
  const btnRev = document.getElementById("reverseBtn");
  const btnCpy = document.getElementById("copyBtn");
  const toast  = document.getElementById("copiedToast");
  
  function doReverse() {
    const value = input.value ?? "";
    const reversed = reverseByCodePoints(value);
    out.textContent = reversed;
  }
  
  function copyResult() {
    const text = out.textContent || "";
    if (!text) return;
  
    navigator.clipboard.writeText(text).then(() => {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    }).catch(() => {
      // Fallback si clipboard no está disponible
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1200);
    });
  }
  
  // Eventos
  btnRev.addEventListener("click", doReverse);
  btnCpy.addEventListener("click", copyResult);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doReverse();
  });
  
  // Valor de ejemplo como en el mock
  input.value = "Hello, welcome to AI4Devs";
  doReverse();
  