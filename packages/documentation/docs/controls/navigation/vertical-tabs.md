---
sidebar_position: 2
---

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../../auto-generated/cw-menu-settings/props.md';

import MenuProps from './../../auto-generated/cw-menu/props.md';
import MenuEvents from './../../auto-generated/cw-menu/events.md';
import ItemProps from './../../auto-generated/cw-menu-item/props.md';
import ItemEvents from './../../auto-generated/cw-menu-item/events.md';

import AvatarProps from './../../auto-generated/cw-menu-avatar/props.md';
import AvatarEvents from './../../auto-generated/cw-menu-avatar/events.md';
import AvatarItemProps from './../../auto-generated/cw-menu-avatar-item/props.md';
import AvatarItemEvents from './../../auto-generated/cw-menu-avatar-item/events.md';

import WebComponent from './../../auto-generated/previews/web-component/vertical-tabs.md'
import WebComponentWithAvatar from './../../auto-generated/previews/web-component/vertical-tabs-with-avatar.md'

# Navigation Menu

## Usage

<Preview name="vertical-tabs" height="30rem" noMargin>
  <TabItem value="javascript">
    <WebComponent />
  </TabItem>
</Preview>

## Avatar

<Preview name="vertical-tabs-with-avatar" height="30rem" noMargin>
  <TabItem value="javascript">
    <WebComponentWithAvatar />
  </TabItem>
</Preview>

## Properties (cw-menu)

### Props

<MenuProps />

### Events

<MenuEvents />

## Properties (cw-menu-item)

### Props

<ItemProps />

## Properties (cw-menu-avatar)

### Props

<AvatarProps />

### Events

<AvatarEvents />

## Properties (cw-menu-avatar-item)

### Props

<AvatarItemProps />

### Events

<AvatarItemEvents />
