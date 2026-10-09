# ix-link-button

> Button styled as a hyperlink that navigates to a target.

- Web component: `<ix-link-button>`
- React/Vue: `IxLinkButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-link-button>` (`IxModule` from `@siemens/ix-angular` or `IxLinkButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/link-button/guide.md

## Figma IDs

- 107603:15976

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the link button
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top"`; default: `'_self'` - Specifies where to open the link https://www.w3schools.com/html/html_links.asp
- `url`; attr: `url`; type: `string | undefined` - Url for the link button

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
- link-button-disabled (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
