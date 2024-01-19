Application is a technical and infrastructural component without a direct visual appearance. It layouts the top level app elements like [header](./application-header.md), [navigation menu](./application-menu.md) and [content](./content.md). Furthermore, it controls the breakpoint handling and the theming of an iX application.


### Application switch

![Application switch and modal](https://www.f^igma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1665-19417&mode=design&t=I0iEEuzKJJPK4Sum-11)

1. Application switch button, opens the modal
2. Application switch modal with a list of applications
3. Current application
4. Link to another application with icon, name and optional description
5. Indicator "open in a new browser tab"
6. Close icon

With the application switch we introduce a way to navigate across applications. The actual interaction control – the application switch button (1) – is located in the [application header](./application-header.md). Clicking the button opens a modal (2) with a list of available applications users can switch to. This list is technically defined in the application component.

Which applications are listed there depends on your respective product strategy. There could be applications belonging to a software suite, applications with a similar scope or applications a user has purchased, just to give a few examples. 

Clicking the current application just closes the modal. Clicking another application closes the modal and opens the target application in the same or in a new browser tab, depending on the defined target option. The decision for the one or the other option depends on the desired user experience and has different pros and cons. Switching between browser tabs is much faster than loading the applications each time in the same browser tab. On the other side, the switching between multiple browser tabs could confuse users.

Please note, we try to avoid the same application being opened in multiple browser tabs. Instead, we try to switch to the browser tab where the application is already opened. Nonetheless, be aware this will not work under all circumstances and some browsers don’t support this feature at all. 
<br></br>


## Options

- **forceBreakpoint:** Forces a specific breakpoint "lg", "md" or "sm". This can be used to force a specific behavior of the application ignoring the current browser viewport width.

## Behavior
The application component automatically adapts, by default, to three breakpoints and changes the application layout accordingly.
- "lg" for large screens (min-width 62em)
- "md" for medium screens (min-width 48em)
- "sm" for small screens (min-width 36em)
