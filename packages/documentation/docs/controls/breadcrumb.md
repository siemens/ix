import Props from './../auto-generated/ix-breadcrumb/props.md';
import Events from './../auto-generated/ix-breadcrumb/events.md';

import ItemProps from './../auto-generated/ix-breadcrumb-item/props.md';

import SourceBreadcrumb from './../auto-generated/previews/web-component/breadcrumb.md'
import SourceBreadcrumbTruncate from './../auto-generated/previews/web-component/breadcrumb-truncate.md'
import SourceBreadcrumbNextItems from './../auto-generated/previews/web-component/breadcrumb-next-items.md'

import SourceReactBreadcrumb from './../auto-generated/previews/react/breadcrumb.md'
import SourceReactBreadcrumbTruncate from './../auto-generated/previews/react/breadcrumb-truncate.md'
import SourceReactBreadcrumbNextItems from './../auto-generated/previews/react/breadcrumb-next-items.md'

import SourceAngularBreadcrumb from './../auto-generated/previews/angular/breadcrumb.ts.md'
import SourceAngularBreadcrumbTruncate from './../auto-generated/previews/angular/breadcrumb-truncate.ts.md'
import SourceAngularBreadcrumbNextItems from './../auto-generated/previews/angular/breadcrumb-next-items.ts.md'

import Playground from '@site/src/components/Playground'

# Breadcrumb

Breadcrumb navigation is a UI control that allows users to track their location within a website or application and easily navigate to previous and/ or sibling pages.

<!-- What is offered by the iX component?  -->

<!-- Add here illustration/ example breadcrumb overview -->

Go to:
- [Variants](#variants)
- [Behavior in context](#behavior-in-context)
- [States](#states)
- [Dos and don't](#dos-and-don't)

## Usage

Breadcrumbs make the structure of your appliction transparent to the user. They offer means to navigate through the application.

### When to use

Use breadcrumb navigation when your website or application has a deep hierarchy of pages or content. This can help users understand where they are within the application, and make it easier for them to navigate back to previous pages.

### When not to use

Breadcrumbs should not be used for an information architecture of two levels or less. Don't use breadcrumbs as replacement for a main navigation. If the information structure is extremly complex, consider using a tree instead of a breadcrumb. 

## Code

<Playground
name="breadcrumb"
height="8rem"
frameworks={{
    react: SourceReactBreadcrumb,
    angular: SourceAngularBreadcrumb,
    javascript: SourceBreadcrumb
}}>
</Playground>

### Truncate

<Playground
name="breadcrumb-truncate"
height="10rem"
hideInitalCodePreview
frameworks={{
    react: SourceReactBreadcrumbTruncate,
    angular: SourceAngularBreadcrumbTruncate,
    javascript: SourceBreadcrumbTruncate
}}>
</Playground>

### Lazy loaded next items

<Playground
name="breadcrumb-next-items"
height="8rem"
hideInitalCodePreview
frameworks={{
    react: SourceReactBreadcrumbNextItems,
    angular: SourceAngularBreadcrumbNextItems,
    javascript: SourceBreadcrumbNextItems
}}>
</Playground>


## Variants

### Emphasis 

In order to vary the visual emphasis of a breadcrumbs control, a ghost variant (default) and a solid variant are available. Both variants differ in font color and fill color but not in their interaction patterns.

### Item position

Breadcrumb items vary depending on their position in the path. Items with child elements include a chevron icon pointing right after the item label and offer hover and active states. Pressing the item triggers a flyout listing all child elements. The last item of the path doesn't support user interaction.

### Content

Breadcrumb items can, but don't have to, include an icon. The icon is positioned before the breadcrumb label. Icons can be included for each item or only for specific items (e.g. the root item).

## Behavior in context

### Population

The breadcrumb is populated by adding items according to the (path of the user / the hierachy of the application and the position withing this hierarchy ?)

<!-- which one is it? -->

### Overflow 

The breadcrumb control is set to display a limited number of items (default: 9 items). If the number of items exceeds the defined limit, excessive items are hidden within a dropdown menu at the beginning of the path. The dropdown menu is triggered by pressing the respective item. The truncation is visualized with a ellipsis.

The overflow behaviour can also be triggered if the available space does not allow the complete display of the breadcrumb in one line.

<!-- Open question: ellipsis is text or icon?  -->

Truncation is applied to individual breadcrumb items if the maximum width of the breadcrumb item is exceeded. The label name is truncated with an ellipsis.

<!-- add example overflow & truncation-->
<!-- Open question: How is the limit defined for the labels? -->

### Lazy loading

<!-- add example -->
<!-- Open question: How is it done? -->

### Placement

Breadcrumbs are placed at the top left side of the page/ content area. They are positioned below the header and above the page title.

## States

### Default item

| State   | Description                                                                 |
| --------| --------------------------------------------------------------------------- |
| Hover   | The hover state is indicated by fill color change.                          |
| Active  | The active state is indicated by fill color change. Equal to pressed state. |
| Focused | The focused state is indicated by a focus frame.                            |

### Last item

| State   | Description                                                                 |
| --------| --------------------------------------------------------------------------- |
| Hover   | The hover state is indicated by ...                      |
| Active  | Not available.                                                              |
| Focused | The focused state is indicated by a focus frame.                            |

<!-- focused state on last item/ no siblings available? -->
<!-- hover state last item: bold in light theme, white in dark theme? -->

## Anatomy

### Main elements

The breadcrumb consists of at least one item. Each item contains a breadcrumb label. All but the last item in the breadcrumb path are followed by a chevron icon. 

### Sizing

- The breadcrumb has a fix height defined by breadcrumb item height.
- The breadcrumb item has a fixed height for single-line text entries.
- The breadcrumb item has a minimum width of ... and maximum width of .... Between these limits, the item width is depending on the content.

### Spacing

Between breadcrumb items, a space of 0.25 rem is introduced. 

## Dos and don'ts

- Don't use breadcrumbs to display a multistep process. Use a workflow control instead.
- Don't show multiple breadcrumbs on one screen (e.g. in a content area and in a drawer).

## Related patterns:

- Workflow
- Basic navigation
- Map navigation
- Dropdown.
