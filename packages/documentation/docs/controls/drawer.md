import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-drawer/props.md';
import Events from './../auto-generated/ix-drawer/events.md';

import SourceDrawer from './../auto-generated/previews/web-component/drawer.md'
import SourceDrawerFullHeight from './../auto-generated/previews/web-component/drawer-full-height.md'

import SourceReactDrawer from './../auto-generated/previews/react/drawer.md'
import SourceReactDrawerFullHeight from './../auto-generated/previews/react/drawer-full-height.md'

import SourceAngularDrawer from './../auto-generated/previews/angular/drawer.md'
import SourceAngularDrawerFullHeight from './../auto-generated/previews/angular/drawer-full-height.md'

import SourceVueDrawer from './../auto-generated/previews/vue/drawer.md'
import SourceVueDrawerFullHeight from './../auto-generated/previews/vue/drawer-full-height.md'

# Drawer

## Usage

<Preview name="drawer-full-height" height="24rem">
  <TabItem value="javascript">
    <SourceDrawer />
  </TabItem>
  <TabItem value="react">
    <SourceReactDrawer />
  </TabItem>
  <TabItem value="vue">
    <SourceVueDrawer />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularDrawer />
  </TabItem>
</Preview>

### Auto height

<Preview name="drawer" height="24rem">
  <TabItem value="javascript">
    <SourceDrawerFullHeight />
  </TabItem>
  <TabItem value="react">
    <SourceReactDrawerFullHeight />
  </TabItem>
  <TabItem value="vue">
    <SourceVueDrawer />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularDrawerFullHeight />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events />
