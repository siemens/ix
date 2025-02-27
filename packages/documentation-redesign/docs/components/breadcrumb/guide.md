## Guidelines

Breadcrumb navigation is a UI control that allows users to track their location within an application and easily navigate to previous or child pages.
Breadcrumbs make the structure of applications transparent to users. We typically use breadcrumbs in applications that have a deep hierarchy of pages or content. This helps users understand where they are within applications, and makes it easier to navigate to pages further along the navigation tree. As a general rule, we use breadcrumbs for information architecture with more than two levels, but not as a replacement for an application's main navigation. If the information structure is extremely complex, we often consider using a tree instead of a breadcrumb.

Breadcrumb items are interactive. Users navigate to their respective location by pressing the item. Each item contains a breadcrumb label. All items in the breadcrumb path are always followed by a chevron icon except for the last item.

![Breadcrumb overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=20-8463&mode=design&t=JS1Aklcq48swr0Im-1)

1. Breadcrumb item
2. Separator
3. Dropdown

### Variants

Breadcrumbs are available as a ghost and solid variant. Both variants differ in font and fill color but interact in the same pattern. We typically use the ghost variant to create a lower visual emphasis for users.

![Breadcrumb variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=20-352&mode=design&t=JS1Aklcq48swr0Im-1)

### Options

- **Icon**: Breadcrumb items can, but don't have to, include an icon. The icon is positioned before the breadcrumb label. Icons can be included for each item or only for specific items (e.g. the root item).
- **Show child items on last item**: By default, the last item of the breadcrumb doesn't offer any user interaction. An interactive item variant is available which allows the user to browse to child pages of the current page. Pressing the item triggers a dropdown listing all child elements.
- **Visible item count**: By default, breadcrumbs display a limited number of items. This number can be adjusted.

### Behavior in context

- **Population**: As a general rule, we populate breadcrumbs location-based to reflect the hierarchy of the application and the location of the user within it. We always include the current location in the breadcrumb.
- **Overflow**: If the number of items exceeds the defined limit, items are hidden within a dropdown menu at the beginning of the path. The dropdown menu is triggered by pressing the respective item. The truncation is visualized with an ellipsis. The overflow behavior can also be triggered if the available space does not allow the complete display of the breadcrumb in one line.
- **Text truncation**: Truncation is applied to individual breadcrumb items if the maximum width of the breadcrumb item is exceeded. The label name is truncated with an ellipsis.
- **Placement**: We typically place breadcrumbs at the top left side of the page/content area, below the header and above the page title.

### States

Interactive items can take one of four states: Default, hover, active and focused. Non-interactive items are always in default state.

![States of breadcrumb items](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=120-7463&mode=design&t=JS1Aklcq48swr0Im-1)

### Dos and Don'ts

- Do label each item, i.e. use more than icons
- Do use single-line text entries as breadcrumb items have a fixed height
- Don't use breadcrumbs to display a multistep process (use the [workflow](../workflow) control instead)
- Don't show multiple breadcrumbs on one screen, e.g. in a content area and in a drawer

### Related patterns:

- [Dropdown](../dropdown)
- [Basic navigation](../basic-navigation)
- [Map navigation](../map-navigation)
- [Workflow](../workflow)
