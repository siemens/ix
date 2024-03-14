import Playground from '@site/src/components/Playground';

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

import SourceMenu from './../../auto-generated/previews/web-component/vertical-tabs.md'
import SourceMenuCategory from './../../auto-generated/previews/web-component/menu-category.md'
import SourceMenuWithAvatar from './../../auto-generated/previews/web-component/vertical-tabs-with-avatar.md'
import SourceMenuWithBottomTabs from './../../auto-generated/previews/web-component/menu-with-bottom-tabs.md'

import SourceReactMenu from './../../auto-generated/previews/react/vertical-tabs.md'
import SourceReactMenuCategory from './../../auto-generated/previews/react/menu-category.md'
import SourceReactMenuWithAvatar from './../../auto-generated/previews/react/vertical-tabs-with-avatar.md'
import SourceReactMenuWithBottomTabs from './../../auto-generated/previews/react/menu-with-bottom-tabs.md'

import SourceAngularMenu from './../../auto-generated/previews/angular/vertical-tabs.ts.md'
import SourceAngularMenuCategoryTs from './../../auto-generated/previews/angular/menu-category.ts.md'
import SourceAngularMenuCategoryHtml from './../../auto-generated/previews/angular/menu-category.html.md'
import SourceAngularMenuWithAvatar from './../../auto-generated/previews/angular/vertical-tabs-with-avatar.ts.md'
import SourceAngularMenuWithBottomTabs from './../../auto-generated/previews/angular/menu-with-bottom-tabs.ts.md'

import SourceVueMenu from './../../auto-generated/previews/vue/vertical-tabs.md'
import SourceVueMenuCategory from './../../auto-generated/previews/vue/menu-category.md'
import SourceVueMenuWithAvatar from './../../auto-generated/previews/vue/vertical-tabs-with-avatar.md'
import SourceVueMenuWithBottomTabs from './../../auto-generated/previews/vue/menu-with-bottom-tabs.md'

## Examples

<Playground
name="vertical-tabs" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenu,
  angular: SourceAngularMenu,
  javascript: SourceMenu,
  vue: SourceVueMenu
}}></Playground>

### 2nd navigation level

<CategoryTags />

<Playground
name="menu-category" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenuCategory,
  angular: {
    "menu.html": SourceAngularMenuCategoryHtml,
    "menu.ts": SourceAngularMenuCategoryTs
  },
  javascript: SourceMenuCategory,
  vue: SourceVueMenuCategory
}}></Playground>

### Avatar

<AvatarTags />

<Playground
name="vertical-tabs-with-avatar" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenuWithAvatar,
  angular: SourceAngularMenuWithAvatar,
  javascript: SourceMenuWithAvatar,
  vue: SourceVueMenuWithAvatar
}}></Playground>

### Bottom tabs

<div class="siemens-brand-section">
  <strong>Caution</strong>: Since the old implementation using the bottom property on menu items had some problems and will not work anymore please use slot="bottom" instead.
</div>

<Playground
name="menu-with-bottom-tabs" height="30rem" noMargin
hideInitalCodePreview
frameworks={{
  react: SourceReactMenuWithBottomTabs,
  angular: SourceAngularMenuWithBottomTabs,
  javascript: SourceMenuWithBottomTabs,
  vue: SourceVueMenuWithBottomTabs
}}></Playground>

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
