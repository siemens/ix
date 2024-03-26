import Props from './../../auto-generated/ix-menu-settings/props.md';

import MenuProps from './../../auto-generated/ix-menu/props.md';
import MenuEvents from './../../auto-generated/ix-menu/events.md';

import ItemProps from './../../auto-generated/ix-menu-item/props.md';
import ItemEvents from './../../auto-generated/ix-menu-item/events.md';

import CategoryProps from './../../auto-generated/ix-menu-category/props.md';
import CategoryTags from './../../auto-generated/ix-menu-category/tags.md';

import AvatarProps from './../../auto-generated/ix-menu-avatar/props.md';
import AvatarEvents from './../../auto-generated/ix-menu-avatar/events.md';

import AvatarItemProps from './../../auto-generated/ix-menu-avatar-item/props.md';
import AvatarItemEvents from './../../auto-generated/ix-menu-avatar-item/events.md';
import AvatarTags from './../../auto-generated/ix-menu-avatar/tags.md';

import Playground from '@site/src/components/PlaygroundV2';

## Examples

<Playground
name="vertical-tabs" height="30rem" noMargin
hideInitalCodePreview
examplesByName></Playground>

### 2nd navigation level

<CategoryTags />

<Playground
name="menu-category" height="30rem" noMargin
hideInitalCodePreview
examplesByName></Playground>

### Avatar

<AvatarTags />

<Playground
name="vertical-tabs-with-avatar" height="30rem" noMargin
hideInitalCodePreview
examplesByName></Playground>

### Bottom tabs

<div class="siemens-brand-section">
  <strong>Caution</strong>: Since the old implementation using the bottom property on menu items had some problems and will not work anymore please use slot="bottom" instead.
</div>

<Playground
name="menu-with-bottom-tabs" height="30rem" noMargin
hideInitalCodePreview
examplesByName></Playground>

## API (ix-menu)

### Props

<MenuProps />

### Events

<MenuEvents />

## API (ix-menu-item)

### Props

<ItemProps />

## API (ix-menu-category)

### Props

<CategoryProps />

## API (ix-menu-avatar)

### Props

<AvatarProps />

### Events

<AvatarEvents />

## API (ix-menu-avatar-item)

### Props

<AvatarItemProps />

### Events

<AvatarItemEvents />
