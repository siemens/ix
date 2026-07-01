# ix-tab-item

> A single selectable tab within a tab set.

## Documentation

- None

## Figma IDs

- 426:4122

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
- tabs
  - angular:
    - `angular/tabs.css`: [source](../../examples/angular-examples/src/preview-examples/tabs.css)
    - `angular/tabs.ts`: [source](../../examples/angular-examples/src/preview-examples/tabs.ts)
  - angular-standalone:
    - `angular-standalone/tabs.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/tabs.css)
    - `angular-standalone/tabs.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/tabs.ts)
  - html:
    - `html/tabs.css`: [source](../../examples/html-examples/src/preview-examples/tabs.css)
    - `html/tabs.html`: [source](../../examples/html-examples/src/preview-examples/tabs.html)
  - react:
    - `react/tabs.scoped.css`: [source](../../examples/react-examples/src/preview-examples/tabs.scoped.css)
    - `react/tabs.tsx`: [source](../../examples/react-examples/src/preview-examples/tabs.tsx)
  - vue:
    - `vue/tabs.css`: [source](../../examples/vue-examples/src/preview-examples/tabs.css)
    - `vue/tabs.vue`: [source](../../examples/vue-examples/src/preview-examples/tabs.vue)
- tabs-overflow
  - angular:
    - `angular/tabs-overflow.ts`: [source](../../examples/angular-examples/src/preview-examples/tabs-overflow.ts)
  - angular-standalone:
    - `angular-standalone/tabs-overflow.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/tabs-overflow.ts)
  - html:
    - `html/tabs-overflow.html`: [source](../../examples/html-examples/src/preview-examples/tabs-overflow.html)
  - react:
    - `react/tabs-overflow.tsx`: [source](../../examples/react-examples/src/preview-examples/tabs-overflow.tsx)
  - vue:
    - `vue/tabs-overflow.vue`: [source](../../examples/vue-examples/src/preview-examples/tabs-overflow.vue)
- tabs-rounded
  - angular:
    - `angular/tabs-rounded.ts`: [source](../../examples/angular-examples/src/preview-examples/tabs-rounded.ts)
  - angular-standalone:
    - `angular-standalone/tabs-rounded.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/tabs-rounded.ts)
  - html:
    - `html/tabs-rounded.html`: [source](../../examples/html-examples/src/preview-examples/tabs-rounded.html)
  - react:
    - `react/tabs-rounded.tsx`: [source](../../examples/react-examples/src/preview-examples/tabs-rounded.tsx)
  - vue:
    - `vue/tabs-rounded.vue`: [source](../../examples/vue-examples/src/preview-examples/tabs-rounded.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string`; default: `'Close tab'` - Aria label for the close button, important for accessibility
- `closable`; attr: `closable`; type: `boolean`; default: `false` - If the tab can be closed
- `counter`; attr: `counter`; type: `number | undefined` - Set counter value
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Set disabled tab
- `icon`; attr: `icon`; type: `string | undefined` - Set icon of the tab
- `label`; attr: `label`; type: `string | undefined` - Tab label
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Set selected tab
- `tabKey`; attr: `tab-key`; type: `string` - Key of the tab, used for identifying the tab in events

## Events

- `tabClick` - Emitted when the tab is clicked.
- `tabClose` - Emitted when the tab's close button is clicked.

## Slots

- None
