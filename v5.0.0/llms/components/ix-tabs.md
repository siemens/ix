# ix-tabs

> No component summary available.

## Documentation

- None

## Figma IDs

- 427:6367

## Related examples

- about-and-legal
  - angular: [angular/about-and-legal.html](../../examples/angular-examples/src/preview-examples/about-and-legal.html), [angular/about-and-legal.ts](../../examples/angular-examples/src/preview-examples/about-and-legal.ts)
  - angular-standalone: [angular-standalone/about-and-legal.html](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.html), [angular-standalone/about-and-legal.ts](../../examples/angular-standalone-examples/src/preview-examples/about-and-legal.ts)
  - html: [html/about-and-legal.html](../../examples/html-examples/src/preview-examples/about-and-legal.html)
  - react: [react/about-and-legal.tsx](../../examples/react-examples/src/preview-examples/about-and-legal.tsx)
  - vue: [vue/about-and-legal.vue](../../examples/vue-examples/src/preview-examples/about-and-legal.vue)
- settings
  - angular: [angular/settings.html](../../examples/angular-examples/src/preview-examples/settings.html), [angular/settings.ts](../../examples/angular-examples/src/preview-examples/settings.ts)
  - angular-standalone: [angular-standalone/settings.html](../../examples/angular-standalone-examples/src/preview-examples/settings.html), [angular-standalone/settings.ts](../../examples/angular-standalone-examples/src/preview-examples/settings.ts)
  - html: [html/settings.html](../../examples/html-examples/src/preview-examples/settings.html)
  - react: [react/settings.tsx](../../examples/react-examples/src/preview-examples/settings.tsx)
  - vue: [vue/settings.vue](../../examples/vue-examples/src/preview-examples/settings.vue)
- tabs
  - angular: [angular/tabs.css](../../examples/angular-examples/src/preview-examples/tabs.css), [angular/tabs.ts](../../examples/angular-examples/src/preview-examples/tabs.ts)
  - angular-standalone: [angular-standalone/tabs.css](../../examples/angular-standalone-examples/src/preview-examples/tabs.css), [angular-standalone/tabs.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs.ts)
  - html: [html/tabs.css](../../examples/html-examples/src/preview-examples/tabs.css), [html/tabs.html](../../examples/html-examples/src/preview-examples/tabs.html)
  - react: [react/tabs.scoped.css](../../examples/react-examples/src/preview-examples/tabs.scoped.css), [react/tabs.tsx](../../examples/react-examples/src/preview-examples/tabs.tsx)
  - vue: [vue/tabs.css](../../examples/vue-examples/src/preview-examples/tabs.css), [vue/tabs.vue](../../examples/vue-examples/src/preview-examples/tabs.vue)
- tabs-overflow
  - angular: [angular/tabs-overflow.ts](../../examples/angular-examples/src/preview-examples/tabs-overflow.ts)
  - angular-standalone: [angular-standalone/tabs-overflow.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs-overflow.ts)
  - html: [html/tabs-overflow.html](../../examples/html-examples/src/preview-examples/tabs-overflow.html)
  - react: [react/tabs-overflow.tsx](../../examples/react-examples/src/preview-examples/tabs-overflow.tsx)
  - vue: [vue/tabs-overflow.vue](../../examples/vue-examples/src/preview-examples/tabs-overflow.vue)
- tabs-rounded
  - angular: [angular/tabs-rounded.ts](../../examples/angular-examples/src/preview-examples/tabs-rounded.ts)
  - angular-standalone: [angular-standalone/tabs-rounded.ts](../../examples/angular-standalone-examples/src/preview-examples/tabs-rounded.ts)
  - html: [html/tabs-rounded.html](../../examples/html-examples/src/preview-examples/tabs-rounded.html)
  - react: [react/tabs-rounded.tsx](../../examples/react-examples/src/preview-examples/tabs-rounded.tsx)
  - vue: [vue/tabs-rounded.vue](../../examples/vue-examples/src/preview-examples/tabs-rounded.vue)

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
