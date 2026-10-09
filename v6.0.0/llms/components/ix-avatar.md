# ix-avatar

> Displays a user's profile image, initials, or a placeholder icon.

- Web component: `<ix-avatar>`
- React/Vue: `IxAvatar` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-avatar>` (`IxModule` from `@siemens/ix-angular` or `IxAvatar` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/avatar/guide.md

## Figma IDs

- 308:1151

## Properties

- `ariaLabelTooltip`; attr: `aria-label-tooltip`; type: `string | undefined` - aria-label for the tooltip
- `extra`; attr: `extra`; type: `string | undefined` - Optional description text that will be displayed underneath the username. Note: Only working if avatar is part of the ix-application-header
- `image`; attr: `image`; type: `string | undefined` - Display an avatar image
- `initials`; attr: `initials`; type: `string | undefined` - Display the initials of the user. Will be overwritten by image
- `tooltipText`; attr: `tooltip-text`; type: `string | undefined` - Text to display in a tooltip when hovering over the avatar
- `username`; attr: `username`; type: `string | undefined` - If set an info card displaying the username will be placed inside the dropdown. Note: Only working if avatar is part of the ix-application-header

## Events

- None

## Methods

- None

## Slots

- `` - Dropdown content displayed below the avatar.

## Dependencies

- Renders: `ix-divider`, `ix-dropdown`, `ix-spinner`, `ix-tooltip`, `ix-typography`
- Rendered by: `ix-menu-avatar`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- application-header (angular, angular-standalone, html, react, vue)
- avatar (angular, angular-standalone, html, react, vue)
- avatar-image (angular, angular-standalone, html, react, vue)
- avatar-initials (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
