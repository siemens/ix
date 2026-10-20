# ix-card-accordion

> Expandable card section that shows or hides content within a card list.

- Web component: `<ix-card-accordion>`
- React: `IxCardAccordion` from `@siemens/ix-react`
- Vue: `IxCardAccordion` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/card/guide.md

## Figma IDs

- 104612:25530

## Properties

- `ariaLabelExpandButton`; attr: `aria-label-expand-button`; type: `string | undefined` - ARIA label for the card's expand button. Will be set as aria-label on the nested HTML button element
- `collapse`; attr: `collapse`; type: `boolean`; default: `false` - Collapse the card
- `outline`; attr: `outline`; type: `boolean | undefined` - Show the accordion with outline chrome. When omitted, outline chrome is used (`true`). When `false`, uses filled accordion chrome.
- `variant`; attr: `variant`; type: `"accent" | "base" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'base'` - Accordion status variant.

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
