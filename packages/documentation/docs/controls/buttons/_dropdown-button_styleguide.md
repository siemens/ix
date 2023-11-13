Dropdown buttons are button elements that allow users to select from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the exposed options triggers the respective action. We typically use dropdown buttons when no default action is available.

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1292-6853&mode=design&t=iFGHiYzINQes2FVC-11)

1. Button container
2. Button label
3. Chevron
4. Button icon

## Variants

- **Primary dropdown button:** In our applications, we most often use the primary dropdown button variant.
- **Secondary dropdown button:** The secondary button variant has a greyscale appearance to distinguish it from the primary dropdown button. 

## Options
- **Default:** Use for the most important or most-likely next action within the user interface. We use these sparingly, and recommend only one per layout. These are typically called *primary* buttons in UX. 
- **Outline:** Use for standard actions that need to be easily recognizable or for actions supporting the default (primary) action. These are typically called *secondary* in UX.
- **Ghost:** Use for actions that are typically not part of the core user journey but serve specialized or conditional purposes. They may also be used for conditional actions like "Change preferences" or "View details".
- **Disabled:** Dropdown buttons can be disabled (see also dropdown button states).
- **Icon:** Icons can also be displayed with dropdown button labels.
- **Label:** Set a label for the dropdown button. Labels should be short (two to three words) and contain a verb.
- **Placement:** Define where the flyout appears which is triggered when the button is active. Depending on the length of the labels within the flyout and the placement of the dropdown button on the screen, you can choose different placements. 
Give more info on placement options???

## States
Dropdown buttons have five states: Default, hover, active, disabled and focused. In active state, dropdown buttons show a dropdown with the available options. In disabled state, dropdown buttons are visually displayed but don't offer any user interaction. The visual appearance of the states is the same as the ix-button component.

## Does and don'ts
- Do use dropdown buttons when the selection of an option triggers an action. Otherwise, use a select component.
- Don't use dropdown buttons when a frequent or most-important action exists. Use a standard button or a split button instead.

## Related patterns
- [Button](.\button.md)
- [Dropdown](.\controls\dropdown.md) Path?
- [Select](.\select.md) Path?
- [Split button](split-button.md) Path?

