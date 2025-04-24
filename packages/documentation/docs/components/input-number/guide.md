---
doc-type: 'tab-item'
---
# Number input - Usage

The number input component is commonly used in forms, calculators and other areas where precise numerical input is required. We typically use the number input component to ensure accurate and efficient data entry.

![Number input overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3805-24565&t=DtCmoFcLwhf7ke3S-4)

1. Label
2. Required field indicator
3. Value
4. Stepper buttons
5. Input field
6. Helper or feedback text

## Options

- **Label**: See [form field](../forms-field).
- **Value**: See [form field](../forms-field).
- **Required**: See [form field](../forms-field).
- **Helper text**: See [form field](../forms-field).
- **Feedback text**: See [form field](../forms-field).
- **Show text as tooltip**: See [form field](../forms-field).
- **Placeholder**: See [form field](../forms-field).
- **Allowed characters pattern**: Specify the characters allowed for input. We typically use this to reject invalid characters, such as decimal points. When users type an invalid character, a shaking animation is immediately triggered.
- **Pattern**: Define the expected input using regular expressions, such as an integer between 1 and 100. We often use this to validate the input when the user leaves the field or clicks submit.
- **Min/Max**: Specify the minimum and maximum values that can be entered to ensure the input stays within the defined range. We typically use this option to prevent invalid entries and guide users towards acceptable values.
- **Show stepper buttons**: Use these optional controls to increment or decrement the value (suitable for small ranges with few steps). We typically use these buttons when precise adjustments are needed, such as in quantity selectors, rating systems or form inputs requiring fine-tuned numerical values.

## Behavior in context

- **Interaction:** Users can type a value or use stepper buttons to adjust it. We recommend using stepper buttons, especially for touch interactions, to enhance usability and precision.
- **Validation:** See [form field](../forms-validation).
- **Overflow:** Numbers are truncated to fit within the input field. Ensure that the expected value is visible in the input field so it can be properly displayed.
- **Alignment:** Number inputs are always aligned to the right.

## States

The number input has five states: default, hover, focused, disabled and read-only.
![Number input states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=4097-1041&t=lGjPn4Q9U7Fa81TI-4)

## Dos and Don’ts

- Do set appropriate min and max values to prevent invalid entries and guide user input
- Do provide clear error messages when the input value is out of the allowed range or does not match the required pattern
- Do consider special cases such as zero, negative numbers and very large numbers to ensure all possible inputs are handled correctly
- Don't specify patterns that do not align with your use case, e.g. inappropriate intervals between valid values

## Related

- [Form fields](../forms-field)
- [Validation](../forms-validation)
- [Layout](../forms-layout)
- [Input](../input)
- [Select](../select)
