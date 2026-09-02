# ix-event-list

> List that displays a sequence of events or status entries.

## Documentation

- None

## Figma IDs

- 1433:43161

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

- `animated`; attr: `animated`; type: `boolean`; default: `false` - Animate state change transitions. Defaults to 'false'.
- `chevron`; attr: `chevron`; type: `boolean`; default: `false` - Display a chevron icon in list items. Defaults to 'false'
- `compact`; attr: `compact`; type: `boolean`; default: `false` - Make event-list items more compact
- `itemHeight`; attr: `item-height`; type: `"L" | "S" | number`; default: `'S'` - Determines the height of list items. This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value. In case a number is supplied it will get converted to rem internally. Defaults to 'S'.

## Events

- None

## Slots

- `` - Event list items.
