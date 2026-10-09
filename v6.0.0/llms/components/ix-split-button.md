# ix-split-button

> Button combined with an attached dropdown for related actions.

- Web component: `<ix-split-button>`
- React/Vue: `IxSplitButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-split-button>` (`IxModule` from `@siemens/ix-angular` or `IxSplitButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/split-button/guide.md

## Figma IDs

- 237:4370

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

## Methods

- None

## Slots

- `` - Dropdown content.

## Dependencies

- Renders: `ix-button`, `ix-dropdown-button`, `ix-icon-button`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- split-button (angular, angular-standalone, html, react, vue)
- split-button-icons (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
