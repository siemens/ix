# ix-filter-chip

> Dismissible chip that represents an applied filter.

- Web component: `<ix-filter-chip>`
- React/Vue: `IxFilterChip` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-filter-chip>` (`IxModule` from `@siemens/ix-angular` or `IxFilterChip` from `@siemens/ix-angular/standalone`)

## Documentation

- None

## Figma IDs

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - If true the filter chip will be in disabled state
- `hideCloseButton`; attr: `hide-close-button`; type: `boolean`; default: `false` - If true the close button will not be rendered. Primarily used for overflow chip.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - If true the filter chip will be in readonly mode

## Events

- `closeClick` - Close clicked

## Methods

- None

## Slots

- `` - Filter chip label.

## Dependencies

- Renders: `ix-icon-button`
- Rendered by: `ix-category-filter`, `ix-select`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- None

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
