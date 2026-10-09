# ix-popover

> Floating panel anchored to a trigger element.

- Web component: `<ix-popover>`
- React/Vue: `IxPopover` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-popover>` (`IxModule` from `@siemens/ix-angular` or `IxPopover` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/popover/guide.md

## Figma IDs

- 145668:12518

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

## Methods

- `hidePopover() => Promise<void>` - Close the popover programmatically
- `showPopover() => Promise<void>` - Open the popover programmatically

## Slots

- `default` - Child sections in order: `ix-popover-header`, `ix-popover-image`, `ix-popover-content`, and `ix-popover-footer`.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- popover (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
