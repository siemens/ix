import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/cw-event-list/props.md';
import Events from './../auto-generated/cw-event-list/events.md';

import ItemProps from './../auto-generated/cw-event-list-item/props.md';
import ItemEvents from './../auto-generated/cw-event-list-item/events.md';

import SourceEventList from './../auto-generated/previews/web-component/event-list.md'
import SourceEventListSelected from './../auto-generated/previews/web-component/event-list-selected.md'
import SourceEventListHeight from './../auto-generated/previews/web-component/event-list-custom-item-height.md'
import SourceEventListCompact from './../auto-generated/previews/web-component/event-list-compact.md'

# Event List

## Usage

<Preview name="event-list" height="14rem">
  <TabItem value="javascript">
    <SourceEventList />
  </TabItem>
</Preview>

### Selected

<Preview name="event-list-selected" height="14rem">
  <TabItem value="javascript">
    <SourceEventListSelected />
  </TabItem>
</Preview>

### Custom item height

<Preview name="event-list-custom-item-height" height="15rem">
  <TabItem value="javascript">
    <SourceEventListHeight />
  </TabItem>
</Preview>

### Compact

<Preview name="event-list-compact" height="14rem">
  <TabItem value="javascript">
    <SourceEventListCompact />
  </TabItem>
</Preview>

## Properties (cw-event-list)

### Props

<Props />

### Events

<Events />

## Properties (cw-event-list-item)

### Props

<ItemProps />

### Events

<ItemEvents />
