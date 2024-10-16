Selects provide users to make a single or multi selection from a filterable list. With the editable variant, users can also add new options to the list.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3054-593&t=6gU2IFkPWR943af8-4)

1. Label
2. Required indicator
3. Placeholder
4. Clear button
5. Open dropdown button
6. Container
7. Dropdown list
8. List header
9. Selected list item
10. Editable mode (add new option)

## Options

- **Label**: See [form field](forms-field.md).
- **Placeholder**: Use a placeholder to provide a hint about what to enter or additional relevant context while the input field is empty. We typically use a placeholder when the label is not visible or we need to provide additional context.
- **Helper text**: See [form field](forms-field.md).
- **Feedback text**: See [form field](forms-field.md).
- **Show clear button**: Selects can have a dedicated button to easily clear the selection. Hide the button when you offer other ways to reset (e.g. a default option like "none"), or if you aim for a simplified keyboard accessibility.
- **List header:** Use a header to provide additional context or instructions about the options to help users understand the choices better. 
	- **Hide list header**: Hide the header of the dropdown list when it is not needed.
- **Hint for no matches**: Set a message that is displayed when no item matches the inserted text.
- **Editable**: When enabled users can add new options to the list.
- **Multiselect**: Allow users to select multiple items from the list.
TODO: Option label
## Behavior in context

- **Validation**: See [validation](forms-validation.md).
- **Interaction**:
	- Click or Enter key on button opens dropdown list.
	- Typing in the input field filters the dropdown list.
	- Arrow keys navigate within dropdown list.
	- Click or enter selects highlighted list item.
	- Escape key closes dropdown list and returns to the originally selected value.
- **Overflow**: 
	- The text in an input field is truncated with the length of the container.
	- On the multiselect, the selected items break into a second line and then shows a scrollbar if it grows beyond.
	- The dropdown list is scrollable when the list exceeds the container height. Its width is defined by the longest item.
- **Alignment**: Selects are always aligned to the left, while right alignment is reserved exclusively for [number fields](number-input.md).
## States

The select field has five states: default, hover, active/focused, disabled and read-only. In the disabled state, the input field is displayed without offering any user interaction.

![Field States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3198-7167&t=EBVCuGpWXmdVYgeZ-4)
## Dos and Don’ts

- Do take care of performance when loading an extensive list of options
- Do use selects when there is a finite list of options available to avoid manual input errors or duplicates
- Do sort items logically (for example alphabetically or numerically)
- Do use short and concise labels for items
- Don't use selects for binary choices, like yes and no (use [radio buttons](radio.mdx), [checkboxes](checkbox.mdx) or [toggles](../toggle.md) instead)
- Don't use selects for navigational or search patterns (use [category filters](../category-filter.md) or [search fields](expanding-search.md) instead)
- Don't combine several data attributes in an option label (use [tables](table.md) or [event lists](event-list.md) with a search functionality instead)

TODO IMAGE
## Related patterns

- [Form field](./forms/forms-field.md)
- [Validation](./forms/forms-validation.md)
- [Layout](./forms/forms-layout.md)
- [Input](input.md)
- [Radio button](radio.mdx)
- [Checkbox](checkbox.mdx)
- [Toggle](toggle.md)
- [Date field](date-field.md)