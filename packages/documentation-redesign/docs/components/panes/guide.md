## Usage
### Guidelines

Panes have a header and a content area. When collapsed, panes are either hidden or reduced to a bar. In our applications, we often include contextual information, options, trees and lists inside panes.

Panes help users focus on tasks as related controls are visually grouped and the main content has less information. They are also beneficial for compact and hierarchically organized content and provide a more dynamic layout.

![Pane overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-22044&mode=design&t=iP7h44Wf17P209P7-4)

1. Left pane, inline
2. Top pane, inline
3. Right pane, floating
4. Bottom pane, inline

#### Options

- **Heading**: Set a headline for the pane (we normally use a short content description).
- **Icon**: Panes can display an icon in the pane header next to the title.
- **Composition**: Panes can be positioned on the left, top, right or bottom. We often use left panes for structuring components like trees or lists, and right panes for contextual information. Top and bottom panes are less common in our applications, but can help communicate a clear "top to bottom" hierarchy.
- **Size**: Sizes can be picked either as a fixed size (in pixels) or as a relative size (in percentage) depending on the intended layout. However, picking sizes only applies to medium and large screens as small screen panes are always displayed in full screen (see responsiveness below for more information). We usually choose a pane width and height that avoids the need for scrolling in our applications.
- **Borderless**: Panes can have borders to visually split them from other content areas. We typically use borderless panes when placed within layouts that already have other visual means to split areas.
- **Hide on collapse**: Define whether a pane is visible in its collapsed state. If it is visible, it has a bar appearance when collapsed that contains both the title and the expand button. We usually use inline panes with a collapsible option and floating panes without since they are triggered from a dedicated control like a button or a list item.
- **Variant**: When used within a layout, floating panes are placed above (z-axis) the main content but below the navigation menu and header. When expanded, they cover a part of the main content. Inline panes are placed on one level with the main content. When expanded, they move the main content and reduce its available space.
- **Layout**: Depending on which pane needs more focus, the top/bottom or left/right panes can use more space.

![Pane layouts](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1681-28910&mode=design&t=iP7h44Wf17P209P7-4)

1. Full height (left/right)
2. Full width (top/bottom)

#### Behavior

- **Interaction**: Users expand panes that are collapsible by pressing on the expand button. To expand panes with hidden collapsed state, users typically click on a button or another interactive component within the main content. They close these panes by either pressing on the button on the right side of the header or clicking outside the pane area. This removes the pane from their view.
- **Overflow**: When content extends the available space within the pane, scrollbars appear. Headers stay fixed at the top allowing users to scroll the content area. We like to avoid overfilling panes with content to remove the need for scrolling.
- **Stacking**: When users expand multiple panes within a pane layout, panes are stacked.
- **Placement**: We typically fit a pane layout within the complete content area of a page bounded by the application header on top and the navigation menu on the left.
- **Responsiveness**: On large and medium size screens, all panes have a maximum width or height of `50%` of the available space. On small screens, all panes have full width and expand to full height, but the header and navigation menu remain visible. We show collapsed left and right panes on the top and bottom for a more efficient use of space.

![Pane small viewport](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-26548&mode=design&t=iP7h44Wf17P209P7-4)

1. Inline panes in collapsed state
2. Inline or floating pane in expanded state
3. Opened navigation menu

#### States

Panes have two states: collapsed and expanded. The appearance of the states varies between variants and screen sizes.

#### Dos and Don'ts

- Do use panes to organize your content and guide your users' attention
- Do use panes to display different views within a single screen
- Do use panes to expand/collapse content or hide/reveal content
- Don't use panes for a small amount of content
- Don't use panes for content that should stay visible

#### Related patterns

- [Drawers](../drawer)
- [Header](../application-header)
- [Menu](../application-menu)
