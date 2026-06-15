# ix-menu-item

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/application-menu/guide.md

## Figma IDs

- 308:1293

## Related examples

- application
- application-advanced
- application-app-switch
- application-breakpoints
- menu-category
- menu-with-bottom-tabs
- vertical-tabs
- vertical-tabs-with-avatar

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `active`; attr: `active`; type: `boolean`; default: `false` - State to display active
- `bottom`; attr: `bottom`; type: `boolean`; default: `false` - Caution: this is no longer working. Please use slot="bottom" instead. Place tab on bottom
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable tab and remove event handlers
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

## Slots

- `menu-item-label Custom label`
