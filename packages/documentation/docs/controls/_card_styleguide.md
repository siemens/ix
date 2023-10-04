A Card is a UI control that is used to neatly organize and group related information about a specific subject. Cards make it easy for users to quickly scan small chunks of information. We typically use cards to create dashboards or modular, flexible designs that adapt seamlessly to various screen sizes. Additionally, cards could be used to draw attention to important content and could serve as entry point to deeper levels of navigation or detailed views. 

Cards are interactive elements where the entire container is clickable, triggering a single action.

![Card overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4956&mode=design&t=RDimbEsIHFIXIByo-1)
1. Icon
2. Notification
3. Heading
4. SubHeading
5. Expandable
6. Container
7. Expanding content

## Types

We currently offer two types of cards, **action** and **push** cards.

Action cards consist of an icon, a heading and a subheading. We use them to trigger key actions.

Push cards contain a notification value in addition to the icon, heading, and subheading. These cards have an expandable section placed at the bottom of the container. When clicked, the expandable section displays additional content. The notification value is logically related to the items shown in the expandable area.

![Card types](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4953&mode=design&t=RDimbEsIHFIXIByo-1)

## Variants
Cards are available in nine variants: Outline, filled, alarm, critical, warning, success, info, neutral, primary. Each variant emphasizes different aspects to guide the user's attention. These variants differ visually through the presence of an outline and a distinct container fill color, but they all follow the same interaction pattern. Typically, we use the outline variant as the default choice to create a balanced and subtle appearance for users.

![Card variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4969&mode=design&t=RDimbEsIHFIXIByo-1)

## Options

- **Icon**: Cards can, but don't have to, include an icon. The icon is positioned in the top-left corner of the container.
- **Notification**: By default, push cards display a notification value at the top of the container. This value is logically related to the items displayed in the expanding content area.
- **Heading**: Cards can, but don't have to, include a heading. The heading is aligned to the top-left corner of the container.
- **SubHeading**: Cards can, but don't have to, include a subHeading. The subheading is aligned to the top-left corner of the container and positioned below the heading.

## Behavior in context

- **Interaction**: As a general rule, the entire card container is interactive and clickable. If the card also contains interactive elements, the corresponding actions are triggered.
- **Size**: By default, cards have fixed width and height. Content overflow is not automatically managed, so the card size must be manually adjusted.
- **Placement**: We typically group cards and position the group at the top-left corner of the page or content area. Within the group, cards can be organized into lists or grids using the [card list](card-list.md) component.

## States 
Cards can take one of three states: Default, hover and active. Action cards, in addition, offer a selected state.

![Card states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4979&mode=design&t=RDimbEsIHFIXIByo-1)

## Dos and don'ts
- Do group cards in a list or grid (use the [card list](card-list.md) control for it)
- Try to keep cards equal sized, do not use too many variable heights/widths
- Don't nest cards inside each other
- Don't use cards for collecting user input 

## Related patterns:

- [Card list](card-list.md)
- [Flip](flip.md)
- [Tile](tile.md)
