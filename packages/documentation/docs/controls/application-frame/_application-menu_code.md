import Props from './../../auto-generated/ix-menu-settings/props.md';

import MenuProps from './../../auto-generated/ix-menu/props.md';
import MenuEvents from './../../auto-generated/ix-menu/events.md';

import ItemProps from './../../auto-generated/ix-menu-item/props.md';
import ItemEvents from './../../auto-generated/ix-menu-item/events.md';

import CategoryProps from './../../auto-generated/ix-menu-category/props.md';
import CategoryTags from './../../auto-generated/ix-menu-category/tags.md';
import CategoryEvents from './../../auto-generated/ix-menu-category/events.md';

import AvatarProps from './../../auto-generated/ix-menu-avatar/props.md';
import AvatarEvents from './../../auto-generated/ix-menu-avatar/events.md';

import AvatarItemProps from './../../auto-generated/ix-menu-avatar-item/props.md';
import AvatarItemEvents from './../../auto-generated/ix-menu-avatar-item/events.md';
import AvatarTags from './../../auto-generated/ix-menu-avatar/tags.md';

import Playground from '@site/src/components/PlaygroundV3';

## Development

### Examples

#### Basic

<Playground
name="vertical-tabs"
height="30rem"
noMargin
hideInitalCodePreview

> </Playground>

#### 2nd navigation level

<CategoryTags />
<Playground 
  name="menu-category" 
  height="30rem" 
  noMargin
  hideInitalCodePreview
  >
</Playground>

#### Avatar

<AvatarTags />

<Playground
name="vertical-tabs-with-avatar"
height="30rem"
noMargin
hideInitalCodePreview

> </Playground>

#### Bottom tabs

<div class="siemens-brand-section">
  <strong>Caution</strong>: Since the old implementation using the bottom property on menu items had some problems and will not work anymore, please use slot="bottom" instead.
</div>

<Playground
name="menu-with-bottom-tabs"
height="30rem"
noMargin
hideInitalCodePreview

> </Playground>

### API (ix-menu)

#### Properties

<MenuProps />

#### Events

<MenuEvents />

### API (ix-menu-item)

#### Props

<ItemProps />

#### Events

<ItemEvents />

### API (ix-menu-category)

#### Properties

<CategoryProps />

#### Events

<CategoryEvents />

### API (ix-menu-avatar)

#### Properties

<AvatarProps />

#### Events

<AvatarEvents />

### API (ix-menu-avatar-item)

#### Properties

<AvatarItemProps />

#### Events

<AvatarItemEvents />
