# ix-textarea

> Multi-line text input for entering and validating longer text.

## Documentation

- https://ix.siemens.io//docs/components/textarea/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- textarea
  - angular:
    - `angular/textarea.html`: [file](../../examples/angular/textarea.html)
    - `angular/textarea.ts`: [file](../../examples/angular/textarea.ts)
  - angular-standalone:
    - `angular-standalone/textarea.html`: [file](../../examples/angular-standalone/textarea.html)
    - `angular-standalone/textarea.ts`: [file](../../examples/angular-standalone/textarea.ts)
  - html:
    - `html/textarea.html`: [file](../../examples/html/textarea.html)
  - react:
    - `react/textarea.tsx`: [file](../../examples/react/textarea.tsx)
  - vue:
    - `vue/textarea.vue`: [file](../../examples/vue/textarea.vue)
- textarea-disabled
  - angular:
    - `angular/textarea-disabled.html`: [file](../../examples/angular/textarea-disabled.html)
    - `angular/textarea-disabled.ts`: [file](../../examples/angular/textarea-disabled.ts)
  - angular-standalone:
    - `angular-standalone/textarea-disabled.html`: [file](../../examples/angular-standalone/textarea-disabled.html)
    - `angular-standalone/textarea-disabled.ts`: [file](../../examples/angular-standalone/textarea-disabled.ts)
  - html:
    - `html/textarea-disabled.html`: [file](../../examples/html/textarea-disabled.html)
  - react:
    - `react/textarea-disabled.tsx`: [file](../../examples/react/textarea-disabled.tsx)
  - vue:
    - `vue/textarea-disabled.vue`: [file](../../examples/vue/textarea-disabled.vue)
- textarea-readonly
  - angular:
    - `angular/textarea-readonly.html`: [file](../../examples/angular/textarea-readonly.html)
    - `angular/textarea-readonly.ts`: [file](../../examples/angular/textarea-readonly.ts)
  - angular-standalone:
    - `angular-standalone/textarea-readonly.html`: [file](../../examples/angular-standalone/textarea-readonly.html)
    - `angular-standalone/textarea-readonly.ts`: [file](../../examples/angular-standalone/textarea-readonly.ts)
  - html:
    - `html/textarea-readonly.html`: [file](../../examples/html/textarea-readonly.html)
  - react:
    - `react/textarea-readonly.tsx`: [file](../../examples/react/textarea-readonly.tsx)
  - vue:
    - `vue/textarea-readonly.vue`: [file](../../examples/vue/textarea-readonly.vue)
- textarea-rows-cols
  - angular:
    - `angular/textarea-rows-cols.html`: [file](../../examples/angular/textarea-rows-cols.html)
    - `angular/textarea-rows-cols.ts`: [file](../../examples/angular/textarea-rows-cols.ts)
  - angular-standalone:
    - `angular-standalone/textarea-rows-cols.html`: [file](../../examples/angular-standalone/textarea-rows-cols.html)
    - `angular-standalone/textarea-rows-cols.ts`: [file](../../examples/angular-standalone/textarea-rows-cols.ts)
  - html:
    - `html/textarea-rows-cols.html`: [file](../../examples/html/textarea-rows-cols.html)
  - react:
    - `react/textarea-rows-cols.tsx`: [file](../../examples/react/textarea-rows-cols.tsx)
  - vue:
    - `vue/textarea-rows-cols.vue`: [file](../../examples/vue/textarea-rows-cols.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Determines if the textarea field is disabled.
- `helperText`; attr: `helper-text`; type: `string | undefined` - The helper text for the textarea field.
- `infoText`; attr: `info-text`; type: `string | undefined` - The info text for the textarea field.
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - The error text for the textarea field.
- `label`; attr: `label`; type: `string | undefined` - The label for the textarea field.
- `maxLength`; attr: `max-length`; type: `number | undefined` - The maximum length of the textarea field.
- `minLength`; attr: `min-length`; type: `number | undefined` - The minimum length of the textarea field.
- `name`; attr: `name`; type: `string | undefined` - The name of the textarea field.
- `placeholder`; attr: `placeholder`; type: `string | undefined` - The placeholder text for the textarea field.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Determines if the textarea field is readonly.
- `required`; attr: `required`; type: `boolean`; default: `false` - Determines if the textarea field is required.
- `resizeBehavior`; attr: `resize-behavior`; type: `"both" | "horizontal" | "none" | "vertical"`; default: `'both'` - Determines the resize behavior of the textarea field. Resizing can be enabled in one direction, both directions or completely disabled.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Determines if the text should be displayed as a tooltip.
- `textareaCols`; attr: `textarea-cols`; type: `number | undefined` - The width of the textarea specified by number of characters. Will be overridden by `textareaWidth` prop if both are set.
- `textareaHeight`; attr: `textarea-height`; type: `string | undefined` - The height of the textarea field (e.g. "52px"). Will take precedence over `textareaRows` prop if both are set.
- `textareaRows`; attr: `textarea-rows`; type: `number | undefined` - The height of the textarea specified by number of rows. Will be overridden by `textareaHeight` prop if both are set.
- `textareaWidth`; attr: `textarea-width`; type: `string | undefined` - The width of the textarea field (e.g. "200px"). Will take precedence over `textareaCols` prop if both are set.
- `validText`; attr: `valid-text`; type: `string | undefined` - The valid text for the textarea field.
- `value`; attr: `value`; type: `string`; default: `''` - The value of the textarea field.
- `warningText`; attr: `warning-text`; type: `string | undefined` - The warning text for the textarea field.

## Events

- `ixBlur` - Event emitted when the textarea field loses focus.
- `ixChange` - Event emitted when the textarea field loses focus and the value has changed.
- `validityStateChange` - Event emitted when the validity state of the textarea field changes.
- `valueChange` - Event emitted when the value of the textarea field changes.

## Slots

- None
