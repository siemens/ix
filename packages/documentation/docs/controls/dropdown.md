<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-dropdown/props.md';
import Events from './../auto-generated/ix-dropdown/events.md';

import ItemProps from './../auto-generated/ix-dropdown/props.md';
import ItemEvents from './../auto-generated/ix-dropdown/events.md';

import SourceDropdown from './../auto-generated/previews/web-component/dropdown.md'
import SourceDropdownIcon from './../auto-generated/previews/web-component/dropdown-icon.md'

import SourceReactDropdown from './../auto-generated/previews/react/dropdown.md'
import SourceReactDropdownIcon from './../auto-generated/previews/react/dropdown-icon.md'

import SourceAngularDropdown from './../auto-generated/previews/angular/dropdown.md'
import SourceAngularDropdownIcon from './../auto-generated/previews/angular/dropdown-icon.md'

# Dropdown

## Usage

<Preview name="dropdown" height="16rem">
  <TabItem value="javascript">
    <SourceDropdown />
  </TabItem>
  <TabItem value="react">
    <SourceReactDropdown />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularDropdown />
  </TabItem>
</Preview>

### Dropdown with icon

<Preview name="dropdown-icon" height="16rem">
  <TabItem value="javascript">
    <SourceDropdownIcon />
  </TabItem>
  <TabItem value="react">
    <SourceReactDropdownIcon />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularDropdownIcon />
  </TabItem>
</Preview>

## Properties (ix-dropdown)

### Props

<Props />

### Events

<Events />

## Properties (ix-dropdown-item)

### Props

<ItemProps />

### Events

<ItemEvents />
