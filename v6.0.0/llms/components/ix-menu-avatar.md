# ix-menu-avatar

> Menu entry that displays the current user's avatar and account actions.

- Web component: `<ix-menu-avatar>`
- React/Vue: `IxMenuAvatar` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-avatar>` (`IxModule` from `@siemens/ix-angular` or `IxMenuAvatar` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application-menu/guide.md

## Figma IDs

- None

## Properties

- `ariaLabelTooltip`; attr: `aria-label-tooltip`; type: `string | undefined` - aria-label for the tooltip
- `bottom`; attr: `bottom`; type: `string | undefined` - Second line of text
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `hideLogoutButton`; attr: `hide-logout-button`; type: `boolean`; default: `false` - Control the visibility of the logout button
- `i18nLogout`; attr: `i18n-logout`; type: `string`; default: `'Logout'` - i18n label for 'Logout' button
- `image`; attr: `image`; type: `string | undefined` - Display a avatar image
- `initials`; attr: `initials`; type: `string | undefined` - Display the initials of the user. Will be overwritten by image
- `tooltipText`; attr: `tooltip-text`; type: `string | undefined` - Tooltip text to display on hover. If not set, the 'top' property (user name) will be used as the default tooltip text.
- `top`; attr: `top`; type: `string | undefined` - First line of text

## Events

- `logoutClick` - Logout click

## Methods

- None

## Slots

- `` - Avatar dropdown content.

## Dependencies

- Renders: `ix-avatar`, `ix-dropdown`, `ix-menu-avatar-item`, `ix-tooltip`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- vertical-tabs-with-avatar (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
