Forms behavior refers to the way in which user input is handled and validated within a form. It plays a crucial role in providing a seamless and user-friendly experience for form interactions.

## Validation Feedback
When data is validated, a validation result is provided to guide users in correcting invalid data, convey a sense of security, warn about critical inputs, or inform about special features of an input.

We support 4 types of validation feedback.

##### Valid
- data meets all validity criteria
##### Invalid
- the data violates at least one validity criterion
- invalid inputs must be corrected before they can be used
##### Warning
- The data is valid in general but violates a specific security or safety related rule
- Example: the entered rotation speed is beyond a safety threshold and can cause higher wear
##### Info
- The data is valid but fulfills a certain criterion
- Example: highlight all inputs that has been changed compared to a saved configuration
- For more information see [Validation](forms-validation.md)

## Form Submission Strategies

When it comes to handling form submissions, it's important to choose the right strategy to ensure a seamless user experience and maintain data integrity. Here are three common strategies:

 **Strategy 1: Disable Submit Button**
  In this strategy, the submit button is disabled until all required input controls are filled or controls are valid. This helps prevent users from submitting invalid data to the server.
  - Pro: Prevents sending invalid data to the server.
  - Pro: Communicates issues with the form.
  - Con: Doesn't specify missing or incorrect fields, which can be frustrating.
  - Con: Some screen readers may not read out the disabled submit button, causing confusion.

 **Strategy 2: Always Enable Submit Button**
  In this strategy, the submit button is always enabled, allowing users to click it at any time.
  - Pro: Users can always click the submit button and receive feedback on missing or invalid data.
  - Con: The form may appear complete even with missing or invalid data.
  - Con: Unnecessary data may be sent to the server, consuming resources.

 **Strategy 3: Submit on Blur**
  In this strategy, there is no need for a submit button. The form is automatically submitted after the user finishes inputting and leaves the control.
  - Pro: Provides a seamless user experience by automatically submitting the form when the user moves away from a field.
  - Pro: Provides immediate feedback without the need for a submit button.
  - Con: Users may accidentally trigger form submission by navigating away from a field unintentionally.
  - Con: Handling validation and error messages without a submit button can be challenging.
  - Con: Users may not have a chance to review and confirm their inputs before submission.
  
A combination of strategy 1 and 3 is possible.

For more information on form validation, please refer to the [Validation](forms-validation.md) chapter.


## Patterns
- [Validation](forms-validation.md)
- [Layout](forms-layout.md)
