# ix-breadcrumb-item

> A single entry within a breadcrumb navigation trail.

## Documentation

- https://ix.siemens.io//docs/components/breadcrumb/guide.md

## Figma IDs

- 358:3004

## Related examples

Example file links are relative to this Markdown file.

- breadcrumb
  - angular:
    - `angular/breadcrumb.ts`: [file](../../examples/angular/breadcrumb.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb.ts`: [file](../../examples/angular-standalone/breadcrumb.ts)
  - html:
    - `html/breadcrumb.html`: [file](../../examples/html/breadcrumb.html)
  - react:
    - `react/breadcrumb.tsx`: [file](../../examples/react/breadcrumb.tsx)
  - vue:
    - `vue/breadcrumb.vue`: [file](../../examples/vue/breadcrumb.vue)
- breadcrumb-next-items
  - angular:
    - `angular/breadcrumb-next-items.ts`: [file](../../examples/angular/breadcrumb-next-items.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-next-items.ts`: [file](../../examples/angular-standalone/breadcrumb-next-items.ts)
  - html:
    - `html/breadcrumb-next-items.html`: [file](../../examples/html/breadcrumb-next-items.html)
  - react:
    - `react/breadcrumb-next-items.tsx`: [file](../../examples/react/breadcrumb-next-items.tsx)
  - vue:
    - `vue/breadcrumb-next-items.vue`: [file](../../examples/vue/breadcrumb-next-items.vue)
- breadcrumb-truncate
  - angular:
    - `angular/breadcrumb-truncate.ts`: [file](../../examples/angular/breadcrumb-truncate.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-truncate.ts`: [file](../../examples/angular-standalone/breadcrumb-truncate.ts)
  - html:
    - `html/breadcrumb-truncate.html`: [file](../../examples/html/breadcrumb-truncate.html)
  - react:
    - `react/breadcrumb-truncate.tsx`: [file](../../examples/react/breadcrumb-truncate.tsx)
  - vue:
    - `vue/breadcrumb-truncate.vue`: [file](../../examples/vue/breadcrumb-truncate.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `breadcrumbKey`; attr: `breadcrumb-key`; type: `string` - Will be used as the key for the breadcrumb item, which will be emitted in the itemClick event when the breadcrumb item is clicked.
- `href`; attr: `href`; type: `string | undefined` - URL for the button link. When provided, the button will render as an anchor tag.
- `icon`; attr: `icon`; type: `string | undefined` - Icon to be displayed next ot the label
- `label`; attr: `label`; type: `string | undefined` - Breadcrumb label
- `rel`; attr: `rel`; type: `string | undefined` - Specifies the relationship between the current document and the linked document when href is provided.
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top" | undefined`; default: `'_self'` - Specifies where to open the linked document when href is provided.

## Events

- None

## Slots

- `` - Breadcrumb item label.
