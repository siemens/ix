import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-group/props.md';
import Events from './../auto-generated/ix-group/events.md';

import ItemProps from './../auto-generated/ix-group-item/props.md';
import ItemEvents from './../auto-generated/ix-group-item/events.md';

import DropdownItemProps from './../auto-generated/ix-group-dropdown-item/props.md';
import DropdownItemEvents from './../auto-generated/ix-group-dropdown-item/events.md';

import SourceGroup from './../auto-generated/previews/web-component/group.md'
import SourceGroupSuppressed from './../auto-generated/previews/web-component/group-header-suppressed.md'
import SourceGroupCustomEntry from './../auto-generated/previews/web-component/group-custom-entry.md'
import SourceGroupContext from './../auto-generated/previews/web-component/group-context-menu.md'

import SourceReactGroup from './../auto-generated/previews/react/group.md'
import SourceReactGroupSuppressed from './../auto-generated/previews/react/group-header-suppressed.md'
import SourceReactGroupCustomEntry from './../auto-generated/previews/react/group-custom-entry.md'
import SourceReactGroupContext from './../auto-generated/previews/react/group-context-menu.md'

# Group

## Usage

<Preview name="group" height="16rem">
  <TabItem value="javascript">
    <SourceGroup />
  </TabItem>
  <TabItem value="react">
    <SourceReactGroup />
  </TabItem>
</Preview>

### Suppress header selection

<Preview name="group-header-suppressed" height="16rem">
  <TabItem value="javascript">
    <SourceGroupSuppressed />
  </TabItem>
  <TabItem value="react">
    <SourceReactGroupSuppressed />
  </TabItem>
</Preview>

### Custom group entry

<Preview name="group-custom-entry" height="16rem">
  <TabItem value="javascript">
    <SourceGroupCustomEntry />
  </TabItem>
  <TabItem value="react">
    <SourceReactGroupCustomEntry />
  </TabItem>
</Preview>

### Group with context menu

<Preview name="group-context-menu" height="16rem">
  <TabItem value="javascript">
    <SourceGroupContext />
  </TabItem>
  <TabItem value="react">
    <SourceReactGroupContext />
  </TabItem>
</Preview>

## Properties (ix-group)

### Props

<Props />

### Events

<Events />

## Properties (ix-group-item)

### Props

<ItemProps />

### Events

<ItemEvents />

## Properties (ix-group-dropdown-item)

### Props

<DropdownItemProps />

### Events

<DropdownItemEvents />
