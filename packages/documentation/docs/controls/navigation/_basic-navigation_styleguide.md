import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Demo';

The Basic Navigation is a combination of essential infrastructural components forming the basic layout structure of an application. Alternatively, the [Map Navigation](#link) offers an additional but less flexible layout.  

![Basic Navigation overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=984-33226&mode=design&t=SxUA6AcHswBAiIzi-11)

The Basic Navigation consists of the following parts:
- (1) App Header: component at the top of the application
- (2) [Navigation Menu](./vertical-tabs.md): component for navigation
- (3) App content: the actual content of an application

### App Header

![App Header](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=987-122161&mode=design&t=SxUA6AcHswBAiIzi-11)

The App Header (1) hosts the brand logo (4) and the application name (5). The application name can be extended by additional information about the current application context. Use the pipe character "|" and 2 spaces before and after to separate both.  
In case the application will be hosted inside a framework that comes with its own header, it is possible to hide the App Header to avoid 2 headers on top of each other (option: hideHeader). The brand identity and the application name should then be provided by the framework’s header.

<ApiTableSinceTag message="2.0.0" />
The Basic Navigation now adapts to breakpoints. More information see [Behavior](#behavior).


## Options
| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| breakpoints | Defines which breakpoints the Basic Navigation will adapt to: lg (large), md (medium), sm (small)|
| hideHeader | If true, the header component will be hidden.
| forceBreakpoint | This option is intended to force the application to use only one of the available breakpoints.

## Behavior
The Basic Navigation adapts by default automatically to the three breakpoints. Depending on the breakpoint, the behavior of the Navigation Menu is different.

![Behavior at different breakpoints](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=984-57503&mode=design&t=SxUA6AcHswBAiIzi-11)

### Breakpoint Large (lg) – desktop (6/7)
- `only screen and (min-width: 62em)`
- At this breakpoint the Navigation Menu and the application content will share the available viewport width.
- Clicking the Navigation Menu icon, the Navigation Menu will expand permanently until the collapse button is clicked, the content width will adapt accordingly

### Breakpoint Medium (md) – tablet (8/9)
-  `only screen and (min-width: 48em)`
- Clicking the Navigation Menu icon, the Navigation Menu will expand temporarily as overlay
- Another click or tap on the content or an navigation item will collapse the Navigation Menu again

### Breakpoint Small (sm) – mobile phone (10/11)
-  `only screen and (min-width: 36em)`
- The Navigation Menu disappears, the Navigation Menu icon moves into the Application Header
- Clicking the icon, the Navigation Menu appears as an overlay

### Example
<Playground name="menu-layouts" height="30rem" noMargin frameworks={{}}></Playground>

## Dos and Don’ts
- Avoid placing additional components inside the App Header to keep a clean and consistent look of Siemens applications. Furthermore, the header will host infrastructural elements in near future that could collide.

