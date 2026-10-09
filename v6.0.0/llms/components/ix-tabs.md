# ix-tabs

> Tabbed navigation for switching between related views.

- Web component: `<ix-tabs>`
- React/Vue: `IxTabs` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-tabs>` (`IxModule` from `@siemens/ix-angular` or `IxTabs` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/tabs/code.md

## Figma IDs

- 427:6367

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

## Methods

- None

## Slots

- `` - Tab items.

## Dependencies

- Renders: `ix-dropdown-button`, `ix-dropdown-item`
- Rendered by: `ix-menu-about`, `ix-menu-settings`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal (angular, angular-standalone, html, react, vue)
- settings (angular, angular-standalone, html, react, vue)
- tabs (angular, angular-standalone, html, react, vue)
- tabs-overflow (angular, angular-standalone, html, react, vue)
- tabs-rounded (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
