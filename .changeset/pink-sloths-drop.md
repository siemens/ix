---
'@siemens/ix': patch
---

Fix **ix-action-card** to render its content inside a `button` element so it is keyboard-focusable and exposed as a button to assistive technologies, improving accessibility.

Note: the default slot is intended for non-interactive content. Nested interactive elements (links, buttons, inputs) inside the card are not supported, as the card is now a single button.
