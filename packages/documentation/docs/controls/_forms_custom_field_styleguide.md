The custom field is a wrapper component that can host any forms component. Its properties allows you to control the validation state of the field and the helper text. The custom field is a versatile tool to create your own form fields, that can be used in combination with the 'Form' components to create complex forms.

![Custom field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3303-3291&t=DlxXBQ9vTnyDcIUI-4 )

1. Label
2. Helper or feedback text
3. Form component(s)
4. Mandatory indicator
%%
## Quick guide

![Custom field_new](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3482-7078&t=DlxXBQ9vTnyDcIUI-4)

- **Usage:** Use the custom field when your desired solution is not covered by the standard form field component.
- **Customize as needed:** Add specific form components (e.g., input fields, buttons) to meet your use case.
- **Helper and feedback text:** The custom field provides the option to display helper and feedback text automatically.
- **Follow Guidelines:** Refer to the form field and validation chapters for detailed guidelines on labels, helper text, and feedback text.
%%
## Options

- **Label:** See form field.
- **Helper text**: See form field.
- **Feedback text**: See form field.
- **Customization**: Add form components to create the use case you need. For example, for a file upload field, add an input field with a `readonly` state and an [icon button](buttons/icon-button.md).

![Custom field example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3483-7223&t=DlxXBQ9vTnyDcIUI-4)

## Behavior in context

- **Validation:** See validation.
## States

The states depend on the component that you use in the custom field. The custom field itself does not have any interaction states.
## Dos and Don’ts

- Do use the custom field when your desired solution is not covered by the already existing form field components
- Do use the custom field in combination with the form component to create complex forms
- Don't use the custom field for simple form fields, use the form field component instead
- Don't use the custom field without a form component, it is a wrapper component that is meant to be used in combination with the form component
## Related patterns
- Form field
- Validation
- Layout
