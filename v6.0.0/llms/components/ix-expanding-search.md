# ix-expanding-search

> Search input that expands from an icon when activated.

- Web component: `<ix-expanding-search>`
- React/Vue: `IxExpandingSearch` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-expanding-search>` (`IxModule` from `@siemens/ix-angular` or `IxExpandingSearch` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/expanding-search/code.md

## Figma IDs

- 680:9354

## Properties

- `ariaLabelClearIconButton`; attr: `aria-label-clear-icon-button`; type: `string | undefined`; default: `'Clear search'` - ARIA label for the clear icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelSearchIconButton`; attr: `aria-label-search-icon-button`; type: `string | undefined` - ARIA label for the search icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelSearchInput`; attr: `aria-label-search-input`; type: `string | undefined`; default: `'Search input'` - ARIA label for the search input Will be set as aria-label on the nested HTML input element
- `fullWidth`; attr: `full-width`; type: `boolean`; default: `false` - If true the search field will fill all available horizontal space of it's parent container when expanded.
- `icon`; attr: `icon`; type: `string | undefined` - Search icon
- `placeholder`; attr: `placeholder`; type: `string`; default: `'Enter text here'` - Placeholder text
- `value`; attr: `value`; type: `string`; default: `''` - Default value
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'tertiary'` - button variant

## Events

- `valueChange` - Value changed

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-icon-button`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- expanding-search (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
