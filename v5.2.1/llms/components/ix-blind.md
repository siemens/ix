# ix-blind

> Collapsible container that expands and collapses to show or hide its content.

## Documentation

- https://ix.siemens.io//docs/components/blind/guide.md

## Figma IDs

- 388:3986

## Related examples

Example file links are relative to this Markdown file.

- blind
  - angular:
    - `angular/blind.css`: [file](../../examples/angular/blind.css)
    - `angular/blind.html`: [file](../../examples/angular/blind.html)
    - `angular/blind.ts`: [file](../../examples/angular/blind.ts)
  - angular-standalone:
    - `angular-standalone/blind.css`: [file](../../examples/angular-standalone/blind.css)
    - `angular-standalone/blind.html`: [file](../../examples/angular-standalone/blind.html)
    - `angular-standalone/blind.ts`: [file](../../examples/angular-standalone/blind.ts)
  - html:
    - `html/blind.css`: [file](../../examples/html/blind.css)
    - `html/blind.html`: [file](../../examples/html/blind.html)
  - react:
    - `react/blind.scoped.css`: [file](../../examples/react/blind.scoped.css)
    - `react/blind.tsx`: [file](../../examples/react/blind.tsx)
  - vue:
    - `vue/blind.css`: [file](../../examples/vue/blind.css)
    - `vue/blind.vue`: [file](../../examples/vue/blind.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `collapsed`; attr: `collapsed`; type: `boolean`; default: `false` - Collapsed state
- `icon`; attr: `icon`; type: `string | undefined` - Optional icon to be displayed next to the header label
- `label`; attr: `label`; type: `string | undefined` - Label of blind
- `sublabel`; attr: `sublabel`; type: `string | undefined` - Secondary label inside blind header
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'filled'` - Blind variant

## Events

- `collapsedChange` - Collapsed state changed

## Slots

- `` - Content shown when the blind is expanded.
- `custom-header` - Custom header content replacing the label and icon.
- `header-actions` - Additional actions displayed in the header.
