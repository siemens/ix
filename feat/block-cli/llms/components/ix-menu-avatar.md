# ix-menu-avatar

> Menu entry that displays the current user's avatar and account actions.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- vertical-tabs-with-avatar
  - angular:
    - `angular/vertical-tabs-with-avatar.css`: [source](../../examples/angular-examples/src/preview-examples/vertical-tabs-with-avatar.css)
    - `angular/vertical-tabs-with-avatar.ts`: [source](../../examples/angular-examples/src/preview-examples/vertical-tabs-with-avatar.ts)
  - angular-standalone:
    - `angular-standalone/vertical-tabs-with-avatar.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/vertical-tabs-with-avatar.css)
    - `angular-standalone/vertical-tabs-with-avatar.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/vertical-tabs-with-avatar.ts)
  - html:
    - `html/vertical-tabs-with-avatar.css`: [source](../../examples/html-examples/src/preview-examples/vertical-tabs-with-avatar.css)
    - `html/vertical-tabs-with-avatar.html`: [source](../../examples/html-examples/src/preview-examples/vertical-tabs-with-avatar.html)
  - react:
    - `react/vertical-tabs-with-avatar.scoped.css`: [source](../../examples/react-examples/src/preview-examples/vertical-tabs-with-avatar.scoped.css)
    - `react/vertical-tabs-with-avatar.tsx`: [source](../../examples/react-examples/src/preview-examples/vertical-tabs-with-avatar.tsx)
  - vue:
    - `vue/vertical-tabs-with-avatar.css`: [source](../../examples/vue-examples/src/preview-examples/vertical-tabs-with-avatar.css)
    - `vue/vertical-tabs-with-avatar.vue`: [source](../../examples/vue-examples/src/preview-examples/vertical-tabs-with-avatar.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

## Slots

- `` - Avatar dropdown content.
