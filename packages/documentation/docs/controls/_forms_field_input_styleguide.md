A input field is a user interface element that allows users to input and edit text, numbers and symbols. It’s commonly used in forms, search bars, and other areas where data input is required.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3054-593&t=6gU2IFkPWR943af8-4)

1. Label
2. Mandatory indicator
3. Placeholder text
4. Slot-end
5. Slot-start
6. Container
7. Helper or Feedback text
8. Counter
## Options
- **Label:** Refer to the [form field]() chapter for detailed guidelines.
- **Slot options:** Optional element at the end of the text input field can include an icon, icon button, or text option in the slot-start or -end. We typically use slots for additional indications, option or information like a visibility toggle in a password field.
- **Placeholder**: Example text that appears in the text field when it is empty, providing a hint about what to enter. We typically use placeholder text when the label is not visible or we need to provide additional context.
- **Helper text:** Refer to the [form field]() chapter for detailed guidelines.
- **Counter:** Refer to the [form field]() chapter for detailed guidelines.
- **Helper text**: Refer to the [form field]() chapter for detailed guidelines.
- **Feedback text**: Refer to the [form field]() chapter for detailed guidelines.
## Behavior in context
- **Validation:** Refer to the [validation]() chapter for detailed guidelines
- **Interaction**: Clicking in the container enables the editing of the field.
- **Text truncation**: The text in an input field is cut of with the length of the container
- **Alignment**: Inputs are always aligned to the left, while right alignment is reserved exclusively for number fields.
## States
- **Default**: Default state, ready for user input.
- **Focused**: When the user clicks on the text field, indicating it is ready for input.
- **Hover**: When the user hovers over the text field.
- **Disabled**: Indicates the text field is not available for interaction.
- **Read only:** The text field is visible but not editable.

![Field States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3198-7167&t=EBVCuGpWXmdVYgeZ-4)
## Dos and Don’ts
- Do ensure all text fields across your application have a consistent look and feel
- Do make sure text fields are accessible, with clear labels
- Don’t overcrowd the text field with unnecessary elements
- Don’t use placeholder text as a substitute for labels
## Related patterns
- [Forms field]()
- [Validation]()
- [Layout]()
- [Number field]()