# ix-tab-item

> A single selectable tab within a tab set.

- Web component: `<ix-tab-item>`
- React/Vue: `IxTabItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-tab-item>` (`IxModule` from `@siemens/ix-angular` or `IxTabItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/tabs/code.md

## Figma IDs

- 426:4122

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

## Methods

- None

## Slots

- `` - Tab label.

## Dependencies

- Renders: `ix-icon-button`, `ix-pill`
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
