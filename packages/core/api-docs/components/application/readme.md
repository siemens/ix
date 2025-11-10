
<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description                                        | Type                                                                                                                                                                                                                                                 | Default              |
| ----------------------- | ------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `appSwitchConfig`       | `app-switch-config`       | Define application switch configuration            | `undefined \| { currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string \| undefined; i18nLoadingApps?: string \| undefined; }` | `undefined`          |
| `breakpoints`           | `breakpoints`             | Supported layouts                                  | `("sm" \| "md" \| "lg")[]`                                                                                                                                                                                                                           | `['sm', 'md', 'lg']` |
| `forceBreakpoint`       | `force-breakpoint`        | Change the responsive layout of the menu structure | `"lg" \| "md" \| "sm" \| undefined`                                                                                                                                                                                                                  | `undefined`          |
| `theme`                 | `theme`                   | Application theme                                  | `"classic" \| "classic-dark" \| "classic-light" \| string & Record<never, never> \| undefined`                                                                                                                                                       | `undefined`          |
| `themeSystemAppearance` | `theme-system-appearance` | Use the system appearance dark or light            | `boolean`                                                                                                                                                                                                                                            | `false`              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
