# ix-kpi

> Displays a key performance indicator with a label, value, and status.

- Web component: `<ix-kpi>`
- React: `IxKpi` from `@siemens/ix-react`
- Vue: `IxKpi` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/kpi/code.md

## Figma IDs

- 423:3986

## Properties

- `label`; attr: `label`; type: `string | undefined`
- `orientation`; attr: `orientation`; type: `"horizontal" | "vertical"`; default: `'horizontal'`
- `state`; attr: `state`; type: `"accent" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'neutral'` - Status of the KPI. `neutral` and `accent` show no status icon. Status icons are decorative (`aria-hidden`); convey status in visible text or the host accessible name when it matters for assistive technology.
- `unit`; attr: `unit`; type: `string | undefined`
- `value`; attr: `value`; type: `number | string | undefined`

## Events

- None

## Methods

- None

## Slots

- None

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- kpi (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
