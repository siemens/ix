---
doc-type: 'tab-item'
---

# Time input - Usage

Time inputs are typically used in forms, filters and scheduling tools to ensure consistent and accurate time entries. By standardizing time inputs, it helps maintain data integrity and improves the user experience in applications requiring precise time information.

![Time input overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5647-1381&t=kyt8IrqJu6av5Nfh-4)

1. Label
2. Required field indicator
3. Current value
4. Clock [icon button](../icon-button)
5. [Input field](../input)
6. [Time picker](../time-picker)

## Options

- **Label**: See [form field](../forms-field).
- **Required**: See [form field](../forms-field).
- **Helper text**: See [form field](../forms-field).
- **Feedback text**: See [form field](../forms-field).
- **Show text as tooltip**: See [form field](../forms-field).
- **Placeholder**: See [form field](../forms-field). We typically use a placeholder to show an example time format to assist users when the field is empty.
- **Error message**: Feedback text when time is not parsable. We typically use this to inform users that the entered time format is incorrect and guide them to enter a valid time.
- **Format**: Specify the time format to ensure that times are entered in a consistent and recognizable format. Default is ‘TT’ which is the localized 24-hour time with seconds  (read more in the ![TODO UX Writing guides](../..)).
	- **Columns**: Show the respective columns in the time picker (see [time picker](../time-picker)).
	- **Intervals**: Define intervals to restrict allowed values (see [time picker](../time-picker)).
- **Time picker**:
	- **Header**: See [time picker](../time-picker). We typically hide the header when there is a label on the input or if the context is conveyed in another way.
	- **Corners**: See [time picker](../time-picker).
	- **Standalone appearance**: See [time picker](../time-picker).

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
- **Overflow**: Input fields should be wide enough to display the full time without truncation.
- **Alignment**: Time inputs are always aligned to the left.

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
