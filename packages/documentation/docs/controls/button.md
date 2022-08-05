---
title: Button
---

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/cw-button/props.md';

import WebComponentButtons from './../auto-generated/previews/web-component/buttons.md'
import WebComponentButtonGroup from './../auto-generated/previews/web-component/button-group.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.md'

## Usage

### Default buttons

<Preview name="buttons">
  <TabItem value="angular" key="angular">
    <AngularButtons />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtons />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtons />
  </TabItem>
</Preview>

### Button group

<Preview name="button-group">
  <TabItem value="angular" key="angular">
<AngularButtonGroup />
  </TabItem>
  <TabItem value="react" key="react">
<ReactButtonGroup />
  </TabItem>
  <TabItem value="javascript" key="javascript">
<WebComponentButtonGroup />
  </TabItem>
</Preview>

## Properties

<Props />
