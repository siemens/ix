# ix-menu-about

> Overlay that shows application information such as version and legal details.

## Documentation

- https://ix.siemens.io//docs/components/about-and-legal/guide.md

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- about-and-legal
  - angular:
    - `angular/about-and-legal.html`: [source](../../examples/angular-examples/src/preview-examples/about-and-legal.html)
    - `angular/about-and-legal.ts`: [source](../../examples/angular-examples/src/preview-examples/about-and-legal.ts)
  - angular-standalone:
    - `angular-standalone/about-and-legal.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.html)
    - `angular-standalone/about-and-legal.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.ts)
  - html:
    - `html/about-and-legal.html`: [source](../../examples/html-examples/src/preview-examples/about-and-legal.html)
  - react:
    - `react/about-and-legal.tsx`: [source](../../examples/react-examples/src/preview-examples/about-and-legal.tsx)
  - vue:
    - `vue/about-and-legal.vue`: [source](../../examples/vue-examples/src/preview-examples/about-and-legal.vue)
- about-and-legal-legacy
  - angular:
    - `angular/about-and-legal-legacy.html`: [source](../../examples/angular-examples/src/preview-examples/about-and-legal-legacy.html)
    - `angular/about-and-legal-legacy.ts`: [source](../../examples/angular-examples/src/preview-examples/about-and-legal-legacy.ts)
  - angular-standalone:
    - `angular-standalone/about-and-legal-legacy.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal-legacy.html)
    - `angular-standalone/about-and-legal-legacy.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal-legacy.ts)
  - html:
    - `html/about-and-legal-legacy.html`: [source](../../examples/html-examples/src/preview-examples/about-and-legal-legacy.html)
  - react:
    - `react/about-and-legal-legacy.tsx`: [source](../../examples/react-examples/src/preview-examples/about-and-legal-legacy.tsx)
  - vue:
    - `vue/about-and-legal-legacy.vue`: [source](../../examples/vue-examples/src/preview-examples/about-and-legal-legacy.vue)
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
- popover-news
  - angular:
    - `angular/popover-news.html`: [source](../../examples/angular-examples/src/preview-examples/popover-news.html)
    - `angular/popover-news.ts`: [source](../../examples/angular-examples/src/preview-examples/popover-news.ts)
  - angular-standalone:
    - `angular-standalone/popover-news.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover-news.html)
    - `angular-standalone/popover-news.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover-news.ts)
  - html:
    - `html/popover-news.html`: [source](../../examples/html-examples/src/preview-examples/popover-news.html)
  - react:
    - `react/popover-news.tsx`: [source](../../examples/react-examples/src/preview-examples/popover-news.tsx)
  - vue:
    - `vue/popover-news.vue`: [source](../../examples/vue-examples/src/preview-examples/popover-news.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab used for legacy ix-menu-about-item integrations
- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close About'` - Aria label for close button
- `label`; attr: `label`; type: `string`; default: `'About & legal information'` - Content of the header
- `suppressLegacyTabs`; attr: `suppress-legacy-tabs`; type: `boolean`; default: `false` - Whether to suppress legacy tabs (ix-menu-about-item) and use slotted tabs (ix-tab-item) instead

## Events

- `close` - About and Legal closed
- `tabChange` - Active tab changed

## Slots

- `` - About menu content.
