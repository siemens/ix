# ix-action-card

> Card that represents a selectable action or option to start a task or workflow.

## Documentation

- https://ix.siemens.io//docs/components/card/guide.md

## Figma IDs

- 104612:25269

## Related examples

Example source links are relative to this Markdown file.

- action-card
  - angular:
    - `angular/action-card.html`: [source](../../examples/angular-examples/src/preview-examples/action-card.html)
    - `angular/action-card.ts`: [source](../../examples/angular-examples/src/preview-examples/action-card.ts)
  - angular-standalone:
    - `angular-standalone/action-card.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/action-card.html)
    - `angular-standalone/action-card.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/action-card.ts)
  - html:
    - `html/action-card.html`: [source](../../examples/html-examples/src/preview-examples/action-card.html)
  - react:
    - `react/action-card.tsx`: [source](../../examples/react-examples/src/preview-examples/action-card.tsx)
  - vue:
    - `vue/action-card.vue`: [source](../../examples/vue-examples/src/preview-examples/action-card.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

## Slots

- `` - Card content.
