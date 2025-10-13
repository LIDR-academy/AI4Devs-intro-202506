// Parámetros y utilidades
const MIN_LEN = 3;

// Inversión segura para Unicode básico (usa puntos de código)
function reverseString(value) {
  return Array.from(value).reverse().join("");
}

// Helpers de UI
function setStatus(el, ok, message) {
  el.textContent = message || "";
  el.classList.remove("ok", "err");
  if (!message) return;
  el.classList.add(ok ? "ok" : "err");
}

function meetsMinLen(value) {
  return Array.from(value).length >= MIN_LEN;
}

// Aproximación 1 — validación al pulsar
(function approach1() {
  const input = document.getElementById("in1");
  const btn = document.getElementById("btn1");
  const out = document.getElementById("out1");
  const msg = document.getElementById("msg1");

  btn.addEventListener("click", () => {
    const value = input.value ?? "";
    if (!meetsMinLen(value)) {
      setStatus(msg, false, `Introduce al menos ${MIN_LEN} caracteres (actual: ${value.length}).`);
      out.textContent = "";
      return;
    }
    out.textContent = reverseString(value);
    setStatus(msg, true, "Texto invertido correctamente.");
  });
})();

// Aproximación 2 — botón habilitado al cumplir longitud
(function approach2() {
  const input = document.getElementById("in2");
  const btn = document.getElementById("btn2");
  const out = document.getElementById("out2");
  const msg = document.getElementById("msg2");

  function refresh() {
    const ok = meetsMinLen(input.value ?? "");
    btn.disabled = !ok;
    setStatus(msg, ok, ok ? "Listo para invertir." : `Escribe al menos ${MIN_LEN} caracteres.`);
    if (!ok) out.textContent = "";
  }

  input.addEventListener("input", refresh);
  btn.addEventListener("click", () => {
    out.textContent = reverseString(input.value ?? "");
    setStatus(msg, true, "Texto invertido correctamente.");
  });

  // Estado inicial
  refresh();
})();

// Aproximación 3 — inversión en tiempo real
(function approach3() {
  const input = document.getElementById("in3");
  const out = document.getElementById("out3");
  const msg = document.getElementById("msg3");

  function refresh() {
    const value = input.value ?? "";
    if (!meetsMinLen(value)) {
      out.textContent = "";
      setStatus(msg, false, `Escribe al menos ${MIN_LEN} caracteres para ver el resultado en tiempo real.`);
      return;
    }
    out.textContent = reverseString(value);
    setStatus(msg, true, "Actualizando en tiempo real…");
  }

  input.addEventListener("input", refresh);

  // Estado inicial
  refresh();
})();
