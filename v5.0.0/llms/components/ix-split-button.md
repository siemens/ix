# ix-split-button

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/split-button/guide.md

## Figma IDs

- 237:4370

## Related examples

- split-button
  - angular: [angular/split-button.css](../../examples/angular-examples/src/preview-examples/split-button.css), [angular/split-button.ts](../../examples/angular-examples/src/preview-examples/split-button.ts)
  - angular-standalone: [angular-standalone/split-button.css](../../examples/angular-standalone-examples/src/preview-examples/split-button.css), [angular-standalone/split-button.ts](../../examples/angular-standalone-examples/src/preview-examples/split-button.ts)
  - html: [html/split-button.css](../../examples/html-examples/src/preview-examples/split-button.css), [html/split-button.html](../../examples/html-examples/src/preview-examples/split-button.html)
  - react: [react/split-button.scoped.css](../../examples/react-examples/src/preview-examples/split-button.scoped.css), [react/split-button.tsx](../../examples/react-examples/src/preview-examples/split-button.tsx)
  - vue: [vue/split-button.css](../../examples/vue-examples/src/preview-examples/split-button.css), [vue/split-button.vue](../../examples/vue-examples/src/preview-examples/split-button.vue)
- split-button-icons
  - angular: [angular/split-button-icons.ts](../../examples/angular-examples/src/preview-examples/split-button-icons.ts)
  - angular-standalone: [angular-standalone/split-button-icons.ts](../../examples/angular-standalone-examples/src/preview-examples/split-button-icons.ts)
  - html: [html/split-button-icons.html](../../examples/html-examples/src/preview-examples/split-button-icons.html)
  - react: [react/split-button-icons.tsx](../../examples/react-examples/src/preview-examples/split-button-icons.tsx)
  - vue: [vue/split-button-icons.vue](../../examples/vue-examples/src/preview-examples/split-button-icons.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelButton`; attr: `aria-label-button`; type: `string | undefined` - ARIA label for the button (use if no label and icon button)
- `ariaLabelSplitIconButton`; attr: `aria-label-split-icon-button`; type: `string | undefined` - ARIA label for the split icon button
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
- `disableButton`; attr: `disable-button`; type: `boolean`; default: `false` - Disables only the main button while keeping the dropdown trigger enabled
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled
- `disableDropdownButton`; attr: `disable-dropdown-button`; type: `boolean`; default: `false` - Disables only the dropdown trigger while keeping the main button enabled
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `icon`; attr: `icon`; type: `string | undefined` - Button icon
- `label`; attr: `label`; type: `string | undefined` - Button label
- `splitIcon`; attr: `split-icon`; type: `string | undefined` - Icon of the button on the right
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Color variant of button

## Events

- `buttonClick` - Button clicked

## Slots

- None
