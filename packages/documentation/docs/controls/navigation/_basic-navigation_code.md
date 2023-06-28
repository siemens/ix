---
sidebar_position: 0
title: Basic navigation
---
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

### ix-basic-navigation

#### Props

<Props />
