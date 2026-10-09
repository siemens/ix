# ix-menu-about

> Overlay that shows application information such as version and legal details.

- Web component: `<ix-menu-about>`
- React/Vue: `IxMenuAbout` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-about>` (`IxModule` from `@siemens/ix-angular` or `IxMenuAbout` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/about-and-legal/guide.md

## Figma IDs

- None

## Properties

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab used for legacy ix-menu-about-item integrations
- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close About'` - Aria label for close button
- `label`; attr: `label`; type: `string`; default: `'About & legal information'` - Content of the header
- `suppressLegacyTabs`; attr: `suppress-legacy-tabs`; type: `boolean`; default: `false` - Whether to suppress legacy tabs (ix-menu-about-item) and use slotted tabs (ix-tab-item) instead

## Events

- `close` - About and Legal closed
- `tabChange` - Active tab changed

## Methods

- None

## Slots

- `` - About menu content.

## Dependencies

- Renders: `ix-icon-button`, `ix-tab-item`, `ix-tab-set`, `ix-tabs`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal (angular, angular-standalone, html, react, vue)
- about-and-legal-legacy (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- popover-news (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
