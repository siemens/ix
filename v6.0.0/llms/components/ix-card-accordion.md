# ix-card-accordion

> Expandable card section that shows or hides content within a card list.

- Web component: `<ix-card-accordion>`
- React/Vue: `IxCardAccordion` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-card-accordion>` (`IxModule` from `@siemens/ix-angular` or `IxCardAccordion` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25530

## Properties

- `ariaLabelExpandButton`; attr: `aria-label-expand-button`; type: `string | undefined` - ARIA label for the card's expand button. Will be set as aria-label on the nested HTML button element
- `collapse`; attr: `collapse`; type: `boolean`; default: `false` - Collapse the card
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'outline'` - Show accordion with different color variants

## Events

- None

## Methods

- None

## Slots

- `` - Accordion content.

## Dependencies

- Renders: None
- Rendered by: `ix-push-card`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- None

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
