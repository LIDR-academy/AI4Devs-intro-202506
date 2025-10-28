# STEP 1 - Ask ChatGPT to create a well-structured prompt for this task. 

Improve this prompt so I can use it in ChatGPT and have a well-structured prompt that follows ChatGPT best practices. 

Create a web page with JavaScript logic that reverses the order of a text string. Example: if I enter AI4Devs, it returns sveD4AI. Of course, check corner cases.

To complete this small project, I have an example of what the HTML and JS are expected to look like. Tell me how I can incorporate these elements as context. The submission is a PR with content similar to what was found in the context.

What I expect from you is the content for the html and js files in a code cell so I can easily copy-paste.

# STEP 2 - Review and use the previously generated prompt to get the task done in ChatGPT

# LLM Prompt — Reverse String Web Page (PR-Ready)

**Role:** You are a senior front-end engineer. You produce minimal, well-structured code and clear delivery artifacts suitable for a pull request (PR).

**Goal:** Build a tiny web page that reverses a string using vanilla JavaScript.  
Example: input `AI4Devs` → output `sveD4IA`. The idea is to show the reversed string in the site, but you will find an option to copy the reserved string in the clipboard. For the styles, follow the guidelines from the included image.

---

## Inputs You’ll Receive (Context)

I will provide **context** with any of the following. Use it if present; otherwise proceed with sensible defaults.

- `CONTEXT/README.md` — product notes or requirements.  
- `CONTEXT/example.html` — reference HTML.  
- `CONTEXT/example.js` — reference JS.  

> **How I’ll send context:** I’ll paste file contents in fenced code blocks like:
>
> ```
> # file: CONTEXT/example.html
> <!doctype html>...
> ```

For images as references, I'll include them along with the prompt.

When I provide context, **honor it** (IDs, structure, naming). If something conflicts, state the decision and proceed.

---

## Requirements

1. **Tech:** Vanilla HTML, CSS (inline or small file), and client-side JS only. No frameworks, no build step.  
2. **Functionality:**
   - Text input and a button.
   - On click (and on Enter), reverse the input string and render the result.
   - Preserve whitespace and punctuation; treat the string as a sequence of UTF-16 code points.
   - Handle empty input gracefully (show nothing or a gentle message).
3. **Accessibility & UX:**
   - Proper `<label>` associated with the input, focus states, and ARIA-live region to announce the result.
   - Keyboard operable (Enter triggers action).
4. **Quality:**
   - Clear, self-contained code with brief comments.
   - No external dependencies or network calls.
   - Deterministic behavior across modern evergreen browsers.
5. **Files & Structure (default):**
   - /
   - ├─ index.html
   - ├─ script.js

6. **Edge Cases:** Empty string, single char, long strings (up to ~10k chars), emoji / surrogate pairs (document limitations), RTL text.

---

## Acceptance Criteria

- Reversal works for basic Latin strings (**must**).  
- Input is labeled; button is reachable via keyboard; result announced via ARIA-live (**must**).  
- No framework or bundler required; open `index.html` works out of the box (**must**).  
- Code passes a quick self-test snippet included in the PR description (**must**).

---

## Output Format (What You Must Return)

1. **Repository tree** (as a code block).  
2. **All file contents** (each in its own fenced block with `# file:` header).  
3. **PR package**:
- **Branch name:** `/reversestring-PCN`
- **Commit messages:** Conventional Commits style.
- **PR title & description** including:
  - Summary
  - Screenshots (describe; base64 not needed)
  - How to run
  - Self-tests (copy-pasteable JS)
  - Notes on accessibility
  - Known limitations / follow-ups
  - Prompt use to get the ChatGPT response
4. **If context provided:** a short **“Context adherence notes”** section explaining how you mapped your solution to the given HTML/JS.

**Do not** include placeholders like “<your code here>”. Provide final, runnable code.

---

## Self-Tests (Include These in PR Description)

```js
// quick sanity checks
const cases = [
["AI4Devs", "sveD4IA"],
["", ""],
["a", "a"],
["ab cd", "dc ba"],
];
cases.forEach(([i, o]) => {
const r = i.split("").reverse().join("");
console.assert(r === o, `Expected ${o}, got ${r}`);
});
```

## If Context Is Missing or Conflicts
- Proceed with defaults above.
- If a provided example.html/js conflicts with accessibility or requirements, prefer accessibility/requirements and document the deviation in “Context adherence notes.”

## Deliverables Recap

Return: repo tree, full file contents, and a PR package (branch name, commits, PR title/body). No extra commentary outside the specified sections.

# STEP 2 - Make a couple of tweaks regarding styling and setting defaults

Apply two changes: 
1) **Default reversed output**: when the page loads (before the user types), show the reversed version of the default string "Hello, welcome to AI4Devs". - Keep the input prefilled with Hello, welcome to AI4Devs (or use this as the fallback when the input is empty). - The result area must already display sveD4IA ot emoclew ,olleH on first render. 
2) **Column layout**: Stack elements vertically in this exact order: **Input field → Reverse button → Result area → Copy button**. - The two buttons must **not** be on the same row. - Add sensible spacing and ensure keyboard accessibility remains intact.

## Hints for Implementation (follow but don’t bloat) 
- On DOMContentLoaded, set const DEFAULT = "Hello, welcome to AI4Devs"; - Prefill the input with DEFAULT (if empty) and call the reverse routine once to populate the result. - In the reverse routine, if trimmed input length is 0, use DEFAULT. - Update HTML/CSS so the two buttons are in separate blocks (e.g., wrap each in its own <div> or use display:block with margins).