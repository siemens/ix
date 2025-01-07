Buttons initiate actions, apply actions to selected objects and activate/deactivate functions. We typically use buttons to trigger an immediate action, and you can place them within dialogs, forms, modal windows and other containers. 

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1097-5037&mode=design&t=KAxDgJoFX436Uk0b-11)

1. Label
2. Icon

## Variants

- **Primary:** Has a solid background in the primary color. We typically use primary buttons for the most important or most-likely next action within the UI. 
- **Secondary:** Has a transparent background in the secondary color. We typically use secondary buttons for standard actions that need to be easily recognizable or for actions supporting the default (primary) action. 
- **Danger:** Has a red background and is used for destructive or critical actions like "delete" or "remove", especially in confirmation dialogs. We typically use the danger button for actions that are irreversible or have a significant impact on the user’s data or the application state.

**Note:** Please be aware that the terms *primary* and *secondary* are not used in accordance to common UX terminology for primary, secondary and ghost button.

## Options

- **Label**: The label is the text displayed on the button. We typically use short, descriptive labels that clearly communicate the action the button triggers.
- **Icon:** An icon can be displayed on the button. We typically use icons to support the label and make the button more easy to discover by the user. The icon should be widely known for representing the action or function among your users.
- **Type:** Use a plain button for actions that do not involve form submission, such as triggering dialogs or performing navigation. Otherwise, use a submit button to send user input from a form to a server.
- **Outline:** Use outline buttons for standard actions that need to be easily recognizable or for actions supporting the primary action, e.g. "Cancel", "Reset" or "Advanced Options". These are typically called *secondary* buttons in UX.
- **Ghost:** Use ghost buttons for actions that are not part of the core user journey but serve specialized or conditional purposes, e.g. "Advanced settings", "More options", "Help" or "Customize", "Change preferences" or "View details".

## Behavior in context

- **Interaction:** Buttons can be triggered by pressing anywhere within the button container. When buttons are focused, they can be triggered by pressing `Space`.
- **Text truncation:** Button labels are not truncated. All text on buttons is one line only. 
- **Alignment:** Buttons can be left- or right-justified or fully span a container’s width.
- **Cluster buttons:** Cluster buttons in groups with related functions. A cluster might include various types of buttons, e.g. a primary and  secondary ghost button. We recommend a gap of `0.5rem` between buttons.
- **Button width:** Buttons dynamically adjust their width based on content but have a default minimum width of `5rem` to ensure harmonious alignment for common pairs like "OK" and "Cancel." The minimum width can be customized for different needs.

## States

Buttons have six states: Default, hover, active, disabled, loading and focused. In a disabled and loading state, buttons are visually displayed but don’t offer any user interaction.

![Button states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=132-13020&mode=design&t=KAxDgJoFX436Uk0b-11)

## Dos and Don’ts

- Do use short button labels to allow users to quickly scan, understand and remember them (see our [writing style guide](./../.../language/writing-style-guide-getting-started.md))
- Do use ellipsis (...) to indicate that an action requires further input or choice from the user, e.g. "Save as…" which opens a list of file types to choose from.
- Do use only one primary button in one visual unit for a clear and singular focus on the main call to action
- Don’t use the danger button excessively or repetitively in lists or tables
- Don’t rely on standard buttons when many actions are necessary (use [dropdown buttons](dropdown-button.md) or [split buttons](split-button.md) instead, or move some functionality to a [pane](../pane.md) or a [dialog](../modal.md))

## Related patterns

- [Dropdown button](./dropdown-button.md)
- [Split button](./split-button.md)
- [Toggle button](./toggle-buttons.md)
- [Modal](./../modal.md)
- [Forms behavior](./../forms/forms-behavior.md)


