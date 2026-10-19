const JUNK_CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+-?!";

const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

/**
 * Reserve the element's final height before animating its text.
 */
function reserveTextSpace(element, text) {
    const clone = element.cloneNode(false);

    Object.assign(clone.style, {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        height: "auto",
        minHeight: "0",
        maxHeight: "none",
        width: `${element.getBoundingClientRect().width}px`,
        overflow: "visible"
    });

    clone.textContent = text;
    element.parentElement.appendChild(clone);

    const height = clone.getBoundingClientRect().height;
    clone.remove();

    element.style.minHeight = `${height}px`;
}

/**
 * Reveals text using a character-by-character decryption effect.
 * Clicking the element immediately reveals its complete text.
 */
export async function decryptText(
    element,
    {
        speed = 35,
        cycles = 3
    } = {}
) {
    if (!(element instanceof HTMLElement)) {
        throw new Error("decryptText requires a valid HTML element.");
    }

    const text = element.dataset.decryptText ?? element.textContent;

    if (
        !text ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        element.textContent = text;
        return;
    }

    // Reserve the full content height before clearing its text.
    reserveTextSpace(element, text);

    const characters = [...text];
    const output = document.createElement("span");
    const state = { skipped: false };

    const finish = () => {
        state.skipped = true;
        element.textContent = text;
    };

    element.textContent = "";
    element.appendChild(output);

    element.style.cursor = "pointer";
element.title = "Click to reveal the complete text";
element.style.boxSizing = "border-box";
element.style.display = "block";
element.addEventListener("click", finish);

    const resolved = [];

    for (const target of characters) {
        if (state.skipped) break;

        if (/\s/.test(target)) {
            resolved.push(target);
            output.textContent = resolved.join("");
            continue;
        }

        for (let cycle = 0; cycle < cycles; cycle++) {
            if (state.skipped) break;

            output.textContent =
                resolved.join("") +
                JUNK_CHARACTERS[
                    Math.floor(Math.random() * JUNK_CHARACTERS.length)
                ];

            await sleep(Math.max(10, speed / 3));
        }

        if (state.skipped) break;

        resolved.push(target);
        output.textContent = resolved.join("");

        await sleep(speed);
    }

    // Restore the exact original text and remove the click handler.
    element.textContent = text;
    element.removeEventListener("click", finish);
    element.style.cursor = "";
    element.title = "";
}

/**
 * Animates all elements simultaneously instead of sequentially.
 */
export async function decryptSequence(elements, options = {}) {
    await Promise.all(
        elements.map(element => decryptText(element, options))
    );
}
