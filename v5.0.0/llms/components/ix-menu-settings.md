# ix-menu-settings

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/settings/guide.md

## Figma IDs

- None

## Related examples

- application-advanced
  - angular: [angular/application-advanced.html](../../examples/angular-examples/src/preview-examples/application-advanced.html), [angular/application-advanced.ts](../../examples/angular-examples/src/preview-examples/application-advanced.ts)
  - angular-standalone: [angular-standalone/application-advanced.html](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.html), [angular-standalone/application-advanced.ts](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.ts)
  - html: [html/application-advanced.html](../../examples/html-examples/src/preview-examples/application-advanced.html)
  - react: [react/application-advanced.tsx](../../examples/react-examples/src/preview-examples/application-advanced.tsx)
  - vue: [vue/application-advanced.vue](../../examples/vue-examples/src/preview-examples/application-advanced.vue)
- settings
  - angular: [angular/settings.html](../../examples/angular-examples/src/preview-examples/settings.html), [angular/settings.ts](../../examples/angular-examples/src/preview-examples/settings.ts)
  - angular-standalone: [angular-standalone/settings.html](../../examples/angular-standalone-examples/src/preview-examples/settings.html), [angular-standalone/settings.ts](../../examples/angular-standalone-examples/src/preview-examples/settings.ts)
  - html: [html/settings.html](../../examples/html-examples/src/preview-examples/settings.html)
  - react: [react/settings.tsx](../../examples/react-examples/src/preview-examples/settings.tsx)
  - vue: [vue/settings.vue](../../examples/vue-examples/src/preview-examples/settings.vue)
- settings-legacy
  - angular: [angular/settings-legacy.html](../../examples/angular-examples/src/preview-examples/settings-legacy.html), [angular/settings-legacy.ts](../../examples/angular-examples/src/preview-examples/settings-legacy.ts)
  - angular-standalone: [angular-standalone/settings-legacy.html](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.html), [angular-standalone/settings-legacy.ts](../../examples/angular-standalone-examples/src/preview-examples/settings-legacy.ts)
  - html: [html/settings-legacy.html](../../examples/html-examples/src/preview-examples/settings-legacy.html)
  - react: [react/settings-legacy.tsx](../../examples/react-examples/src/preview-examples/settings-legacy.tsx)
  - vue: [vue/settings-legacy.vue](../../examples/vue-examples/src/preview-examples/settings-legacy.vue)

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
