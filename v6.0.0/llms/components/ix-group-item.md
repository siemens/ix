# ix-group-item

> A single selectable item within a group.

- Web component: `<ix-group-item>`
- React/Vue: `IxGroupItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-group-item>` (`IxModule` from `@siemens/ix-angular` or `IxGroupItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/group/code.md

## Figma IDs

- 1274:34186

## Properties

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the group item. The elements tabindex attribute will get set accordingly. If false tabindex will be 0, -1 otherwise.
- `icon`; attr: `icon`; type: `string | undefined` - Group item icon
- `index`; attr: `index`; type: `number | undefined` - Index
- `secondaryText`; attr: `secondary-text`; type: `string | undefined` - Group item secondary text
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show selected state
- `suppressSelection`; attr: `suppress-selection`; type: `boolean`; default: `false` - Supress the selection of the group
- `text`; attr: `text`; type: `string | undefined` - Group item text

## Events

- `selectedChanged` - Selection changed

## Methods

- None

## Slots

- `` - Group item content.

## Dependencies

- Renders: None
- Rendered by: `ix-group`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- group (angular, angular-standalone, html, react, vue)
- group-context-menu (angular, angular-standalone, html, react, vue)
- group-custom-entry (angular, angular-standalone, html, react, vue)
- group-header-suppressed (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
