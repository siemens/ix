---
title: Buttons
---

import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-button/props.md';
import PropsIcon from './../auto-generated/ix-icon-button/props.md';

import WebComponentButtons from './../auto-generated/previews/web-component/buttons.md'
import WebComponentButtonSecondary from './../auto-generated/previews/web-component/button-secondary.md'
import WebComponentButtonGhost from './../auto-generated/previews/web-component/button-ghost.md'
import WebComponentButtonGrey from './../auto-generated/previews/web-component/button-grey.md'
import WebComponentButtonGreySecondary from './../auto-generated/previews/web-component/button-grey-secondary.md'
import WebComponentButtonGreyGhost from './../auto-generated/previews/web-component/button-grey-ghost.md'
import WebComponentButtonTextIcon from './../auto-generated/previews/web-component/button-text-icon.md'
import WebComponentButtonGroup from './../auto-generated/previews/web-component/button-group.md'
import WebComponentButtonIcon from './../auto-generated/previews/web-component/button-with-icon.md'
import WebComponentButtonSelected from './../auto-generated/previews/web-component/button-selected.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'
import ReactButtonIcon from './../auto-generated/previews/react/button-with-icon.md'
import ReactButtonSelected from './../auto-generated/previews/react/button-selected.md'

import ReactButtonSecondary from './../auto-generated/previews/react/button-secondary.md'
import ReactButtonGhost from './../auto-generated/previews/react/button-ghost.md'
import ReactButtonGrey from './../auto-generated/previews/react/button-grey.md'
import ReactButtonGreySecondary from './../auto-generated/previews/react/button-grey-secondary.md'
import ReactButtonGreyGhost from './../auto-generated/previews/react/button-grey-ghost.md'
import ReactButtonTextIcon from './../auto-generated/previews/react/button-text-icon.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.ts.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.ts.md'
import AngularButtonIcon from './../auto-generated/previews/angular/button-with-icon.ts.md'
import AngularButtonSelected from './../auto-generated/previews/angular/button-selected.ts.md'
import AngularButtonSecondary from './../auto-generated/previews/angular/button-secondary.ts.md'
import AngularButtonGhost from './../auto-generated/previews/angular/button-ghost.ts.md'
import AngularButtonGrey from './../auto-generated/previews/angular/button-grey.ts.md'
import AngularButtonGreySecondary from './../auto-generated/previews/angular/button-grey-secondary.ts.md'
import AngularButtonGreyGhost from './../auto-generated/previews/angular/button-grey-ghost.ts.md'
import AngularButtonTextIcon from './../auto-generated/previews/angular/button-text-icon.ts.md'

## Usage

### Primary

<Playground
name="buttons"
frameworks={{
  react: ReactButtons,
  angular: AngularButtons,
  javascript: WebComponentButtons
}}>
</Playground>

### Primary Outline

:::info

Will be used in UX context as **Secondary**

:::

<Playground
name="button-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonSecondary,
  angular: AngularButtonSecondary,
  javascript: WebComponentButtonSecondary
}}></Playground>

### Primary Ghost

:::info

Will be used in UX context as **Ghost**

:::

<Playground
name="button-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGhost,
  angular: AngularButtonGhost,
  javascript: WebComponentButtonGhost
}}></Playground>

### Secondary

:::info

Will be used in UX context as **Grey button**

:::

<Playground
name="button-grey"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGrey,
  angular: AngularButtonGrey,
  javascript: WebComponentButtonGrey
}}></Playground>

### Secondary Outline

:::info

Will be used in UX context as **Grey secondary**

:::

<Playground
name="button-grey-secondary"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreySecondary,
  angular: AngularButtonGreySecondary,
  javascript: WebComponentButtonGreySecondary
}}></Playground>

### Secondary Ghost

:::info

Will be used in UX context as **Grey ghost**

:::

<Playground
name="button-grey-ghost"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGreyGhost,
  angular: AngularButtonGreyGhost,
  javascript: WebComponentButtonGreyGhost
}}></Playground>

### Selectable button

:::info

Only available in secondary ghost state

:::

<Playground
name="button-selected"
hideInitalCodePreview
frameworks={{
  react: ReactButtonSelected,
  angular: AngularButtonSelected,
  javascript: WebComponentButtonSelected
}}></Playground>

### Button group

<Playground
name="button-group"
hideInitalCodePreview
frameworks={{
  react: ReactButtonGroup,
  angular: AngularButtonGroup,
  javascript: WebComponentButtonGroup
}}></Playground>

### Button with text and icon

<Playground
name="button-text-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonTextIcon,
  angular: AngularButtonTextIcon,
  javascript: WebComponentButtonTextIcon
}}></Playground>

### Icon button

<Playground
name="button-with-icon"
hideInitalCodePreview
frameworks={{
  react: ReactButtonIcon,
  angular: AngularButtonIcon,
  javascript: WebComponentButtonIcon
}}></Playground>

## Properties (ix-button)

<Props />

## Properties (ix-icon-button)

<PropsIcon />


# UX Description

Buttons are used to initiate actions, to apply actions to selected objects and for activating/deactivating functions. 

Go to:

- [Variants](#variants)
- [States](#states)
- [Dos and don't](#dos-and-don't)

## Usage

### When to use

Buttons should be used to trigger an immediate action. They can be place in dialogs, forms, modal windows, ... Each page should include only one primary button. 

### When not to use

When many actions/functions are necessary, using only Buttons can easily overcrowd the screen. Don't only rely on Buttons in such cases, but consider alternatives such as Menu buttons or moving some of the functionality e.g. to a Drawer or into Dialogs. 
Do not use Buttons for navigation. To foward a user to a new page, use hyperlinks instead.


## Variants

Buttons are available as primary, secondary and tertiary variants. Through the selective use of fill and outline color, different emphasis is given by each variant. Button can contain an icon and text, only text or only an icon. For ...use, all buttons have a respective grey variant.

---> A visual of the variants from Figma should be given here

### Emphasis 

| Variant            | Description and usage    |
| ------------------ | -------------- |
| Primary button     | call to action with highest emphasis, lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor |
| Secondary button   | lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna |
| Tertiary button    | At vero eos et accusam et justo duo dolores et ea rebum |

### Content

| Variant            | Description and usage    |
| ------------------ | -------------- |
| icon and text      | Use if an icon is wanted and the icon metapher might not be known to the user |
| text only          | If no well-known icon metapher exists for the function or no icon is wanted to reduce graphical screen complexity. |
| icon only          | if a well-known icon metapher is used or the meaning of the icon metapher is clear from the context --> link to icon button |

/ ### Elevation
/ ### Label placement
/ ### Interaction mode
/ ### Selection
/ ### Editable


### ??? (grey buttons)

What about the grey buttons? What is their role? 

## Behavior in context

### Text truncation

### Logical dependencies


/ ### Overflow behavior
/ ### Scrolling behavior
/ 

## States

| State              | Description|
| ------------------ | -------------- |
| Hover              | The hover state is indicated by fill color change. |
| Active             | The active state is indicated by fill color change. Equal to pressed state. |
| Disabled           | The disblabed state is indicated by fill color change. |
| Selected           | The selected state is indicated by fill color change. Only available for tertiary grey button ("secondary ghost button") |
| Focused            | The focused state is indicated by a focus frame. |

## Anatomy

### Main elements

--> Abstract visualisation of the elements of a button ()

### Sizing

- All Buttons have a fix height
- Icon-only Buttons also have a fix width
- The width of Primary and Secondary buttons can either depend on screen context or text length
- The width of Tertiatry buttons with text depends on the text length
- Text on text-only Buttons is horizontally centered
- On text-and-icon Buttons, there is a fix margin between icon and text. Icon and text together are horizontally centered. The icon should be placed on the leading side of the button (e.g. left for left-to-right languages).

### Spacing

A default margin between adjacent Buttons is defined. Depending on the context, this margin may be increased or decreased, though.

### Alignment

Buttons can be left-justified or right-justified or fully span a container's width. Maximum width for full-span buttons is xxx px.


## Dos and don'ts

- If space allows, place buttons next to one another instead of one below the other
- And so on


## Related patterns:

- Icon button
- Button group
