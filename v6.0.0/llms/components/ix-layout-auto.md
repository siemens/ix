# ix-layout-auto

> Responsive form layout that automatically adjusts columns to the available width.

- Web component: `<ix-layout-auto>`
- React/Vue: `IxLayoutAuto` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-layout-auto>` (`IxModule` from `@siemens/ix-angular` or `IxLayoutAuto` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/layout-auto/code.md

## Figma IDs

- None

## Properties

- `layout`; type: `{ minWidth: string; columns: number; }[]`; default: `[
    { minWidth: '0', columns: 1 },
    { minWidth: '48em', columns: 2 },
  ]` - Defines the layout of the form.

## Events

- None

## Methods

- None

## Slots

- `` - Layout content.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- form-layout-auto (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- layout-auto (angular, angular-standalone, html, react, vue)
- layout-auto-custom (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
