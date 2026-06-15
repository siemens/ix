# ix-menu-settings

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/settings/guide.md

## Figma IDs

- None

## Related examples

- application-advanced
  - angular: [../../examples/angular-examples/src/preview-examples/application-advanced.html](../../examples/angular-examples/src/preview-examples/application-advanced.html), [../../examples/angular-examples/src/preview-examples/application-advanced.ts](../../examples/angular-examples/src/preview-examples/application-advanced.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/application-advanced.html](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.html), [../../examples/angular-standalone-examples/src/preview-examples/application-advanced.ts](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.ts)
  - html: [../../examples/html-examples/src/preview-examples/application-advanced.html](../../examples/html-examples/src/preview-examples/application-advanced.html)
  - react: [../../examples/react-examples/src/preview-examples/application-advanced.tsx](../../examples/react-examples/src/preview-examples/application-advanced.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/application-advanced.vue](../../examples/vue-examples/src/preview-examples/application-advanced.vue)
- settings
  - angular: [../../examples/angular-examples/src/preview-examples/settings.html](../../examples/angular-examples/src/preview-examples/settings.html), [../../examples/angular-examples/src/preview-examples/settings.ts](../../examples/angular-examples/src/preview-examples/settings.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/settings.html](../../examples/angular-standalone-examples/src/preview-examples/settings.html), [../../examples/angular-standalone-examples/src/preview-examples/settings.ts](../../examples/angular-standalone-examples/src/preview-examples/settings.ts)
  - html: [../../examples/html-examples/src/preview-examples/settings.html](../../examples/html-examples/src/preview-examples/settings.html)
  - react: [../../examples/react-examples/src/preview-examples/settings.tsx](../../examples/react-examples/src/preview-examples/settings.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/settings.vue](../../examples/vue-examples/src/preview-examples/settings.vue)
- settings-legacy
  - angular: [../../examples/angular-examples/src/preview-examples/settings-legacy.html](../../examples/angular-examples/src/preview-examples/settings-legacy.html), [../../examples/angular-examples/src/preview-examples/settings-legacy.ts](../../examples/angular-examples/src/preview-examples/settings-legacy.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.html](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.html), [../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.ts](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.ts)
  - html: [../../examples/html-examples/src/preview-examples/settings-legacy.html](../../examples/html-examples/src/preview-examples/settings-legacy.html)
  - react: [../../examples/react-examples/src/preview-examples/settings-legacy.tsx](../../examples/react-examples/src/preview-examples/settings-legacy.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/settings-legacy.vue](../../examples/vue-examples/src/preview-examples/settings-legacy.vue)

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
