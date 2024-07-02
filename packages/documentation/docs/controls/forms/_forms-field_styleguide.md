A field is a form element when user input is needed. It is typically used with other form elements in a fieldset.

![Field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2781-323&t=pKzFQBhaXmjTsR8P-4)

1. Label
2. Form component
3. Hint or feedback text
4. Mandatory indicator
5. Counter (input and textarea field only)

**Note:** In this chapter, we focus exclusively on describing the default field component. For details about custom fields, please refer to the [layouts](forms-layouts.md) chapter.

## Options
- **Label:** Add a label for the field that provides context to your users.
- **Mandatory:** The asterisk states whether user input is required on the field before submitting the form.
- **Field:** Use the appropriate field depending on the type of input data, e.g. [text input](../input.md), [checkbox](../checkbox.md) or [toggle switch](../toogle.md).
- **Hint text:** Provide additional information or context about the field. Display the message directly below the input field.
- **Feedback message or tooltip:** Display validation feedback directly below the input field or as tooltip when users hover over the form field or the field is focused.
- **Hint or feedback copy:** Use a different copy for hints to provide additional information or context about the field, and the individual validation states that apply (see [validation](forms-validation.md)).
- **Counter:** Display the number of characters entered in the field.

## Behavior in context
- **Interaction:** see [validation](forms-validation.md)
- **Behavior of a field as part of a form:** see [behavior](forms-validation)
- **Label and message text overflow:** Labels, feedback and hint texts are not truncated but will break into multiple lines if needed.

## States
Interaction states: Default, hover, active, disabled, readonly, focus. If a feedback tooltip is chosen over a message, the field shows a tooltip when in focus or hovered in specific validation states.

Validation states: Default, valid, info, warning, invalid (see [validation](forms-validation.md)).

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2781-12426&t=pKzFQBhaXmjTsR8P-4)

## Dos and Don’ts
- Do use a label for every field
- Do use a counter for fields with a character limit
- Do use hint text to provide additional information or context about the field
- Don’t use placeholder text or hint text as a replacement for labels

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
