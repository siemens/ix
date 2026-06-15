# ix-application-header

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/application-header/guide.md

## Figma IDs

- 20920:77660

## Related examples

- about-and-legal
- about-and-legal-legacy
- application
- application-advanced
- application-app-switch
- application-breakpoints
- application-header
- popover-news
- settings
- settings-legacy

## Related blocks

- unavailable (not present in registry JSON)

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

## Slots

- `default` - Place items on the right side of the header. If the screen size is small, the items will be shown inside a dropdown.
- `logo` - Place a company logo inside the header. Alternatively the companyLogo property can be set.
- `overflow` - Use this slot to display additional items that do not fit in the default or secondary slot.
- `secondary` - Place additional items inside the header. They will appear after logo and name. If the screen size is small, the items will be shown inside a dropdown.
