<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-select/props.md';
import Events from './../auto-generated/ix-select/events.md';

import ItemProps from './../auto-generated/ix-select-item/props.md';
import ItemEvents from './../auto-generated/ix-select-item/events.md';

import SourceSelect from './../auto-generated/previews/web-component/select.md';
import SourceEditable from './../auto-generated/previews/web-component/select-editable.md';
import SourceMultiple from './../auto-generated/previews/web-component/select-multiple.md';

import SourceReactSelect from './../auto-generated/previews/react/select.md';
import SourceReactEditable from './../auto-generated/previews/react/select-editable.md';
import SourceReactMultiple from './../auto-generated/previews/react/select-multiple.md';

import SourceAngularSelect from './../auto-generated/previews/angular/select.md';
import SourceAngularEditable from './../auto-generated/previews/angular/select-editable.md';
import SourceAngularMultiple from './../auto-generated/previews/angular/select-multiple.md';

# Select

## Usage

<Preview name="select" height="18rem">
  <TabItem value="javascript">
    <SourceSelect />
  </TabItem>
  <TabItem value="react">
    <SourceReactSelect />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularSelect />
  </TabItem>
</Preview>

### Editable

<Preview name="select-editable" height="18rem">
  <TabItem value="javascript">
    <SourceEditable />
  </TabItem>
  <TabItem value="react">
    <SourceReactEditable />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularEditable />
  </TabItem>
</Preview>

### Multiselect

<Preview name="select-multiple" height="18rem">
  <TabItem value="javascript">
    <SourceMultiple />
  </TabItem>
  <TabItem value="react">
    <SourceReactMultiple />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularMultiple />
  </TabItem>
</Preview>

## Properties (ix-select)

### Props

<Props />

### Events

<Events />

## Properties (ix-select-item)

### Props

<ItemProps />

### Events

<ItemEvents />
