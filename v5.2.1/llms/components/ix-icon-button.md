# ix-icon-button

> Button that displays only an icon to trigger an action.

## Documentation

- https://ix.siemens.io//docs/components/icon-button/guide.md

## Figma IDs

- 270:941

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- [upload](../blocks.md#upload)
  - angular:
    - `angular/upload.ts`: [file](../../blocks/angular/upload.ts)
    - `angular/upload.html`: [file](../../blocks/angular/upload.html)
    - `angular/upload.css`: [file](../../blocks/angular/upload.css)
  - react:
    - `react/upload.tsx`: [file](../../blocks/react/upload.tsx)
    - `react/upload.module.css`: [file](../../blocks/react/upload.module.css)

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled
- `icon`; attr: `icon`; type: `string | undefined` - Icon name
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-text-primary`.
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `oval`; attr: `oval`; type: `boolean`; default: `false` - Button in oval shape
- `size`; attr: `size`; type: `"12" | "16" | "24"`; default: `'24'` - Size of icon in button
- `type`; attr: `type`; type: `"button" | "submit"`; default: `'button'` - Type of the button
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'subtle-primary'` - Variant of button

## Events

- None

## Slots

- None
