---
sidebar_position: 7
sidebar_label: Best practices
title: Best practices
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Familiarize yourself with general best practices for UX writing to maintain consistency and clarity across all your content. This section offers overarching guidelines that apply to various aspects of UX writing.'
---

import Guideline from '@site/src/components/Guideline';
import { Layout, Do, Dont, Item } from '@site/src/components/DosDontsStyling';

#

## Transitional text to show something is happening

- Use -ing verbs and ellipses (…)

- Do not use informal, transitional wording

- Confirmation messages: Use the same verb as the transitional text

<Layout>
  <Do>
    <Item>Updating user roles…</Item>
    <Item>Submitting log files…</Item>
    <Item>Saving project… > Project saved</Item>
    <Item>Training models… > Models trained</Item>
  </Do>
  <Dont>
    <Item>Getting ready…</Item>
    <Item>Chopping fruit…</Item>
    <Item>Saving project… > Project uploaded</Item>
    <Item>Training models… > Training done</Item>
  </Dont>
</Layout>

## Error messages

- Add a clear reason for the error

- Do not blame the user

- Add clear instructions for the user regarding what to do next to resolve the error

- Do not over communicate

- Use … to show an action is required, i.e. fill this in …

<Layout>
  <Do>
    <Item>System error: You’re offline. Check your connection and try again.</Item>
    <Item>File error: We cannot upload this file. Try uploading again.</Item>
    <Item>Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.</Item>
  </Do>
  <Dont>
    <Item>What did you do!?</Item>
    <Item>The email address you entered does not match the required format. Please enter your email address using the standard format.</Item>
  </Dont>
</Layout>

## Empty-state text

- Empty-state wording tells the user the empty space is intentional and should be there, i.e. not an error

- Use wording to move the user forward

- Use wording to help users understand the function of the empty state

- Do not over communicate

- Use wording to show users how to resolve the empty state, e.g. with an action, click, etc.

<Layout>
  <Do>
    <Item>Allocate users in User management.</Item>
    <Item>To show rows, select a project.</Item>
    <Item>To save a project, select Save in Project detail list.</Item>
  </Do>
  <Dont>
    <Item>No allocated users.</Item>
    <Item>No rows to show.</Item>
    <Item>No projects saved.</Item>
  </Dont>
</Layout>

## Restoring behavior of items

- Be clear on deleting, removing, creating and adding

- Create goes hand in hand with Delete, it usually means it cannot be restored

- Add goes hand in hand with Remove, it usually means it can be restored

- Do not use Delete and Remove as synonym

<Layout>
  <Do>
    <Item>Create a chart and delete a chart</Item>
    <Item>Add a sensor to a chart and remove a sensor from chart</Item>
  </Do>
  <Dont>
    <Item>Create a chart and remove it</Item>
    <Item>Add a sensor and delete the sensor</Item>
  </Dont>
</Layout>
