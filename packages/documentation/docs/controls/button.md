---
title: Button
---

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-button/props.md';
import PropsIcon from './../auto-generated/ix-icon-button/props.md';

import WebComponentButtons from './../auto-generated/previews/web-component/buttons.md'
import WebComponentButtonGroup from './../auto-generated/previews/web-component/button-group.md'
import WebComponentButtonIcon from './../auto-generated/previews/web-component/button-with-icon.md'
import WebComponentButtonSelected from './../auto-generated/previews/web-component/button-selected.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'
import ReactButtonIcon from './../auto-generated/previews/react/button-with-icon.md'
import ReactButtonSelected from './../auto-generated/previews/react/button-selected.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.md'
import AngularButtonIcon from './../auto-generated/previews/angular/button-with-icon.md'
import AngularButtonSelected from './../auto-generated/previews/angular/button-selected.md'

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

### Button selected

<Preview name="button-selected">
  <TabItem value="angular" key="angular">
<AngularButtonSelected />
  </TabItem>
  <TabItem value="react" key="react">
<ReactButtonSelected />
  </TabItem>
  <TabItem value="javascript" key="javascript">
<WebComponentButtonSelected />
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

### Button icon

<Preview name="button-with-icon">
  <TabItem value="angular" key="angular">
<AngularButtonIcon />
  </TabItem>
  <TabItem value="react" key="react">
<ReactButtonIcon />
  </TabItem>
  <TabItem value="javascript" key="javascript">
<WebComponentButtonIcon />
  </TabItem>
</Preview>

## Properties (ix-button)

<Props />

## Properties (ix-icon-button)

<PropsIcon />
