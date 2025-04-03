---
doc-type: 'tab-item'
---
# Forms validation - Usage

![Invalid state](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5955&t=IIgjTqoOEP524yAH-4)

Key aspects:

- Data accuracy: Collect precise information for informed decisions.
- Security: Prevent malicious submissions.
- User experience: Improve by guiding users and saving time.

## Options

- Tooltip and feedback: See [form field](../forms-field).
- Validation options:
  - On value change (validate during input)
  - On blur (validate on leaving a field)
  - On blur of a certain part of the form (validate on leaving a certain part of the form)
  - On click on submit button (validate after users press the submit button)

## On value change

This option provides instant feedback to the user as they type, making it suitable for checking character rules.

Examples: As the user types a password, it instantly shows whether the password meets the required length or contains special characters. With an e-mail address, it validates when the email format is correct.

## On blur

With this option, validation occurs after the user finishes inputting and leaves the control. It provides immediate feedback and is commonly used for checking required inputs, specific data patterns and comparing input with server data.

Example: When the user enters an email address and moves to the next field, it validates when the email format is correct.

## On click on submit button

This option validates all relevant user input for completeness and plausibility after the user presses the submit button. It's useful for checking data before sending it to the server and for final validation on the server side.

Example: When the user fills out a registration form and clicks the submit button, it validates when all required fields are completed and if the data is valid.

## On blur of a certain part of the form

This option validates multiple input controls when users leave a specific part of the form. It provides feedback on the plausibility of multiple dependent inputs.

Example: When the user completes the shipping address section of an e-commerce checkout form and moves to the payment section, it validates if the shipping address is complete and valid.

## Behavior in context

- **Validation:** A validation occurs when a user interacts with a form field, such as submitting a form or moving to the next field.
- **Override behavior:** When multiple validation states are present, only the message with the highest priority state is shown. The order of priority, from lowest to highest, is: valid, info, warning and invalid.

## States

- Default: The initial state of a form field, often before any user interaction or validation.
  - Example: Helper text with password strength requirements.
- Valid: Indicates that the user input meets all validation criteria and is acceptable.
  - Example: User enters a password that meets all the criteria for a strong password.
- Info: Provides additional context or guidance to the user.
  - Example: User changes a field that has a dependency to another field or is not saved yet.
- Warning: A non-critical issue or suggestion related to the input.
  - Examples: User enters a weak password, or a rotation speed that is beyond a safety threshold.
- Invalid: Indicates that the user input does not meet the specified requirements.
  - Examples: User enters an email address without the "@" symbol or misses a required input.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5681&t=IIgjTqoOEP524yAH-4)

## Dos and Don’ts

- Do use short and helpful copy for validation
- Do include all relevant information in the validation message, including context
- Don’t show valid feedback on components, only in the input help component

## Related

- [Form field](../forms-field)
- [Behavior](../forms-behavior)
