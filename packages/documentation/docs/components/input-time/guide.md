---
doc-type: 'tab-item'
---

# Time input - Usage

The time input component is typically used in forms, filters and scheduling tools to ensure consistent and accurate time entries. By standardizing time input, it helps maintain data integrity and improves the user experience in applications requiring precise time information.

![Time input overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3629-6200&t=ADQCetGKOEH1WG2r-4)

1. ...
2. ...
3. ...

## Options

- **Label**: See [form field](../forms-field).
- **Required**: See [form field](../forms-field).
- **Helper text**: See [form field](../forms-field).
- **Feedback text**: See [form field](../forms-field).
- **Show text as tooltip**: See [form field](../forms-field).
- **Placeholder**: See [form field](../forms-field). We typically use a placeholder to show an example time format to assist users when the field is empty.
- **Error message**: Feedback text when time is not parsable. We typically use this to inform users that the entered time format is incorrect and guide them to enter a valid time.
- **Format**: Specify the time format, default ‘TT’ to ensure that times are entered in a consistent and recognizable format.

## Behavior in context

- **Interaction**:
  - Click or focus opens the time picker.
  - Use mouse or keyboard arrows to navigate to the desired time.
  - Confirm closes the time picker.
  - Escape key closes the time picker.
- **Validation**:
  - Use feedback text for validation types valid, info, warning and invalid.
  - Invalid feedback automatically provided if entered time is not parsable.
  - Refer to the [validation](../forms-validation) chapter for detailed guidelines.
- **Overflow**: The input field should be wide enough to display the full time without truncation.
- **Alignment**: time inputs are always aligned to the left.

## States

Time input has five states: Default, hover, disabled, read-only and focused.

![Time input states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3989-2545&t=ADQCetGKOEH1WG2r-4)

## Dos and Don’ts

- Do use consistent time formats throughout the application to avoid confusion
- Do use separate inputs for start and end times to simplify time ranges
- Do provide clear instructions, such as “Enter the time in TT format”
- Do consider localization to adapt time formats to local conventions
- Don't use ambiguous formats without giving clear context
- Don't allow free text without validation or formatting guidance

## Related

- [Time picker](../time-picker)
- [Date time picker](../date-time-picker)
- [Forms field](../forms-field)
- [Validation](../forms-validation)
- [Dropdown](../dropdown)
- [Input](../input)
- [Select](../select)
