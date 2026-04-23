---
'@siemens/ix-angular': major
'@siemens/ix': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

Add **non-blocking** dialog mode to **ix-modal** with **`isNonBlocking`** and **`ModalConfig.isNonBlocking`**: opens with **`dialog.show()`** so the page stays interactive (no lightbox or focus trap; **`aria-modal`** is false). After open, **`showModal()`** schedules initial focus on the first light-DOM match for **`[autofocus]`** or **`[auto-focus]`** (with **`focusVisible: true`**).

**Breaking (v5):** Remove **`disableEscapeClose`**. Escape and **`cancel`** always go through **`dismissModal()`**; use **`beforeDismiss`** to veto dismissal (e.g. replace **`disableEscapeClose`** with **`beforeDismiss: () => false`**). **`showModalLoading`** is updated accordingly; **`closeModal`** from **`finish()`** is unchanged.
