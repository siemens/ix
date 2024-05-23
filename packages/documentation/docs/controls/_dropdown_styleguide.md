Dropdown containers display a menu with additional items as soon as a user clicks on the trigger element, e.g. a dropdown button. Clicking on one of the items in the dropdown performs the action. We typically use dropdowns to allow users to select one option from a list of available choices.

For information about the trigger element that opens the dropdown, please refer to our [dropdown button](buttons/dropdown-button.md) and [split button](buttons/split-button.md) components.

![Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2353-2278&mode=design&t=OVHeXvLZYLkP2CzN-4)

1. Dropdown container
2. Item
3. Header
4. Quick actions
5. Submenu
6. Checked
7. Separator
8. Icon
9. Label

## Options

- **Header:** Add a header for the dropdown container. This allows users to better understand which elements are in the dropdown.
- **Quick Actions:** Add a quick action bar. Add 3 to 5 actions/items to the quick actions. We typically use quick actions to access common functions such as cut, copy and paste.
- **Checked:** Mark selected items in the dropdown with a check mark. We typically use check marks when an item can be activated (e.g. for the dropdown "Sort by:" selection: name, modified date, create date).
- **Submenu:** Add a submenu for a multi-level dropdown. We typically use a submenu when there is a long item list and different systematic categorization within the items.
- **Separator:** Add a separator to visually divide items from each other. We normally use a separator to isolate individual elements from a cohesive item list.
- **Icon:** Icons can also be displayed with item labels. We typically use an icon in addition to the label when it has a recognizable benefit.
- **Label:** Set a label for the dropdown item. We typically use short labels including verbs.
- **Trigger:** The trigger defines which element opens the dropdown. A trigger should also be defined for a dropdown submenu. We typically use a button as the trigger element.
- **Anchor:** An anchor defines where the dropdown is placed. When no anchor is defined the trigger element is used as the anchor.
- **Close Behavior:** Defines whether a click inside and/or outside the dropdown closes the dropdown. A submenu is always closed together with the parent dropdown. Three Options are possible: 
    - Inside: clicking within the dropdown closes the dropdown.
    - Outside: clicking outside the dropdown closes the dropdown.
    - Both: clicking within and outside the dropdown closes the dropdown.
- **Placement:** Place a dropdown at the top, bottom, left or right edge as well as at the beginning or end of the trigger element. The placement may be automatically adjusted in case it cannot be displayed correctly (detailed behavior described in the context). We typically use the default (bottom right) placement option to ensure consistency.
- **Date Selection:** Use the component [date dropdown](date-dropdown.md) to get a date selection in the dropdown.

![Dropdown Examples](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2372-2696&mode=design&t=OVHeXvLZYLkP2CzN-4)

## Behavior in context
- **Text truncation:** The labels of the items and the header only consist of one line. A truncation only occurs if there is not enough space on the screen.
- **Scrollbar:** A dropdown is provided with a scrollbar when the dropdown takes up 50% of the screen.
- **Placement:** The position depends on the trigger/anchor element (e.g. button). By default, the dropdown is displayed at the bottom right of trigger element. When there is not enough space for the selected placement, it will be corrected automatically. The placement of the submenu is always generated automatically. 
- **Quick actions:** Quick actions only consist of icons, therefore it is important to use icons that are understandable without a label or tooltip. A quick action bar can also be used without additional items in the dropdown. 

![Dropdown in Context](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2463-3302&t=QaiBJKNOwHMdBuk2-4)

## States
Dropdown items have five states: Default, hover, active, disabled and focused. When a submenu is in an active state, the submenu displays an additional dropdown with selectable options.

![Item States](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2343-42235&mode=design&t=OVHeXvLZYLkP2CzN-4)

## Dos and Don’ts
- Do structure the items in a dropdown in a coherent way; use submenus, quick actions and separators if beneficial
- Do use dropdowns to showcase related actions
- Do disable items that can't be used at the moment
- Don’t use global navigation options in a dropdown
- Don’t use too many dropdown items - we recommend 7 +/- 2
- Don’t insert the [date picker](date-picker.md) or [date time picker](date-time-picker.md) components into a dropdown (use the [date dropdown](date-dropdown.md) instead)

## Related patterns
- [Dropdown button](buttons/dropdown-button.md)
- [Split button](buttons/split-button.md) 
- [Date dropdown](date-dropdown.md) 
- [Select](select.md)