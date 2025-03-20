---
sidebar_position: 8
sidebar_label: Errors, warnings and notifications
title: Errors, warnings and notifications
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Learn how to write error messages, warnings, and notifications that are helpful and user-friendly. This subchapter provides strategies for communicating issues and alerts in a way that guides users towards solutions.'
---

import Guideline from '@site/src/components/Guideline';

#

## General rules for messaging

- Three parts of a message: 1. title 2. explanation 3. action

- Title: Name which information or problem may/will occur and where it comes from

- Explanation: Give a clear reason for the (potential) error and explain it’s consequences if the user ignores it

- Action: Add clear instructions telling the user what to do next to resolve the error

- Do not blame the user

- Avoid using you and your only use passive voice as an exception

- Do not repeat your message in title and explanation

- Do not over communicate

- Use … to show an action is required, i.e. Fill this in…

- Use a polite and encouraging tone

- Keep it short

- If detailed information is required, consider using progressive disclosure button

- Provide specific names, locations and values of the objects involved

- Show urgency through wording, e.g. “immediately” only if there are serious consequences from ignoring messages

## Error messages

- An error message alerts user of a problem that exists and must be addressed

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

## Warning messages

- A warning message alerts users of a condition that may cause a problem in the future

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='Title: You have not saved all documents'></Guideline>
<Guideline do label='Explanation: You have to save all documents'></Guideline>
<Guideline do label='Action: (Ok button)'></Guideline>
</span>
</div>

## Notifications

- Notifications are informative and no actions are required from the user

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
