# ix-chat-input

> No component summary available.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `characterLimit`; attr: `character-limit`; type: `number | undefined` - Character limit used for the optional inline character limit message. Falls back to `maxLength` when not set.
- `characterLimitWarningThreshold`; attr: `character-limit-warning-threshold`; type: `number`; default: `0.9` - Percentage of the character limit that triggers the soft warning. Define a number between 0 and 1 (e.g. 0.8 for 80%).
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Specifies whether the chat input is disabled.
- `disclaimer`; attr: `disclaimer`; type: `string`; default: `'This content is AI-generated. Always verify the information for accuracy.'` - Disclaimer text displayed below the chat input.
- `i18nCharacterLimitReached`; attr: `i18n-character-limit-reached`; type: `string`; default: `'Character limit reached ({current} / {limit} characters)'` - i18n label for the hard character limit message. Use `{current}` and `{limit}` placeholders to place the values in any order.
- `i18nCharacterLimitWarning`; attr: `i18n-character-limit-warning`; type: `string`; default: `"You're nearing the limit ({current} / {limit} characters)"` - i18n label for the soft character limit warning. Use `{current}` and `{limit}` placeholders to place the values in any order.
- `insertLineBreakOnEnter`; attr: `insert-line-break-on-enter`; type: `boolean`; default: `false` - If true, pressing Enter inserts a line break instead of submitting the prompt.
- `maxLength`; attr: `max-length`; type: `number | undefined` - The maximum length of the chat input.
- `maxRows`; attr: `max-rows`; type: `number`; default: `6` - Maximum number of visible text rows before the input becomes scrollable.
- `minRows`; attr: `min-rows`; type: `number`; default: `1` - Minimum number of visible text rows.
- `name`; attr: `name`; type: `string | undefined` - The name of the chat input.
- `placeholder`; attr: `placeholder`; type: `string`; default: `'Enter a command, question or topic...'` - The placeholder text for the chat input.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Specifies whether the chat input is readonly.
- `state`; attr: `state`; type: `"input" | "processing" | undefined`; default: `'input'` - The state of the chat input, which can be either 'input' or 'processing'.
- `textareaLabel`; attr: `textarea-label`; type: `string`; default: `'Chat input'` - Accessible label for the native textarea.
- `value`; attr: `value`; type: `string`; default: `''` - The value of the chat input.

## Events

- `ixBlur` - Event emitted when the chat input loses focus.
- `ixChange` - Event emitted when the chat input loses focus and the value has changed.
- `promptSubmit` - Event emitted when the prompt is submitted by the send button or Enter key.
- `valueChange` - Event emitted when the value of the chat input changes.

## Slots

- `attachments` - Attachments displayed above the prompt text area
- `end` - Element will be displayed in the right action area before the submit button
- `follow-up` - Optional refresh action and follow-up prompt buttons displayed above the chat input
- `start` - Element will be displayed in the left action area
