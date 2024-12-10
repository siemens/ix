## Guidelines

Cards make it easy for users to quickly scan small chunks of information. We typically use cards to create dashboards or modular, flexible designs that adapt seamlessly to various screen sizes. Additionally, cards can be used to draw attention to important content and serve as an entry point to deeper levels of navigation or detailed views.

Cards are interactive elements. The entire container is clickable and triggers a single action.

![Card overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4956&mode=design&t=RDimbEsIHFIXIByo-1)

1. Icon
2. Notification
3. Heading
4. Subheading
5. Expandable
6. Container
7. Expanding content

### Card types

We currently offer two types of cards: **action** and **push**.

Action cards have an icon, a heading and a subheading. We use them to trigger key actions.

Push cards contain a notification value in addition to the icon, heading, and subheading. These cards have an expandable section placed at the bottom of the container. When clicked, the expandable section displays additional content. The notification value is logically related to the items shown in the expandable area. Push cards have a fixed content height of 11rem that cannot be changed.

![Card types](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4953&mode=design&t=RDimbEsIHFIXIByo-1)

### Customization

We also offer a card container component that enables designers to display various types of content, such as images, charts or key data. Some small rules apply: Background images can stretch over the complete size of the container, whereas the card content must maintain a default padding of at least `1rem`.

![Card examples](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1329-26613&mode=design&t=sOZRNgWt7R52iLSF-1)

### Variants

Cards are available in nine variants: Insight (outline style), notification (filled style), alarm, critical, warning, success, info, neutral and primary. Each variant emphasizes different aspects to guide the user's attention. These variants differ visually through the presence of an outline and a distinct container fill color, but they all follow the same interaction pattern. We typically use the insight variant as the default choice as we find this creates a more balanced and subtle appearance for users.

![Card variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4969&mode=design&t=RDimbEsIHFIXIByo-1)

### Options

- **Icon**: Cards can, but don't have to, include an icon. The icon is positioned in the top-left corner of the container.
- **Notification**: By default, push cards display a notification value at the top of the container. This value is logically related to the items displayed in the expanding content area.
- **Heading**: Cards can, but don't have to, include a heading. The heading is aligned to the top-left corner of the container.
- **Subheading**: Cards can, but don't have to, include a subheading. The subheading is aligned to the top-left corner of the container and positioned below the heading.

### Behavior in context

- **Interaction**: As a general rule, the entire card container is interactive and clickable. If the card also contains interactive elements, the corresponding actions are triggered.
- **Size**: By default, cards have a fixed width and height. However, content overflow is not managed automatically, so the card size must be manually adjusted.
- **Placement**: We typically group cards and position them at the top-left corner of the page or content area. Within the group, cards can be organized into lists or grids using the [card list](card-list.md) component.

### States

Cards can take one of three states: Default, hover and active. Action cards also offer a selected state.

![Card states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4979&mode=design&t=RDimbEsIHFIXIByo-1)

### Dos and Don'ts

- Do group cards in lists or grids (use the [card list](card-list.md) control)
- Do keep multiple cards equal in size
- Don't nest cards inside each other
- Don't use cards to collect user input

### Related patterns:

- [Card list](card-list.md)
- [Flip](flip.md)
- [Tile](tile.md)
