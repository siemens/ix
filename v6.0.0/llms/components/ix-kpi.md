# ix-kpi

> Displays a key performance indicator with a label, value, and status.

- Web component: `<ix-kpi>`
- React/Vue: `IxKpi` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-kpi>` (`IxModule` from `@siemens/ix-angular` or `IxKpi` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/kpi/code.md

## Figma IDs

- 423:3986

## Properties

- `ariaLabelAlarmIcon`; attr: `aria-label-alarm-icon`; type: `string | undefined` - ARIA label for the alarm icon
- `ariaLabelWarningIcon`; attr: `aria-label-warning-icon`; type: `string | undefined` - ARIA label for the warning icon
- `label`; attr: `label`; type: `string | undefined`
- `orientation`; attr: `orientation`; type: `"horizontal" | "vertical"`; default: `'horizontal'`
- `state`; attr: `state`; type: `"alarm" | "neutral" | "warning"`; default: `'neutral'`
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
