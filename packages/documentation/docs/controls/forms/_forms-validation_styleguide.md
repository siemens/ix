Form validation gives a user feedback on their input to ensure accurate, consistent data submitted. If requirements aren’t met or data is incorrect, it’s rejected.

![Invalid state](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5955&t=IIgjTqoOEP524yAH-4)

Key aspects:

- Data Accuracy: Collect precise information for informed decisions.
- Security: Prevent malicious submissions.
- User Experience: Improve by guiding users and saving time.

## Options
- Tooltip and feedback: See [Field](forms-field.md) chapter
- Validation options:

  - **Validate during input (on value changed):** This option provides instant feedback to the user as they type, making it suitable for checking character rules. For example, as the user types a password, it can instantly show whether the password meets the required length or contains special characters.

  - **Validate on leave (on blur):** With this option, validation occurs after the user finishes inputting and leaves the control. It provides immediate feedback and is commonly used for checking required input, specific data patterns, and comparing input with server data. For example, when the user enters an email address and moves to the next field, it can validate if the email format is correct.

  - **Validate after user pressed the submit button:** This option validates all relevant user inputs for completeness and plausibility after the user presses the submit button. It is useful for checking data before sending it to the server and for final validation on the server side. For example, when the user fills out a registration form and clicks the submit button, it can validate if all required fields are filled and if the data is valid.

  - **Validate on leaving a certain part of the form:** This option validates multiple input controls when users leave a specific part of the form. It provides feedback on the plausibility of multiple dependent inputs. For example, when the user completes the shipping address section of an e-commerce checkout form and moves to the payment section, it can validate if the shipping address is complete and valid.

## Behavior in context
- **Validation:** A validation can occur when a user interacts with a form field, such as submitting a form or moving to the next field. For more details, refer to the Behavior chapter.
- **Override behavior:** When multiple validation states are present, only the message with the highest priority state is shown. The order of priority, from lowest to highest, is: valid, info, warning, and invalid.

## States
- Default: The initial state of a form field, often before any user interaction.
- Invalid: Indicates that the user input does not meet the specified requirements (e.g. missing data, incorrect format).
- Valid: Indicates that the user input meets all validation criteria and is acceptable.
- Warning: A non-critical issue or suggestion related to the input (e.g. a weak password).
- Info: Provides additional context or guidance to the user (e.g. password strength requirements).

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5681&t=IIgjTqoOEP524yAH-4)

## Dos and Don’ts
- Do ensure that validation feedback remains visible on hover, active, and when focused
- Do show the "invalid" color on the label, component, and help text
- Don’t show valid feedback on components, only in the input help component

## Related patterns
- [Field](forms-field.md)
- [Behavior](forms-behavior.md)
