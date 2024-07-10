Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.

## Validation Feedback
When data is validated, a validation result is provided to guide users in correcting invalid data, convey a sense of security, warn about critical inputs, or inform about special features of an input.

We support 4 types of validation feedback.

##### Valid
- native HTML status
- data meets all validity criteria
##### Invalid
- native HTML status
- the data violates at least one validity criterion
- invalid inputs must be corrected before they can be used
##### Warning
- Custom status
- The data is valid in general but violates a specific security or safety related rule
- Example: the entered rotation speed is beyond a safety threshold and can cause higher wear
##### Info
- Custom status
- The data is valid but fulfills a certain criterion
- Example: highlight all inputs that has been changed compared to a saved configuration
- For more information see #Validation

## Submit Button Strategies

When it comes to handling the submit button, there are various strategies that can be employed. These strategies determine how the submit button behaves and what actions are taken when it is clicked. Choosing the right strategy for a specific use case is crucial for providing a seamless user experience and ensuring the integrity of the submitted data.

- **Strategy 1:** Disable the submit button until all required input controls are filled or controls are valid.
  - Pro: Prevents sending invalid data to the server.
  - Pro: Communicates that there are issues with the form.
  - Con: Doesn't specify what is missing or incorrect, which can be frustrating for users.
  - Con: Some screen readers may not read out the disabled submit button, causing confusion for those users.

- **Strategy 2:** Always provide an enabled submit button.
  - Pro: Users can always click the submit button and receive feedback on missing or invalid data.
  - Con: The form may appear complete with the enabled button, even if data is missing or invalid.
  - Con: Unnecessary data may be sent to the server, consuming resources.

## Patterns
- [Validation](forms-validation.md)
- [Behavior](forms-behavior.md)
