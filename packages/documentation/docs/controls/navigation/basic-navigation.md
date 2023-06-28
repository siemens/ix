---
sidebar_position: 0
title: Basic navigation
---
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';

import Playground from '@site/src/components/Playground';
import Props from './../../auto-generated/ix-basic-navigation/props.md';

import WebComponent from './../../auto-generated/previews/web-component/basic-navigation.md'
import ReactComponent from './../../auto-generated/previews/react/basic-navigation.md'
import AngularComponent from './../../auto-generated/previews/angular/basic-navigation.ts.md'
import VueComponent from './../../auto-generated/previews/vue/basic-navigation.md'

import WebComponentWithoutHeader from './../../auto-generated/previews/web-component/basic-navigation-without-header.md'
import ReactComponentWithoutHeader from './../../auto-generated/previews/react/basic-navigation-without-header.md'
import AngularComponentWithoutHeader from './../../auto-generated/previews/angular/basic-navigation-without-header.ts.md'
import VueComponentWithoutHeader from './../../auto-generated/previews/vue/basic-navigation-without-header.md'

## Usage

<Playground
name="basic-navigation" height="30rem" noMargin
frameworks={{
  react: ReactComponent,
  angular: AngularComponent,
  javascript: WebComponent,
  vue: VueComponent
}}></Playground>

### Without header

<Playground
name="basic-navigation-without-header" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: ReactComponentWithoutHeader,
  angular: AngularComponentWithoutHeader,
  javascript: WebComponentWithoutHeader,
  vue: VueComponentWithoutHeader
}}></Playground>

### Layouts

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

### ix-basic-navigation

#### Props

<Props />
