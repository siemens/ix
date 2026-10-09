# ix-info-page

> A page layout for communicating information or errors and guiding users towards a solution.

- Web component: `<ix-info-page>`
- React/Vue: `IxInfoPage` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-info-page>` (`IxModule` from `@siemens/ix-angular` or `IxInfoPage` from `@siemens/ix-angular/standalone`)

## Documentation

- None

## Figma IDs

- 145668:12518

## Properties

- `copyText`; attr: `copy-text`; type: `string | undefined` - Optional explanation of the topic and how it can be resolved.
- `icon`; attr: `icon`; type: `string`; default: `iconWarning` - Icon displayed above the title.
- `iconColor`; attr: `icon-color`; type: `string`; default: `'--si-sys-color-background-warning'` - Color of the default icon.
- `instructions`; attr: `instructions`; type: `string | undefined` - Optional instructions describing what the user should do next.
- `titleText`; attr: `title-text`; type: `string` - Short and concise title describing the topic.

## Events

- None

## Methods

- None

## Slots

- `actions` - Optional actions related to the message.
- `image` - An optional illustration or custom icon replacing the default icon.

## Dependencies

- Renders: `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- info-page (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
