# ix-menu-settings

> Settings overlay opened from the application menu.

## Documentation

- https://ix.siemens.io//docs/components/settings/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- settings
  - angular:
    - `angular/settings.html`: [file](../../examples/angular/settings.html)
    - `angular/settings.ts`: [file](../../examples/angular/settings.ts)
  - angular-standalone:
    - `angular-standalone/settings.html`: [file](../../examples/angular-standalone/settings.html)
    - `angular-standalone/settings.ts`: [file](../../examples/angular-standalone/settings.ts)
  - html:
    - `html/settings.html`: [file](../../examples/html/settings.html)
  - react:
    - `react/settings.tsx`: [file](../../examples/react/settings.tsx)
  - vue:
    - `vue/settings.vue`: [file](../../examples/vue/settings.vue)
- settings-legacy
  - angular:
    - `angular/settings-legacy.html`: [file](../../examples/angular/settings-legacy.html)
    - `angular/settings-legacy.ts`: [file](../../examples/angular/settings-legacy.ts)
  - angular-standalone:
    - `angular-standalone/settings-legacy.html`: [file](../../examples/angular-standalone/settings-legacy.html)
    - `angular-standalone/settings-legacy.ts`: [file](../../examples/angular-standalone/settings-legacy.ts)
  - html:
    - `html/settings-legacy.html`: [file](../../examples/html/settings-legacy.html)
  - react:
    - `react/settings-legacy.tsx`: [file](../../examples/react/settings-legacy.tsx)
  - vue:
    - `vue/settings-legacy.vue`: [file](../../examples/vue/settings-legacy.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab used for legacy ix-menu-settings-item integrations
- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close Settings'` - Aria label for close button
- `label`; attr: `label`; type: `string`; default: `'Settings'` - Label of first tab
- `suppressLegacyTabs`; attr: `suppress-legacy-tabs`; type: `boolean`; default: `false` - Whether to suppress legacy tabs (ix-menu-settings-item) and use slotted tabs (ix-tab-item) instead

## Events

- `close` - Popover closed
- `tabChange` - Active tab changed

## Slots

- `` - Settings menu content.
