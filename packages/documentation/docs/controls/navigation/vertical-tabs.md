<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

---
sidebar_position: 2
---

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../../auto-generated/ix-menu-settings/props.md';

import MenuProps from './../../auto-generated/ix-menu/props.md';
import MenuEvents from './../../auto-generated/ix-menu/events.md';
import ItemProps from './../../auto-generated/ix-menu-item/props.md';
import ItemEvents from './../../auto-generated/ix-menu-item/events.md';

import AvatarProps from './../../auto-generated/ix-menu-avatar/props.md';
import AvatarEvents from './../../auto-generated/ix-menu-avatar/events.md';
import AvatarItemProps from './../../auto-generated/ix-menu-avatar-item/props.md';
import AvatarItemEvents from './../../auto-generated/ix-menu-avatar-item/events.md';

import SourceMenu from './../../auto-generated/previews/web-component/vertical-tabs.md'
import SourceMenuWithAvatar from './../../auto-generated/previews/web-component/vertical-tabs-with-avatar.md'

import SourceReactMenu from './../../auto-generated/previews/react/vertical-tabs.md'
import SourceReactMenuWithAvatar from './../../auto-generated/previews/react/vertical-tabs-with-avatar.md'

import SourceAngularMenu from './../../auto-generated/previews/angular/vertical-tabs.md'
import SourceAngularMenuWithAvatar from './../../auto-generated/previews/angular/vertical-tabs-with-avatar.md'

# Navigation Menu

## Usage

<Preview name="vertical-tabs" height="30rem" noMargin>
  <TabItem value="javascript">
    <SourceMenu />
  </TabItem>
  <TabItem value="react">
    <SourceReactMenu />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularMenu />
  </TabItem>
</Preview>

## Avatar

<Preview name="vertical-tabs-with-avatar" height="30rem" noMargin>
  <TabItem value="javascript">
    <SourceMenuWithAvatar />
  </TabItem>
  <TabItem value="react">
    <SourceReactMenuWithAvatar />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularMenuWithAvatar />
  </TabItem>
</Preview>

## Properties (ix-menu)

### Props

<MenuProps />

### Events

<MenuEvents />

## Properties (ix-menu-item)

### Props

<ItemProps />

## Properties (ix-menu-avatar)

### Props

<AvatarProps />

### Events

<AvatarEvents />

## Properties (ix-menu-avatar-item)

### Props

<AvatarItemProps />

### Events

<AvatarItemEvents />
