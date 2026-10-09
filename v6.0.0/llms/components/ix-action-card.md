# ix-action-card

> Card that represents a selectable action or option to start a task or workflow.

- Web component: `<ix-action-card>`
- React/Vue: `IxActionCard` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-action-card>` (`IxModule` from `@siemens/ix-angular` or `IxActionCard` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25269

## Properties

- `ariaLabelCard`; attr: `aria-label-card`; type: `string | undefined` - ARIA label for the card
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `heading`; attr: `heading`; type: `string | undefined` - Card heading
- `icon`; attr: `icon`; type: `string | undefined`; default: `undefined` - Card icon
- `passive`; attr: `passive`; type: `boolean`; default: `false` - If true, disables hover and active styles and changes cursor to default
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Card selection
- `subheading`; attr: `subheading`; type: `string | undefined` - Card subheading
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'outline'` - Card variant

## Events

- None

## Methods

- None

## Slots

- `` - Card content.

## Dependencies

- Renders: `ix-card`, `ix-card-content`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- action-card (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
