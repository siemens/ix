Form validation gives a user feedback on their input to ensure accurate, consistent data submitted. If requirements aren’t met or data is incorrect, it’s rejected.

![Invalid state](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5955&t=IIgjTqoOEP524yAH-4)

Key aspects:

- Data Accuracy: Collect precise information for informed decisions.
- Security: Prevent malicious submissions.
- User Experience: Improve by guiding users and saving time.

## Options
- Tooltip and feedback options can be found in the Field chapter

## States
- Default: The initial state of a form field, often before any user interaction.
- Invalid: Indicates that the user input does not meet the specified requirements (e.g., missing data, incorrect format).
- Valid: Indicates that the user input meets all validation criteria and is acceptable.
- Warning: A non-critical issue or suggestion related to the input (e.g., a weak password).
- Info: Provides additional context or guidance to the user (e.g., password strength requirements).

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5681&t=IIgjTqoOEP524yAH-4)

## Behavior in context
- Validation: A validation can occur when a user interacts with a form field, such as submitting a form or moving to the next field. For more details, refer to the Behavior chapter.
- Override behavior: When multiple validation states are present, only the message with the highest priority state is shown. The order of priority, from lowest to highest, is: valid, info, warning, and invalid.

## Dos and Don’ts
- Do include validation feedback icons inside of components
- Do ensure that validation feedback remains visible on hover, active, and when focused
- Do show the "invalid" color on the label, component, and help text
- Don’t show valid feedback on components, only in the input help component

## Related patterns:
- [Field]()
- [Behavior]()
