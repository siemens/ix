# ix-pill

> Compact label that highlights a status, count, or category.

## Documentation

- https://ix.siemens.io//docs/components/pill/guide.md

## Figma IDs

- 312:1219

## Related examples

Example source links are relative to this Markdown file.

- content-header-with-slot
  - angular:
    - `angular/content-header-with-slot.css`: [source](../../examples/angular-examples/src/preview-examples/content-header-with-slot.css)
    - `angular/content-header-with-slot.html`: [source](../../examples/angular-examples/src/preview-examples/content-header-with-slot.html)
    - `angular/content-header-with-slot.ts`: [source](../../examples/angular-examples/src/preview-examples/content-header-with-slot.ts)
  - angular-standalone:
    - `angular-standalone/content-header-with-slot.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/content-header-with-slot.css)
    - `angular-standalone/content-header-with-slot.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/content-header-with-slot.html)
    - `angular-standalone/content-header-with-slot.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/content-header-with-slot.ts)
  - html:
    - `html/content-header-with-slot.css`: [source](../../examples/html-examples/src/preview-examples/content-header-with-slot.css)
    - `html/content-header-with-slot.html`: [source](../../examples/html-examples/src/preview-examples/content-header-with-slot.html)
  - react:
    - `react/content-header-with-slot.scoped.css`: [source](../../examples/react-examples/src/preview-examples/content-header-with-slot.scoped.css)
    - `react/content-header-with-slot.tsx`: [source](../../examples/react-examples/src/preview-examples/content-header-with-slot.tsx)
  - vue:
    - `vue/content-header-with-slot.css`: [source](../../examples/vue-examples/src/preview-examples/content-header-with-slot.css)
    - `vue/content-header-with-slot.vue`: [source](../../examples/vue-examples/src/preview-examples/content-header-with-slot.vue)
- pill
  - angular:
    - `angular/pill.css`: [source](../../examples/angular-examples/src/preview-examples/pill.css)
    - `angular/pill.html`: [source](../../examples/angular-examples/src/preview-examples/pill.html)
    - `angular/pill.ts`: [source](../../examples/angular-examples/src/preview-examples/pill.ts)
  - angular-standalone:
    - `angular-standalone/pill.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/pill.css)
    - `angular-standalone/pill.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/pill.ts)
  - html:
    - `html/pill.css`: [source](../../examples/html-examples/src/preview-examples/pill.css)
    - `html/pill.html`: [source](../../examples/html-examples/src/preview-examples/pill.html)
  - react:
    - `react/pill.scoped.css`: [source](../../examples/react-examples/src/preview-examples/pill.scoped.css)
    - `react/pill.tsx`: [source](../../examples/react-examples/src/preview-examples/pill.tsx)
  - vue:
    - `vue/pill.css`: [source](../../examples/vue-examples/src/preview-examples/pill.css)
    - `vue/pill.vue`: [source](../../examples/vue-examples/src/preview-examples/pill.vue)
- pill-variants
  - angular:
    - `angular/pill-variants.css`: [source](../../examples/angular-examples/src/preview-examples/pill-variants.css)
    - `angular/pill-variants.ts`: [source](../../examples/angular-examples/src/preview-examples/pill-variants.ts)
  - angular-standalone:
    - `angular-standalone/pill-variants.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/pill-variants.css)
    - `angular-standalone/pill-variants.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/pill-variants.ts)
  - html:
    - `html/pill-variants.css`: [source](../../examples/html-examples/src/preview-examples/pill-variants.css)
    - `html/pill-variants.html`: [source](../../examples/html-examples/src/preview-examples/pill-variants.html)
  - react:
    - `react/pill-variants.scoped.css`: [source](../../examples/react-examples/src/preview-examples/pill-variants.scoped.css)
    - `react/pill-variants.tsx`: [source](../../examples/react-examples/src/preview-examples/pill-variants.tsx)
  - vue:
    - `vue/pill-variants.css`: [source](../../examples/vue-examples/src/preview-examples/pill-variants.css)
    - `vue/pill-variants.vue`: [source](../../examples/vue-examples/src/preview-examples/pill-variants.vue)
- popover
  - angular:
    - `angular/popover.html`: [source](../../examples/angular-examples/src/preview-examples/popover.html)
    - `angular/popover.ts`: [source](../../examples/angular-examples/src/preview-examples/popover.ts)
  - angular-standalone:
    - `angular-standalone/popover.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover.html)
    - `angular-standalone/popover.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover.ts)
  - html:
    - `html/popover.html`: [source](../../examples/html-examples/src/preview-examples/popover.html)
  - react:
    - `react/popover.tsx`: [source](../../examples/react-examples/src/preview-examples/popover.tsx)
  - vue:
    - `vue/popover.vue`: [source](../../examples/vue-examples/src/preview-examples/popover.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `alignLeft`; attr: `align-left`; type: `boolean`; default: `false` - Align pill content left
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `background`; attr: `background`; type: `string | undefined` - Custom color for pill. Only working for `variant='custom'`
- `icon`; attr: `icon`; type: `string | undefined` - Show icon
- `outline`; attr: `outline`; type: `boolean`; default: `false` - Show pill as outline
- `pillColor`; attr: `pill-color`; type: `string | undefined` - Custom font color for pill. Only working for `variant='custom'`
- `tooltipText`; attr: `tooltip-text`; type: `boolean | string`; default: `false` - Display a tooltip. By default, no tooltip will be displayed. Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "custom" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'primary'` - Pill variant

## Events

- None

## Slots

- `` - Pill content.
