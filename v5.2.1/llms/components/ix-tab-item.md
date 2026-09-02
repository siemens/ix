# ix-tab-item

> A single selectable tab within a tab set.

## Documentation

- None

## Figma IDs

- 426:4122

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
- tabs
  - angular:
    - `angular/tabs.css`: [file](../../examples/angular/tabs.css)
    - `angular/tabs.ts`: [file](../../examples/angular/tabs.ts)
  - angular-standalone:
    - `angular-standalone/tabs.css`: [file](../../examples/angular-standalone/tabs.css)
    - `angular-standalone/tabs.ts`: [file](../../examples/angular-standalone/tabs.ts)
  - html:
    - `html/tabs.css`: [file](../../examples/html/tabs.css)
    - `html/tabs.html`: [file](../../examples/html/tabs.html)
  - react:
    - `react/tabs.scoped.css`: [file](../../examples/react/tabs.scoped.css)
    - `react/tabs.tsx`: [file](../../examples/react/tabs.tsx)
  - vue:
    - `vue/tabs.css`: [file](../../examples/vue/tabs.css)
    - `vue/tabs.vue`: [file](../../examples/vue/tabs.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

- `` - Tab label.
