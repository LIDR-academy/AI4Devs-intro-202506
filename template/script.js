// ─────────────────────────────────────────────────────────────────────────────
// INTERFACES / CONTRACTS  (Interface Segregation Principle)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Base class for all string transformers.
 * Open for extension, closed for modification (Open/Closed Principle).
 */
class StringTransformer {
  /** @returns {string} Human-readable name shown in the UI */
  get name()        { throw new Error("Must implement 'name'."); }

  /** @returns {string} Short description for the UI */
  get description() { throw new Error("Must implement 'description'."); }

  /**
   * Apply the transformation.
   * @param {string} input
   * @returns {string}
   */
  transform(input)  { throw new Error("Must implement 'transform'."); }
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCRETE TRANSFORMERS  (Single Responsibility Principle)
// Each class has one job: define a single string transformation.
// ─────────────────────────────────────────────────────────────────────────────

/** Reverses the entire string character by character. */
class ReverseTransformer extends StringTransformer {
  get name()        { return "Reverse"; }
  get description() { return "Reverses the entire string"; }
  transform(input)  { return [...input].reverse().join(""); }
}

/** Toggles the case of every character. */
class ToggleCaseTransformer extends StringTransformer {
  get name()        { return "Toggle Case"; }
  get description() { return "Swaps uppercase ↔ lowercase"; }
  transform(input) {
    return [...input]
      .map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase())
      .join("");
  }
}

/** Reverses the order of words while keeping each word intact. */
class ReverseWordsTransformer extends StringTransformer {
  get name()        { return "Reverse Words"; }
  get description() { return "Reverses word order, not characters"; }
  transform(input)  { return input.split(/\s+/).reverse().join(" "); }
}

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRY  (Dependency Inversion Principle + DRY)
// Central registry decouples the UI from concrete transformer classes.
// Adding a new feature = register a new transformer — nothing else changes.
// ─────────────────────────────────────────────────────────────────────────────

class TransformerRegistry {
  constructor() {
    /** @type {Map<string, StringTransformer>} */
    this._transformers = new Map();
  }

  /**
   * Register a transformer instance.
   * @param {StringTransformer} transformer
   * @returns {TransformerRegistry} for fluent chaining
   */
  register(transformer) {
    if (!(transformer instanceof StringTransformer)) {
      throw new TypeError("Only StringTransformer instances can be registered.");
    }
    this._transformers.set(transformer.name, transformer);
    return this;
  }

  /** @returns {StringTransformer[]} */
  getAll() { return [...this._transformers.values()]; }

  /**
   * @param {string} name
   * @returns {StringTransformer}
   */
  get(name) {
    const t = this._transformers.get(name);
    if (!t) throw new Error(`Transformer "${name}" not found.`);
    return t;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// UI CONTROLLER  (Single Responsibility Principle)
// Owns all DOM interaction. Knows nothing about how transformations work.
// ─────────────────────────────────────────────────────────────────────────────

/** Minimum number of characters required to show the Run button. */
const MIN_INPUT_LENGTH = 3;

class UIController {
  /**
   * @param {TransformerRegistry} registry
   * @param {Object} selectors  CSS selector strings for each UI element
   */
  constructor(registry, selectors) {
    this._registry = registry;
    this._selectors = selectors;
    this._activeTransformer = null;
  }

  /** Boot: build tabs, wire events, select first tab. */
  init() {
    this._buildTabs();
    this._bindEvents();
    const first = this._registry.getAll()[0];
    if (first) this._selectTransformer(first.name);
    // Set initial run button visibility
    this._updateRunButton("");
  }

  // ── Private helpers ───────────────────────────────────────────────────────

  _buildTabs() {
    const container = document.querySelector(this._selectors.tabContainer);
    container.innerHTML = "";
    this._registry.getAll().forEach(t => {
      const btn = document.createElement("button");
      btn.className = "tab-btn";
      btn.dataset.name = t.name;
      btn.textContent = t.name;
      btn.title = t.description;
      btn.addEventListener("click", () => this._selectTransformer(t.name));
      container.appendChild(btn);
    });
  }

  _bindEvents() {
    const input    = document.querySelector(this._selectors.input);
    const runBtn   = document.querySelector(this._selectors.runBtn);
    const clearBtn = document.querySelector(this._selectors.clearBtn);
    const copyBtn  = document.querySelector(this._selectors.copyBtn);

    // Feature 2: update result in real time on every keystroke
    input.addEventListener("input", () => {
      const val = input.value;
      this._updateRunButton(val);
      val.trim() ? this._run() : this._clearOutput();
    });

    // Run button still works as a manual trigger
    runBtn.addEventListener("click", () => this._run());

    clearBtn.addEventListener("click", () => {
      input.value = "";
      this._clearOutput();
      this._updateRunButton("");
      input.focus();
    });

    copyBtn.addEventListener("click", () => this._copyResult());
  }

  /**
   * Feature 1: show the Run button only when input exceeds MIN_INPUT_LENGTH.
   * @param {string} value  Current input value
   */
  _updateRunButton(value) {
    const runBtn = document.querySelector(this._selectors.runBtn);
    const visible = value.length > MIN_INPUT_LENGTH;
    runBtn.style.visibility = visible ? "visible" : "hidden";
    runBtn.setAttribute("aria-hidden", String(!visible));
  }

  _selectTransformer(name) {
    this._activeTransformer = name;
    document.querySelectorAll(".tab-btn").forEach(btn =>
      btn.classList.toggle("active", btn.dataset.name === name)
    );
    const desc = document.querySelector(this._selectors.description);
    if (desc) desc.textContent = this._registry.get(name).description;
    const input = document.querySelector(this._selectors.input);
    this._updateRunButton(input.value);
    if (input.value.trim()) this._run();
  }

  _run() {
    const input  = document.querySelector(this._selectors.input);
    const output = document.querySelector(this._selectors.output);
    if (!input.value) { this._clearOutput(); return; }
    output.textContent = this._registry.get(this._activeTransformer).transform(input.value);
    document.querySelector(this._selectors.outputWrapper)?.classList.add("has-result");
    output.classList.remove("pop");
    void output.offsetWidth; // force reflow to restart animation
    output.classList.add("pop");
  }

  _clearOutput() {
    const output = document.querySelector(this._selectors.output);
    output.textContent = "";
    document.querySelector(this._selectors.outputWrapper)?.classList.remove("has-result");
  }

  _copyResult() {
    const text = document.querySelector(this._selectors.output).textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.querySelector(this._selectors.copyBtn);
      const orig = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = orig; btn.classList.remove("copied"); }, 1500);
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOTSTRAP
// To add a new transformer: create a subclass above and register it here.
// Nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const registry = new TransformerRegistry()
    .register(new ReverseTransformer())
    .register(new ToggleCaseTransformer())
    .register(new ReverseWordsTransformer());

  new UIController(registry, {
    tabContainer:  "#tab-container",
    input:         "#input-field",
    runBtn:        "#run-btn",
    clearBtn:      "#clear-btn",
    copyBtn:       "#copy-btn",
    output:        "#output-text",
    outputWrapper: "#output-wrapper",
    description:   "#transformer-desc",
  }).init();
});
