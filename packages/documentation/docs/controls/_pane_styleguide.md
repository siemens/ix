Panes are interactive components that allow users to access hidden content or options that are not visible on the screen. 

It can help users to focus better on their tasks since related controls are visually grouped and the main content contains less information. They are beneficial to use for more compact and hierarchically better organized content, providing a more dynamic layout. You can use them to give contextual information or providing a more tidied up main content for your users for a better task focus.

![Pane overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-22044&mode=design&t=iP7h44Wf17P209P7-4)

1. Left pane (inline & expanded)
2. Top pane (inline)
3. Right pane (floating)
4. Bottom pane (inline)

## Options

- **Title**: Set a title for the pane. We typically use a short name that describes its content.
- **Icon**: An icon can be displayed on the header with the title.
- **Size**: Use one of the following values for the height of a left or right pane, and for the width of a top or bottom pane (on mobile, panes will always be full screen):
	- `240px`
	- `320px`
	- `360px`
	- `480px`
	- `33%`
	- `100%`
- **Borderless**: Panes have borders to visually split content areas. Use this option to hide them if panes are placed in other layouts than just the main content where borders are disruptive.
- **Position**: Panes can be positioned on the left, top, right or bottom.
- **Behavior**: Up to four floating or inline panes can be placed in a panel layout component.
	- **Floating**: The panes are placed above the main content but below the nav menu and header.
	- **Inline**: The panes are placed on one level with the main content. When expanded, they move the main content and reduce its available space.

## Behavior 

- **Interaction**: The floating panes has a close button on the right side of the header; the inline pane has a collapse or expand button on the left side of the header.
- **Layout**: Depending on which pane should have more focus the top/bottom or left/right panes can use more space.
- **Responsive**: On large and medium sized screens, all panes have a maximum width or height of `50%` of the screen. On small screens, all panes have full width and height (the header and nav menu is visible). Make sure your content is prepared for different screen sizes. Collapsed left and right panes are shown on the top and bottom for a more efficient use of space.

![Pane small viewport](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-26548&mode=design&t=iP7h44Wf17P209P7-4)

1. Inline panes in collapsed state
2. Inline or floating pane in expanded state
3. Opened nav menu

![Pane layouts](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1681-28910&mode=design&t=iP7h44Wf17P209P7-4)

1. Full height (left/right)
2. Full width (top/bottom)

## States

Panes have two states: 
1. Collapsed
2. Expanded

Floating panes (3) are not visible in the collapsed state since you trigger them from a control in the UI.

![Pane state](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1681-28456&mode=design&t=iP7h44Wf17P209P7-4)

## Dos and Don'ts

- Do use to organize the content when you have a lot. 
- Do use to display different views within the single screen. 
- Do use to expand or collapse the content to hide or reveal specific content. 
- Don't use for small amount of content.  

## Related patterns

[Drawers](./drawers.md)
