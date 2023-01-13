---
title: Button
---

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-button/props.md';
import PropsIcon from './../auto-generated/ix-icon-button/props.md';

import WebComponentButtons from './../auto-generated/previews/web-component/buttons.md'
import WebComponentButtonSecondary from './../auto-generated/previews/web-component/button-secondary.md'
import WebComponentButtonGhost from './../auto-generated/previews/web-component/button-ghost.md'
import WebComponentButtonGrey from './../auto-generated/previews/web-component/button-grey.md'
import WebComponentButtonGreySecondary from './../auto-generated/previews/web-component/button-grey-secondary.md'
import WebComponentButtonGreyGhost from './../auto-generated/previews/web-component/button-grey-ghost.md'
import WebComponentButtonTextIcon from './../auto-generated/previews/web-component/button-text-icon.md'
import WebComponentButtonGroup from './../auto-generated/previews/web-component/button-group.md'
import WebComponentButtonIcon from './../auto-generated/previews/web-component/button-with-icon.md'
import WebComponentButtonSelected from './../auto-generated/previews/web-component/button-selected.md'

import ReactButtons from './../auto-generated/previews/react/buttons.md'
import ReactButtonGroup from './../auto-generated/previews/react/button-group.md'
import ReactButtonIcon from './../auto-generated/previews/react/button-with-icon.md'
import ReactButtonSelected from './../auto-generated/previews/react/button-selected.md'
import ReactButtonSecondary from './../auto-generated/previews/react/button-secondary.md'
import ReactButtonGhost from './../auto-generated/previews/react/button-ghost.md'
import ReactButtonGrey from './../auto-generated/previews/react/button-grey.md'
import ReactButtonGreySecondary from './../auto-generated/previews/react/button-grey-secondary.md'
import ReactButtonGreyGhost from './../auto-generated/previews/react/button-grey-ghost.md'
import ReactButtonTextIcon from './../auto-generated/previews/react/button-text-icon.md'

import AngularButtons from './../auto-generated/previews/angular/buttons.md'
import AngularButtonGroup from './../auto-generated/previews/angular/button-group.md'
import AngularButtonIcon from './../auto-generated/previews/angular/button-with-icon.md'
import AngularButtonSelected from './../auto-generated/previews/angular/button-selected.md'
import AngularButtonSecondary from './../auto-generated/previews/angular/button-secondary.md'
import AngularButtonGhost from './../auto-generated/previews/angular/button-ghost.md'
import AngularButtonGrey from './../auto-generated/previews/angular/button-grey.md'
import AngularButtonGreySecondary from './../auto-generated/previews/angular/button-grey-secondary.md'
import AngularButtonGreyGhost from './../auto-generated/previews/angular/button-grey-ghost.md'
import AngularButtonTextIcon from './../auto-generated/previews/angular/button-text-icon.md'

import VueButtons from './../auto-generated/previews/vue/buttons.md'
import VueButtonGroup from './../auto-generated/previews/vue/button-group.md'
import VueButtonIcon from './../auto-generated/previews/vue/button-with-icon.md'
import VueButtonSelected from './../auto-generated/previews/vue/button-selected.md'
import VueButtonSecondary from './../auto-generated/previews/vue/button-secondary.md'
import VueButtonGhost from './../auto-generated/previews/vue/button-ghost.md'
import VueButtonGrey from './../auto-generated/previews/vue/button-grey.md'
import VueButtonGreySecondary from './../auto-generated/previews/vue/button-grey-secondary.md'
import VueButtonGreyGhost from './../auto-generated/previews/vue/button-grey-ghost.md'
import VueButtonTextIcon from './../auto-generated/previews/vue/button-text-icon.md'

## Usage

### Primary

<Preview name="buttons">
  <TabItem value="angular" key="angular">
    <AngularButtons />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtons />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtons />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtons />
  </TabItem>
</Preview>

### Primary Outline

:::info

Will be used in UX context as **Secondary**

:::

<Preview name="button-secondary">
  <TabItem value="angular" key="angular">
    <AngularButtonSecondary />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonSecondary />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonSecondary />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonSecondary />
  </TabItem>
</Preview>

### Primary Ghost

:::info

Will be used in UX context as **Ghost**

:::

<Preview name="button-ghost">
  <TabItem value="angular" key="angular">
    <AngularButtonGhost />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonGhost />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonGhost />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonGhost />
  </TabItem>
</Preview>

### Secondary

:::info

Will be used in UX context as **Grey button**

:::

<Preview name="button-grey">
  <TabItem value="angular" key="angular">
    <AngularButtonGrey />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonGrey />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonGrey />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonGrey />
  </TabItem>
</Preview>

### Secondary Outline

:::info

Will be used in UX context as **Grey secondary**

:::

<Preview name="button-grey-secondary">
  <TabItem value="angular" key="angular">
    <AngularButtonGreySecondary />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonGreySecondary />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonGreySecondary />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonGreySecondary />
  </TabItem>
</Preview>

### Secondary Ghost

:::info

Will be used in UX context as **Grey ghost**

:::

<Preview name="button-grey-ghost">
  <TabItem value="angular" key="angular">
    <AngularButtonGreyGhost />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonGreyGhost />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonGreyGhost />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonGreyGhost />
  </TabItem>
</Preview>

### Selectable button

:::info

Only available in secondary ghost state

:::

<Preview name="button-selected">
  <TabItem value="angular" key="angular">
<AngularButtonSelected />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonSelected />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonSelected />
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
  <TabItem value="vue" key="vue">
    <VueButtonGroup />
  </TabItem>
  <TabItem value="javascript" key="javascript">
<WebComponentButtonGroup />
  </TabItem>
</Preview>

### Button with text and icon

<Preview name="button-text-icon">
  <TabItem value="angular" key="angular">
    <AngularButtonTextIcon />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonTextIcon />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonTextIcon />
  </TabItem>
  <TabItem value="javascript" key="javascript">
    <WebComponentButtonTextIcon />
  </TabItem>
</Preview>

### Icon button

<Preview name="button-with-icon">
  <TabItem value="angular" key="angular">
<AngularButtonIcon />
  </TabItem>
  <TabItem value="react" key="react">
    <ReactButtonIcon />
  </TabItem>
  <TabItem value="vue" key="vue">
    <VueButtonIcon />
  </TabItem>
  <TabItem value="javascript" key="javascript">
<WebComponentButtonIcon />
  </TabItem>
</Preview>

## Properties (ix-button)

<Props />

## Properties (ix-icon-button)

<PropsIcon />
