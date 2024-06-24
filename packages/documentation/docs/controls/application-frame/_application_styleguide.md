Application is a technical and infrastructural component without a direct visual appearance. It lays out the top level app elements like [header](./application-header.md), [navigation menu](./application-menu.md) and [content](./content.md). Furthermore, it controls the breakpoint handling and the theming of an application.


### Application switch

![Application switch and modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1665-19417&mode=design&t=I0iEEuzKJJPK4Sum-11)

1. Application switch button opens the modal
2. Application switch modal with a list of applications
3. Current application
4. Link to another application with icon, name and optional description
5. Indicator "open in a new browser tab"
6. Close icon

With the application switch, users can navigate across applications. The interaction control – the application switch button (1) – is in the [application header](./application-header.md). Clicking the button opens a modal (2) with a list of available applications your users can switch to. This list is technically defined in the application component and its content depends on your product strategy. Our lists typically contain applications belonging to a software suite, applications with a similar scope or applications a user has purchased. 

Clicking the current application closes the modal. Clicking another application closes the modal and opens the target application in the same or in a new browser tab, depending on the defined target option. Switching between browser tabs is much faster than loading the applications each time in the same browser tab, however,  switching between multiple browser tabs could confuse users.

We typically avoid opening the same application in multiple browser tabs. Instead, we recommend switching to the browser tab where the application is already open. Nonetheless, be aware this does not work under all circumstances and some browsers cannot support this feature. 
<br></br>


## Options

- **forceBreakpoint:** Forces a specific breakpoint "lg", "md" or "sm". This can be used to force a specific application behavior that ignores the current browser viewport width.

## Behavior
The application component automatically adapts, by default, to three breakpoints and changes the application layout accordingly:
- "lg" for large screens (min-width 62em)
- "md" for medium screens (min-width 48em)
- "sm" for small screens (min-width 36em)
