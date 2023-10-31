The navigation menu is an essential part of the [basic navigation](./basic-navigation.md) and the [map navigation](./map-navigation.md). It offers a way to directly navigate to the main parts of your application. 

![Navigation menu collapsed and expanded](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=990-122297&mode=design&t=JbZngO5IAS8hvpTb-11)

- (1) Expand/collapse icon button: expands and collapses the navigation menu
- (2) [Avatar button](#avatar-button): optionally shows the logged-in user and provides access to user-related actions
- (3) Navigation section: navigates through the main parts of an application
- (4) [Bottom section](#bottom-section): hosts infrastructural actions and additional content but does not navigate away from the selected main part

## Avatar button

The avatar button is optional. It shows information about the logged-in user. When collapsed it shows only the avatar, and when expanded it shows additional user information. A dropdown menu with user-related actions appears when selecting (note the available actions are specific to each application). The log out item is available by default.

![Avatar dropdown menu](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-70909&mode=design&t=Ch2wsi2EtQ3sPBpS-11)

### Avatar button options
| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| top | defines the first line of the additional user information, we typically use this to show primary user information (first and last name or username), depending on the available information. Overflows are clipped with an ellipsis (...). |
| bottom | defines the second line of additional user information, used to show secondary information, for example user role. Overflows are clipped with an ellipsis (...). |
| initials | shows avatars with initials |
| image |shows avatars with images |

## Menu item and menu category
Menu items represent the main parts of an application. They have an icon for quick visual identification. When the navigation menu is expanded, the full name of the item is visible. 

Menu categories can host menu items as a second navigation level. Second level menu items items don’t have icons.

![Navigation item](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=998-67465&mode=design&t=puecEZZMJ24R1ngI-11)

- (1) Selected item, current content
- (2) Item with notification
- (3) Unselected item
- (4) Menu category: holds menu items as a second level navigation (on selection, the second level items appear) 
- (5) Second level navigation menu: appears when navigation menu is collapsed
- (6) Second level navigation expanded inline: appears when navigation menu is expanded

![Selected navigation item with sub-items](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1005-10267&mode=design&t=ljAWsgheUZngQeQG-11)

- (7) The menu category appears selected if one of its children items is selected
- (8) When second level menu items are visible, the currently selected item also appears selected

### Options of menu items and menu category 

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| notifications (number) |  displays a number at the top right corner of the icon (2) |



### Bottom section
Items in this section do not navigate away from the current content. They either only toggle states, e.g. light and dark mode, or open a layer over the current content. This means users do not lose their current context by interacting with these items.

![Bottom section icons](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1005-10817&mode=design&t=ljAWsgheUZngQeQG-11)

- (1) Settings: opens an settings overlay
- (2) Toggle theme: toggles between light and dark theme
- (3) Custom item
- (4) About & legal information: opens an overlay to display legal information, release notes, license information, etc.
- (5) Only relevant for map navigation: collapses/expands side panel

<br></br>

## Navigation menu options

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| enableSettings  `default: true` | shows the settings icon (gear wheel) in the bottom section, this item opens a settings overlay, the content can be freely defined |
| enableToggleTheme  `default: false` | shows the theme toggle icon, offers an easy and direct way to toggle between light and dark mode. We do not use this when dedicated theme settings are available elsewhere, e.g. in the settings overlay |
| enableMapExpand  `default: false`| only relevant for [map navigation](./map-navigation.md), shows an icon that expands/collapses the side panel of the map navigation |

 See the code tab for more information and other options available.

<br></br>

## Behavior

![Navigation Menu overflow behavior](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-68267&mode=design&t=RG8M7S3eIKxiDqv5-11)

- Navigation menu expands and collapses with a transition
- The width of the collapse and expand state are fixed and cannot be configured
- Menu items can overflow, this is recognizable by the shadow at the bottom and/or top 

<br></br>

## Dos and Don‘ts
- Don't place non-navigational items in the navigation section
- Don't place navigation items in the bottom section as items in the bottom section must not navigate away from the current context
