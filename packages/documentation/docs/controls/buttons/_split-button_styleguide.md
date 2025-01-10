Split buttons are button elements that allow users to either trigger an action with one click or select an action from a list of options. They consist of two parts: a button labeled with text and/or an icon on the left and a dropdown button labeled with an icon on the right. We typically use split buttons when a default action is available but more options need to be offered. Split buttons group similar or related actions.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1480-30799&mode=design&t=97WS5dUS2rk3MCp2-11)

1. Button
2. Dropdown button
3. Button icon
4. Button label
5. Dropdown button icon

**Note:** All the variants, options and states of the [button](button.md) component apply to the split button. We've listed additional or deviating specifications here.

## Options

- **Label:** Set a label for the button component (left side). We typically use short labels that contain a verb.
- **Placement:** Define where the flyout appears when the dropdown button is active. You can choose between different directions (top, bottom, left, right) and two options for alignment with the button (start, end). When there is not enough space for the chosen setting, the placement is corrected automatically.

![Placement example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1504-2203&mode=design&t=5MYmq6zAbfw7xIkC-11)
1. Bottom-end placement
2. Bottom-start placement   

- **Split icon:** We typically use a chevron icon on the dropdown button, but a custom icon can be set. A common alternative to the chevron is the "more-menu" icon.
- The options **loading** and **type** are not available for split buttons.

 Note: For options of the dropdown triggered when clicking on the dropdown button, see [dropdown](../dropdown.md). The **type** option is not available for dropdown buttons.
## Behavior in context

- **Interaction:** When users click on the button, the dropdown is shown.

## Sates

Split buttons have five states: Default, hover, active, disabled and focused (loading is not available).

States are applied to left and the right part of the split button independently except for the disabled state. The disabled state can be applied only to the complete component. 

The visual appearance and the behavior of the states is the same as the [button](button.md) and the [dropdown button](dropdown-buttom.md).

## Dos and Don'ts

- Do use split buttons when there is a frequent or most-important action
- Don't use split buttons for unrelated actions
- Don't duplicate the default option in the dropdown

## Related patterns

- [Button](button.md)
- [Dropdown](../dropdown.md)
- [Select](../select.md)
- [Split button](split-button.md)
