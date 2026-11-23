# ix-content-header

> Header area of a content page showing the title and page-level actions.

- Web component: `<ix-content-header>`
- React: `IxContentHeader` from `@siemens/ix-react`
- Vue: `IxContentHeader` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/content-header/guide.md

## Figma IDs

- 4727:112521

## Properties

- `ariaLabelMoreActions`; attr: `aria-label-more-actions`; type: `string`; default: `'More actions'` - Accessible label for the secondary actions overflow menu.
- `hasBackButton`; attr: `has-back-button`; type: `boolean`; default: `false` - Display a back button
- `headerSubtitle`; attr: `header-subtitle`; type: `string | undefined`; default: `undefined` - Subtitle of Header
- `headerTitle`; attr: `header-title`; type: `string | undefined` - Title of Header
- `textOverflow`; attr: `text-overflow`; type: `"ellipsis" | "wrap"`; default: `'wrap'` - Controls how the title and subtitle handle limited horizontal space. Ellipsis visually truncates the text without adding a tooltip.
- `variant`; attr: `variant`; type: `"primary" | "secondary"`; default: `'primary'` - Variant of content header

## Events

- `backButtonClick` - Triggered when back button is clicked

## Methods

- None

## Slots

- `` - Default slot for action buttons or other content
- `header` - Content to be placed in the header area next to the title
- `secondary-actions` - ix-button and ix-icon-button actions that collapse into a vertical overflow menu when space is limited. Provide an accessible name for icon-only actions.

## Dependencies

- Renders: `ix-dropdown`, `ix-dropdown-item`, `ix-icon-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application (angular, angular-standalone, html, react, vue)
- application-advanced (angular, angular-standalone, html, react, vue)
- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- content (angular, angular-standalone, html, react, vue)
- content-header (angular, angular-standalone, html, react, vue)
- content-header-no-back (angular, angular-standalone, html, react, vue)
- content-header-text-overflow (angular, angular-standalone, html, react, vue)
- content-header-with-slot (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
