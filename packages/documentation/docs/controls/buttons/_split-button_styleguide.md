Split buttons are button elements that allow users to either trigger an action with one click or select an action from a list of options. They consist of two parts: a button labeled with text on the left and a dropdown button labeled with an icon on the right. We typically use split buttons when a default action is available but more option need to be offered. Split buttons group similar or related actions.

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1292-6853&mode=design&t=iFGHiYzINQes2FVC-11)

1. Button container
2. Button label
3. Chevron
4. Dropdown button icon

Variants, options and states of the ix-button and the ix-dropdown-button components apply. Only additional, deviating or detailing specifications are listed here.

## Options
- **Label:** Set a label for the button component (left side). Labels should be short (two to three words) and contain a verb.
- **Placement:** Define where the flyout appears which is triggered when the dropdown button is active. Depending on the length of the labels within the flyout and the placement of the dropdown button on the screen, you can choose different placements. 
Give more info on placement options???
- **splitIcon:** We typically use a chevron icon on the dropdown button, but a custom icon can be set.

## States
Split buttons have five states: Default, hover, active, disabled and focused. States are applied to left and the right part of the split button independently. The visual appearance and the behavior of the states is the same as for the buttons and dropdown buttons.

## Behavior in context
- When users press an option from the dropdown list, the action is triggered. The label of the button on the left side stays static. 
- 

## Does and Don'ts
- Do use split buttons when when a frequent or most-important action exists
- Don't use split buttons for unrelated actions
- Don't duplicate the default option in the dropdown


## Related patterns
- [Button](button.md)
- [Dropdown](..\dropdown.md)
- [Select](..\select.md)
- [Split button](split-button.md)
