---
sidebar_position: 7
sidebar_label: Best practices
title: Best practices
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Familiarize yourself with general best practices for UX writing to maintain consistency and clarity across all your content. This section offers overarching guidelines that apply to various aspects of UX writing.'
---

import DoAndDont from '@site/src/components/DoAndDont';

#

## Transitional text to show something is happening

- Use -ing verbs and ellipses (…)

- Do not use informal, transitional wording

- Confirmation messages: Use the same verb as the transitional text

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Updating user roles…</DoAndDont.Item>
    <DoAndDont.Item>Submitting log files…</DoAndDont.Item>
    <DoAndDont.Item>Saving project… > Project saved</DoAndDont.Item>
    <DoAndDont.Item>Training models… > Models trained</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Getting ready…</DoAndDont.Item>
    <DoAndDont.Item>Chopping fruit…</DoAndDont.Item>
    <DoAndDont.Item>Saving project… > Project uploaded</DoAndDont.Item>
    <DoAndDont.Item>Training models… > Training done</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Error messages

- Add a clear reason for the error

- Do not blame the user

- Add clear instructions for the user regarding what to do next to resolve the error

- Do not over communicate

- Use … to show an action is required, i.e. fill this in …

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>System error: You’re offline. Check your connection and try again.</DoAndDont.Item>
    <DoAndDont.Item>File error: We cannot upload this file. Try uploading again.</DoAndDont.Item>
    <DoAndDont.Item>Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>What did you do!?</DoAndDont.Item>
    <DoAndDont.Item>The email address you entered does not match the required format. Please enter your email address using the standard format.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Empty-state text

- Empty-state wording tells the user the empty space is intentional and should be there, i.e. not an error

- Use wording to move the user forward

- Use wording to help users understand the function of the empty state

- Do not over communicate

- Use wording to show users how to resolve the empty state, e.g. with an action, click, etc.

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Allocate users in User management.</DoAndDont.Item>
    <DoAndDont.Item>To show rows, select a project.</DoAndDont.Item>
    <DoAndDont.Item>To save a project, select Save in Project detail list.</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>No allocated users.</DoAndDont.Item>
    <DoAndDont.Item>No rows to show.</DoAndDont.Item>
    <DoAndDont.Item>No projects saved.</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Restoring behavior of items

- Be clear on deleting, removing, creating and adding

- Create goes hand in hand with Delete, it usually means it cannot be restored

- Add goes hand in hand with Remove, it usually means it can be restored

- Do not use Delete and Remove as synonym

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Create a chart and delete a chart</DoAndDont.Item>
    <DoAndDont.Item>Add a sensor to a chart and remove a sensor from chart</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Create a chart and remove it</DoAndDont.Item>
    <DoAndDont.Item>Add a sensor and delete the sensor</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>
