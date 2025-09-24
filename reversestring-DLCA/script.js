// script.js — lógica de inversión y UX
// Reversa segura compatible con Unicode básico usando Array.from
function reverseString(input) {
    // Maneja null/undefined de forma segura
    const s = (input ?? "").toString();
    // Array.from respeta puntos de código (evita romper emojis simples)
    return Array.from(s).reverse().join("");
  }
  
  const $input = document.getElementById("textInput");
  const $btn = document.getElementById("reverseBtn");
  const $result = document.getElementById("resultText");
  const $pill = document.getElementById("livePill");
  
  function updateUI() {
    const value = $input.value;
    const reversed = reverseString(value);
    const hasText = value.length > 0;
  
    // Mostrar/ocultar botón según longitud > 3
    if (value.length > 3) {
      $btn.style.display = "inline-block";
    } else {
      $btn.style.display = "none";
    }
  
    // Mostrar resultado en vivo
    $result.textContent = hasText ? reversed : $result.dataset.empty;
  
    // Animación de "En vivo"
    if (hasText) {
      $pill.classList.add("show");
    } else {
      $pill.classList.remove("show");
    }
  }
  
  // Eventos
  $input.addEventListener("input", updateUI);
  
  // Accesos rápidos
  $input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Forzamos una "acción" visual aunque ya sea en vivo
      $result.animate([{ transform: "scale(1.0)" }, { transform: "scale(1.02)" }, { transform: "scale(1.0)" }], {
        duration: 160,
        easing: "ease-in-out",
      });
    } else if (e.key === "Escape") {
      $input.value = "";
      updateUI();
    }
  });
  
  // Botón para quienes prefieren clic (aunque es opcional)
  $btn.addEventListener("click", () => {
    // Misma animación sutil usada para Enter
    $result.animate([{ transform: "scale(1.0)" }, { transform: "scale(1.02)" }, { transform: "scale(1.0)" }], {
      duration: 160,
      easing: "ease-in-out",
    });
  });
  
  // Estado inicial
  updateUI();
  