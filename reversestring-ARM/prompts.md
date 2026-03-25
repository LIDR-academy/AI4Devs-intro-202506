# Prompts Engineering: Reverse String Web Page

## ROLE

You are an expert in prompt engineering

## INSTRUCTIONS

Given the following prompt, prepare it using best practices to achieve a precise and exhaustive result

## Original Prompt

Create a web page with JavaScript logic that reverses the order of a text string.
Example: if I enter AI4Devs it returns sveD4IA.
Use HTML + CSS + JavaScript vanilla

---

## ROLE

You are a senior front-end developer with deep expertise in vanilla HTML, CSS, and JavaScript.

## OBJECTIVE

Build a single-file, self-contained web page that reverses the characters of any input string in real time.

## FUNCTIONAL REQUIREMENTS

1. **Input field** — accepts any UTF-8 text (letters, digits, symbols, emojis, spaces).
2. **Output display** — shows the reversed string instantly as the user types (no button press needed).
3. **Reverse logic** — correctly handles multi-byte Unicode characters (e.g. emojis, accented letters). Use the spread operator `[...str].reverse().join("")` instead of `split("").reverse().join("")` to avoid breaking surrogate pairs.
4. **Clear button** — resets both input and output.
5. **Copy button** — copies the reversed result to the clipboard and shows brief visual feedback ("Copied!").

## NON-FUNCTIONAL REQUIREMENTS

- Zero external dependencies — pure HTML + CSS + vanilla JavaScript only.
- All code in a single `.html` file (no separate `.css` or `.js` files).
- Accessible: proper `<label>` associations, `aria-live="polite"` on the output so screen readers announce updates.
- Responsive: works on mobile (min-width 320 px) and desktop.
- Clean, modern UI: centered card layout, readable font, subtle focus styles.

## TECHNICAL CONSTRAINTS

- Use `<input type="text">` for entry and a `<p>` or `<output>` element for the result.
- Attach the reverse logic to the `input` event (not `keyup` or `change`).
- Do NOT use `eval()`, `innerHTML` for user content, or any deprecated APIs.
- JavaScript must run in strict mode (`"use strict";`).

## EXAMPLE BEHAVIOUR

| User types | Output shows |
| ---------- | ------------ |
| AI4Devs    | sveD4IA      |
| Hello 👋   | 👋 olleH     |
| 12345      | 54321        |
| (empty)    | (empty)      |

## OUTPUT FORMAT

Return ONLY the complete, production-ready HTML file — no explanations, no markdown fences, no placeholder comments like "add styles here". The code must run correctly when saved as `index.html` and opened in any modern browser. Abstract the CSS styles into a separate styles.css file and the JavaScript code into a javascript.js file

---

**Chatbot utilizado**: Claude
