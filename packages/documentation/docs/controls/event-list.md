import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-event-list/props.md';
import Events from './../auto-generated/ix-event-list/events.md';

import ItemProps from './../auto-generated/ix-event-list-item/props.md';
import ItemEvents from './../auto-generated/ix-event-list-item/events.md';

import SourceEventList from './../auto-generated/previews/web-component/event-list.md'
import SourceEventListSelected from './../auto-generated/previews/web-component/event-list-selected.md'
import SourceEventListHeight from './../auto-generated/previews/web-component/event-list-custom-item-height.md'
import SourceEventListCompact from './../auto-generated/previews/web-component/event-list-compact.md'

import SourceReactEventList from './../auto-generated/previews/react/event-list.md'
import SourceReactEventListSelected from './../auto-generated/previews/react/event-list-selected.md'
import SourceReactEventListHeight from './../auto-generated/previews/react/event-list-custom-item-height.md'
import SourceReactEventListCompact from './../auto-generated/previews/react/event-list-compact.md'

import SourceVueEventList from './../auto-generated/previews/vue/event-list.md'
import SourceVueEventListSelected from './../auto-generated/previews/vue/event-list-selected.md'
import SourceVueEventListHeight from './../auto-generated/previews/vue/event-list-custom-item-height.md'
import SourceVueEventListCompact from './../auto-generated/previews/vue/event-list-compact.md'

import SourceAngularEventList from './../auto-generated/previews/angular/event-list.md'
import SourceAngularEventListSelected from './../auto-generated/previews/angular/event-list-selected.md'
import SourceAngularEventListHeight from './../auto-generated/previews/angular/event-list-custom-item-height.md'
import SourceAngularEventListCompact from './../auto-generated/previews/angular/event-list-compact.md'

# Event List

## Usage

<Preview name="event-list" height="14rem">
  <TabItem value="javascript">
    <SourceEventList />
  </TabItem>
  <TabItem value="react">
    <SourceReactEventList />
  </TabItem>
  <TabItem value="vue">
    <SourceVueEventList />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularEventList />
  </TabItem>
</Preview>

### Selected

<Preview name="event-list-selected" height="14rem">
  <TabItem value="javascript">
    <SourceEventListSelected />
  </TabItem>
  <TabItem value="react">
    <SourceReactEventListSelected />
  </TabItem>
  <TabItem value="vue">
    <SourceVueEventListSelected />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularEventListSelected />
  </TabItem>
</Preview>

### Custom item height

<Preview name="event-list-custom-item-height" height="15rem">
  <TabItem value="javascript">
    <SourceEventListHeight />
  </TabItem>
  <TabItem value="react">
    <SourceReactEventListHeight />
  </TabItem>
  <TabItem value="vue">
    <SourceVueEventListHeight />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularEventListHeight />
  </TabItem>
</Preview>

### Compact

<Preview name="event-list-compact" height="14rem">
  <TabItem value="javascript">
    <SourceEventListCompact />
  </TabItem>
  <TabItem value="react">
    <SourceReactEventListCompact />
  </TabItem>
  <TabItem value="vue">
    <SourceVueEventListCompact />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularEventListCompact />
  </TabItem>
</Preview>

## Properties (ix-event-list)

### Props

<Props />

### Events

<Events />

## Properties (ix-event-list-item)

### Props

<ItemProps />

### Events

<ItemEvents />
