A field is a form element when user input is needed. It is typically used with other form elements in a fieldset.

![Field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2781-323&t=pKzFQBhaXmjTsR8P-4)

1. Label
2. Form component
3. Help or feedback text
4. Required indicator
5. Counter (input and textarea field only)

**Note:** In this chapter, we focus on describing the default field component. For details about [custom fields](custom-field.md), please refer to the [layouts](forms-layouts.md) chapter.

## Options
- **Label:** Add a label for the field that provides context to your users.
- **Required:** The asterisk states whether user input is required on the field before submitting the form.
- **Field:** Use the appropriate field based on the type of input data, e.g. use [text inputs](../input.md) for text-based data, [checkboxes](../checkbox.md) for selecting from a list of predefined options, or [toggle switches](../toogle.md) for a binary choice.
- **Help text:** Use a help text to help users to understand the field better. We typically use it when there are input restrictions or the label is not self-explanatory.
- **Feedback message or tooltip:** Display validation feedback either below the input field or as tooltip when the user hovers or focuses on the form field. Use a different text for the individual validation states that apply (see [validation](forms-validation.md)).
- **Counter:** Use a counter to show the number of characters entered into the field and the maximum number of characters allowed. We typically use it for [text input](../input.md) or [textarea](../textarea.md) fields.

## Behavior in context
- **Interaction:** see [validation](forms-validation.md)
- **Behavior of a field as part of a form:** see [behavior](forms-validation)
- **Text truncation:** Labels, feedback and help texts are not truncated but will break into multiple lines if they exceed the field's width.

## States
Interaction states: Default, hover, active, disabled, readonly, focus. 

If a feedback tooltip is chosen over a message, the field shows a tooltip when in focus or hovered in specific validation states.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2781-12426&t=pKzFQBhaXmjTsR8P-4)

**Note:** There are also several validation states (default, valid, info, warning, invalid) that are described in [validation](forms-validation.md).

## Dos and Don’ts
- Do use a label for every field
- Do use a counter for fields with a character limit
- Do use help text to provide additional information or context about the field
- Don’t use help text as a replacement for labels
- Don’t mix different variants of feedback texts and tooltips

## Related patterns
- [Validation](forms-validation.md)
- [Behavior](forms-behavior.md)
- [Input](input.md)
- [Textarea](textarea.md)
- [Select](select.md)
- [Checkbox](checkbox.md)
- [Radio button](radio-button.md)
- [Toggle switch](toogle.md)
- [Upload](upload.md)
