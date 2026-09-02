# ix-event-list-item

> A single entry within an event list.

## Documentation

- None

## Figma IDs

- 1433:41688

## Related examples

Example file links are relative to this Markdown file.

- event-list
  - angular:
    - `angular/event-list.ts`: [file](../../examples/angular/event-list.ts)
  - angular-standalone:
    - `angular-standalone/event-list.ts`: [file](../../examples/angular-standalone/event-list.ts)
  - html:
    - `html/event-list.html`: [file](../../examples/html/event-list.html)
  - react:
    - `react/event-list.tsx`: [file](../../examples/react/event-list.tsx)
  - vue:
    - `vue/event-list.vue`: [file](../../examples/vue/event-list.vue)
- event-list-compact
  - angular:
    - `angular/event-list-compact.ts`: [file](../../examples/angular/event-list-compact.ts)
  - angular-standalone:
    - `angular-standalone/event-list-compact.ts`: [file](../../examples/angular-standalone/event-list-compact.ts)
  - html:
    - `html/event-list-compact.html`: [file](../../examples/html/event-list-compact.html)
  - react:
    - `react/event-list-compact.tsx`: [file](../../examples/react/event-list-compact.tsx)
  - vue:
    - `vue/event-list-compact.vue`: [file](../../examples/vue/event-list-compact.vue)
- event-list-custom-item-height
  - angular:
    - `angular/event-list-custom-item-height.ts`: [file](../../examples/angular/event-list-custom-item-height.ts)
  - angular-standalone:
    - `angular-standalone/event-list-custom-item-height.ts`: [file](../../examples/angular-standalone/event-list-custom-item-height.ts)
  - html:
    - `html/event-list-custom-item-height.html`: [file](../../examples/html/event-list-custom-item-height.html)
  - react:
    - `react/event-list-custom-item-height.tsx`: [file](../../examples/react/event-list-custom-item-height.tsx)
  - vue:
    - `vue/event-list-custom-item-height.vue`: [file](../../examples/vue/event-list-custom-item-height.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `chevron`; attr: `chevron`; type: `boolean`; default: `false` - Show chevron on right side of the event list item
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable event list item
- `itemColor`; attr: `item-color`; type: `string | undefined` - Color of the status indicator. You can find a list of all available colors in our documentation. Example value: `--si-sys-background-danger` {@link https://ix.siemens.io/docs/styles/colors}
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show event list item as selected
- `variant`; attr: `variant`; type: `"filled" | "outline"`; default: `'outline'` - Variant of the event list item

## Events

- `itemClick` - Event list item click

## Slots

- `` - Event list item content.
