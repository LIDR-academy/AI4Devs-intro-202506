// ===== Reverse Logic =====
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  return Array.from(str).reverse().join("");
}

function wireReverseUI() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  const reversedLabel = document.getElementById("reversedLabel");

  if (!input || !result) {
    console.error("[Reverse String] Missing #inputText or #result.");
    return;
  }

  const update = () => {
    const value = input.value || "";
    const reversed = reverseString(value);
    result.textContent = reversed;
    if (reversedLabel) reversedLabel.textContent = `Reversed string: ${reversed || "—"}`;
  };

  input.addEventListener("input", update);

  if (!input.value) input.value = "AI4Devs";
  update();
}

// ===== Theming / Halloween Flow =====
const THEME_KEY = "ai4devs:theme";

function themeHumanName(theme) {
  switch (theme) {
    case "pumpkin": return "Pumpkin";
    case "dracula": return "Dracula";
    case "retrofuturistic": return "Retrofuturistic";
    case "startrek": return "Star Trek";
    case "standard":
    default: return "Standard";
  }
}

function updateCostumeBadge(theme) {
  const nameEl = document.getElementById("costumeName");
  if (nameEl) nameEl.textContent = themeHumanName(theme);
}

function openModal(backdrop) { backdrop.style.display = "flex"; }
function closeModal(backdrop) { backdrop.style.display = "none"; }

function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch {}

  // Toggle header buttons
  const halloweenBtn = document.getElementById("halloweenBtn");
  const resetBtn = document.getElementById("resetThemeBtn");
  const themed = theme !== "standard";
  if (halloweenBtn) halloweenBtn.style.display = themed ? "none" : "inline-flex";
  if (resetBtn) resetBtn.style.display = themed ? "inline-flex" : "none";

  // Update the “I am dressed as” label
  updateCostumeBadge(theme);
}

function resetTheme() {
  applyTheme("standard");
}

function wireThemeUI() {
  const modal = document.getElementById("themeModal");
  const modalClose = document.getElementById("themeModalClose");
  const halloweenBtn = document.getElementById("halloweenBtn");
  const resetBtn = document.getElementById("resetThemeBtn");

  if (halloweenBtn) {
    halloweenBtn.addEventListener("click", () => openModal(modal));
  }
  if (modalClose) {
    modalClose.addEventListener("click", () => closeModal(modal));
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal); // click outside
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal(modal);
  });

  // Theme choice buttons
  modal.querySelectorAll("[data-theme-choice]").forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = btn.getAttribute("data-theme-choice");
      applyTheme(choice);
      closeModal(modal);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", resetTheme);
  }

  // Restore persisted theme
  try {
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved && saved !== "standard" ? saved : "standard");
  } catch {
    applyTheme("standard");
  }
}

// ===== Init =====
function init() {
  wireReverseUI();
  wireThemeUI();
  console.log("[Reverse String] UI wired with vibrant theming and tooltip.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
