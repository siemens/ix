Panes are interactive components that allow users to access content that isn't constantly visible on the screen. Panes consist of a basic layout with a header and a content area. When collapsed, panes can be fully hidden or reduced to a bar. In our applications, we often include contextual information, options, trees and lists in the content area. 

Panes can help users to focus better on their tasks since related controls are visually grouped and the main content contains less information. They are beneficial to use for more compact and hierarchically better organized content, providing a more dynamic layout.

![Pane overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-22044&mode=design&t=iP7h44Wf17P209P7-4)


## Variants

- **Floating**: Can be placed up to up to four floating or inline in a panel layout component, in the floating panes are positioned higher than the main content but beneath the navigation menu and header.
- **Inline**: The panes are placed on one level with the main content. When expanded, they move the main content and reduce its available space.

## Options
- **Left pane**: (inline & expanded)
- **Top pane**: (inline)
- **Right pane**: (floating)
- **Bottom pane**: (inline)
- **Heading**: Set a headline for the pane. We typically use a short name that describes its content.
- **Icon**: An icon can be displayed before the heading to the title.
- **Size**: Use one of the following values for the height of a left or right pane, and for the width of a top or bottom pane (on mobile, panes will always be full screen):
	- `240px`
	- `320px`
	- `360px`
	- `480px`
	- `33%`
	- `100%`
- **Borderless**: Panes can have borders to visually split them from other content areas. We typically use a borderless pane when it is placed within layouts that already contain other visual means for splitting areas.
- **Position**: Panes can be positioned on the left, top, right or bottom.
- **Layout**: Depending on which pane should have more focus the top/bottom or left/right panes can use more space.

![Pane layouts](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1681-28910&mode=design&t=iP7h44Wf17P209P7-4)

1. Full height (left/right)
2. Full width (top/bottom)

## Behavior 

- **Interaction**: The floating panes has a close button on the right side of the header; the inline pane has a collapse or expand button on the left side of the header.
- **Responsive**: On large and medium sized screens, all panes have a maximum width or height of `50%` of the screen. On small screens, all panes have full width and height (the header and nav menu is visible).  Collapsed left and right panes are shown on the top and bottom for a more efficient use of space.

![Pane small viewport](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-26548&mode=design&t=iP7h44Wf17P209P7-4)

1. Inline panes in collapsed state
2. Inline or floating pane in expanded state
3. Opened nav menu
4. Stacking behavior

## States

Panes have two states: collapsed and expanded. Appearance of the states varies between variants and screen sizes.

Floating panes (3) are not visible in the collapsed state since you trigger them from a control in the UI.


## Dos and Don'ts

- Do use to organize the content and guide users' attention. 
- Do use to display different views within the single screen. 
- Do use to expand or collapse the content to hide or reveal specific content. 
- Don't use for small amount of content.  
- Don't use for content that should always be visible to the user.

## Related patterns

[Drawers](./drawers.md)
