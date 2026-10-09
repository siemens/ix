# ix-range-field

> Field that combines two inputs to capture a date, time, or datetime range.

- Web component: `<ix-range-field>`
- React/Vue: `IxRangeField` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-range-field>` (`IxModule` from `@siemens/ix-angular` or `IxRangeField` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/range-field/guide.md

## Figma IDs

- None

## Properties

- `hideArrow`; attr: `hide-arrow`; type: `boolean`; default: `false` - Hides the arrow icon between the two input fields. This can be used when the input range is used in a context where the arrow icon is not desired, such as in a form field with a custom label.
- `type`; attr: `type`; type: `"date-range" | "datetime-range" | "time-range" | undefined` - The type of the input range. If set to "time-range", the input range will be displayed as a time range.

## Events

- None

## Methods

- None

## Slots

- `` - Range field content.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- date-range (angular, angular-standalone, html, react, vue)
- datetime-range (angular, angular-standalone, html, react, vue)
- range-field (angular, angular-standalone, html, react, vue)
- time-range (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
