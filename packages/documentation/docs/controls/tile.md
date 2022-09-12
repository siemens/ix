<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-tile/props.md';
import Events from './../auto-generated/ix-tile/events.md';

import SourceTile from './../auto-generated/previews/web-component/tile.md';
import SourceReactTile from './../auto-generated/previews/react/tile.md';
import SourceAngularTile from './../auto-generated/previews/angular/tile.md';

# Tile

## Usage

<Preview name="tile" height="22rem">
  <TabItem value="javascript">
    <SourceTile />
  </TabItem>
  <TabItem value="react">
    <SourceReactTile />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTile />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events />
