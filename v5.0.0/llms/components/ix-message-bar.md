# ix-message-bar

> Inline bar that displays a contextual message or notification.

## Documentation

- None

## Figma IDs

- 103814:17693

## Related examples

Example source links are relative to this Markdown file.

- message-bar
  - angular:
    - `angular/message-bar.css`: [source](../../examples/angular-examples/src/preview-examples/message-bar.css)
    - `angular/message-bar.html`: [source](../../examples/angular-examples/src/preview-examples/message-bar.html)
    - `angular/message-bar.ts`: [source](../../examples/angular-examples/src/preview-examples/message-bar.ts)
  - angular-standalone:
    - `angular-standalone/message-bar.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/message-bar.css)
    - `angular-standalone/message-bar.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/message-bar.ts)
  - html:
    - `html/message-bar.css`: [source](../../examples/html-examples/src/preview-examples/message-bar.css)
    - `html/message-bar.html`: [source](../../examples/html-examples/src/preview-examples/message-bar.html)
  - react:
    - `react/message-bar.scoped.css`: [source](../../examples/react-examples/src/preview-examples/message-bar.scoped.css)
    - `react/message-bar.tsx`: [source](../../examples/react-examples/src/preview-examples/message-bar.tsx)
  - vue:
    - `vue/message-bar.css`: [source](../../examples/vue-examples/src/preview-examples/message-bar.css)
    - `vue/message-bar.vue`: [source](../../examples/vue-examples/src/preview-examples/message-bar.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `persistent`; attr: `persistent`; type: `boolean`; default: `false` - If true, close button is disabled and alert cannot be dismissed by the user
- `type`; attr: `type`; type: `"alarm" | "critical" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'info'` - Specifies the type of the alert.

## Events

- `closeAnimationCompleted` - An event emitted when the close animation is completed
- `closedChange` - An event emitted when the close button is clicked

## Slots

- None
