<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 0
title: Basic Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../../auto-generated/ix-basic-navigation/props.md';

import WebComponent from './../../auto-generated/previews/web-component/basic-navigation.md'
import ReactComponent from './../../auto-generated/previews/react/basic-navigation.md'
import AngularComponent from './../../auto-generated/previews/angular/basic-navigation.md'

import WebComponentWithoutHeader from './../../auto-generated/previews/web-component/basic-navigation-without-header.md'
import ReactComponentWithoutHeader from './../../auto-generated/previews/react/basic-navigation-without-header.md'
import AngularComponentWithoutHeader from './../../auto-generated/previews/angular/basic-navigation-without-header.md'

## Usage

### Default

<Preview name="basic-navigation" height="30rem" noMargin>
  <TabItem value="javascript">
    <WebComponent />
  </TabItem>
  <TabItem value="react">
    <ReactComponent />
  </TabItem>
  <TabItem value="angular">
    <AngularComponent />
  </TabItem>
</Preview>

### Without a header

<Preview name="basic-navigation-without-header" height="30rem" noMargin>
  <TabItem value="javascript">
    <WebComponentWithoutHeader />
  </TabItem>

  <TabItem value="react">
    <ReactComponentWithoutHeader />
  </TabItem>

  <TabItem value="angular">
    <AngularComponentWithoutHeader />
  </TabItem>
</Preview>

### ix-basic-navigation

#### Props

<Props />
