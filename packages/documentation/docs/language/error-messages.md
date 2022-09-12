<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 8
sidebar_title: Error, warning & notification messages
title: Error, warning & notification messages
---

import {Guideline} from '@site/src/components/Guideline';

### General rules for messaging

- Three parts of a message: 1. title 2. explanation 3. action

- Title: Name which info/ problem exists/ may occur and where it comes from

- Explanation: Give a clear reason for the (potential) error and explain it’s consequences if the user ignores it

- Action: Add clear instructions for user what to do next to resolve the error i.e. provide solution to the primary button

- Do not blame the user responsible

- Avoid using you and your only use passive voice as an exception

- Do not repeat your message in title and explanation

- Do not over communicate

- Use … to show an action is required, i.e. fill this in…

- Polite and encouraging tone of speech

- Keep it short

- If detailed information is required refer to progressive disclosure button

- Provide specific names, locations and values of the objects involved

- Show urgency through wording like immediatly only if serious consequences follow

### Error messages

- An errror message alerts user of a problem that exists and must be addressed

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='System error: You’re offline. Check your connection and try again.'></Guideline>
<Guideline do label='File error: We cannot upload this file. Try uploading again.'></Guideline>
<Guideline do label='Permission error: To carry out this task, you need more permissions. Contact admin to change permissions. '></Guideline>
<Guideline do={false} label='What did you do!?'></Guideline>
<Guideline do={false} label='The email address you entered does not match the required format. Please enter your email address using the standard format.'></Guideline>
<Guideline do={false} label='You have failed to delete the device.'></Guideline>
<Guideline do={false} label='Error 404'></Guideline>
<Guideline do={false} label='Value out of range.'></Guideline>
<Guideline do={false} label='File not found.'></Guideline>
<Guideline do={false} label='Title: Input error'></Guideline>
<Guideline do={false} label='Explanation: Input error detected.'></Guideline>
<Guideline do={false} label='Action: Try again.'></Guideline>
</span>
</div>

### Warning messages

- A warning message alerts users of a condition that may cause a problem in the future

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do={false} label='Title: You have not saved all documents'></Guideline>
<Guideline do={false} label='Explanation: You have to save all documents'></Guideline>
<Guideline do={false} label='Action: (Ok button)'></Guideline>
</span>
</div>

### Notifications

- Notifications are informative and no actions are required from the user.

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='Access Point 2 is connected.'></Guideline>
<Guideline do={false} label='Access Point connection failed. Try again.'></Guideline>
</span>

<span class="m-2">
<Guideline do label='Changes are saved automatically.'></Guideline>
<Guideline do={false} label='No rows to show.'></Guideline>
</span>
</div>
