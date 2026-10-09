# ix-breadcrumb-item

> A single entry within a breadcrumb navigation trail.

- Web component: `<ix-breadcrumb-item>`
- React/Vue: `IxBreadcrumbItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-breadcrumb-item>` (`IxModule` from `@siemens/ix-angular` or `IxBreadcrumbItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/breadcrumb/guide.md

## Figma IDs

- 358:3004

## Properties

- `breadcrumbKey`; attr: `breadcrumb-key`; type: `string` - Will be used as the key for the breadcrumb item, which will be emitted in the itemClick event when the breadcrumb item is clicked.
- `href`; attr: `href`; type: `string | undefined` - URL for the button link. When provided, the button will render as an anchor tag.
- `icon`; attr: `icon`; type: `string | undefined` - Icon to be displayed next ot the label
- `label`; attr: `label`; type: `string | undefined` - Breadcrumb label
- `rel`; attr: `rel`; type: `string | undefined` - Specifies the relationship between the current document and the linked document when href is provided.
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top" | undefined`; default: `'_self'` - Specifies where to open the linked document when href is provided.

## Events

- None

## Methods

- None

## Slots

- `` - Breadcrumb item label.

## Dependencies

- Renders: `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- breadcrumb (angular, angular-standalone, html, react, vue)
- breadcrumb-next-items (angular, angular-standalone, html, react, vue)
- breadcrumb-truncate (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
