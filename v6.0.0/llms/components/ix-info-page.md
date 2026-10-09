# ix-info-page

> A page layout for communicating information or errors and guiding users towards a solution.

## Documentation

- None

## Figma IDs

- 145668:12518

## Related examples

Example file links are relative to this Markdown file.

- info-page
  - angular:
    - `angular/info-page.ts`: [file](../../examples/angular/info-page.ts)
  - angular-standalone:
    - `angular-standalone/info-page.ts`: [file](../../examples/angular-standalone/info-page.ts)
  - html:
    - `html/info-page.html`: [file](../../examples/html/info-page.html)
  - react:
    - `react/info-page.tsx`: [file](../../examples/react/info-page.tsx)
  - vue:
    - `vue/info-page.vue`: [file](../../examples/vue/info-page.vue)

## Related patterns

Pattern and file links are relative to this Markdown file.

- None

## Properties

- `copyText`; attr: `copy-text`; type: `string | undefined` - Optional explanation of the topic and how it can be resolved.
- `icon`; attr: `icon`; type: `string`; default: `iconWarning` - Icon displayed above the title.
- `iconColor`; attr: `icon-color`; type: `string`; default: `'--si-sys-color-background-warning'` - Color of the default icon.
- `instructions`; attr: `instructions`; type: `string | undefined` - Optional instructions describing what the user should do next.
- `titleText`; attr: `title-text`; type: `string` - Short and concise title describing the topic.

## Events

- None

## Slots

- `actions` - Optional actions related to the message.
- `image` - An optional illustration or custom icon replacing the default icon.
