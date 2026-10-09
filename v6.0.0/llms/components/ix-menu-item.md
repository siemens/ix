# ix-menu-item

> Navigation entry within the side menu.

- Web component: `<ix-menu-item>`
- React/Vue: `IxMenuItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-menu-item>` (`IxModule` from `@siemens/ix-angular` or `IxMenuItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application-menu/guide.md

## Figma IDs

- 308:1293

## Properties

- `active`; attr: `active`; type: `boolean`; default: `false` - State to display active
- `bottom`; attr: `bottom`; type: `boolean`; default: `false` - Caution: this is no longer working. Please use slot="bottom" instead. Place tab on bottom
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable tab and remove event handlers
- `disableTooltip`; attr: `disable-tooltip`; type: `boolean`; default: `false` - Disable the tooltip for this menu item.
- `home`; attr: `home`; type: `boolean`; default: `false` - Move the Tab to a top position.
- `href`; attr: `href`; type: `string | undefined` - URL for the button link. When provided, the button will render as an anchor tag.
- `icon`; attr: `icon`; type: `string | undefined` - Name of the icon you want to display. Icon names can be resolved from the documentation {@link https://ix.siemens.io/docs/icon-library/icons}
- `label`; attr: `label`; type: `string | undefined` - Label of the menu item. Will also be used as tooltip text
- `notifications`; attr: `notifications`; type: `number | undefined` - Show notification count on tab
- `rel`; attr: `rel`; type: `string | undefined` - Specifies the relationship between the current document and the linked document when href is provided.
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top" | undefined`; default: `'_self'` - Specifies where to open the linked document when href is provided.
- `tooltipText`; attr: `tooltip-text`; type: `string | undefined` - Will be shown as tooltip text, if not provided menu text content will be used.

## Events

- None

## Methods

- None

## Slots

- `` - Menu item label.

## Dependencies

- Renders: `ix-tooltip`
- Rendered by: `ix-menu`, `ix-menu-category`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- menu-category (angular, angular-standalone, html, react, vue)
- menu-with-bottom-tabs (angular, angular-standalone, html, react, vue)
- vertical-tabs (angular, angular-standalone, html, react, vue)
- vertical-tabs-with-avatar (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
