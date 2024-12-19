## Guidelines

Checkboxes are commonly used when there are multiple options that can be selected or used to easily enable or disable a setting. They are often utilized in forms where users can choose multiple options, such as selecting items or categories that apply to a specific product or service.

![Checkbox anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3364-8247&t=VCAAFzKIYCDb7nIX-4)

1. Checkbox
2. Checkbox label
3. Group label
4. Group required indicator
5. Group helper or feedback text

### Options

- **Checkbox label:** See [form field](forms/forms-field.md).
- **Indeterminate checkbox:** Indicates that only some items in a checkbox group are selected. We offer the indeterminate state, but the implementation when this state is active is the responsibility of each individual.
- **Checkbox group**: Group checkboxes to indicate that they are related. We typically use checkbox groups when multiple options need to be presented for selection, allowing users to choose any combination of the available choices. They are particularly useful in user interface design for forms, settings and preferences where multiple selections are possible.
- **Group label:** Add a label to the group of checkboxes to provide context to your users. We typically use short and descriptive labels to summarize the options in the group.
- **Group helper text**: See [form field](forms/forms-field.md).
- **Group feedback text**: See [form field](forms/forms-field.md).

### Behavior in context

- **Validation**: See [validation](forms/forms-validation.mdx).
- **Interaction**: Clicking on the checkbox toggles the state between checked and unchecked.
- **Grouping**: Checkbox groups have only one label and helper text for the entire group. Grouped checkboxes are validated collectively, not individually.

### States

![Checkbox states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3749-1431&t=VCAAFzKIYCDb7nIX-4)

### Dos and Don’ts

- Do use checkboxes when you have multiple options that can be selected
- Do group related checkboxes together to indicate their relationship
- Do use checkboxes in forms to allow users to select multiple options
- Don’t use a checkbox for binary choices (yes/no, true/false) - use a toggle switch instead
- Don’t use checkboxes for mutually exclusive options - use [radio buttons](radio.mdx) instead
- Don’t use checkboxes for actions that have immediate consequences - use [buttons](buttons/button.md) or links instead
