# 1. Assignment 

## 1.1 Prompt 1
Create a web page with JavaScript logic that reverses the order of a string.

Example: if I input AI4Devs, it should return sveD4IA.

Do it using the seed files index.html and script.js provided.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```

## 1.2 ChatGPT Output

Here's a drop-in script.js that builds the UI and reverses the input string (handles emojis and accented characters correctly using Intl.Segmenter when available). You don't need to change your index.html—just place this file next to it.

```javascript
// script.js

// ---- Helpers ---------------------------------------------------------------

/**
 * Reverse a string by grapheme clusters (so emojis/accents stay intact).
 * Falls back to code-point reversal if Intl.Segmenter isn't available.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  // Fallback: code point–aware (handles surrogate pairs but not combining clusters)
  return Array.from(str).reverse().join("");
}

// ---- UI --------------------------------------------------------------------

/** Create minimal UI entirely from JS so index.html can stay as provided */
function buildUI() {
  const root = document.createElement("main");
  root.style.cssText = `
    max-width: 720px; margin: 10vh auto; padding: 24px;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
    line-height: 1.4;
  `;

  const card = document.createElement("section");
  card.style.cssText = `
    border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
  `;

  const title = document.createElement("h1");
  title.textContent = "Reverse String";
  title.style.cssText = "margin: 0 0 8px; font-size: 28px;";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Type any text and click Reverse (e.g., AI4Devs → sveD4IA).";
  subtitle.style.cssText = "margin: 0 0 20px; color: #6b7280;";

  const form = document.createElement("form");
  form.setAttribute("autocomplete", "off");
  form.ariaLabel = "Reverse string form";

  const label = document.createElement("label");
  label.setAttribute("for", "inputText");
  label.textContent = "Input text";
  label.style.cssText = "display:block; font-weight:600; margin: 0 0 6px;";

  const input = document.createElement("input");
  input.id = "inputText";
  input.type = "text";
  input.placeholder = "AI4Devs";
  input.required = true;
  input.style.cssText = `
    width: 100%; padding: 12px 14px; border-radius: 12px;
    border: 1px solid #d1d5db; outline: none; font-size: 16px;
  `;
  input.addEventListener("focus", () => (input.style.borderColor = "#6366f1"));
  input.addEventListener("blur", () => (input.style.borderColor = "#d1d5db"));

  const actions = document.createElement("div");
  actions.style.cssText = "display:flex; gap:12px; align-items:center; margin-top:14px;";

  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Reverse";
  btn.style.cssText = `
    padding: 10px 16px; border-radius: 12px; border: none; cursor: pointer;
    background: #4f46e5; color: white; font-weight: 600; font-size: 15px;
  `;

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.textContent = "Clear";
  clearBtn.style.cssText = `
    padding: 10px 16px; border-radius: 12px; border: 1px solid #d1d5db; cursor: pointer;
    background: white; color: #374151; font-weight: 600; font-size: 15px;
  `;

  const outputWrap = document.createElement("div");
  outputWrap.style.cssText = "margin-top: 18px;";

  const outLabel = document.createElement("div");
  outLabel.textContent = "Result";
  outLabel.style.cssText = "font-weight:600; margin: 0 0 6px;";

  const output = document.createElement("output");
  output.id = "result";
  output.style.cssText = `
    display:block; min-height: 48px; padding: 12px 14px; border-radius: 12px;
    border: 1px dashed #d1d5db; background: #fafafa; font-size: 16px; word-wrap: break-word;
  `;
  output.setAttribute("aria-live", "polite");

  // Copy button (nice-to-have)
  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.textContent = "Copy result";
  copyBtn.title = "Copy to clipboard";
  copyBtn.style.cssText = `
    margin-top: 10px; padding: 8px 12px; border-radius: 10px; border: 1px solid #d1d5db; cursor: pointer;
    background: white; color: #374151; font-weight: 600; font-size: 14px;
  `;

  // Wire up events
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value ?? "";
    output.textContent = reverseString(value);
    input.focus();
    input.select?.();
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
    input.focus();
  });

  copyBtn.addEventListener("click", async () => {
    const text = output.textContent || "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy result"), 1200);
    } catch {
      // Fallback: select and rely on user copy
      const range = document.createRange();
      range.selectNodeContents(output);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  // Assemble
  actions.append(btn, clearBtn);
  outputWrap.append(outLabel, output, copyBtn);
  form.append(label, input, actions, outputWrap);
  card.append(title, subtitle, form);
  root.append(card);
  document.body.append(root);

  // Example: pre-fill to show the sample behavior
  input.value = "AI4Devs";
  output.textContent = reverseString(input.value);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", buildUI);
} else {
  buildUI();
}
```

### How it works

- Loads with your existing index.html (no edits needed).
- Builds a small UI dynamically.
- Uses Intl.Segmenter (when available) to reverse by grapheme clusters, so strings with emojis/accents reverse correctly.
- Example: typing AI4Devs returns sveD4IA as required.

## 1.3 Prompt 2

Modify index.html to include a label to enter the text to process using script.js include a label that shows in real time the reversed string.

## 1.4 ChatGPT Output

Great—here are the updated files. The HTML now includes:

- A label + text input to enter the string.
- A second label that displays the reversed string in real time.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reverse String</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif; margin: 8vh auto; max-width: 720px; padding: 0 16px; line-height: 1.4; }
    .card { border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,.05); }
    h1 { margin: 0 0 8px; font-size: 28px; }
    p.help { color: #6b7280; margin: 0 0 16px; }
    label { display: block; font-weight: 600; margin: 12px 0 6px; }
    input[type="text"] { width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid #d1d5db; font-size: 16px; }
    .result-box { margin-top: 8px; padding: 12px 14px; border-radius: 12px; border: 1px dashed #d1d5db; background: #fafafa; min-height: 44px; }
  </style>
</head>
<body>
  <main class="card" role="main">
    <h1>Reverse String</h1>
    <p class="help">Type any text (e.g., <code>AI4Devs</code>) and see the reversed string live.</p>

    <!-- Input label + control -->
    <label for="inputText">Text to process</label>
    <input id="inputText" type="text" placeholder="AI4Devs" autocomplete="off" />

    <!-- Live reversed label -->
    <label for="inputText" id="reversedLabel">Reversed string</label>
    <div class="result-box" id="result" aria-live="polite"></div>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

### script.js

```javascript
// Reverse a string by grapheme clusters (keeps emojis/accents intact).
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  // Fallback: code point–aware reversal
  return Array.from(str).reverse().join("");
}

function init() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");

  const update = () => {
    const value = input.value || "";
    result.textContent = reverseString(value);
  };

  // Live update as the user types
  input.addEventListener("input", update);

  // Optional: show sample on load
  input.value = "AI4Devs";
  update();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
```

Open index.html in your browser—typing updates the "Reversed string" label instantly. Example: AI4Devs → sveD4IA.

# Assignment Completed After Prompt 2

The core assignment requirements, including advanced functions, have been fulfilled with the implementation from Prompt 2. 

The following sections contain additional enhancements for improved presentation and styling.

# 2. Additional Enhancements (Presentation)

## 2.1 Prompt 3
Add a header presentation to the html, apply proper styling for a masters project I am handing in, investigate the best possible style and presentation form for this type of project to make the best impression in a high tech enterprise / school setting.

My Name: Jaime Caicedo Gorlovetsky

School Name: LIDR Academy

Program Name: AI4Devs

Assignement Name: Reverse String

Date: October 31/2025

Chat/Model: ChatGPT / GPT 5 Thinking

## 2.2 ChatGPT Output

Absolutely—here's a polished, enterprise-ready presentation with a professional header, clean typography, accessible contrast, and print-friendly styles. It's designed to look great in a high-tech school/enterprise setting and to make a strong first impression.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reverse String — Jaime Caicedo Gorlovetsky</title>
  <meta name="description" content="Masters-level project: Reverse String tool with grapheme-aware logic and live preview." />
  <style>
    /* ===== Design Tokens ===== */
    :root{
      --bg: #0b0c10;
      --panel: #111319;
      --panel-2: #151824;
      --text: #e9edf1;
      --muted: #a6b0bf;
      --accent: #6ea8fe;      /* professional blue */
      --accent-2:#8be9fd;     /* subtle cyan detail */
      --stroke:#262b36;
      --focus: #9cc2ff;
      --radius-xl: 18px;
      --radius-md: 12px;
      --shadow-1: 0 10px 30px rgba(0,0,0,.35);
      --shadow-2: 0 3px 12px rgba(0,0,0,.25);
      --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, "Noto Sans", "Helvetica Neue", sans-serif;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    @media (prefers-color-scheme: light) {
      :root{
        --bg: #f7f8fb;
        --panel: #ffffff;
        --panel-2: #f3f5fa;
        --text: #0f172a;
        --muted: #475569;
        --accent: #345bdf;
        --accent-2:#198fb6;
        --stroke:#e6eaf2;
        --focus: #5c83ff;
      }
    }

    /* ===== Base ===== */
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body{
      margin: 0;
      background: radial-gradient(1200px 600px at 10% -10%, rgba(110,168,254,.15), transparent 60%),
                  radial-gradient(900px 500px at 110% 0%, rgba(139,233,253,.08), transparent 55%),
                  var(--bg);
      color: var(--text);
      font: 16px/1.55 var(--font);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }

    /* ===== Layout ===== */
    .container{
      max-width: 980px;
      margin: 4rem auto;
      padding: 0 20px;
    }

    /* ===== Header / Cover ===== */
    .cover{
      background: linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0)) ;
      border: 1px solid var(--stroke);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-1);
      overflow: hidden;
    }

    .cover__bar{
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: center;
      padding: 18px 22px;
      background: linear-gradient(90deg, rgba(110,168,254,.16), rgba(139,233,253,.10) 60%, transparent);
      border-bottom: 1px solid var(--stroke);
    }

    .brand{
      display:flex; align-items:center; gap:12px; font-weight:700; letter-spacing:.2px;
    }
    .brand__glyph{
      width: 36px; height: 36px; border-radius: 10px;
      background: conic-gradient(from 200deg, var(--accent), var(--accent-2));
      box-shadow: inset 0 0 0 2px rgba(255,255,255,.12), 0 6px 18px rgba(0,0,0,.25);
    }
    .brand__name{ font-size: 18px; }

    .badge{
      font-weight: 700; font-size: 12px; letter-spacing:.3px;
      color: var(--text);
      padding: 6px 10px; border-radius: 999px;
      border: 1px solid var(--stroke);
      background: linear-gradient(180deg, var(--panel-2), transparent);
    }

    .cover__content{
      display: grid; gap: 16px;
      padding: 22px;
    }

    .title{
      font-size: clamp(28px, 4.4vw, 40px);
      line-height: 1.2; margin: 0;
      letter-spacing: .2px;
    }
    .subtitle{
      margin: 4px 0 0; color: var(--muted);
      font-weight: 500;
    }

    .meta{
      margin-top: 8px;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
      gap: 10px;
      padding: 14px; border-radius: var(--radius-md);
      background: var(--panel-2);
      border: 1px solid var(--stroke);
    }
    .meta dt{ color: var(--muted); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: .4px; }
    .meta dd{ margin: 2px 0 0; font-weight: 600; }

    /* ===== Work Panel ===== */
    .panel{
      margin-top: 22px;
      background: var(--panel);
      border: 1px solid var(--stroke);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-2);
      overflow: hidden;
    }
    .panel__head{
      padding: 16px 20px;
      border-bottom: 1px solid var(--stroke);
      display:flex; align-items:center; justify-content:space-between; gap: 12px;
    }
    .panel__head h2{
      font-size: 18px; margin: 0; letter-spacing:.2px;
    }
    .help{
      color: var(--muted); font-size: 14px; margin: 0;
    }

    .panel__body{ padding: 20px; display: grid; gap: 12px; }

    label{ font-weight: 700; }
    .input{
      width: 100%; padding: 12px 14px;
      border-radius: 12px;
      border: 1px solid var(--stroke);
      background: var(--panel-2);
      color: var(--text);
      outline: none;
      font-size: 16px;
      transition: border-color .15s ease, box-shadow .15s ease;
    }
    .input:focus{
      border-color: var(--focus);
      box-shadow: 0 0 0 3px color-mix(in oklab, var(--focus) 25%, transparent);
    }

    .result-label{
      display:flex; align-items:center; gap: 10px;
    }
    .pill{
      font-size: 12px; color: var(--muted);
      padding: 4px 8px; border-radius: 999px;
      border: 1px solid var(--stroke);
      background: var(--panel-2);
    }

    .result{
      min-height: 48px;
      padding: 12px 14px;
      border-radius: 12px;
      border: 1px dashed var(--stroke);
      background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0));
      font-size: 16px; word-wrap: break-word;
    }

    .note{
      margin-top: 4px;
      font-family: var(--mono);
      color: var(--muted);
      font-size: 13px;
    }

    /* ===== Print (submission-ready) ===== */
    @media print {
      body { background: #fff; color: #000; }
      .container { margin: 0; max-width: 100%; }
      .cover, .panel { box-shadow: none !important; border-color: #c9ced8; }
      .brand__glyph { filter: grayscale(100%); }
      a { color: #000; text-decoration: underline; }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- ===== Presentation / Cover ===== -->
    <header class="cover">
      <div class="cover__bar">
        <div class="brand">
          <div class="brand__glyph" aria-hidden="true"></div>
          <div class="brand__name">LIDR Academy • AI4Devs</div>
        </div>
        <div class="badge" aria-label="Assignment badge">Masters Project</div>
      </div>

      <div class="cover__content">
        <div>
          <h1 class="title">Reverse String</h1>
          <p class="subtitle">Grapheme-aware reversal with live preview & accessible UI</p>
        </div>

        <dl class="meta" aria-label="Submission metadata">
          <div>
            <dt>Student</dt>
            <dd>Jaime Caicedo Gorlovetsky</dd>
          </div>
          <div>
            <dt>School</dt>
            <dd>LIDR Academy</dd>
          </div>
          <div>
            <dt>Program</dt>
            <dd>AI4Devs</dd>
          </div>
          <div>
            <dt>Assignment</dt>
            <dd>Reverse String</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>October 31/2025</dd>
          </div>
          <div>
            <dt>Chat/Model</dt>
            <dd>ChatGPT / GPT 5 Thinking</dd>
          </div>
        </dl>
      </div>
    </header>
    <!-- ===== Working Panel ===== -->
    <section class="panel" aria-labelledby="work-title">
      <div class="panel__head">
        <h2 id="work-title">Interactive Demo</h2>
        <p class="help">Type any text (e.g., <code>AI4Devs</code>). The reversed string updates instantly.</p>
      </div>
      <div class="panel__body">
        <label for="inputText">Text to process</label>
        <input id="inputText" class="input" type="text" placeholder="AI4Devs" autocomplete="off" />

        <div class="result-label">
          <label id="reversedLabel" for="inputText">Reversed string</label>
          <span class="pill">grapheme-aware</span>
        </div>
        <div id="result" class="result" aria-live="polite" role="status"></div>

        <p class="note">
          Implementation detail: uses <code>Intl.Segmenter</code> when available to reverse by grapheme clusters
          (emojis and combining marks remain intact); falls back to code-point reversal otherwise.
        </p>
      </div>
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### script.js

```javascript
// script.js

// Reverse a string by grapheme clusters (keeps emojis/accents intact).
function reverseString(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = [...seg.segment(str)].map(s => s.segment);
    return graphemes.reverse().join("");
  }
  // Fallback: code point–aware
  return Array.from(str).reverse().join("");
}

function wireUI() {
  const input = document.getElementById("inputText");
  const result = document.getElementById("result");
  const reversedLabel = document.getElementById("reversedLabel");

  if (!input || !result) {
    console.error(
      "[Reverse String] Missing DOM nodes. Expected #inputText and #result (and optional #reversedLabel)."
    );
    return;
  }

  const update = () => {
    const value = input.value || "";
    const reversed = reverseString(value);
    result.textContent = reversed;
    if (reversedLabel) reversedLabel.textContent = `Reversed string: ${reversed || "—"}`;
  };

  input.addEventListener("input", update);

  // Prefill a sample and render once
  if (!input.value) input.value = "AI4Devs";
  update();

  console.log("[Reverse String] Wired. Live updates active.");
}

// Safe init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", wireUI);
} else {
  wireUI();
}
```

### Why this presentation works for a Masters-/Enterprise setting

- Professional, minimal aesthetic with subtle gradients, strong typographic hierarchy, and restrained color accents.
- Accessibility: clear labels, large hit targets, visible focus rings, ARIA roles, and live region for updates.
- Print-ready: dedicated @media print rules for clean PDF/physical submission.
- Technical clarity: a concise implementation note explains the grapheme-aware algorithm choice.
- Future-proof: dark/light mode via prefers-color-scheme, CSS tokens, and semantic HTML structure.

Just replace your files with the above, open index.html, and you're ready to submit.