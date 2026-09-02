# ix-popover

> Floating panel anchored to a trigger element.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

- `default` - Child sections in order: `ix-popover-header`, `ix-popover-image`, `ix-popover-content`, and `ix-popover-footer`.
