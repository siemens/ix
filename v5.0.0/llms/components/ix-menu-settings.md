# ix-menu-settings

> Settings overlay opened from the application menu.

## Documentation

- https://ix.siemens.io//docs/components/settings/guide.md

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- application-advanced
  - angular:
    - `angular/application-advanced.html`: [source](../../examples/angular-examples/src/preview-examples/application-advanced.html)
    - `angular/application-advanced.ts`: [source](../../examples/angular-examples/src/preview-examples/application-advanced.ts)
  - angular-standalone:
    - `angular-standalone/application-advanced.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.html)
    - `angular-standalone/application-advanced.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.ts)
  - html:
    - `html/application-advanced.html`: [source](../../examples/html-examples/src/preview-examples/application-advanced.html)
  - react:
    - `react/application-advanced.tsx`: [source](../../examples/react-examples/src/preview-examples/application-advanced.tsx)
  - vue:
    - `vue/application-advanced.vue`: [source](../../examples/vue-examples/src/preview-examples/application-advanced.vue)
- settings
  - angular:
    - `angular/settings.html`: [source](../../examples/angular-examples/src/preview-examples/settings.html)
    - `angular/settings.ts`: [source](../../examples/angular-examples/src/preview-examples/settings.ts)
  - angular-standalone:
    - `angular-standalone/settings.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/settings.html)
    - `angular-standalone/settings.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/settings.ts)
  - html:
    - `html/settings.html`: [source](../../examples/html-examples/src/preview-examples/settings.html)
  - react:
    - `react/settings.tsx`: [source](../../examples/react-examples/src/preview-examples/settings.tsx)
  - vue:
    - `vue/settings.vue`: [source](../../examples/vue-examples/src/preview-examples/settings.vue)
- settings-legacy
  - angular:
    - `angular/settings-legacy.html`: [source](../../examples/angular-examples/src/preview-examples/settings-legacy.html)
    - `angular/settings-legacy.ts`: [source](../../examples/angular-examples/src/preview-examples/settings-legacy.ts)
  - angular-standalone:
    - `angular-standalone/settings-legacy.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.html)
    - `angular-standalone/settings-legacy.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.ts)
  - html:
    - `html/settings-legacy.html`: [source](../../examples/html-examples/src/preview-examples/settings-legacy.html)
  - react:
    - `react/settings-legacy.tsx`: [source](../../examples/react-examples/src/preview-examples/settings-legacy.tsx)
  - vue:
    - `vue/settings-legacy.vue`: [source](../../examples/vue-examples/src/preview-examples/settings-legacy.vue)

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
