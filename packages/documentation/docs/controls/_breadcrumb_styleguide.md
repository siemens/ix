Breadcrumb navigation is a UI control that allows users to track their location within an application and easily navigate to previous or child pages.

![Breadcrumb overview](/img/pattern_illustrations/Breadcrumb_overview.png)

Go to:

- [Variants](#variants)
- [Behavior in context](#behavior-in-context)
- [States](#states)
- [Dos and don't](#dos-and-don't)

## Usage

Breadcrumbs make the structure of your application transparent to the user. They offer means to navigate through the application.

### When to use

Use breadcrumb navigation when your application has a deep hierarchy of pages or content. This can help users understand where they are within the application, and make it easier for them to navigate back to previous pages.

### When not to use

Breadcrumbs should not be used for an information architecture of two levels or less. Don't use breadcrumbs as replacement for a main navigation. If the information structure is extremely complex, consider using a tree instead of a breadcrumb.

## Variants

![Breadcrumb variants](/img/pattern_illustrations/Breadcrumb_variants.png)

### Emphasis

In order to vary the visual emphasis of a breadcrumbs control, a ghost variant (default) and a solid variant are available. Both variants differ in font color and fill color but not in their interaction patterns.

### Item interactivity

Breadcrumb items are interactive and allow the user to navigate to their respective location by pressing the item. An exception is the last item in a breadcrumb control representing the current page. By default, this item does not offer any user interaction. An interactive item variant is available which allows the user to browse to children elements of the current page. Pressing the item triggers a dropdown listing all child elements.

### Content

Breadcrumb items can, but don't have to, include an icon. The icon is positioned before the breadcrumb label. Icons can be included for each item or only for specific items (e.g. the root item).

## Behavior in context

### Population

The breadcrumb should be populated location-based to reflect the hierarchy of the application and the location of the user in it. The current location should always be included in the breadcrumb.

### Overflow

The breadcrumb control is set to display a limited number of items (default: 9 items). If the number of items exceeds the defined limit, excessive items are hidden within a dropdown menu at the beginning of the path. The dropdown menu is triggered by pressing the respective item. The truncation is visualized with a ellipsis.

The overflow behaviour can also be triggered if the available space does not allow the complete display of the breadcrumb in one line.

Truncation is applied to individual breadcrumb items if the maximum width of the breadcrumb item is exceeded. The label name is truncated with an ellipsis.

<!-- add example overflow & truncation-->

### Placement

Breadcrumbs are placed at the top left side of the page/content area. They are positioned below the header and above the page title.

## States

### Interactive item

| State   | Description                                                                          |
| ------- | ------------------------------------------------------------------------------------ |
| Hover   | The hover state is indicated by font and fill color change.                          |
| Active  | The active state is indicated by font and fill color change. Equal to pressed state. |
| Focused | The focused state is indicated by a focus frame.                                     |

### Not interactive item

No interactions available.

## Anatomy

### Main elements

The breadcrumb consists of at least one item. Each item contains a breadcrumb label. All but the last item in the breadcrumb path are always followed by a chevron icon.

### Sizing

- The breadcrumb has a fixed height defined by breadcrumb item height.
- The breadcrumb has a maximum width defined by the content area width. Exceeding the width will trigger truncation.
- The breadcrumb item has a fixed height for single-line text entries.
- The breadcrumb item width depends on the content and is limited to a maximum width of 14 rem.

### Spacing

Between breadcrumb items, a space of 0.25 rem is introduced.

## Dos and don'ts

- Don't use breadcrumbs to display a multistep process. Use a [workflow](workflow.md) control instead.
- Don't show multiple breadcrumbs on one screen (e.g. in a content area and in a drawer).

## Related patterns:

- [Dropdown](dropdown.md)
- [Basic navigation](navigation/basic-navigation.md)
- [Map navigation](navigation/map-navigation.md)
- [Workflow](workflow.md)
