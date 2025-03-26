---
sidebar_position: 8
sidebar_label: Errors, warnings and notifications
title: Errors, warnings and notifications
doc-type: 'banner'
component-tabs: [ '' ]
no_single_tab: true
description: 'Learn how to write error messages, warnings, and notifications that are helpful and user-friendly. This subchapter provides strategies for communicating issues and alerts in a way that guides users towards solutions.'
---

import Guideline from '@site/src/components/Guideline';
import { Layout, Do, Dont, Item } from '@site/src/components/DosDontsStyling';

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

<Layout>
  <Do>
    <Item>System error: You’re offline. Check your connection and try again.</Item>
    <Item>File error: We cannot upload this file. Try uploading again.</Item>
    <Item>Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.</Item>
  </Do>
  <Dont>
    <Item>What did you do!?</Item>
    <Item>The email address you entered does not match the required format. Please enter your email address using the standard format.</Item>
    <Item>You have failed to delete the device.</Item>
    <Item>Error 404</Item>
    <Item>Value out of range.</Item>
    <Item>File not found.</Item>
    <Item>Title: Input error</Item>
    <Item>Explanation: Input error detected.</Item>
    <Item>Action: Try again.</Item>
  </Dont>
</Layout>

## Warning messages

- A warning message alerts users of a condition that may cause a problem in the future

<Layout>
  <Do>
    <Item>Title: You have not saved all documents</Item>
    <Item>Explanation: You have to save all documents</Item>
    <Item>Action: (Ok button)</Item>
  </Do>
</Layout>

## Notifications

- Notifications are informative and no actions are required from the user

<Layout>
  <Do>
    <Item>Access Point 2 is connected.</Item>
    <Item>Changes are saved automatically.</Item>
  </Do>
  <Dont>
    <Item>Access Point connection failed. Try again.</Item>
    <Item>No rows to show.</Item>
  </Dont>
</Layout>
