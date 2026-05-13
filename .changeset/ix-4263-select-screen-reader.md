---
'@siemens/ix': major
---

**Select listbox accessibility**

**ix-select:** Screen reader output for the dropdown list follows listbox semantics: the focus proxy sets **aria-selected** from real selection state (and the add row from **checked**), no longer sets **aria-checked** on proxy options, and uses **value** as a fallback accessible name when **label** is absent.

**ix-select-item:** With **`disableAriaSelectHandling`** enabled on the host, keyboard focus visibility is no longer mirrored to **aria-selected** on **`ix-select-item`**, so assistive technologies do not treat every focused row as selected. **`disableAriaSelectHandling`** is documented with **`@since 5.0.0`**.

**ix-dropdown-item:** New **`itemRole`** prop (**`menuitem`** | **`option`**, default **`menuitem`**) sets the host **`role`**; **`ix-select-item`** passes **`option`** for listbox usage. Documented with **`@since 5.0.0`**. Generated React, Angular, and Vue bindings include **`itemRole`** / **`item-role`**.
