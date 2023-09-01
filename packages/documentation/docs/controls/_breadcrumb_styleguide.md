Breadcrumb navigation is a UI control that allows users to track their location within an application and easily navigate to previous or child pages.
Breadcrumbs make the structure of your application transparent to the user. They offer means to navigate through the application. We typically use breadcrumbs in applications that have a deep hierarchy of pages or content. This can help users understand where they currently are within the application, and make it easier for them to quickly navigate to pages further up in the navigation tree. As a general rule, we don't use breadcrumbs for an information architecture of two levels or less. We don't use breadcrumbs as replacement for a main navigation. If the information structure is extremely complex, you can consider using a tree instead of a breadcrumb.

Breadcrumb items are interactive and allow the user to navigate to their respective location by pressing the item. Each item contains a breadcrumb label. All but the last item in the breadcrumb path are always followed by a chevron icon.

![Breadcrumb overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=20%3A8463&mode=design&t=JS1Aklcq48swr0Im-1)
1. Breadcrumb item
2. Seperator
3. Dropdown

## Variants

Breadcrumbs are available as a ghost and a solid variant. Both variants differ in font color and fill color but not in their interaction patterns. We typically use the ghost variant, as it creates a lower visual emphasis which can improve attention guadiance for the user.

![Breadcrumb variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=20%3A352&mode=design&t=JS1Aklcq48swr0Im-1)

## Options
- **Icon**: Breadcrumb items can, but don't have to, include an icon. The icon is positioned before the breadcrumb label. Icons can be included for each item or only for specific items (e.g. the root item).
- **Show child items on last item**:  By default, the last item of the breadcrumb doesn't offer any user interaction. An interactive item variant is available which allows the user to browse to children of the current page. Pressing the item triggers a dropdown listing all child elements.
- **Visible item count**: By default, breadcrumbs display a limited number of items. This number can be adjusted.

## Behavior in context

- **Population**: As a general rule, we popluate breadcrumbs location-based to reflect the hierarchy of the application and the location of the user in it. We always include the current location in the breadcrumb.
- **Overflow**: If the number of items exceeds the defined limit, excessive items are hidden within a dropdown menu at the beginning of the path. The dropdown menu is triggered by pressing the respective item. The truncation is visualized with a ellipsis. The overflow behaviour can also be triggered if the available space does not allow the complete display of the breadcrumb in one line.
- **Text truncation**: Truncation is applied to individual breadcrumb items if the maximum width of the breadcrumb item is exceeded. The label name is truncated with an ellipsis.
- **Placement**: We typically place breadcrumbs at the top left side of the page/content area, below the header and above the page title.

## States

Interactive items can take one of four states: Default, hover, active and focused. Non interactive items are always in default state.

![States of breadcrumb items](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=120%3A7463&mode=design&t=JS1Aklcq48swr0Im-1)

## Do and don't


- Don't use breadcrumbs to display a multistep process. Use the [workflow](workflow.md) control instead.
- Don't show multiple breadcrumbs on one screen (e.g. in a content area and in a drawer).
- The breadcrumb item has a fixed height for single-line text entries.
- Each item has a label, don't use only icons.

## Related patterns:

- [Dropdown](dropdown.md)
- [Basic navigation](navigation/basic-navigation.md)
- [Map navigation](navigation/map-navigation.md)
- [Workflow](workflow.md)
