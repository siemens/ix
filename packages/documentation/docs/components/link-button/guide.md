---
doc-type: 'tab-item'
---
# Link button - Usage

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1506-4003&mode=design&t=5MYmq6zAbfw7xIkC-11)

1. Chevron
2. Label

## Options

- **Disabled:** Link buttons can be disabled (see also button states).
- **Target:** To define where a link opens, there are four options:

| Value     | Description                                       |
| --- | ------------------------------------------------- |
| `_self`   | opens the document in the same window/tab         |
| `_blank`  | opens the document in a new window/tab            |
| `_parent` | opens the document in the parent frame            |
| `_top`    | opens the document in the full body of the window |

(Reference: https://www.w3schools.com/html/html_links.asp)

- **URL:** Specify the link destination.

## Behavior in context

- **Interaction:** Link buttons can be triggered by pressing anywhere within the button area. When link buttons are focused, they can be triggered by pressing `Enter`.
- **Placement:** We typically place link buttons below or next to related content but not within paragraphs. It's also possible to place multiple link buttons on top of each other to create link lists.
- **Line length:** Link buttons cannot support line break or text truncation. Link button texts are displayed in one line. If there is not enough space, the complete link text is not visible.

## States

Link buttons take five states: Default, hover, active, disabled and focused. On hover, the link destination is shown. In a disabled state, link buttons are visually displayed but don't offer any user interaction.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1507-9250&mode=design&t=5MYmq6zAbfw7xIkC-11)

## Dos and Don'ts

- Do use link buttons for navigation
- Don't use link buttons to indicate actions
- Don't place link buttons within a paragraph
