An input field is a user interface element that allows users to enter and edit text, numbers and symbols. It’s commonly used in forms, search bars, and other areas where data input is required.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3054-593&t=6gU2IFkPWR943af8-4)

1. Label
2. Mandatory indicator
3. Placeholder
4. Slot-end
5. Slot-start
6. Container
7. Helper or feedback text
8. Counter
## Options

- **Label:** See [form field](forms-field.md).
- **Slot options:** Add optional elements at the end and/or start of the input field, e.g. an icon, a button or a text option. We typically use slots for additional indications, options or information like a visibility toggle in a password field.
- **Placeholder**: Use a placeholder to provide a hint about what to enter or additional relevant context while the input field is empty. We typically use a placeholder when the label is not visible or we need to provide additional context.
- **Helper text:** See [form field](forms-field.md).
- **Counter:** See [form field](forms-field.md).
- **Feedback text**: See [form field](forms-field.md).
## Behavior in context

- **Validation:** See [validation](forms-validation.md).
- **Interaction**: Clicking in the container enables the editing of the field.
- **Text truncation**: The text in an input field is cut off with the length of the container.
- **Alignment**: Inputs are always aligned to the left, while right alignment is reserved exclusively for [number fields](number-input,md).
## States

The input field has five states: default, focused, hover, disabled and read-only. In the read-only state, the input field is displayed without offering any user interaction.

![Field States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3198-7167&t=EBVCuGpWXmdVYgeZ-4)
## Dos and Don’ts

- Do use helper text to guide users through the input process
- Do use feedback text to inform users about the status of their input
- Do ensure that the width of the input field is appropriate for the expected content
- Don’t overcrowd the input field with too many elements
- Don’t use placeholders as a substitute for labels

## Related patterns

- [Form field](forms-field.md)
- [Validation](forms-validation.md)
- [Layout](forms-layout.md)
- [Number field](number-field.md)
- [Date field](date-field.md)