import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-tabs/props.md';
import Events from './../auto-generated/ix-tabs/events.md';

import ItemProps from './../auto-generated/ix-tab-item/props.md';
import ItemEvents from './../auto-generated/ix-tab-item/events.md';

import SourceTabs from './../auto-generated/previews/web-component/tabs.md';
import SourceReactTabs from './../auto-generated/previews/react/tabs.md';
import SourceVueTabs from './../auto-generated/previews/vue/tabs.md';
import SourceAngularTabs from './../auto-generated/previews/angular/tabs.md';

import SourceTabsRounded from './../auto-generated/previews/web-component/tabs-rounded.md';
import SourceReactTabsRounded from './../auto-generated/previews/react/tabs-rounded.md';
import SourceVueTabsRounded from './../auto-generated/previews/vue/tabs-rounded.md';
import SourceAngularTabsRounded from './../auto-generated/previews/angular/tabs-rounded.md';

# Tabs

## Usage

<Preview name="tabs" height="20rem">
  <TabItem value="javascript"> 
    <SourceTabs />
  </TabItem>
  <TabItem value="react"> 
    <SourceReactTabs />
  </TabItem>
  <TabItem value="vue"> 
    <SourceVueTabs />
  </TabItem>
  <TabItem value="angular"> 
    <SourceAngularTabs />
  </TabItem>
</Preview>

### Tabs Rounded

<Preview name="tabs-rounded">
  <TabItem value="javascript"> 
    <SourceTabsRounded />
  </TabItem>
  <TabItem value="react"> 
    <SourceReactTabsRounded />
  </TabItem>
  <TabItem value="vue"> 
    <SourceVueTabsRounded />
  </TabItem>
  <TabItem value="angular"> 
    <SourceAngularTabsRounded />
  </TabItem>
</Preview>

## Properties (ix-tabs)

### Props

<Props />

### Events

<Events />

## Properties (ix-tab-item)

### Props

<ItemProps />

### Events

<ItemEvents />
