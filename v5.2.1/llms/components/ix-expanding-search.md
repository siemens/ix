# ix-expanding-search

> Search input that expands from an icon when activated.

## Documentation

- None

## Figma IDs

- 680:9354

## Related examples

Example file links are relative to this Markdown file.

- expanding-search
  - angular:
    - `angular/expanding-search.ts`: [file](../../examples/angular/expanding-search.ts)
  - angular-standalone:
    - `angular-standalone/expanding-search.ts`: [file](../../examples/angular-standalone/expanding-search.ts)
  - html:
    - `html/expanding-search.html`: [file](../../examples/html/expanding-search.html)
  - react:
    - `react/expanding-search.tsx`: [file](../../examples/react/expanding-search.tsx)
  - vue:
    - `vue/expanding-search.vue`: [file](../../examples/vue/expanding-search.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

## Slots

- None
