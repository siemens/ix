---
sidebar_position: 8
sidebar_label: Errors, warnings and notifications
title: Errors, warnings and notifications
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Learn how to write error messages, warnings, and notifications that are helpful and user-friendly. This subchapter provides strategies for communicating issues and alerts in a way that guides users towards solutions.'
---

import DoAndDont from '@site/src/components/DoAndDont';

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

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>System error: You’re offline. Check your connection and try again.</DoAndDont.Item>
    <DoAndDont.Item>File error: We cannot upload this file. Try uploading again.</DoAndDont.Item>
    <DoAndDont.Item>Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>What did you do!?</DoAndDont.Item>
    <DoAndDont.Item>The email address you entered does not match the required format. Please enter your email address using the standard format.</DoAndDont.Item>
    <DoAndDont.Item>You have failed to delete the device.</DoAndDont.Item>
    <DoAndDont.Item>Error 404</DoAndDont.Item>
    <DoAndDont.Item>Value out of range.</DoAndDont.Item>
    <DoAndDont.Item>File not found.</DoAndDont.Item>
    <DoAndDont.Item>Title: Input error</DoAndDont.Item>
    <DoAndDont.Item>Explanation: Input error detected.</DoAndDont.Item>
    <DoAndDont.Item>Action: Try again.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Warning messages

- A warning message alerts users of a condition that may cause a problem in the future

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Title: You have not saved all documents</DoAndDont.Item>
    <DoAndDont.Item>Explanation: You have to save all documents</DoAndDont.Item>
    <DoAndDont.Item>Action: (Ok button)</DoAndDont.Item>
  </DoAndDont.Do>
</DoAndDont>

## Notifications

- Notifications are informative and no actions are required from the user

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Access Point 2 is connected.</DoAndDont.Item>
    <DoAndDont.Item>Changes are saved automatically.</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Access Point connection failed. Try again.</DoAndDont.Item>
    <DoAndDont.Item>No rows to show.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>
