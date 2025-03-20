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

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='Updating user roles…'></Guideline>
<Guideline do={false} label='Getting ready…'></Guideline>
</span>

<span class="m-2">
<Guideline do label='Submitting log files…'></Guideline>
<Guideline do={false} label='Chopping fruit…'></Guideline>
</span>

<span class="m-2">
<Guideline do label='Saving project… > Project saved'></Guideline>
<Guideline do={false} label='Saving project… > Project uploaded'></Guideline>
</span>

<span class="m-2">
<Guideline do label='Training models… > Models trained'></Guideline>
<Guideline do={false} label='Training models… > Training done'></Guideline>
</span>

</div>

## Error messages

- Add a clear reason for the error

- Do not blame the user

- Add clear instructions for the user regarding what to do next to resolve the error

- Do not over communicate

- Use … to show an action is required, i.e. fill this in …

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='System error: You’re offline. Check your connection and try again.'></Guideline>
<Guideline do label='File error: We cannot upload this file. Try uploading again.'></Guideline>
<Guideline do label='Permission error: To carry out this task, you need more permissions. Contact admin to change permissions. '></Guideline>
<Guideline do={false} label='What did you do!?'></Guideline>
<Guideline do={false} label='The email address you entered does not match the required format. Please enter your email address using the standard format.'></Guideline>
</span>
</div>

## Empty-state text

- Empty-state wording tells the user the empty space is intentional and should be there, i.e. not an error

- Use wording to move the user forward

- Use wording to help users understand the function of the empty state

- Do not over communicate

- Use wording to show users how to resolve the empty state, e.g. with an action, click, etc.

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='Allocate users in User management.'></Guideline>
<Guideline do={false} label='No allocated users.'></Guideline>
</span>

<span class="m-2">
<Guideline do label='To show rows, select a project.'></Guideline>
<Guideline do={false} label='No rows to show.'></Guideline>
</span>

<span class="m-2">
<Guideline do label='To save a project, select Save in Project detail list.'></Guideline>
<Guideline do={false} label='No projects saved.'></Guideline>
</span>

</div>

## Restoring behavior of items

- Be clear on deleting, removing, creating and adding

- Create goes hand in hand with Delete, it usually means it cannot be restored

- Add goes hand in hand with Remove, it usually means it can be restored

- Do not use Delete and Remove as synonym

<div class="d-flex flex-wrap">
<span class="m-2">
<Guideline do label='Create a chart and delete a chart'></Guideline>
<Guideline do={false} label='Create a chart and remove it'></Guideline>
</span>

<span class="m-2">
<Guideline do label='Add a sensor to a chart and remove a sensor from chart'></Guideline>
<Guideline do={false} label='Add a sensor and delete the sensor'></Guideline>
</span>
</div>
