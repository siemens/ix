import Playground from '@site/src/components/Playground';

![Application header with different options](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1634-56424&mode=design&t=4XzscFw57dE7McUX-11)

1. [Application switch](#application-switch) (optional)
2. [Brand logo](#brand-logo)
3. [Application name](#application-name)
4. [Slot](#slot) for additional elements (optional)
5. [Avatar](#avatar) (optional)


### Application switch
With the application switch we introduce a way to navigate across applications. Clicking the application switch (1) opens a modal with a list of available applications. Find more details in the application switch chapter of the [application](./application.md) component.


### Brand logo
Provide the brand logo (2) as SVG. The logo must be monochromatic and must not contain strokes as it will be colored during runtime depending on the theme.
For **Siemens Applications**, only the Siemens logo coming with the brand theme is allowed.


### Application name
The application name (3) shows the official name of the application. It can be extended with additional information about the application context by using the pipe character "|" and 2 spaces before and after to separate both.


### Slot

![Examples of slot usages](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1679-19526&mode=design&t=UPXhDWuRHtygtfFI-11)

We use this slot to provide additional high level information or actions and functions with impact on the application context. 

Please be aware, a possible overflow is not handled automatically. At breakpoint sm the slot gets collapsed and is only accessible via the overflow icon.

We at Siemens DI use the slot primarily for
- Log in button, if the application is able to run without a logged in user
- Changing the top level data context like environment, workspace, tenant or similar
- Important contextual information users should be aware of (like local times in remote access use cases)
- Access to application wide actions like a global search  

Align other usages of the slot with the iX team to keep a consistent look an feel of our applications within Siemens DI.


### Avatar

With the new modular application frame we moved the avatar from the navigation menu to the application header. This ensures the avatar as  security relevant information is available at all breakpoints. Nonetheless, if you still use the [basic navigation](./basic-navigation.md) or the [map navigation](./map-navigation.md), the avatar ist still placed in the navigation menu for compatibility reasons.

![Avatar and avatar dropdown](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1635-60462&mode=design&t=UPXhDWuRHtygtfFI-11)

6. Avatar dropdown
7. User avatar
8. Top text line
9. Bottom text line

The avatar is an optional element and indicates the current logged in user. If your application doesn’t support different users or user profiles, don’t use the avatar.  

Clicking the avatar opens a dropdown (6) with additional user information (7, 8, 9) and possibly other user related actions like log out, profile settings, user settings.

![Examples of access login](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1636-62468&mode=design&t=4XzscFw57dE7McUX-11)

If your application can be used without being logged in, you can offer access to a login process in different ways, depending on you general login concept. For example:
- Show a log in button in the [slot for additional elements](#slot-for-additional-elements) and simply hide the avatar
- Show the avatar with a placeholder image, and show an according text in the user information section

## Options

If the application is hosted inside a framework that comes with its own header, you can omit the entire application header to avoid two headers on top of each other. The framework’s header will then provide the brand identity, the application name and possible other information.

## Behavior

The header automatically adapts the breakpoints defined in the [application](./application.md).

![Application header at breakpoints lg/md and sm](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1636-62980&mode=design&t=4XzscFw57dE7McUX-11)

10. Layout at breakpoint lg and md
11. Layout at breakpoint (sm) 
12. Application menu icon
13. Overflow icon to access the slot content (14)
14. Slot content
15. Close icon to close the application menu
16. Application menu with the application switch icon at the top

At breakpoints "lg" and "md" the application header behaves identically. Only at breakpoint "sm" the layout changes as following

- The application menu hides, therefore the application menu icon appears (12). A click opens the application menu (16).
- The application switch (if used) moves to the application menu (16)
- The brand logo disappear
- The slot for additional elements (if used) moves to the overflow dropdown that opens on click on the overflow icon (13).


## Do’s and Don’ts
- Do use the avatar dropdown for actions related to the current logged in user
- Don’t overload the slot with too many elements, a possible overflow is not handled automatically
- Don’t use the avatar if your application does not support user profiles
