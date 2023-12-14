Dropdown buttons are button elements that allow users to select an action from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the exposed options triggers the respective action. We typically use dropdown buttons when no default action is available. Dropdown buttons group similar or related actions.

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1477-13932&mode=design&t=97WS5dUS2rk3MCp2-11)

1. Button container
2. Button label
3. Chevron
4. Button icon

Variants, options and states of the ix-button component apply. Only additional or deviating specifications are listed here.

## Options
- **Label:** Set a label for the dropdown button. Labels should be short (two to three words) and contain a verb.
- **Placement:** Define where the dropdown appears which is triggered when the button is active. You can choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there is not enough space for the chosen setting, the placement is corrected automatically.

![Placement example](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)
1. Bottom-end placement
2. Bottom-start placement

- For options of the dropdown triggered when pressing the button, please refer to the dropdown documentation page.
- The options **loading** and **type** are not available for split buttons.

## States
Dropdown buttons have five states: Default, hover, active, disabled and focused. In active state, dropdown buttons show a dropdown with the available options. The visual appearance of the states is the same as the ix-button component.

## Does and Don'ts
- Do use dropdown buttons when the selection of an option triggers an action. Otherwise, use a select component.
- Don't use dropdown buttons when a frequent or most-important action exists. Use a standard button or a split button instead.

## Related patterns
- [Button](button.md)
- [Dropdown](..\dropdown.md)
- [Select](..\select.md)
- [Split button](split-button.md) 
