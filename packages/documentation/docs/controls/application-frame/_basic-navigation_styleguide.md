import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Demo';

Basic navigation is a combination of essential infrastructure components forming the basic application layout structure. Alternatively, the [map navigation](./map-navigation.md) offers an additional but less flexible layout.  
The new [application](./application.md) component released February 2024 is even more flexible, has a modular approach and introduces new features. Hence, we highly recommend using the new application frame.

![Basic navigation overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=984-33226&mode=design&t=SxUA6AcHswBAiIzi-11)

Basic navigation has:
1. Application header
2. [Navigation menu](./application-menu.md)
3. Application content

### Application header

![Application header](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=987-122161&mode=design&t=SxUA6AcHswBAiIzi-11)

4. Brand logo
5. Application name

The application header (1) typically hosts the brand logo (4) and the application name (5). You can extended it with additional, context-related information by using the pipe character "|" and 2 spaces before and after to separate both.  
If the application is hosted inside a framework that comes with its own header, you can hide the application header to avoid two headers on top of each other (option: `hideHeader`). The brand identity and the application name is then provided by the framework’s header.


## Options
- **breakpoints:** Defines which breakpoints the basic navigation adapts to: lg (large), md (medium), sm (small).
- **hideHeader:** If true, the header component is hidden.
- **forceBreakpoint:** This option forces the application to use only one of the available breakpoints.

## Behavior
Basic navigation automatically adapts, by default, to the three breakpoints lg (large), md (medium) and sm (small). Depending on the breakpoint, the behavior of the navigation menu is different.

![Behavior at different breakpoints](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=984-57503&mode=design&t=SxUA6AcHswBAiIzi-11)

### 6. and 7. Breakpoint lg
- `only screen and (min-width: 62em)`
- At this breakpoint, the navigation menu and the application content share the available viewport width
- Clicking the navigation menu icon expands it permanently until the collapse button is clicked (content width adapts accordingly)

### 8. and 9. Breakpoint md
-  `only screen and (min-width: 48em)`
- Clicking the navigation menu icon expands it temporarily as an overlay
- Another click or tap on the content or a navigation item collapses the navigation menu again

### 10. and 11. Breakpoint sm
-  `only screen and (min-width: 36em)`
- The navigation menu disappears and the icon moves into the application header
- Clicking the icon displays the navigation menu as an overlay

### Example

<Playground name="application-breakpoints" height="30rem" noMargin frameworks={{}}></Playground>
