# ix-tabs

> Tabbed navigation for switching between related views.

## Documentation

- None

## Figma IDs

- 427:6367

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

- `activeTabKey`; attr: `active-tab-key`; type: `string | undefined` - Active tab key.
- `ariaLabelMoreTabs`; attr: `aria-label-more-tabs`; type: `string`; default: `'Show all tabs'` - Aria label for the overflow menu button.
- `keyboardNavigation`; attr: `keyboard-navigation`; type: `"automatic" | "manual"`; default: `'automatic'` - Keyboard interaction behavior: automatic: A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus. manual: A tabs widget where users activate a tab and display its panel by pressing Space or Enter.
- `layout`; attr: `layout`; type: `"auto" | "stretched"`; default: `'auto'` - Set layout width style
- `placement`; attr: `placement`; type: `"bottom" | "top"`; default: `'bottom'` - Set placement style
- `rounded`; attr: `rounded`; type: `boolean`; default: `false` - Set rounded tabs
- `small`; attr: `small`; type: `boolean`; default: `false` - Set tab items to small size

## Events

- `tabChange` - Tab selection event. Event detail contains the new active tab key.
- `tabClose` - Tab close event. Event detail contains the closed tab key.

## Slots

- `` - Tab items.
