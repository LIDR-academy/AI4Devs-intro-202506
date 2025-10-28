/* Reverse String — vanilla JS
 * Changes:
 *  - DEFAULT reversed output rendered on first load.
 *  - When input is cleared, show reversed DEFAULT instead of empty.
 *  - Column layout handled in HTML/CSS (no JS needed).
 */
(function ()
{
    const DEFAULT = "Hello, welcome to AI4Devs";

    const $ = (id) => document.getElementById(id);
    const input = $("textInput");
    const reverseBtn = $("reverseBtn");
    const copyBtn = $("copyBtn");
    const result = $("result");
    const emptyMsg = $("emptyMsg");
    const live = $("live");

    /** Reverse by Unicode code points (emoji surrogate pairs handled). */
    function reverseByCodePoint(str)
    {
        return Array.from(str).reverse().join("");
    }

    function setResult(text)
    {
        result.textContent = text;
        live.textContent = text ? `Reversed result: ${text}` : "Cleared.";
        copyBtn.disabled = !text;
    }

    // Reverse routine with DEFAULT fallback when input is empty.
    function handleReverse()
    {
        const raw = input.value;
        const value = raw.trim().length ? raw : DEFAULT;
        emptyMsg.hidden = true;                 // no "empty" message in this UX
        setResult(reverseByCodePoint(value));
    }

    function handleCopy()
    {
        if (!result.textContent) return;
        navigator.clipboard?.writeText(result.textContent).then(() =>
        {
            const prev = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            setTimeout(() => (copyBtn.textContent = prev), 900);
        }).catch(() =>
        {
            const ta = document.createElement("textarea");
            ta.value = result.textContent;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand("copy"); } catch { }
            document.body.removeChild(ta);
        });
    }

    // Wire events
    reverseBtn.addEventListener("click", handleReverse);
    copyBtn.addEventListener("click", handleCopy);
    input.addEventListener("keydown", (e) =>
    {
        if (e.key === "Enter")
        {
            e.preventDefault();
            handleReverse();
        }
    });
    // Keep showing DEFAULT when user clears the field (without pressing Reverse).
    input.addEventListener("input", () =>
    {
        if (input.value.trim().length === 0)
        {
            setResult(reverseByCodePoint(DEFAULT));
        }
    });

    // Initial state: ensure input has value, and render reversed output immediately.
    if (!input.value || input.value.trim().length === 0)
    {
        input.value = DEFAULT;
    }
    setResult(reverseByCodePoint(input.value));
})();
