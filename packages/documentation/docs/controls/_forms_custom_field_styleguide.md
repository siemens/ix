The custom field is a wrapper component that can host any other forms component. It provides a set of properties that allow you to control the validation state of the field, as well as the helper text that is displayed below the field. The custom field is a versatile tool to create your own form fields, that can be used in combination with the 'Form' components to create complex forms.

![Custom field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3303-3291&t=DlxXBQ9vTnyDcIUI-4 )

1. Label
2. Helper text/Feedback text
3. Form components
4. Required indicator
%%
## Quick guide

![Custom field_new](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3482-7078&t=DlxXBQ9vTnyDcIUI-4)

- **Usage:** Use the custom field when your desired solution is not covered by the standard form field component.
- **Customize as Needed:** Add specific form components (e.g., input fields, buttons) to meet your use case.
- **Helper and feedback text:** The custom field provides automatic the option to display helper  and feedback text.
- **Follow Guidelines:** Refer to the form field and validation chapters for detailed guidelines on labels, helper text, and feedback text.
%%
## Options

- **Label:** Refer to the form field chapter for detailed guidelines.
- **Helper text**: Refer to the form field chapter for detailed guidelines.
- **Feedback text**: Refer to the form field chapter for detailed guidelines.
- **Customization**: Add form components to create the use case you need. E.g. for a file upload field add an input field with an `readonly` state and an [icon button](buttons/icon-button.md).

![Custom field example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3483-7223&t=DlxXBQ9vTnyDcIUI-4)

## Behavior in context

- **Validation:** Refer to the validation chapter for detailed guidelines.
## States

The states depend on the custom field component that was included. The custom field itself does not have any states.
## Dos and Don'ts

- Do use the custom field when your desired solution is not covered by the standard form field component  
- Do use the custom field in combination with the form component to create complex forms
- Don't use the custom field for simple form fields, use the form field component instead
- Don't use the custom field without a form component, it is a wrapper component that is meant to be used in combination with the form component
## Related 
- Form field
- Validation
- Layout
