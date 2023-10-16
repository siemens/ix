The Navigation Menu is an essential part of the [Basic Navigation](./basic-navigation.md) and the [Map Navigation](./map-navigation.md). It offers a way to directly navigate to main parts of an application. 

![Navigation Menu collapsed and expanded](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=990-122297&mode=design&t=JbZngO5IAS8hvpTb-11)

- (1) Expand/collapse icon button: expands and collapses the Navigation Menu
- (2) [Avatar button](#avatar-button): (optional): Shows the logged in user and provides access to user related actions
- (3) Navigation section: navigates through the main parts of an application
- (4) [Bottom section](#bottom-section): hosts infrastructural actions and additional content, that will not navigate away from the selected main part

<br>

## Avatar button

The Avatar button is optional. It shows information about the logged in user. When collapsed it shows only the avatar. Expanded it shows additional user information. On click it a dropdown menu with user related actions. The available actions are application specific. The logout item is available by default.

![Avatar dropdown menu](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-70909&mode=design&t=Ch2wsi2EtQ3sPBpS-11)

### Options of Avatar button
| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| top | defines the first line of the additional user information, intended to show primary user information like first and last name of the user or the username, depending on the available information. An overflow will be clipped with ellipsis (...) |
| bottom | defines the second line of additional user information, intended to show secondary information like the current role. An overflow will be clipped with ellipsis (...) |
| initials | Will show the Avatar with initials |
| image | Will show an image avatar |

<br>

## Menu Item and Menu Category
Menu Items represent the main parts of an application. They have an icon for a quick visual identification. When the Navigation Menu is expanded the full name of the item is visible. 

Menu Categories can host Menu items as a second navigation level. Such second level Menu Items items don’t have icons.

![Navigation Item](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=998-67465&mode=design&t=puecEZZMJ24R1ngI-11)

- (1) Selected item, current content
- (2) Item with notification
- (3) Unselected item
- (4) Menu Category, holds Menu Items as a second level navigation, on click the second level items appear 
- (5) Second level navigation menu, appears when Navigation Menu is collapsed
- (6) Second level navigation expanded inline, appears when Navigation Menu is expanded

![Selected Navigation Item with sub items](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1005-10267&mode=design&t=ljAWsgheUZngQeQG-11)

- (7) The Menu Category appears selected if one of its children items is selected
- (8) When the second level Menu Items are visible the actually selected item appears selected too

### Options of Menu Items and Menu Category 

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| notifications (number) | Will display a number at the top right corner of the icon (2)|



### Bottom section
Items in this section will not navigate away from the current content. They either only toggle states (e.g. light and dark mode) or open a layer over the current content. So the user will not lose their current context by interacting with these items.

![Bottom section icons](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1005-10817&mode=design&t=ljAWsgheUZngQeQG-11)

- (1) Settings, will open an settings overlay
- (2) Toggle theme, will toggle between light and dark theme
- (3) Custom item
- (4) About & legal information, opens an overlay intended to display legal information, release notes, license information etc.
- (5) Only relevant for Map Navigation: collapses/expands side panel

<br>

## Options of Navigation Menu

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| enableSettings <br> `default: true` | Shows the settings icon (gear wheel) in the Bottom section, this item opens a settings overlay, the content can be freely defined|
| enableToggleTheme <br> `default: false` | Shows the theme toggle icon, offers an easy and direct way to toggle between light and dark mode. Should not be used when dedicated theme settings are available elsewhere, e.g. in the settings overlay
| enableMapExpand <br> `default: false`| Only relevant for the [Map Navigation](./map-navigation.md), will show an icon that expands/collapses the side panel of the Map Navigation

There are other options available but without relevance for the UX guidelines. For more information see the Code tab.  

<br>

## Behavior

![Navigation Menu overflow behavior](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-68267&mode=design&t=RG8M7S3eIKxiDqv5-11)

- The Navigation Menu expands and collapses with a transition
- The widths of the collapse and expand state are fixed and cannot be configured
- The Menu Items can overflow, recognizable by the shadow at the bottom and/or top 

<br>

## Dos and Don‘ts
- Do not place non-navigational item in the navigation section. The navigation section is for navigational items only.
- Do not place navigation items in the bottom section. Items in the bottom section must not navigate away from the current context.
