---
sidebar_position: 8
sidebar_title: Errors, warnings and notifications
title: Errors, warnings and notifications
---

import Guideline from '@site/src/components/Guideline';


### General rules for messaging

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

### Error messages

- An error message alerts user of a problem that exists and must be addressed

::::layout

:::col
[!do]
System error: You’re offline. Check your connection and try again.
File error: We cannot upload this file. Try uploading again.
Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.
:::

:::col
[!dont]
What did you do!?
The email address you entered does not match the required format. Please enter your email address using the standard format.
You have failed to delete the device.
Error 404
Value out of range.
File not found.
Title: Input error
Explanation: Input error detected.
Action: Try again.
:::

::::

### Warning messages

- A warning message alerts users of a condition that may cause a problem in the future

::::layout

:::col
[!do]
Title: You have not saved all documents
Explanation: You have to save all documents
Action: (Ok button)
:::

::::

### Notifications

- Notifications are informative and no actions are required from the user

::::layout

:::col
[!do]
Access Point 2 is connected.
Changes are saved automatically.
:::

:::col
[!dont]
Access Point connection failed. Try again.
No rows to show.
:::

::::
