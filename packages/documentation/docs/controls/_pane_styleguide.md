Panes are interactive components that allow users to access content that isn't constantly visible on the screen. Panes consist of a basic layout with a header and a content area. When collapsed, panes can be fully hidden or reduced to a bar. In our applications, we often include contextual information, options, trees and lists in the content area. 

Panes can help users to focus better on their tasks since related controls are visually grouped and the main content contains less information. They are beneficial to use for more compact and hierarchically better organized content, providing a more dynamic layout.

![Pane overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-22044&mode=design&t=iP7h44Wf17P209P7-4)

1. Left pane, inline
2. Top pane, inline
3. Right pane, floating
4. Bottom pane, inline

## Options
- **Borderless**: Panes can have borders to visually split them from other content areas. We typically use borderless panes when they are placed within layouts that already contain other visual means for splitting areas.
- **Heading**: Set a headline for the pane. We typically use a short name that describes its content.
- **Icon**: An icon can be displayed before the heading to the title.
- **Position**: Panes can be positioned on the left, top, right or bottom. Typically at Siemens, we use left panes for structuring components like trees or lists and right panes for contextual information. We use top and bottom panes to communicate a clear "top to bottom" hierarchy to the user.
- **Size**: Picking a suitable pane width or height assures a smooth experience to the user that doesn't require scrolling. Sizes can be picked either as fixed size (in pixel) and as relative size (in percent) depending on the intended layout. Sizes only apply to medium and large screen sizes. On small screens panes are always be full screen (see responsive behavior).
- **Variant**: Floating panes are placed above (z-axis) the main content but below the nav menu and header. When expanded, they cover a part of the main content. Inline panes are placed on one level with the main content. When expanded, they move the main content and reduce its available space.

- **Layout**: Depending on which pane should have more focus the top/bottom or left/right panes can use more space.

![Pane layouts](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1681-28910&mode=design&t=iP7h44Wf17P209P7-4)

1. Full height (left/right)
2. Full width (top/bottom)

## Behavior 
- **Interaction**: Inline panes take a bar appearance when collapsed containing the title and the expand button. Users can expand inline panes by pressing on the expand button. To expand floating panes, users typically click on a button or another interactive component within the main content. They can close floating panes by either pressing on the button on the right side of the header or clicking outside of the pane area. This removes the pane from their view.
- **Overflow**: When content extends the available space within the pane, scrollbars appear. The header stays fixed at the top while users can scroll the content area.
- **Stacking**: When users expand multiple panes of the same variant and position, panes stack up. Inline panes stack ... Floating panes **Fill in final behavior**
- **Placement**: We typically fit a pane layout within the complete content area of a page bounded by the applications header on top and the navigation menu on the left.
- **Responsiveness**: On large and medium size screens, all panes have a maximum width or height of `50%` of the screen. On small screens, all panes have full width and expand to full height. The header and navigation menu are visible. We show collapsed left and right panes on the top and bottom for a more efficient use of space.

![Pane small viewport](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-26548&mode=design&t=iP7h44Wf17P209P7-4)

1. Inline panes in collapsed state
2. Inline or floating pane in expanded state
3. Opened nav menu

## States
Panes have two states: collapsed and expanded. Appearance of the states varies between variants and screen sizes.

Floating panes are not visible in the collapsed state as users trigger them from a control in the UI.


## Dos and Don'ts
- Do use to organize the content and guide users' attention. 
- Do use to display different views within the single screen. 
- Do use to expand or collapse the content to hide or reveal specific content. 
- Don't use for small amount of content.  
- Don't use for content that should always be visible to the user.
- Don't fit oversized content to avoid the need for scrolling.

## Related patterns

[Drawers](./drawers.md)
[Header](../controls/navigation/application-header.md)
[Menu](../controls/navigation/basic-navigation.md)
