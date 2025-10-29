i GET IT WITH JUST 1 SINGLE PROMPT! :)

PRONT

On a given Github repository, I need to apply some improvements following the next instructions:

# Reverse string 

Create a **web page with JavaScript logic that reverses the order of a string**.

Example: if I input `AI4Devs`, it should return `sveD4IA`.

Do it using the seed files `index.html` and `script.js` provided in the template folder.







Find attached a picture with the desired output.

Find attached a second picture with the files I need to work on. As you can understand, I need index.html to host the html and script.js to contain javaScript code that you may need.


Could you guide me, step by step, to adjust the files to obtain the ouput?

Thank you in advance


CHAT GPT 5 - RESPONSE

Thought for 6s

Hey Luis! Here’s a simple, step-by-step way to get the exact page you showed. You’ll only touch the two seed files in template/: index.html and script.js.

1) index.html

Replace the contents of template/index.html with this:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Reverse String</title>
  <style>
    :root { --radius: 12px; }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 32px; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: #f8fafc; color: #0f172a;
    }
    .wrap { max-width: 1000px; margin: 0 auto; }
    h1 { font-size: 48px; margin: 0 0 24px; font-weight: 700; }
    .row { display: flex; gap: 12px; align-items: center; }
    input[type="text"] {
      flex: 1; font-size: 22px; padding: 18px 20px; border: 1px solid #cbd5e1; border-radius: var(--radius);
      outline: none; background: white;
    }
    input[type="text"]:focus { border-color: #60a5fa; box-shadow: 0 0 0 3px rgba(59,130,246,.2); }
    button {
      border: 0; padding: 14px 18px; font-size: 22px; border-radius: var(--radius); cursor: pointer;
      display: inline-flex; gap: 10px; align-items: center;
    }
    .primary { background: #1d4ed8; color: white; }
    .ghost { background: #e2e8f0; color: #0f172a; }
    .out {
      min-height: 48px; font-size: 28px; margin: 24px 0 16px; word-break: break-word;
    }
    .icon {
      width: 22px; height: 22px; display: inline-block;
    }
    .sr-only {
      position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0,0,0,0); border: 0;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Reverse String</h1>

    <div class="row" style="margin-bottom: 18px">
      <label class="sr-only" for="inputText">Text to reverse</label>
      <input id="inputText" type="text" placeholder="Hello, welcome to AI4Devs" />
    </div>

    <div class="row">
      <button id="reverseBtn" class="primary" type="button" title="Reverse">
        <span>Reverse</span>
        <!-- refresh icon (unicode) -->
        <span aria-hidden="true" class="icon">🔄</span>
      </button>
    </div>

    <div id="outputText" class="out" aria-live="polite"></div>

    <div class="row">
      <button id="copyBtn" class="ghost" type="button" title="Copy">
        <span>Copy</span>
        <span aria-hidden="true" class="icon">📋</span>
      </button>
    </div>
  </div>

  <script src="./script.js"></script>
</body>
</html>

2) script.js

Replace the contents of template/script.js with this:

// Reverse a string safely (handles most unicode by spreading into code points)
function reverseString(str) {
  // [...str] turns the string into an array of code points, reverse it, join back
  return [...str].reverse().join('');
}

function $(id) {
  return document.getElementById(id);
}

// DOM elements
const input = $('inputText');
const output = $('outputText');
const reverseBtn = $('reverseBtn');
const copyBtn = $('copyBtn');

// Render helper
function render(text) {
  output.textContent = text || '';
}

// Do the reversal
function doReverse() {
  const value = input.value ?? '';
  const reversed = reverseString(value);
  render(reversed);
}

// Copy to clipboard with minimal feedback
async function doCopy() {
  const text = output.textContent || '';
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = original), 900);
  } catch (err) {
    // Fallback if clipboard API fails
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// Events
reverseBtn.addEventListener('click', doReverse);

// Allow pressing Enter inside the input to reverse immediately
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') doReverse();
});

// Copy button
copyBtn.addEventListener('click', doCopy);

// Optional: preload an example like the screenshot
input.value = 'Hello, welcome to AI4Devs';
doReverse();

How this matches the screenshot

Big Reverse String title.

A wide text input with placeholder “Hello, welcome to AI4Devs”.

A Reverse button (with a small refresh icon).

The reversed result displayed beneath (updates on click or Enter).

A Copy button (with a clipboard icon) that copies the output and briefly shows “Copied!”.

That’s it—drop these two files into your repo’s template/ folder, open index.html in a browser, and you’ll get exactly the behavior and layout you need. If you want me to tailor the styling further (fonts, spacing, exact pixel sizes), tell me what to tweak and I’ll adjust the CSS.
