# ix-application

> Root container that sets up the overall application shell and layout.

- Web component: `<ix-application>`
- React/Vue: `IxApplication` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-application>` (`IxModule` from `@siemens/ix-angular` or `IxApplication` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/application/guide.md

## Figma IDs

- None

## Properties

- `appSwitchConfig`; type: `undefined | { currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string | undefined; i18nLoadingApps?: string | undefined; }` - Define application switch configuration
- `breakpoints`; type: `("sm" | "md" | "lg")[]`; default: `['sm', 'md', 'lg']` - Supported layouts
- `colorSchema`; attr: `color-schema`; type: `"dark" | "light" | "system" | undefined`; default: `'system'` - Color schema of the theme
- `forceBreakpoint`; attr: `force-breakpoint`; type: `"lg" | "md" | "sm" | undefined` - Change the responsive layout of the menu structure
- `theme`; attr: `theme`; type: `string | undefined` - Application theme

## Events

- None

## Methods

- None

## Slots

- `` - Main application content.
- `application-header` - Application header, typically an `ix-application-header`.
- `application-sidebar` - Application sidebar content.
- `bottom` - Content displayed at the bottom of the application layout.
- `menu` - Application menu, typically an `ix-menu`.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- about-and-legal (angular, angular-standalone, html, react, vue)
- about-and-legal-legacy (angular, angular-standalone, html, react, vue)
- application (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- menu-category (angular, angular-standalone, html, react, vue)
- popover-news (angular, angular-standalone, html, react, vue)
- settings (angular, angular-standalone, html, react, vue)
- settings-legacy (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
