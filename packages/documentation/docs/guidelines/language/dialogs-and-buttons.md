---
sidebar_position: 9
sidebar_label: Dialogs and buttons
title: Dialogs and buttons
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Discover guidelines for writing dialogs and button labels to ensure clear and actionable instructions. This section helps you create effective prompts and calls to action that enhance user interaction.'
---

import DoAndDont from '@site/src/components/DoAndDont';

#

## Clear title and button options

- Concise and descriptive dialog title: Add user

- Option buttons should describe what will happen and relate to the dialog title: Cancel, Add

- Forms: When asking for user input using a dialog and there is no clear action verb in the title, provide Cancel and Save as buttons

- One button only reflects one action

- Users should be able to understand the choices based on the title and button text alone

- Only use ‘OK’ as an option if you cannot find an appropriate verb

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Title: Add user  / Buttons: Cancel, Add</DoAndDont.Item>
    <DoAndDont.Item>Title: Delete file  / Buttons: Cancel, Delete</DoAndDont.Item>
    <DoAndDont.Item>Title: Edit details  / Buttons: Cancel, Save</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Title: Add user  / Buttons: Cancel, OK</DoAndDont.Item>
    <DoAndDont.Item>Title: Are you sure  / Buttons: Cancel, Delete</DoAndDont.Item>
    <DoAndDont.Item>Title: Edit details  / Buttons: Cancel, Edit</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Primary and secondary actions

- Primary on the right, secondary left (Cancel, OK) not (OK, Cancel)

- Primary actions can either be positive (Send, Save) or negative (Delete)

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Cancel, Save</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Save, Cancel</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>
