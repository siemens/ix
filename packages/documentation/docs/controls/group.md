import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/cw-group/props.md';
import Events from './../auto-generated/cw-group/events.md';

import ItemProps from './../auto-generated/cw-group-item/props.md';
import ItemEvents from './../auto-generated/cw-group-item/events.md';

import DropdownItemProps from './../auto-generated/cw-group-dropdown-item/props.md';
import DropdownItemEvents from './../auto-generated/cw-group-dropdown-item/events.md';

import SourceGroup from './../auto-generated/previews/web-component/group.md'
import SourceGroupSuppressed from './../auto-generated/previews/web-component/group-header-suppressed.md'
import SourceGroupCustomEntry from './../auto-generated/previews/web-component/group-custom-entry.md'
import SourceGroupContext from './../auto-generated/previews/web-component/group-context-menu.md'

# Group

## Usage

<Preview name="group" height="16rem">
  <TabItem value="javascript">
    <SourceGroup />
  </TabItem>
</Preview>

### Suppress header selection

<Preview name="group-header-suppressed" height="16rem">
  <TabItem value="javascript">
    <SourceGroupSuppressed />
  </TabItem>
</Preview>

### Custom group entry

<Preview name="group-custom-entry" height="16rem">
  <TabItem value="javascript">
    <SourceGroupCustomEntry />
  </TabItem>
</Preview>

### Group with context menu

<Preview name="group-context-menu" height="16rem">
  <TabItem value="javascript">
    <SourceGroupContext />
  </TabItem>
</Preview>

## Properties (cw-group)

### Props

<Props />

### Events

<Events />

## Properties (cw-group-item)

### Props

<ItemProps />

### Events

<ItemEvents />

## Properties (cw-group-dropdown-item)

### Props

<DropdownItemProps />

### Events

<DropdownItemEvents />
