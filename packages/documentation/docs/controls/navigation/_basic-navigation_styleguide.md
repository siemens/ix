---
sidebar_position: 0
title: Basic navigation
---
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Demo';


## Viewport's

<ApiTableSinceTag message="2.0.0" />

The following breakpoints are now available in ix-menu:

- **Small**: `only screen and (max-width: 40em)`
  - Menu not visible.
- **Medium**: `only screen and (min-width: 40.063em) and (max-width: 64em)`
  - Menu visible but requires expansion to see the complete menu.
- **Large**: `only screen and (min-width: 64.063em)`
  - Shows the menu as pinned in full width.
  - The overlaying content is moved to the left.

<Playground name="menu-layouts" height="30rem" noMargin frameworks={{}}></Playground>
