Form validation gives a user feedback on their input to ensure accurate, consistent data submitted. If requirements aren’t met or data is incorrect, it’s rejected.

![Invalid state](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2767-5955&t=IIgjTqoOEP524yAH-4)

Key aspects:

- Data Accuracy: Collect precise information for informed decisions.
- Security: Prevent malicious submissions.
- User Experience: Improve by guiding users and saving time.

## Options
- Tooltip and feedback options can be found in the Field chapter
- Validation options: There are 4 options
	- Validate during input (on value changed)
		- gives instant feedback
		- used to check if the input fulfills certain character rules (example: password creation)
		- don’t use it to validate specific input patterns like email or IPV4 addresses as they are turning invalid with the first keystroke and only turn valid with the last few.
	- Validate on leave (on blur)
		- Validates after the users left an input control
		- gives feedback right after finishing the input
		- used to check if a required input is filled
		- used to check if a specific data pattern is met (example: email address)
		- used to compare input with server data (example: check if username is free)
		- Don’t use it if combinations of dependent inputs must be validated. As long as the focus  Like setting lower and upper limits in combination with lower and upper thresholds.
	- Validate after user pressed the submit button
		- validates all relevant user inputs (again) for completeness and plausibility
		- gives feedback after pressing the submit button
		- Invalid input controls can potentially outside of the current viewport
		- Used to check data before sent to server
		- Validation on server side used for a final validation of input data before they are going to be processed
		- Server side validation can be used to check against rules and data that are only available on the server (example: existing usernames, most recent process values)
	- Validate on leaving a certain part of the form
		- Stichwort dependencies ;) e.g. date range
		- validates multiple input controls
		- gives feedback only when users leave this part of the form
		- can be used to check data plausibility of multiple dependent inputs (example: lower limit is smaller than the upper limit)

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
- Do include validation feedback icons inside of components
- Do ensure that validation feedback remains visible on hover, active, and when focused
- Do show the "invalid" color on the label, component, and help text
- Don’t show valid feedback on components, only in the input help component

## Related patterns
- [Field]()
- [Behavior]()
