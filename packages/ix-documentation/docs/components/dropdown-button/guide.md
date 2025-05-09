---
doc-type: 'tab-item'
---
# Dropdown button - Usage

Dropdown buttons are button elements that allow users to select an action from a list of options by clicking on a button and revealing a dropdown. Clicking on one of the exposed options triggers the action. We typically use dropdown buttons when no default action is available. Dropdown buttons typically group similar or related actions.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1477-13932&mode=design&t=97WS5dUS2rk3MCp2-11)

1. Button container
2. Button label
3. Chevron
4. Button icon

All the variants, options and states of the ix button component apply to the dropdown button. We've listed additional or deviating specifications here.

## Options

- **Label:** Set a label for the dropdown button. We typically use short labels including verbs.
- **Placement:** Define where the dropdown appears when the button is active. Choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there isn't enough space for the chosen placement, it's automatically corrected.

![Placement example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)

1. Bottom-end placement
2. Bottom-start placement

- For options of the dropdown triggered when pressing the button, please refer to our separate dropdown component guide.
- The options **loading** and **type** are not available for split buttons.

## States

Dropdown buttons have five states: Default, hover, active, disabled and focused. In an active state, dropdown buttons show a dropdown with the available options. The visual appearance of the states is the same as the ix button component.

## Dos and Don’ts

- Do use dropdown buttons when selecting an option triggers an action
- Don't use dropdown buttons when there is a frequent or most-important action (use a standard button or a split button instead)

## Related

- [Button](../button)
- [Dropdown](../dropdown)
- [Select](../select)
- [Split button](../split-button)
