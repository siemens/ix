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

import SourceSplitButton from './../auto-generated/previews/web-component/split-button.md';
import SourceSplitButtonIcons from './../auto-generated/previews/web-component/split-button-icons.md';

import SourceReactSplitButton from './../auto-generated/previews/react/split-button.md';
import SourceReactSplitButtonIcons from './../auto-generated/previews/react/split-button-icons.md';

import SourceAngularSplitButton from './../auto-generated/previews/angular/split-button.md';
import SourceAngularSplitButtonIcons from './../auto-generated/previews/angular/split-button-icons.md';

# Split Button

## Usage

<Preview name="split-button" height="16rem">
  <TabItem value="javascript">
    <SourceSplitButton />
  </TabItem>
  <TabItem value="react">
    <SourceReactSplitButton />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularSplitButton />
  </TabItem>
</Preview>

### With icon only

<Preview name="split-button-icons" height="16rem">
  <TabItem value="javascript">
    <SourceSplitButtonIcons />
  </TabItem>
  <TabItem value="angular">
    <SourceReactSplitButtonIcons />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularSplitButtonIcons />
  </TabItem>
</Preview>

## Properties (ix-split-button)

### Props

<Props />

### Events

<Events />

## Properties (ix-split-button-item)

### Props

<ItemProps />

### Events

<ItemEvents />
