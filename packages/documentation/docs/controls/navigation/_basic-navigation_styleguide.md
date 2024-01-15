import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Demo';


## Viewport's

<ApiTableSinceTag message="2.0.0" />

The following breakpoints are now available in ix-menu:

- **Small**: `only screen and (min-width: 36em)`
  - Menu not visible.
- **Medium**: `only screen and (min-width: 48em)`
  - Menu visible but requires expansion to see the complete menu.
- **Large**: `only screen and (min-width: 62em)`
  - Shows the menu as pinned in full width.
  - The overlaying content is moved to the left.

<Playground name="menu-layouts" height="30rem" noMargin frameworks={{}}></Playground>
