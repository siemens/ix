# ix-menu-settings

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/settings/guide.md

## Figma IDs

- None

## Related examples

- application-advanced
- settings
- settings-legacy

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab used for legacy ix-menu-settings-item integrations
- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close Settings'` - Aria label for close button
- `label`; attr: `label`; type: `string`; default: `'Settings'` - Label of first tab
- `suppressLegacyTabs`; attr: `suppress-legacy-tabs`; type: `boolean`; default: `false` - Whether to suppress legacy tabs (ix-menu-settings-item) and use slotted tabs (ix-tab-item) instead

## Events

- `close` - Popover closed
- `tabChange` - Active tab changed

## Slots

- None
