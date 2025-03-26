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

:::::layout

::::col
[!do]
:::item
Updating user roles…
:::
:::item
Submitting log files…
:::
:::item
Saving project… > Project saved
:::
:::item
Training models… > Models trained
:::
::::

::::col
[!dont]
:::item
Getting ready…
:::
:::item
Chopping fruit…
:::
:::item
Saving project… > Project uploaded
:::
:::item
Training models… > Training done
:::
::::

:::::

## Error messages

- Add a clear reason for the error

- Do not blame the user

- Add clear instructions for the user regarding what to do next to resolve the error

- Do not over communicate

- Use … to show an action is required, i.e. fill this in …

:::::layout

::::col
[!do]
:::item
System error: You’re offline. Check your connection and try again.
:::
:::item
File error: We cannot upload this file. Try uploading again.
:::
:::item
Permission error: To carry out this task, you need more permissions. Contact admin to change permissions.
:::
::::

::::col
[!dont]
:::item
What did you do!?
:::
:::item
The email address you entered does not match the required format. Please enter your email address using the standard format.
:::
::::

:::::

## Empty-state text

- Empty-state wording tells the user the empty space is intentional and should be there, i.e. not an error

- Use wording to move the user forward

- Use wording to help users understand the function of the empty state

- Do not over communicate

- Use wording to show users how to resolve the empty state, e.g. with an action, click, etc.

:::::layout

::::col
[!do]
:::item
Allocate users in User management.
:::
:::item
To show rows, select a project.
:::
:::item
To save a project, select Save in Project detail list.
:::
::::

::::col
[!dont]
:::item
No allocated users.
:::
:::item
No rows to show.
:::
:::item
No projects saved.
:::
::::

:::::

## Restoring behavior of items

- Be clear on deleting, removing, creating and adding

- Create goes hand in hand with Delete, it usually means it cannot be restored

- Add goes hand in hand with Remove, it usually means it can be restored

- Do not use Delete and Remove as synonym

:::::layout

::::col
[!do]
:::item
Create a chart and delete a chart
:::
:::item
Add a sensor to a chart and remove a sensor from chart
:::
::::

::::col
[!dont]
:::item
Create a chart and remove it
:::
:::item
Add a sensor and delete the sensor
:::
::::

:::::
