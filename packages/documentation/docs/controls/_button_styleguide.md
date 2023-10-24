# UX Description

Buttons are used to initiate actions, to apply actions to selected objects and to activate/deactivate functions.
Buttons should be used to trigger an immediate action. They can be placed within dialogs, forms, modal windows and other containers. Each content area should include only one primary button.


When many actions/functions are necessary, using only buttons can easily overcrowd the screen. Don't only rely on buttons in such cases, but consider alternatives such as dropdown or split buttons or moving some of the functionality to a drawer or a dialog.
Do not use buttons for navigation. To foward a user to a new page, use a hyperlink instead.


![Button overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=143-9694&mode=design&t=oeSCpzdXLLAiSHv2-0)


## Variants

- Primary button: for the most important or primary actions within the user interface. These are typically actions that advance the user through a process, such as "Submit," "Save," "Sign Up," or "Checkout."

- Secondary button: for actions that are less commonly performed or that offer additional choices. These could include actions like "Cancel," "Reset," or "Advanced Options, " or support the primary action. For instance, in a dialog box, a secondary button might be used for "Don't Save" when the primary action is "Save."

- Tertiary button: are used for actions that are typically not part of the core user journey but serve specialized or conditional purposes.Tertiary buttons can represent actions such as "Advanced Settings," "More Options," "Help," or "Customize." They may also be used for conditional actions like "Change Preferences" or "View Details."



### Emphasis

Emphasis is used to create a visual hierachy between the buttons in one layout. A primary button can be accompanied by buttons of medium and low emphasis. There is no strict rule to place a secondary next to primary button. To create a clear hierarchy, tertiary buttons can be used instead which improves user guidance.

| Variant                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Primary button             | Call to action with highest emphasis, most-likely the next action. Use sparingly, preferably one per layout. |
| Secondary (outline) button | Standard action which requires medium emphasis and but needs to be easily recognizable.                      |
| Tertiary (ghost) button    | Action requiring less attention.                                                                             |

Lower emphasis can also be assigned to content areas through the use of grey buttons. Default (colored) and grey buttons should not be mixed in one line.

Hint: Conflicting naming conventions in components, grey button equals property variant "Secondary" in implemented components.

### Content

Buttons can contain only text, only icons or both text and icons.

| Variant       | Description and usage                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| Icon and text | Use if an icon is wanted and the icon metaphor might not be known to the user.                                       |
| Text-only     | If no well-known icon metaphor exists for the function or no icon is wanted to reduce graphical screen complexity.   |
| Icon-only     | If a well-known icon metaphor is used or the meaning of the icon metaphor is clear from the context. Use cautiously. |

### Icon button

Icon buttons are available in three sizes and two shapes.

| Icon size  | Description and usage                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| XS/12      | Extra small icon size, used for very small parent components.                                        |
| S/16       | Small icon size, used for buttons within a parent component, e.g. clear button within search fields. |
| Default/24 | Default icon size, used for all icon buttons without space restrictions due to parent components.    |

| Button shape | Description and usage                                          |
| ------------ | -------------------------------------------------------------- |
| Square       | Default shape, also used within rectangular parent components. |
| Oval         | Alternative shape, used within oval parents components.        |

### Selectable button

The selected state is only available for tertiary (ghost) grey buttons to visualize an on/off state. Hover and active state are available for the selected variant. The selectable button is commonly used within toolbars.

### Button group

A button group, also known as segmented buttons or toggle buttons, is an element consisting of two or more adjacent buttons. Selection/activation of the buttons can either be mutually exclusive (single-select) or not (multi-select). Buttons within a button group should be of the same content variant, i.e. not mixing icon only, text only and icon and text buttons in one group. All buttons within a button group are secondary (outline) buttons and switch to primary when selected/active. Button groups should be used for closely related actions, e.g. switching between different views.

![Button group](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=145-10524&mode=design&t=oeSCpzdXLLAiSHv2-0)

## Behavior in context

### Interaction

Buttons are interactive components that enable users to trigger specific actions, navigate between screens or pages, and control the behavior of an application or website.  <kbd>Space</kbd>.

### Text truncation

Button labels are not truncated. All text on buttons is one line only. Labels should be kept concise to allow users to quickly scan, understand and remember them.

### Alignment

Buttons can be left-justified or right-justified or fully span a container's width with right-justified alignment being most commonly used.

## States

Button states are equal for text-only, icon-only and text and icon buttons.

![Button states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=132-13020&mode=design&t=oeSCpzdXLLAiSHv2-0)

| State           | Description                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Hover           | The hover state is indicated by fill color change and text/icon color change (except primary button).                          |
| Active          | The active state is indicated by fill color change and text/icon color change (except primary button). Equal to pressed state. |
| Disabled        | The disabled state is indicated by fill color change and text/icon color change (except primary button).                      |
| Selected        | The selected state is indicated by text/icon and fill color change. Only available for tertiary (ghost) grey button.           |
| Selected Hover  | The selected state is indicated by fill color change. Only available for tertiary (ghost) grey button.                         |
| Selected Active | The selected state is indicated by fill color change. Only available for tertiary (ghost) grey button.                         |
| Focused         | The focused state is indicated by a focus frame.                                                                               |

## Anatomy

### Sizing

- All buttons have a fixed height.
- Icon-only buttons also have a fixed width.
- Text-only and icon and text buttons have a minimum width of 5rem.
- For text-only and icon and text buttons, no maximum width is defined.
- The width of Primary and Secondary buttons can either depend on screen context or text length.
- The width of Tertiatry buttons with text depends on the text length.
- Text on text-only buttons is horizontally centered.
- On icon-and-text buttons, there is a fixed margin between icon and text of <kbd>0.25rem</kbd>. Icon and text together are horizontally centered. The icon should be placed on the leading side of the button (e.g. left for left-to-right languages).

### Spacing

A default margin between adjacent buttons of <kbd>0.5rem</kbd> is defined. Depending on the context, this margin may be increased, though.

## Do and don't

- Given enough space, buttons should be aligned horizontally rather than vertically.
- When grouping multiple buttons, e.g. in a dialog, buttons should be right-justified with the primary action on the very right.
- Avoid generic button labels (e.g. Yes/No), use meaningful labels instead (e.g. Save, Download, Edit) so that the user easily understands which action is triggered by pressing the button.
- For more information, see also the UX writing guidelines on [Diaglogs and buttons](/docs/language/dialogs-and-buttons.md).
## Related patterns:

- [Dropdown button](./dropdown-button.md)
- [Modal](./modal.md)
- [Split button](./split-button.md)
