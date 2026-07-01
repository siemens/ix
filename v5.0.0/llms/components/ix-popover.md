# ix-popover

> Floating panel anchored to a trigger element.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

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

- `closeOnClickOutside`; attr: `close-on-click-outside`; type: `boolean`; default: `false` - Dismiss when clicking outside the popover and trigger
- `hasSpike`; attr: `has-spike`; type: `boolean`; default: `false` - Show the spike pointing at the trigger
- `placement`; attr: `placement`; type: `"bottom" | "left" | "right" | "top"`; default: `'bottom'` - Preferred placement relative to trigger
- `show`; attr: `show`; type: `boolean`; default: `false` - Show/hide state
- `trigger`; attr: `trigger`; type: `HTMLElement | Promise<HTMLElement> | string | undefined` - Element that toggles the popover. String values are resolved as the trigger element `id`, not as CSS selectors. Also accepts a DOM element reference.
- `triggerMode`; attr: `trigger-mode`; type: `"click" | "hover"`; default: `'click'` - Interaction that opens the popover

## Events

- `showChange` - Fires before visibility changes. Cancel to prevent.
- `showChanged` - Fires after visibility has changed

## Slots

- `` - Child sections in order: `ix-popover-header`, `ix-popover-image`, `ix-popover-content`, and `ix-popover-footer`.
