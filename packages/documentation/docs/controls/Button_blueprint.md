---
title: All Button
date: 10-01-2023
---
Buttons are used to initiate actions, to apply actions to selected objects and for activating/deactivating functions. 

--> A visual preview of the component from Figma should be included here. Could be anotated (e.g. button variant)

Go to:
- [Code](#Code)
- [Variants](#Variants)
- [States](#States)
- [Dos and don't](#Dos-and-don't)

See also:
- Icon button
- Button group

## Usage

Buttons are clickakble elements which iniate actions. Button labels communicate which action is triggered through user interaction.

### When to use

Buttons should be used to trigger an immediate action. They can be place in dialogs, forms, modal windows, ... Each page should include only one primary button. 

### When not to use

When many actions/functions are necessary, using only Buttons can easily overcrowd the screen. Don't only rely on Buttons in such cases, but consider alternatives such as Menu buttons or moving some of the functionality e.g. to a Drawer or into Dialogs. 
Do not use Buttons for navigation. To foward a user to a new page, use hyperlinks instead.

## Code

### Preview

The preview should be included here. Best would be to have one preview for all variants (e.g. with a dropdown above to select the variant and trigger states).

Below the Preview, Code Snippets should be shown and adjust to the preview.

Give option to select framework (globally?),  Fokus verschieben von Headlines auf Inhalte, Icons? for Angular, React, Web components, Container 

### Properties

Add tables here with properties

Funtion to collapse and expand?


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


## Dos and don't

- If space allows, place buttons next to one another instead of one below the other
- And so on
