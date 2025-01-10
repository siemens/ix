Dropdown buttons are button elements that allow users to select an action from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the options triggers the action. We typically use dropdown buttons when no default action is available. 

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1477-13932&mode=design&t=97WS5dUS2rk3MCp2-11)

1. Button container
2. Label
3. Chevron
4. Icon

**Note:** All the variants, options and states of the [button](button.md) component apply to the split button. We've listed additional or deviating specifications here.

## Options
- **Placement:** Define where the dropdown appears. Choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there isn't enough space for the chosen placement, it's automatically corrected.

![Placement example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)
1. Bottom-end placement
2. Bottom-start placement

 Note: For options of the dropdown triggered when clicking on the button, see [dropdown](../dropdown.md). The **type** option is not available for dropdown buttons.

# Behavior in context
- **Interaction:** When users click on the button, the dropdown is shown.

## States
Dropdown buttons have five states: Default, hover, active, disabled and focused (loading is not available).

The visual appearance and the behavior of the states is the same as the [button](button.md) and the [dropdown button](dropdown-buttom.md).

## Dos and Don'ts
- Do use dropdown buttons when selecting an option triggers an action
- Do use dropdown buttons when no default action is available
- Don't use dropdown buttons for navigation
- Don't use dropdown buttons when there is a frequent or most-important action (use a standard [button](button.md) or a [split button](split-button.md) instead)

## Related patterns
- [Button](button.md)
- [Dropdown](../dropdown.md)
- [Select](../select.md)
- [Split button](split-button.md) 
