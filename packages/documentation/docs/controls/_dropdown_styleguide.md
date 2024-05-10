Dropdown containers are elements that display a menu with additional elements as soon as a user clicks on the top element, e.g. a dropdown button. Clicking on one of the items in the dropdown triggers the action. We typically use dropdowns to allow users to select one option from a list of available choices.

For information about the element that opens the dropdown container, read the article about the dropdown button [Dropdown button](dropdown-button.md) or the [Split button](split-button.md).

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2353-2278&mode=design&t=OVHeXvLZYLkP2CzN-4)

1. Dropdown Container
2. Item
3. Header
4. Quick Actions
5. Submenu Item
6. Checked
7. Separator
8. Icon
9. Label

## Options

- **Header:** Add a header for the dropdown container. This provides a better understanding for the user what items are found in the dropdown.
- **Quick Actions:** Add a quick action bar. We typically use quick actions to access common functions such as cut, copy and paste.
- **Checked:** Mark selected items in the dropdown with a check mark.We typically use check marks if an item can be activated (e.g. for the dropdown "Sort by:" selection: Name, Change date, Create date).
- **Submenu:** Add a submenu for a multi-level dropdown. We typically use a submenu when there is a long item list and a varied categorization within the items.
- **Separator:** Add a separator to visually divide items from each other. 
- **Icon:** Icons can also be displayed with item labels. The symbols can also be displayed together with the item descriptions. We typically use a symbol in addition to the label if it has a recognizable benefit.
- **Label:** Set a label for the dropdown item. We typically use short labels including verbs.
- **Anchor:** An anchor defines where the dropdown is opened. If no anchor is defined the trigger element is used as the anchor.
- **Trigger:** The trigger defines which element opens the dropdown. A trigger should also be defined for a dropdown submenu. Typically the Button is the trigger element.
- **Close Behavior:** Defines which click action closes the dropdown. A dropdown of a submenu is closed with the higher-level dropdown, regardless of its own closing behavior.
Three Options are possible: 
    - Inside: clicking within the dropdown closes the dropdown.
    - Outside: clicking outside the dropdown closes the dropdown.
    - Both: clicking within and outside of the dropdown closes the dropdown.
- **Placement:** Defines where the dropdown appears when it is opened. The position depends on the element that opens the drop-down list (e.g. button). By default, the dropdown is displayed at the bottom right of the button. 
You can also choose between different directions (top, bottom, left, right) and two options for the alignment on the button (start, end). If there is not enough space for the selected placement, it will be corrected automatically. The placement of the submenu is always generated automatically. We typically use the default placement option to ensure consistency. 
- **Date Selection:** Use the element [Date dropdown](date-dropdown.md) to get a date selection in the dropdown.

![Dropdown Examples](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2372-2696&mode=design&t=OVHeXvLZYLkP2CzN-4)

## Behavior in context
- **Text truncation:**  Item and header labels are not truncated. The whole text in the items and headers consists of one line only. The text is cut off after 58 characters with "...".
- **Scrollbar:** A dropdown is provided with a scrollbar if the dropdown takes up 50% of the screen.

## States
Dropdown container items have five: Default, hover, active, disabled and focused. When active, the drop-down submenu elements display an additional level with selectable options.

![Item States](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2343-42235&mode=design&t=OVHeXvLZYLkP2CzN-4)

## Dos and Don’ts
- Do structure your items in advance
- Do use dropdowns to showcase related actions
- Do deactivate items that can't be used at the moment
- Don’t use global navigation options in a dropdown
- Don’t use too many dropdown items - we recommend 7 +/- 2

## Related patterns
- [Dropdown button](dropdown-button.md)
- [Split button](split-button.md) 
- [Date dropdown](date-dropdown.md) 
- [Select](select.md)