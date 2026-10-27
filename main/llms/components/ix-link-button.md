# ix-link-button

> Button styled as a hyperlink that navigates to a target.

- Web component: `<ix-link-button>`
- React: `IxLinkButton` from `@siemens/ix-react`
- Vue: `IxLinkButton` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/link-button/guide.md

## Figma IDs

- 107603:15976

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the link button
- `icon`; attr: `icon`; type: `"action" | "external" | "file" | "internal" | "none"`; default: `'none'` - Icon displayed alongside the link label. Defaults to `none`.
- `iconPosition`; attr: `icon-position`; type: `"end" | "start"`; default: `'start'` - Position of the icon relative to the link label.
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top"`; default: `'_self'` - Specifies where to open the link https://www.w3schools.com/html/html_links.asp
- `url`; attr: `url`; type: `string | undefined` - Url for the link button The value is forwarded unchanged to the `href` of the native anchor. URL schemes such as `javascript:` or `data:` are not rejected. Do not bind untrusted input; validate destinations against an allowlist (for example `https:` and relative URLs).

## Events

- None

## Methods

- None

## Slots

- `` - Link button label.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- link-button (angular, angular-standalone, html, react, vue)
- link-button-action (angular, angular-standalone, html, react, vue)
- link-button-disabled (angular, angular-standalone, html, react, vue)
- link-button-external (angular, angular-standalone, html, react, vue)
- link-button-file (angular, angular-standalone, html, react, vue)
- link-button-internal (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
