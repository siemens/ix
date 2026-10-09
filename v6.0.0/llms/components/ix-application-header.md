# ix-application-header

> Top header bar of the application shell holding branding, navigation, and actions.

- Web component: `<ix-application-header>`
- React/Vue: `IxApplicationHeader` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-application-header>` (`IxModule` from `@siemens/ix-angular` or `IxApplicationHeader` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application-header/guide.md

## Figma IDs

- 20920:77660

## Properties

- `appIcon`; attr: `app-icon`; type: `string | undefined` - The app icon will be shown as the first element inside the header. It will be hidden on smaller screens.
- `appIconAlt`; attr: `app-icon-alt`; type: `string | undefined` - Alt text for the app icon
- `appIconOutline`; attr: `app-icon-outline`; type: `boolean`; default: `false` - Render subtle outline around app icon to ensure proper contrast.
- `ariaLabelAppSwitchIconButton`; attr: `aria-label-app-switch-icon-button`; type: `string | undefined` - ARIA label for the app switch icon button
- `ariaLabelMoreMenuIconButton`; attr: `aria-label-more-menu-icon-button`; type: `string | undefined` - ARIA label for the more menu icon button
- `companyLogo`; attr: `company-logo`; type: `string | undefined` - Company logo will be show on the left side of the application name. It will be hidden on smaller screens.
- `companyLogoAlt`; attr: `company-logo-alt`; type: `string | undefined` - Alt text for the company logo
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `hideBottomBorder`; attr: `hide-bottom-border`; type: `boolean`; default: `false` - Hides the bottom border of the header
- `name`; attr: `name`; type: `string | undefined` - Application name
- `nameSuffix`; attr: `name-suffix`; type: `string | undefined` - Define a suffix which will be displayed next to the application name
- `showMenu`; attr: `show-menu`; type: `boolean | undefined`; default: `false` - Controls the visibility of the menu toggle button based on the context of the application header. When the application header is utilized outside the application frame, the menu toggle button is displayed. Conversely, if the header is within the application frame, this property is ineffective.

## Events

- `menuToggle` - Event emitted when the menu toggle button is clicked
- `openAppSwitch` - Event emitted when the app switch button is clicked

## Methods

- None

## Slots

- `default` - Place items on the right side of the header. If the screen size is small, the items will be shown inside a dropdown.
- `ix-application-header-avatar` - Place an avatar inside the header.
- `logo` - Place a company logo inside the header. Alternatively the companyLogo property can be set.
- `overflow` - Use this slot to display additional items that do not fit in the default or secondary slot.
- `secondary` - Place additional items inside the header. They will appear after logo and name. If the screen size is small, the items will be shown inside a dropdown.

## Dependencies

- Renders: `ix-dropdown`, `ix-icon-button`, `ix-menu-expand-icon`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal (angular, angular-standalone, html, react, vue)
- about-and-legal-legacy (angular, angular-standalone, html, react, vue)
- application (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- application-header (angular, angular-standalone, html, react, vue)
- popover-news (angular, angular-standalone, html, react, vue)
- settings (angular, angular-standalone, html, react, vue)
- settings-legacy (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
