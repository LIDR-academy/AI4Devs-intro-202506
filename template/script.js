// script.js
// Build UI based on the provided template and wire up reverse-string logic.
// We keep HTML seed intact and generate everything from JS to avoid modifying the template file.

(function () {
    // -- Helpers ---------------------------------------------------------------
    function reverseGraphemes(str) {
      // Prefer grapheme-aware segmentation if available (handles emojis + accents)
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
        return Array.from(seg.segment(str), s => s.segment).reverse().join("");
      }
      // Fallback: code-point safe reversal
      return Array.from(str).reverse().join("");
    }
  
    function el(tag, opts = {}) {
      const node = document.createElement(tag);
      if (opts.className) node.className = opts.className;
      if (opts.text) node.textContent = opts.text;
      if (opts.html) node.innerHTML = opts.html;
      if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
      return node;
    }
  
    function copyToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }
      // Legacy fallback
      const ta = el("textarea", { attrs: { style: "position:absolute;left:-9999px;top:-9999px" } });
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } finally { document.body.removeChild(ta); }
      return Promise.resolve();
    }
  
    // -- Styles (lightweight, inline to avoid editing HTML) -------------------
    const style = el("style");
    style.textContent = `
      :root { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif; }
      body { margin: 0; background: #fff; color: #111827; }
      .wrap { max-width: 860px; margin: 32px auto; padding: 0 24px; }
      .title { font-size: clamp(28px, 5vw, 48px); font-weight: 700; letter-spacing: 0.3px; margin: 8px 0 24px; }
      .row { display: flex; gap: 12px; align-items: center; }
      .input {
        flex: 1; height: 48px; padding: 0 16px;
        border: 1px solid #e5e7eb; border-radius: 8px; outline: none;
        font-size: 18px;
      }
      .input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.15); }
      .btn {
        height: 48px; padding: 0 18px; border: none; border-radius: 10px;
        background: #2563eb; color: white; font-weight: 600; font-size: 16px; cursor: pointer;
        display: inline-flex; align-items: center; gap: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,.08);
      }
      .btn:active { transform: translateY(1px); }
      .muted { color: #6b7280; }
      .out { margin: 18px 2px 8px; font-size: 22px; min-height: 28px; word-break: break-word; }
      .copy { background: #374151; }
      .copy:disabled { opacity: .5; cursor: not-allowed; }
      .hint { font-size: 14px; margin-top: 4px; color: #6b7280; }
    `;
    document.head.appendChild(style);
  
    // -- UI --------------------------------------------------------------------
    const wrap = el("div", { className: "wrap" });
    const title = el("h1", { className: "title", text: "Reverse String" });
  
    const row = el("div", { className: "row" });
    const input = el("input", {
      className: "input",
      attrs: {
        type: "text",
        placeholder: "Escribe aquí…"
      }
    });
  
    const reverseBtn = el("button", { className: "btn", html: 'Reverse <span aria-hidden="true">🔄</span>' });
    row.appendChild(input);
    row.appendChild(reverseBtn);
  
    const output = el("div", { className: "out muted", text: "" });
    const copyBtn = el("button", { className: "btn copy", html: 'Copy <span aria-hidden="true">📋</span>' });
    copyBtn.disabled = true;
  
    const hint = el("div", { className: "hint", text: "Usa Enter o el botón para invertir. Soporta acentos y emojis." });
  
    wrap.appendChild(title);
    wrap.appendChild(row);
    wrap.appendChild(output);
    wrap.appendChild(copyBtn);
    wrap.appendChild(hint);
    document.body.appendChild(wrap);
  
    // -- Logic -----------------------------------------------------------------
    function runReverse() {
      const txt = input.value ?? "";
      const rev = reverseGraphemes(txt);
      output.textContent = rev;
      output.classList.toggle("muted", rev.length === 0);
      copyBtn.disabled = rev.length === 0;
    }
  
    reverseBtn.addEventListener("click", runReverse);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") runReverse();
    });
  
    copyBtn.addEventListener("click", () => {
      if (!output.textContent) return;
      copyToClipboard(output.textContent).then(() => {
        const prev = copyBtn.innerHTML;
        copyBtn.innerHTML = "Copied ✔";
        setTimeout(() => (copyBtn.innerHTML = prev), 900);
      });
    });
  
    // Do initial render like in the screenshot
    runReverse();
  })();
  