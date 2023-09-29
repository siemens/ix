A Card is a UI control that is used to neatly organize and group related information about a specific subject. Cards make it easy for users to quickly scan small chunks of information. We typically use cards to create dashboards or modular and flexible designs that can easily adapt to different screen sizes. Additionally, cards could be used to draw attention to important content and could serve as entry point to deeper levels of navigation or detailed views. 

Cards are interactive elements where the entire container is clickable and triggers a single action.


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
Action cards consist of an icon, a heading and a subheading and we use them to trigger key actions.
Push cards additionally contain a notification value and have an expandable section placed at the bottom of the container that displays additional content when clicked. The notification value is in a logical relationship with the items shown in the expandable area.

![Card types](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4953&mode=design&t=RDimbEsIHFIXIByo-1)

## Variants
Cards are available in 9 variants: Outline, filled, alarm, critical, warning, success, info, neutral, primary. Each variant expresses a different emphasis to guide the user's attention. They differ visually in the presence of an outline and a different fill color of the container but interact in the same pattern. We typically use the outline variant as default to create a balanced and subtle appearance for users.

![Card variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4969&mode=design&t=RDimbEsIHFIXIByo-1)

## Options

- **Icon**: Cards can, but don't have to, include an icon. The icon is positioned in the top left corner.
- **Notification**: By default, push cards display a notification value at the top of the container. This value has a logical relationship to the items displayed in the expanding content area.
- **Heading**: Cards can, but don't have to, include a heading. The heading is aligned to the top left of the container.
- **SubHeading**: Cards can, but don't have to, include a subHeading. The subHeading is aligned to the top left of the container and positioned below the heading.

## Behavior in context

- **Interaction**: As a general rule, the whole card container is interactive/clickable. If the card additionally contains some interactive elements, the according action is triggered.
- **Size**: By default, cards have a fixed width and height. Content overflow is not handled automatically. Therefore the card size must be adapted manually.
- **Placement**: We typically group cards and place the group at the top left of the page or content area. Inside the group, cards can be organized in lists or grids. Use the [card list](card-list.md) control for it.

## States 
Cards can take one of three states: Default, hover and active. Action cards offer additionally a selected state.

![Card states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858%3A4979&mode=design&t=RDimbEsIHFIXIByo-1)

## Dos and don'ts
- Do group cards in a list or grid (use the [card list](card-list.md) control for it)
- Try to keep cards equal sized, do not use too many variable heights/widths
- Don't nest cards inside each other
- Don't use cards to collect user input 

## Related patterns:

- [Card list](card-list.md)
- [Flip](flip.md)
- [Tile](tile.md)
