## Guidelines

Input fields are commonly used in forms, search bars, and other areas where data input is required.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3054-593&t=jhhv5OZGqmBpgXcs-4)

1. Label
2. Required indicator
3. Placeholder
4. Slot-end
5. Slot-start
6. Container
7. Helper or feedback text
8. Counter

### Options

- **Label:** See [form field](./forms/forms-field.md).
- **Slot options:** Add optional elements at the end and/or start of the input field, e.g. an icon, a button or a text option. We typically use slots for additional indications, options or information like a visibility toggle in a password field.
- **Placeholder**: Use a placeholder to provide a hint about what to enter or additional relevant context while the input field is empty. We typically use a placeholder when the label is not visible or we need to provide additional context.
- **Helper text:** See [form field](./forms/forms-field.md).
- **Counter:** See [form field](./forms/forms-field.md).
- **Feedback text**: See [form field](./forms/forms-field.md).

### Behavior in context

- **Validation:** See [validation](./forms/forms-validation.mdx).
- **Interaction**: Clicking in the container enables the editing of the field.
- **Text truncation**: The text in an input field is cut off with the length of the container.
- **Alignment**: Inputs are always aligned to the left, while right alignment is reserved exclusively for [number fields](input-number.mdx).

### States

The input field has five states: default, focused, hover, disabled and read-only. In the read-only state, the input field is displayed without offering any user interaction.

![Field States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3198-7167&t=jhhv5OZGqmBpgXcs-4)

### Dos and Don’ts

- Do use helper text to guide users through the input process
- Do use feedback text to inform users about the status of their input
- Do ensure that the width of the input field is appropriate for the expected content
- Don’t overcrowd the input field with too many elements
- Don’t use placeholders as a substitute for labels

### Related patterns

- [Form field](./forms/forms-field.md)
- [Validation](./forms/forms-validation.mdx)
- [Layout](./forms/forms-layout.md)
- [Number input](input-number.mdx)
- [Date input](input-date.mdx)
