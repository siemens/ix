Card lists are UI controls that display a large number of cards or items of the same type in a lightweight, grouped manner. Users can hide and reveal the card list content by clicking on a control element. We typically use card lists on dashboards to show a huge amount of information (often flexible or unknown in size) in an organized and hierarchical way. By limiting the number of visible items, we reduce the cognitive load. Further content is indicated by a control element that serves as an entry point to access more items.

Card lists consist of a header section at the top and a content section below. The header section includes an icon button with a chevron on the left, followed by the card list's label. In the content section, items of the same type can be arranged in two different layout styles: stack and scroll.

![Card list overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=897%3A31906&mode=design&t=2pf1CqY5ifYKN3F2-1)

1. Header section
2. Content section
3. "Show all" button
3. "Show more" card
## Types
We currently offer two types of card list styles: stack and scroll. The stack style displays content items from left to right next to each other and wraps them into a new line if running out of space. This results in a dynamically changing height of the content section.

![Card list - stack style](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=910%3A8581&mode=design&t=2pf1CqY5ifYKN3F2-1)

The scroll style displays the content items from left to right next to each other in a single row. If running out of space, horizontal scrolling is enabled, indicated by a semi-transparent area on the left or right end of the content section.

![Card list - scroll style](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=915%3A8647&mode=design&t=2pf1CqY5ifYKN3F2-1)

## Options
- **Label**: Card lists can, but don't have to, include a label in the header section. The label is positioned right next to the chevron.
- **Collapse**: By default, the card list is expanded. This can be customized to suit the specific needs of an application.
- **Max visible cards**: By default, the card list displays a maximum of 12 items. If more items are available, a "Show more" card is displayed.
- **Show all button**: The header section can contain a button that triggers the action to show all card list items. Typically, these items are shown on a new page.
- **String - Show all**: By default, the button to display all items is labeled "Show all".
- **Show all count**: This represents the total number of card list items. This value is displayed on the "Show all" button.
- **String - More cards**: By default, the card used to indicate when there are more items available is labeled "There are more cards available".

## Behavior in context
- **Interaction**: Users expand and collapse the card list content by clicking on the icon button with the chevron in the header section. When the card list is expanded, content below the card list is pushed downwards.
- **"Show all" button**:  In some cases, it makes sense for the card list to show only the most important or most recent items related to a specific topic. To access all items, users click on the "Show All" button in the header section. Typically, these items are displayed on a new page.
- **"Show more" card**: To reduce cognitive load, the number of visible items inside a list can be limited. The "Show more" card serves as an indicator that more information is available. Clicking on the card can either display the next chunk of items or show all items on a new page, similar to the "Show all" button pattern.

## Dos and don'ts
- Try to keep cards or items within the card list of equal size
- Don't place different types of components within the card list
- Don't nest card lists within each other

## Related patterns:
- [Blind](blind.md)
- [Card](card.md)
