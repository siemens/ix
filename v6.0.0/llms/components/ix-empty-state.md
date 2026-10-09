# ix-empty-state

> Placeholder shown when there is no content or data to display.

- Web component: `<ix-empty-state>`
- React/Vue: `IxEmptyState` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-empty-state>` (`IxModule` from `@siemens/ix-angular` or `IxEmptyState` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/empty-state/code.md

## Figma IDs

- 4727:112645

## Properties

- `action`; attr: `action`; type: `string | undefined` - Optional empty state action
- `ariaLabelEmptyStateIcon`; attr: `aria-label-empty-state-icon`; type: `string | undefined` - ARIA label for the empty state icon
- `header`; attr: `header`; type: `string` - Empty state header
- `icon`; attr: `icon`; type: `string | undefined` - Optional empty state icon
- `layout`; attr: `layout`; type: `"compact" | "compactBreak" | "large"`; default: `'large'` - Optional empty state layout - one of 'large', 'compact' or 'compactBreak'
- `subHeader`; attr: `sub-header`; type: `string | undefined` - Optional empty state sub header

## Events

- `actionClick` - Empty state action click event

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- echarts-empty-state (angular, angular-standalone, html, react, vue)
- empty-state (angular, angular-standalone, html, react, vue)
- empty-state-compact (angular, angular-standalone, html, react, vue)
- empty-state-compact-break (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
