---
doc-type: 'tab-item'
formReady: true
---
# Date input - Usage

The date input component is typically used in forms, filters and scheduling tools to ensure consistent and accurate date entries. By standardizing date input, it helps maintain data integrity and improves the user experience in applications requiring precise date information.

![Date input overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3629-6200&t=ADQCetGKOEH1WG2r-4)

1. Label
2. Required field indicator
3. Current value
4. Calendar icon button
5. Input field
6. Date dropdown
7. Month and year selection
8. Weekdays
9. Week numbers
10. Indicator for current day
11. Indicator for selected day

## Options

- **Label**: See [form field](../forms-field).
- **Required**: See [form field](../forms-field).
- **Helper text**: See [form field](../forms-field).
- **Feedback text**: See [form field](../forms-field).
- **Show text as tooltip**: See [form field](../forms-field).
- **Placeholder**: See [form field](../forms-field). We typically use a placeholder to show an example date format to assist users when the field is empty.
- **Error message**: Feedback text when date is not parsable. We typically use this to inform users that the entered date format is incorrect and guide them to enter a valid date.
- **Format**: Specify the date format, default ‘yyyy/LL/dd’ to ensure that dates are entered in a consistent and recognizable format.

## Behavior in context

- **Interaction**:
  - Click or focus opens the date picker.
  - Use mouse or keyboard arrows to navigate to the desired date.
  - Selecting a date in date picker with mouse click or enter closes the date picker.
  - Typing a date into input field with valid format closes the date picker.
  - Escape key closes the date picker.
- **Validation**:
  - Use feedback text for validation types valid, info, warning and invalid.
  - Invalid feedback automatically provided if entered date in not parsable.
  - Refer to the [validation](../forms-validation) chapter for detailed guidelines.
- **Overflow**: The input field should be wide enough to display the full date without truncation.
- **Alignment**: Date inputs are always aligned to the left.

## States

Date input has five states: Default, hover, disabled, read-only and focused.

![Date input states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3989-2545&t=ADQCetGKOEH1WG2r-4)

## Dos and Don’ts

- Do use consistent date formats throughout the application to avoid confusion
- Do use separate inputs for start and end dates to simplify date ranges
- Do provide clear instructions, such as “Enter the date in yyyy/mm/dd format”
- Do consider localization to adapt date formats to local conventions
- Don't use ambiguous formats like 09/08/2006 without giving clear context
- Don't allow free text without validation or formatting guidance

## Related

- [Date dropdown](../date-dropdown)
- [Date picker](../date-picker)
- [Date time picker](../date-picker)
- [Forms field](../forms-field)
- [Validation](../forms-validation)
- [Dropdown](../dropdown)
- [Input](../input)
- [Select](../select)
