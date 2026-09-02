# ix-menu-about

> Overlay that shows application information such as version and legal details.

## Documentation

- https://ix.siemens.io//docs/components/about-and-legal/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- about-and-legal
  - angular:
    - `angular/about-and-legal.html`: [file](../../examples/angular/about-and-legal.html)
    - `angular/about-and-legal.ts`: [file](../../examples/angular/about-and-legal.ts)
  - angular-standalone:
    - `angular-standalone/about-and-legal.html`: [file](../../examples/angular-standalone/about-and-legal.html)
    - `angular-standalone/about-and-legal.ts`: [file](../../examples/angular-standalone/about-and-legal.ts)
  - html:
    - `html/about-and-legal.html`: [file](../../examples/html/about-and-legal.html)
  - react:
    - `react/about-and-legal.tsx`: [file](../../examples/react/about-and-legal.tsx)
  - vue:
    - `vue/about-and-legal.vue`: [file](../../examples/vue/about-and-legal.vue)
- about-and-legal-legacy
  - angular:
    - `angular/about-and-legal-legacy.html`: [file](../../examples/angular/about-and-legal-legacy.html)
    - `angular/about-and-legal-legacy.ts`: [file](../../examples/angular/about-and-legal-legacy.ts)
  - angular-standalone:
    - `angular-standalone/about-and-legal-legacy.html`: [file](../../examples/angular-standalone/about-and-legal-legacy.html)
    - `angular-standalone/about-and-legal-legacy.ts`: [file](../../examples/angular-standalone/about-and-legal-legacy.ts)
  - html:
    - `html/about-and-legal-legacy.html`: [file](../../examples/html/about-and-legal-legacy.html)
  - react:
    - `react/about-and-legal-legacy.tsx`: [file](../../examples/react/about-and-legal-legacy.tsx)
  - vue:
    - `vue/about-and-legal-legacy.vue`: [file](../../examples/vue/about-and-legal-legacy.vue)
- popover-news
  - angular:
    - `angular/popover-news.html`: [file](../../examples/angular/popover-news.html)
    - `angular/popover-news.ts`: [file](../../examples/angular/popover-news.ts)
  - angular-standalone:
    - `angular-standalone/popover-news.html`: [file](../../examples/angular-standalone/popover-news.html)
    - `angular-standalone/popover-news.ts`: [file](../../examples/angular-standalone/popover-news.ts)
  - html:
    - `html/popover-news.html`: [file](../../examples/html/popover-news.html)
  - react:
    - `react/popover-news.tsx`: [file](../../examples/react/popover-news.tsx)
  - vue:
    - `vue/popover-news.vue`: [file](../../examples/vue/popover-news.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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
