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

#

## Transitional text to show something is happening

- Use -ing verbs and ellipses (…)

- Do not use informal, transitional wording

- Confirmation messages: Use the same verb as the transitional text

::::layout

:::col
[!do]
Updating user roles…
Submitting log files…
Saving project… > Project saved
Training models… > Models trained
:::

:::col
[!dont]
Getting ready…
Chopping fruit…
Saving project… > Project uploaded
Training models… > Training done
:::

::::

## Error messages

- Add a clear reason for the error

- Do not blame the user

- Add clear instructions for the user regarding what to do next to resolve the error

- Do not over communicate

- Use … to show an action is required, i.e. fill this in …

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
:::

::::

## Empty-state text

- Empty-state wording tells the user the empty space is intentional and should be there, i.e. not an error

- Use wording to move the user forward

- Use wording to help users understand the function of the empty state

- Do not over communicate

- Use wording to show users how to resolve the empty state, e.g. with an action, click, etc.

::::layout

:::col
[!do]
Allocate users in User management.
To show rows, select a project.
To save a project, select Save in Project detail list.
:::

:::col
[!dont]
No allocated users.
No rows to show.
No projects saved.
:::

::::

## Restoring behavior of items

- Be clear on deleting, removing, creating and adding

- Create goes hand in hand with Delete, it usually means it cannot be restored

- Add goes hand in hand with Remove, it usually means it can be restored

- Do not use Delete and Remove as synonym

::::layout

:::col
[!do]
Create a chart and delete a chart
Add a sensor to a chart and remove a sensor from chart
:::

:::col
[!dont]
Create a chart and remove it
Add a sensor and delete the sensor
:::

::::
