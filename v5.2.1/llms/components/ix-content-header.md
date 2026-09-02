# ix-content-header

> Header area of a content page showing the title and page-level actions.

## Documentation

- https://ix.siemens.io//docs/components/content-header/guide.md

## Figma IDs

- 4727:112521

## Related examples

Example file links are relative to this Markdown file.

- content-header
  - angular:
    - `angular/content-header.html`: [file](../../examples/angular/content-header.html)
    - `angular/content-header.ts`: [file](../../examples/angular/content-header.ts)
  - angular-standalone:
    - `angular-standalone/content-header.html`: [file](../../examples/angular-standalone/content-header.html)
    - `angular-standalone/content-header.ts`: [file](../../examples/angular-standalone/content-header.ts)
  - html:
    - `html/content-header.html`: [file](../../examples/html/content-header.html)
  - react:
    - `react/content-header.tsx`: [file](../../examples/react/content-header.tsx)
  - vue:
    - `vue/content-header.vue`: [file](../../examples/vue/content-header.vue)
- content-header-text-overflow
  - angular:
    - `angular/content-header-text-overflow.html`: [file](../../examples/angular/content-header-text-overflow.html)
    - `angular/content-header-text-overflow.ts`: [file](../../examples/angular/content-header-text-overflow.ts)
  - angular-standalone:
    - `angular-standalone/content-header-text-overflow.html`: [file](../../examples/angular-standalone/content-header-text-overflow.html)
    - `angular-standalone/content-header-text-overflow.ts`: [file](../../examples/angular-standalone/content-header-text-overflow.ts)
  - html:
    - `html/content-header-text-overflow.html`: [file](../../examples/html/content-header-text-overflow.html)
  - react:
    - `react/content-header-text-overflow.tsx`: [file](../../examples/react/content-header-text-overflow.tsx)
  - vue:
    - `vue/content-header-text-overflow.vue`: [file](../../examples/vue/content-header-text-overflow.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `hasBackButton`; attr: `has-back-button`; type: `boolean`; default: `false` - Display a back button
- `headerSubtitle`; attr: `header-subtitle`; type: `string | undefined`; default: `undefined` - Subtitle of Header
- `headerTitle`; attr: `header-title`; type: `string | undefined` - Title of Header
- `textOverflow`; attr: `text-overflow`; type: `"ellipsis" | "wrap"`; default: `'wrap'` - Controls how the title and subtitle handle limited horizontal space. Ellipsis visually truncates the text without adding a tooltip.
- `variant`; attr: `variant`; type: `"primary" | "secondary"`; default: `'primary'` - Variant of content header

## Events

- `backButtonClick` - Triggered when back button is clicked

## Slots

- `default` - Default slot for action buttons or other content
- `header` - Content to be placed in the header area next to the title
