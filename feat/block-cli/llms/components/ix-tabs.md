# ix-tabs

> No component summary available.

## Documentation

- None

## Figma IDs

- 427:6367

## Related examples

- about-and-legal
  - angular: [../../examples/angular-examples/src/preview-examples/about-and-legal.html](../../examples/angular-examples/src/preview-examples/about-and-legal.html), [../../examples/angular-examples/src/preview-examples/about-and-legal.ts](../../examples/angular-examples/src/preview-examples/about-and-legal.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.html](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.html), [../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.ts](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.ts)
  - html: [../../examples/html-examples/src/preview-examples/about-and-legal.html](../../examples/html-examples/src/preview-examples/about-and-legal.html)
  - react: [../../examples/react-examples/src/preview-examples/about-and-legal.tsx](../../examples/react-examples/src/preview-examples/about-and-legal.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/about-and-legal.vue](../../examples/vue-examples/src/preview-examples/about-and-legal.vue)
- settings
  - angular: [../../examples/angular-examples/src/preview-examples/settings.html](../../examples/angular-examples/src/preview-examples/settings.html), [../../examples/angular-examples/src/preview-examples/settings.ts](../../examples/angular-examples/src/preview-examples/settings.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/settings.html](../../examples/angular-standalone-examples/src/preview-examples/settings.html), [../../examples/angular-standalone-examples/src/preview-examples/settings.ts](../../examples/angular-standalone-examples/src/preview-examples/settings.ts)
  - html: [../../examples/html-examples/src/preview-examples/settings.html](../../examples/html-examples/src/preview-examples/settings.html)
  - react: [../../examples/react-examples/src/preview-examples/settings.tsx](../../examples/react-examples/src/preview-examples/settings.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/settings.vue](../../examples/vue-examples/src/preview-examples/settings.vue)
- tabs
  - angular: [../../examples/angular-examples/src/preview-examples/tabs.css](../../examples/angular-examples/src/preview-examples/tabs.css), [../../examples/angular-examples/src/preview-examples/tabs.ts](../../examples/angular-examples/src/preview-examples/tabs.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tabs.css](../../examples/angular-standalone-examples/src/preview-examples/tabs.css), [../../examples/angular-standalone-examples/src/preview-examples/tabs.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs.ts)
  - html: [../../examples/html-examples/src/preview-examples/tabs.css](../../examples/html-examples/src/preview-examples/tabs.css), [../../examples/html-examples/src/preview-examples/tabs.html](../../examples/html-examples/src/preview-examples/tabs.html)
  - react: [../../examples/react-examples/src/preview-examples/tabs.scoped.css](../../examples/react-examples/src/preview-examples/tabs.scoped.css), [../../examples/react-examples/src/preview-examples/tabs.tsx](../../examples/react-examples/src/preview-examples/tabs.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tabs.css](../../examples/vue-examples/src/preview-examples/tabs.css), [../../examples/vue-examples/src/preview-examples/tabs.vue](../../examples/vue-examples/src/preview-examples/tabs.vue)
- tabs-overflow
  - angular: [../../examples/angular-examples/src/preview-examples/tabs-overflow.ts](../../examples/angular-examples/src/preview-examples/tabs-overflow.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tabs-overflow.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs-overflow.ts)
  - html: [../../examples/html-examples/src/preview-examples/tabs-overflow.html](../../examples/html-examples/src/preview-examples/tabs-overflow.html)
  - react: [../../examples/react-examples/src/preview-examples/tabs-overflow.tsx](../../examples/react-examples/src/preview-examples/tabs-overflow.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tabs-overflow.vue](../../examples/vue-examples/src/preview-examples/tabs-overflow.vue)
- tabs-rounded
  - angular: [../../examples/angular-examples/src/preview-examples/tabs-rounded.ts](../../examples/angular-examples/src/preview-examples/tabs-rounded.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tabs-rounded.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs-rounded.ts)
  - html: [../../examples/html-examples/src/preview-examples/tabs-rounded.html](../../examples/html-examples/src/preview-examples/tabs-rounded.html)
  - react: [../../examples/react-examples/src/preview-examples/tabs-rounded.tsx](../../examples/react-examples/src/preview-examples/tabs-rounded.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tabs-rounded.vue](../../examples/vue-examples/src/preview-examples/tabs-rounded.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

- None
