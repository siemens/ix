---
sidebar_position: 9
sidebar_title: Dialogs and buttons
title: Dialogs and buttons
---

import Guideline from '@site/src/components/Guideline';


### Clear title and button options

- Concise and descriptive dialog title: Add user

- Option buttons should describe what will happen and relate to the dialog title: Cancel, Add

- Forms: When asking for user input using a dialog and there is no clear action verb in the title, provide Cancel and Save as buttons

- One button only reflects one action

- Users should be able to understand the choices based on the title and button text alone

- Only use ‘OK’ as an option if you cannot find an appropriate verb

::::layout

:::col
[!do]
Title: Add user  / Buttons: Cancel, Add
Title: Delete file  / Buttons: Cancel, Delete
Title: Edit details  / Buttons: Cancel, Save
:::

:::col
[!dont]
Title: Add user  / Buttons: Cancel, OK
Title: Are you sure  / Buttons: Cancel, Delete
Title: Edit details  / Buttons: Cancel, Edit
:::

::::

### Primary and secondary actions

- Primary on the right, secondary left (Cancel, OK) not (OK, Cancel)

- Primary actions can either be positive (Send, Save) or negative (Delete)

::::layout

:::col
[!do]
Cancel, Save
:::

:::col
[!dont]
Save, Cancel
:::

::::
