---
'@siemens/ix': patch
---

**ix-select:** Screen reader output for the dropdown list now follows listbox semantics: the focus proxy exposes **aria-selected** from real selection state (and the add row from **checked**), no longer sets **aria-checked** on proxy options, and uses **value** as a fallback accessible name when **label** is absent.

**ix-select-item:** Stops mapping keyboard focus visibility to **aria-selected** on the host so unselected options are not announced as selected.

**ix-dropdown-item:** Adds **`itemRole`** (default **`menuitem`**) for the host **role**; select rows use **`option`**, matching listbox usage.
