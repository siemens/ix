# ix-application-header

> Top header bar of the application shell holding branding, navigation, and actions.

## Documentation

- https://ix.siemens.io//docs/components/application-header/guide.md

## Figma IDs

- 20920:77660

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
- settings-legacy
  - angular:
    - `angular/settings-legacy.html`: [file](../../examples/angular/settings-legacy.html)
    - `angular/settings-legacy.ts`: [file](../../examples/angular/settings-legacy.ts)
  - angular-standalone:
    - `angular-standalone/settings-legacy.html`: [file](../../examples/angular-standalone/settings-legacy.html)
    - `angular-standalone/settings-legacy.ts`: [file](../../examples/angular-standalone/settings-legacy.ts)
  - html:
    - `html/settings-legacy.html`: [file](../../examples/html/settings-legacy.html)
  - react:
    - `react/settings-legacy.tsx`: [file](../../examples/react/settings-legacy.tsx)
  - vue:
    - `vue/settings-legacy.vue`: [file](../../examples/vue/settings-legacy.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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
- `ix-application-header-avatar` - Place an avatar inside the header.
- `logo` - Place a company logo inside the header. Alternatively the companyLogo property can be set.
- `overflow` - Use this slot to display additional items that do not fit in the default or secondary slot.
- `secondary` - Place additional items inside the header. They will appear after logo and name. If the screen size is small, the items will be shown inside a dropdown.
