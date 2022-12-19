---
sidebar_position: 2
---

import Playground from '@site/src/components/Playground';

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
import SourceMenuWithBottomTabs from './../../auto-generated/previews/web-component/menu-with-bottom-tabs.md'

import SourceReactMenu from './../../auto-generated/previews/react/vertical-tabs.md'
import SourceReactMenuWithAvatar from './../../auto-generated/previews/react/vertical-tabs-with-avatar.md'
import SourceReactMenuWithBottomTabs from './../../auto-generated/previews/react/menu-with-bottom-tabs.md'

import SourceAngularMenu from './../../auto-generated/previews/angular/vertical-tabs.md'
import SourceAngularMenuWithAvatar from './../../auto-generated/previews/angular/vertical-tabs-with-avatar.md'
import SourceAngularMenuWithBottomTabs from './../../auto-generated/previews/angular/menu-with-bottom-tabs.md'

# Navigation menu

## Usage

<Playground
name="vertical-tabs" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenu,
  angular: SourceAngularMenu,
  javascript: SourceMenu
}}></Playground>

## Avatar

<Playground
name="vertical-tabs-with-avatar" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenuWithAvatar,
  angular: SourceAngularMenuWithAvatar,
  javascript: SourceMenuWithAvatar
}}></Playground>

## Bottom tabs

<div class="siemens-brand-section">
  <strong>Caution</strong>: Since the old implementation using the bottom property on menu items had some problems and will not work anymore please use slot="bottom" instead.
</div>

<Playground
name="menu-with-bottom-tabs" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenuWithBottomTabs,
  angular: SourceAngularMenuWithBottomTabs,
  javascript: SourceMenuWithBottomTabs
}}></Playground>

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
