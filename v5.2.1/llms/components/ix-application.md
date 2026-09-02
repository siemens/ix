# ix-application

> Root container that sets up the overall application shell and layout.

## Documentation

- https://ix.siemens.io//docs/components/application/guide.md

## Figma IDs

- None

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

- `appSwitchConfig`; type: `undefined | { currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string | undefined; i18nLoadingApps?: string | undefined; }` - Define application switch configuration
- `breakpoints`; type: `("sm" | "md" | "lg")[]`; default: `['sm', 'md', 'lg']` - Supported layouts
- `colorSchema`; attr: `color-schema`; type: `"dark" | "light" | "system" | undefined`; default: `'system'` - Color schema of the theme
- `forceBreakpoint`; attr: `force-breakpoint`; type: `"lg" | "md" | "sm" | undefined` - Change the responsive layout of the menu structure
- `theme`; attr: `theme`; type: `string | undefined` - Application theme

## Events

- None

## Slots

- `` - Main application content.
- `application-header` - Application header, typically an `ix-application-header`.
- `application-sidebar` - Application sidebar content.
- `bottom` - Content displayed at the bottom of the application layout.
- `menu` - Application menu, typically an `ix-menu`.
