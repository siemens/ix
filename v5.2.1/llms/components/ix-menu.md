# ix-menu

> Primary side navigation menu of the application shell.

## Documentation

- https://ix.siemens.io//docs/components/application-menu/guide.md

## Figma IDs

- 20977:55554

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

- `applicationDescription`; attr: `application-description`; type: `string`; default: `''` - Should only be set if you use ix-menu standalone
- `applicationName`; attr: `application-name`; type: `string | undefined` - Should only be set if you use ix-menu standalone
- `enableToggleTheme`; attr: `enable-toggle-theme`; type: `boolean`; default: `false` - Show toggle between light and dark variant. Only if the provided theme have implemented both!
- `expand`; attr: `expand`; type: `boolean`; default: `false` - Toggle the expand state of the menu
- `i18nAriaLabelMenu`; attr: `i18n-aria-label-menu`; type: `string`; default: `'Application Navigation'` - i18n aria-label for menu. Gets read out by screen readers when first focusing the menu
- `i18nCollapse`; attr: `i18n-collapse`; type: `string`; default: `'Collapse'` - i18n label for 'Collapse' button
- `i18nExpand`; attr: `i18n-expand`; type: `string`; default: `'Expand'` - i18n label for 'Expand' button
- `i18nLegal`; attr: `i18n-legal`; type: `string`; default: `'About & legal information'` - i18n label for 'About & legal information' button
- `i18nNavigationHint`; attr: `i18n-navigation-hint`; type: `string`; default: `'Use Up and Down arrow keys to navigate between menu items'` - i18n description for menu keyboard navigation hint, read by screen readers when focusing the menu
- `i18nSettings`; attr: `i18n-settings`; type: `string`; default: `'Settings'` - i18n label for 'Settings' button
- `i18nToggleTheme`; attr: `i18n-toggle-theme`; type: `string`; default: `'Toggle theme'` - i18n label for 'Toggle theme' button
- `pinned`; attr: `pinned`; type: `boolean`; default: `false` - Menu stays pinned to the left
- `showAbout`; attr: `show-about`; type: `boolean`; default: `false` - Is about tab visible
- `showSettings`; attr: `show-settings`; type: `boolean`; default: `false` - Is settings tab visible
- `startExpanded`; attr: `start-expanded`; type: `boolean`; default: `false` - If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.

## Events

- `expandChange` - Menu expanded
- `mapExpandChange` - Map Sidebar expanded
- `openAbout` - Event emitted when the about button is clicked
- `openAppSwitch` - Event emitted when the app switch button is clicked
- `openSettings` - Event emitted when the settings button is clicked

## Slots

- `` - Menu items.
- `bottom` - Menu items displayed at the bottom.
- `home` - Menu item displayed in the home position.
- `ix-menu-about` - About menu content.
- `ix-menu-avatar` - Avatar displayed in the menu header.
- `ix-menu-settings` - Settings menu content.
