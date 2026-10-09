# ix-menu-about-item

> A single tab or entry within the about overlay.

- Web component: `<ix-menu-about-item>`
- React/Vue: `IxMenuAboutItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-about-item>` (`IxModule` from `@siemens/ix-angular` or `IxMenuAboutItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/about-and-legal/guide.md

## Figma IDs

- None

## Properties

- `label`; attr: `label`; type: `string | undefined` - About Item label
- `tabKey`; attr: `tab-key`; type: `string` - Key of the tab, used for identifying the tab in events

## Events

- `labelChange` - Label changed

## Methods

- None

## Slots

- `` - About item content.

## Dependencies

- Renders: `ix-tab-panel`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal-legacy (angular, angular-standalone, html, react, vue)
- popover-news (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
