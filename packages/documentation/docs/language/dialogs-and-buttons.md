---
sidebar_position: 9
sidebar_title: Dialogs and buttons
title: Dialogs and buttons
---

import {Guideline} from '@site/src/components/Guideline';

### Clear title and button options

- Concise and descriptive dialog title: Add user

- Option buttons should describe what will happen and relate to the dialog title: Cancel, Add

- Forms: When asking for user input using a dialog and there is no clear action verb in the title, provide Cancel and Save as buttons

- One button only reflects one action

- Users should be able to understand the choices based on the title and button text alone

- Only use ‘OK’ as an option if you cannot find an appropriate verb

<div className="ux-writing-guidelines">
<span>
<Guideline do label='Title: Add user  / Buttons: Cancel, Add'></Guideline>
<Guideline do={false} label='Title: Add user  / Buttons: Cancel, OK'></Guideline>
</span>

<span>
<Guideline do label='Title: Delete file  / Buttons: Cancel, Delete'></Guideline>
<Guideline do={false} label='Title: Are you sure  / Buttons: Cancel, Delete'></Guideline>
</span>

<span>
<Guideline do label='Title: Edit details  / Buttons: Cancel, Save'></Guideline>
<Guideline do={false} label='Title: Edit details  / Buttons: Cancel, Edit'></Guideline>
</span>
</div>

### Primary and secondary actions

- Primary on the right, secondary left (Cancel, OK) not (OK, Cancel)

- Primary actions can either be positive (Send, Save) or negative (Delete)

<div className="ux-writing-guidelines">
<span>
<Guideline do label='Cancel, Save'></Guideline>
<Guideline do={false} label='Save, Cancel'></Guideline>
</span>
</div>
