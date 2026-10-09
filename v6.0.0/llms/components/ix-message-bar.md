# ix-message-bar

> Inline bar that displays a contextual message or notification.

- Web component: `<ix-message-bar>`
- React/Vue: `IxMessageBar` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-message-bar>` (`IxModule` from `@siemens/ix-angular` or `IxMessageBar` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/messagebar/code.md

## Figma IDs

- 103814:17693

## Properties

- `persistent`; attr: `persistent`; type: `boolean`; default: `false` - If true, close button is disabled and alert cannot be dismissed by the user
- `type`; attr: `type`; type: `"alarm" | "critical" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'info'` - Specifies the type of the alert.

## Events

- `closeAnimationCompleted` - An event emitted when the close animation is completed
- `closedChange` - An event emitted when the close button is clicked

## Methods

- None

## Slots

- `` - Message content.

## Dependencies

- Renders: `ix-icon-button`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- message-bar (angular, angular-standalone, html, react, vue)
- message-bar-removal (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
