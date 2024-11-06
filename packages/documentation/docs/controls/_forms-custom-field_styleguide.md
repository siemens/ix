The custom field is a wrapper component that can host any forms component. Its properties allows you to control the validation state of the field and the helper text. The custom field is a versatile tool to create your own form fields, that can be used in combination with the 'Form' components to create complex forms.

![Custom field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3303-3291&t=SikqVQr6LWjMEjKI-4)

1. Label
2. Helper or feedback text
3. Form component(s)
4. Mandatory indicator
## Options

- **Label:** See [form field](forms/forms-field.md).
- **Group label:** Add a label to the group of radio buttons to provide context to your users. We typically use short and descriptive labels to summarize the options in the group.
- **Helper text**: See [form field](forms/forms-field.md).
- **Feedback text**: See [form field](forms/forms-field.md).
- **Customization**: Add form components to create the use case you need. For example, for a file upload field, add an input field with a `readonly` state and an [icon button](buttons/icon-button.md).

![Custom field example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3483-7223&t=DlxXBQ9vTnyDcIUI-4)

## Behavior in context

- **Validation:** See [validation](forms/forms-validation.mdx).
- **Form behavior:** See [behavior](forms/forms-behavior.md).
## States

The states depend on the component that you use in the custom field. The custom field itself does not have any interaction states.
## Dos and Don’ts

- Do use the custom field when your desired solution is not covered by the already existing form field components
- Do use the custom field in combination with the form component to create complex forms
- Don't use the custom field for simple form fields, use the form field component instead
- Don't use the custom field without a form component, it is a wrapper component that is meant to be used in combination with the form component
## Related patterns

- [Form field](forms/forms-field.md)
- [Validation](forms/forms-validation.mdx)
- [Behavior](forms/forms-behavior.md)
- [Layout](forms/forms-layout.md)
