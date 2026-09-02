# ix-message-bar

> Inline bar that displays a contextual message or notification.

## Documentation

- None

## Figma IDs

- 103814:17693

## Related examples

Example file links are relative to this Markdown file.

- message-bar
  - angular:
    - `angular/message-bar.css`: [file](../../examples/angular/message-bar.css)
    - `angular/message-bar.html`: [file](../../examples/angular/message-bar.html)
    - `angular/message-bar.ts`: [file](../../examples/angular/message-bar.ts)
  - angular-standalone:
    - `angular-standalone/message-bar.css`: [file](../../examples/angular-standalone/message-bar.css)
    - `angular-standalone/message-bar.ts`: [file](../../examples/angular-standalone/message-bar.ts)
  - html:
    - `html/message-bar.css`: [file](../../examples/html/message-bar.css)
    - `html/message-bar.html`: [file](../../examples/html/message-bar.html)
  - react:
    - `react/message-bar.scoped.css`: [file](../../examples/react/message-bar.scoped.css)
    - `react/message-bar.tsx`: [file](../../examples/react/message-bar.tsx)
  - vue:
    - `vue/message-bar.css`: [file](../../examples/vue/message-bar.css)
    - `vue/message-bar.vue`: [file](../../examples/vue/message-bar.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `persistent`; attr: `persistent`; type: `boolean`; default: `false` - If true, close button is disabled and alert cannot be dismissed by the user
- `type`; attr: `type`; type: `"alarm" | "critical" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'info'` - Specifies the type of the alert.

## Events

- `closeAnimationCompleted` - An event emitted when the close animation is completed
- `closedChange` - An event emitted when the close button is clicked

## Slots

- `` - Message content.
