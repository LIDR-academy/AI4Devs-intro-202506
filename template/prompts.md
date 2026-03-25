# StringOps — Chat History

---

## Prompt 1

**User:** you are a senior software engineer. You need to create a webpage with the logic in javascript that reverses the order of a string entered as input.
For example, if I enter AI4Devs, the app should return sveD4AI.
The javascript code goes into @template/script.js and html goes into index.html.
Architect the solution in such a way that it can easily scale to include new features. Follow SOLID and DRY principles during the development.

**Assistant:** Built a two-file solution (`index.html` + `template/script.js`) with a layered architecture:

- `StringTransformer` — abstract base class (contract)
- `ReverseTransformer`, `ToggleCaseTransformer`, `ReverseWordsTransformer` — one transformation each (SRP)
- `TransformerRegistry` — central registry decoupling UI from concrete classes (DIP + DRY)
- `UIController` — owns all DOM interaction, knows nothing about transformations (SRP)

Adding a new feature only requires creating a new subclass and registering it — nothing else changes (OCP).

---

## Prompt 2

**User:** once I download the files how do I run them? I copied them into a local folder and double clicked on index.html. Then I entered a string and clicked the run button but no result appeared

**Assistant:** The problem was the folder structure. The HTML referenced `template/script.js` in a subfolder, but both files were copied into the same flat directory so the browser couldn't load the script.

Fix: rebuilt as a single self-contained `StringOps.html` with the JavaScript inlined inside a `<script>` tag — one file, no dependencies, works by double-clicking anywhere.

---

## Prompt 3

**User:** it now runs, but I need a two file split, with index.html and script.js living in the same folder. Share a downloadable folder of those files

**Assistant:** Rebuilt with both files in the same folder and the HTML referencing `<script src="script.js">` (no subfolder). Packaged as a downloadable `stringops.zip`.

```
stringops/
├── index.html
└── script.js
```

---

## Prompt 4

**User:** now add the two following features:
1. the run button must only appear when there is enough text, that is, more than 3 letters.
2. the inverted string must be updated in real time so there is no dependency to click the run button

**Assistant:** Both features added:

**Feature 1 — Run button visibility**
- `MIN_INPUT_LENGTH = 3` constant at the top of `script.js` (single source of truth)
- Button uses `visibility: hidden` + `opacity: 0` so layout doesn't jump; fades in via CSS transition
- `aria-hidden` toggled for screen reader support
- New `_updateRunButton(value)` helper called from `_bindEvents`, `_selectTransformer`, and `init`

**Feature 2 — Real-time output**
- `input` event listener fires `_run()` on every keystroke with no debounce needed (string transforms are instant)
- Run button remains functional as a manual trigger for keyboard users

---

## Prompt 5

**User:** save this chat history into a file called prompts.md

**Assistant:** Saved this conversation to `prompts.md`.
