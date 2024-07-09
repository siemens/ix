A consistent form behavior is crucial for a consistent user experience within an application and across applications. Therefore, we strongly recommend to plan the form concept of your application wisely and take possible technical restrictions and specifics of the respective validation framework into account early on. The following chapters give you details for your considerations.

## Validation behavior
Whenever you are gathering data input by users you most likely want to make sure, that critical or important data are correct, valid or fulfill certain criteria. Such a validation of data can happen in different ways and it is crucial to choose the right validation strategy for a certain situation. Prefer early feedback about invalid input but consider that a too early validation could cause invalid states before users have completed their actual input. This can lead to confusion and frustration. 

- **Validate during input (on value changed)**
  - gives instant feedback
  - used to check if the input fulfills certain character rules (example: password creation)
  - don’t use it to validate specific input patterns like email or IPV4 addresses as they are turning invalid with the first keystroke and only turn valid with the last few.    
### Validate on leave (on blur)
- Validates after the users left an input control
- gives feedback right after finishing the input
- used to check if a required input is filled
- used to check if a specific data pattern is met (example: email address)
- used to compare input with server data (example: check if username is free)
- Don’t use it if combinations of dependent inputs must be validated. As long as the focus  Like setting lower and upper limits in combination with lower and upper thresholds.
### Validate on leaving a certain part of the form
- validates multiple input controls
- gives feedback only when users leave this part of the form
- can be used to check data plausibility of multiple dependent inputs (example: lower limit is smaller than the upper limit)
- Validate after user pressed the submit button
- validates all relevant user inputs (again) for completeness and plausibility
- gives feedback after pressing the submit button
- Invalid input controls can potentially outside of the current viewport
- Used to check data before sent to server
- Validation on server side used for a final validation of input data before they are going to be processed
- Server side validation can be used to check against rules and data that are only available on the server (example: existing usernames, most recent process values)

Please note, all the validations happen on the client side are not trustworthy. Using the developer tools of browsers validation rules can easily be manipulated. Relevant data therefore need a final validation on the server side.

## Validation feedback
Whenever data gets validated there will be a validation result too. This is used to encourage users to correct invalid data, to convey a feeling of security, to warn about critical inputs or to inform about a special feature of an input made.

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

## Submit button strategy
There are different strategies to deal with the submit button.

- **Strategy 1:** Disable the submit button as long as required input controls are not filled or controls are invalid.
  - Pro: avoids sending invalid data to server that will be refused anyway
  - Pro: Communicates that something isn’t right with the form
  - Con: Doesn’t communicate what’s missing or wrong, can be frustrating to search for missing inputs or invalid data
  - Con: Consider, some screen readers don’t read out the disabled submit button, for these users the submit button does not exist and they don’t know how to ever send the form

- **Strategy 2:** Always provide an enabled submit button
  - Pro: Users can always click the submit button and get feedback whats missing or invalid
  - Con: Form might look finished with the enabled button although data are missing or invalid
  - Con: Data can unnecessarily be sent to the server consume resources

## Patterns
- [Validation](forms-validation.md)
- [Behavior](forms-behavior.md)
