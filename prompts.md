# Initial Prompt

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

# ChatGPT Output

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

## How it works

- Loads with your existing index.html (no edits needed).
- Builds a small UI dynamically.
- Uses Intl.Segmenter (when available) to reverse by grapheme clusters, so strings with emojis/accents reverse correctly.
- Example: typing AI4Devs returns sveD4IA as required.

# Second Prompt

Modify index.html to include a label to enter the text to process using script.js include a label that shows in real time the reversed string.

# Second ChatGPT Output

Great—here are the updated files. The HTML now includes:

- A label + text input to enter the string.
- A second label that displays the reversed string in real time.

## index.html

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

## script.js

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
