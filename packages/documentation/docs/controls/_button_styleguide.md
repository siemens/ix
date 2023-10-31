Buttons are used to initiate actions, to apply actions to selected objects and to activate/deactivate functions. We typically use buttons to trigger an immediate action. They can be placed within dialogs, forms, modal windows and other containers. 

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1097-5037&mode=design&t=KAxDgJoFX436Uk0b-11)

1. Button label
2. Button icon

## Variants

- **Primary button:** In our applications, we most often use the primary button variant. It is charaterized by its use of color compared to the secondary button. 
- **Secondary button:** The secondary button variant is characterized by its greyscale appearance. We typically use secondary buttons for screen areas that should reveice less user attention or contain optional content.

**Hint:** Please be aware that the terms *primary* and *secondary* are not used in accordance to common UX terminology for primary, secondary and ghost button.

## Options
- **Default:**  for the most important or most-likely next action within the user interface. These are typically actions that advance the user through a process, such as "Submit," "Save," or "Add". Use sparingly, preferably one per layout. Typically called *primary* button in the UX context. 
- **Outline:** for standard actions that need to be easily recognizable or for actions supporting the default (primary) action. These could include actions like "Cancel," "Reset," or "Advanced Options". Typically called *secondary* in the UX context.
- **Ghost:** for actions that are typically not part of the core user journey but serve specialized or conditional purposes.Tertiary buttons can represent actions such as "Advanced Settings," "More Options," "Help," or "Customize." They may also be used for conditional actions like "Change Preferences" or "View Details."
- **Icon:** An icon can be displayed additionally to the button label.
- **Disabled:** A button can be disabled (see also button states).
- **Loading:** A loading spinner is displayed on the button. The spinner replaces an icon when available.
- **Type:** A submit button is available. 

## Behaviour in context
- **Interaction:** A button can be triggered by clicking/pressing anywhere within the button container. When the button is focused, it can be triggered by pressing  <kbd>Space</kbd>.
- **Text truncation:** Button labels are not truncated. All text on buttons is one line only. Labels should be kept concise to allow users to quickly scan, understand and remember them.
- **Alignment:** Buttons can be left-justified or right-justified or fully span a container's width.

## States

Button can take one of five states: Default, hover, active, disabled and focused.

![Button states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=132-13020&mode=design&t=KAxDgJoFX436Uk0b-11)

## Dos and don'ts

- Do use concisive button labels. Don't use multi-line labels on buttons
- Do use one primary (default) button in one visual unit to ensure a clear and singular focus on the main call to action
- Do use a default margin between adjacent buttons of at least <kbd>0.5rem</kbd>.
- Do adjust default and outline button width to label length or container width. Don't extend ghost button width beyond label width
- Don't only rely on buttons when many actions/functions are necessary. Do consider alternatives such as dropdown or split buttons or moving some of the functionality to a drawer or a dialog.
- Don't use buttons for navigation. Do use a hyperlink to foward a user to a new page instead


For more information, see also the UX writing guidelines on [diaglogs and buttons](/docs/language/dialogs-and-buttons.md).

## Related patterns:

- [Dropdown button](./dropdown-button.md)
- [Split button](./split-button.md)
- [Toggle button](./toggle-buttons.md)
- [Modal](./modal.md)


