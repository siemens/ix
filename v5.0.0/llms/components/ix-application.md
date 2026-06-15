# ix-application

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/application/guide.md

## Figma IDs

- None

## Related examples

- about-and-legal
- about-and-legal-legacy
- application
- application-advanced
- application-app-switch
- application-breakpoints
- menu-category
- popover-news
- settings
- settings-legacy

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `appSwitchConfig`; type: `undefined | { currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string | undefined; i18nLoadingApps?: string | undefined; }` - Define application switch configuration
- `breakpoints`; type: `("sm" | "md" | "lg")[]`; default: `['sm', 'md', 'lg']` - Supported layouts
- `colorSchema`; attr: `color-schema`; type: `"dark" | "light" | "system" | undefined`; default: `'system'` - Color schema of the theme
- `forceBreakpoint`; attr: `force-breakpoint`; type: `"lg" | "md" | "sm" | undefined` - Change the responsive layout of the menu structure
- `theme`; attr: `theme`; type: `string | undefined` - Application theme

## Events

- None

## Slots

- None
