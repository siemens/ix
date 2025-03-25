## Guidelines

Radio buttons are presented in groups to signify that only one selection is allowed at a time. Selecting a radio button automatically deselects any previously chosen radio button within the same group. We typically use radio buttons to offer users a set of exclusive choices.

![Anatomy radio button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3384-108&t=GDd4aJQUrPB3cC9X-4)

1. Label
2. Required indicator
3. Radio button group
4. Helper or feedback text
5. Radio button
6. Radio button label

### Options

- **Label:** See [form field](../forms-field).
- **Helper text**: See [form field](../forms-field).
- **Feedback text**: See [form field](../forms-field).

### Behavior in context

- **Validation**: Radio buttons are validated collectively, not individually. For more information on validation, see [validation](../forms-validation).
- **Interaction**: Clicking on a radio button toggles its state between checked and unchecked/default. Every other radio button in the group is automatically unchecked.

### States

![States radio button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3387-8703&t=ZvZOV5vvqWRxmqyv-4)

### Dos and Don’ts

- Do use radio buttons when the user needs to select only one option from a set of options
- Do group related radio buttons together to indicate that only one option can be selected at a time
- Do provide a default (already selected) option when the user first sees the radio button group
- Don’t use radio buttons if the user needs to select multiple options from a set of options - use a checkbox instead
- Don’t use only one radio button in a group, groups should have at least two options

### Related

- [Form field](../forms-field)
- [Validation](../forms-validation)
- [Layout](../forms-layout)
- [Checkbox](../checkbox)
- [Toggle](../toggle)
