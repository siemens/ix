# ix-push-card

> Card that highlights a notification or push message with an icon and value.

## Documentation

- https://ix.siemens.io//docs/components/card/guide.md

## Figma IDs

- 104612:25695

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `expanded`; attr: `expanded`; type: `boolean`; default: `false` - Expand the card
- `heading`; attr: `heading`; type: `string | undefined` - Card heading
- `icon`; attr: `icon`; type: `string | undefined` - Card icon
- `notification`; attr: `notification`; type: `string | undefined` - Card KPI value
- `passive`; attr: `passive`; type: `boolean`; default: `false` - If true, disables hover and active styles and changes cursor to default
- `subheading`; attr: `subheading`; type: `string | undefined` - Card subheading
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'outline'` - Card variant

## Events

- None

## Slots

- `` - Card content.
- `title-action` - Action displayed next to the title.
