import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-dropdown/props.md';
import Events from './../auto-generated/ix-dropdown/events.md';
import TagsQuickActions from './../auto-generated/ix-dropdown-quick-actions/tags.md';

import ItemProps from './../auto-generated/ix-dropdown-item/props.md';
import ItemEvents from './../auto-generated/ix-dropdown-item/events.md';

import SourceDropdown from './../auto-generated/previews/web-component/dropdown.md'
import SourceDropdownIcon from './../auto-generated/previews/web-component/dropdown-icon.md'
import SourceDropdownQuickActions from './../auto-generated/previews/web-component/dropdown-quick-actions.md'
import SourceDropdownSubmenu from './../auto-generated/previews/web-component/dropdown-submenu.md'

import SourceReactDropdown from './../auto-generated/previews/react/dropdown.md'
import SourceReactDropdownIcon from './../auto-generated/previews/react/dropdown-icon.md'
import SourceReactDropdownQuickActions from './../auto-generated/previews/react/dropdown-quick-actions.md'
import SourceReactDropdownSubmenu from './../auto-generated/previews/react/dropdown-submenu.md'

import SourceAngularDropdown from './../auto-generated/previews/angular/dropdown.ts.md'
import SourceAngularDropdownIcon from './../auto-generated/previews/angular/dropdown-icon.ts.md'
import SourceAngularDropdownQuickActionsTs from './../auto-generated/previews/angular/dropdown-quick-actions.ts.md'
import SourceAngularDropdownQuickActionsHtml from './../auto-generated/previews/angular/dropdown-quick-actions.html.md'

import SourceVueDropdown from './../auto-generated/previews/vue/dropdown.md'
import SourceVueDropdownIcon from './../auto-generated/previews/vue/dropdown-icon.md'

# Dropdown

## Usage

<Playground
name="dropdown" height="28rem"
frameworks={{
  react: SourceReactDropdown,
  angular: SourceAngularDropdown,
  javascript: SourceDropdown,
  vue: SourceVueDropdown
}}></Playground>

### Dropdown with icon

<Playground
name="dropdown-icon" height="18rem"
frameworks={{
  react: SourceReactDropdownIcon,
  angular: SourceAngularDropdownIcon,
  javascript: SourceDropdownIcon,
  vue: SourceVueDropdownIcon
}}></Playground>

### Dropdown with quick actions menu

<TagsQuickActions />

<Playground
name="dropdown-quick-actions" height="22rem"
frameworks={{
  react: SourceReactDropdownQuickActions,
      angular: {
        "dropdown-quick-actions.html": SourceAngularDropdownQuickActionsTs,
        "dropdown-quick-actions.ts": SourceAngularDropdownQuickActionsHtml
    },
  javascript: SourceDropdownQuickActions
}}></Playground>

### Dropdown with submenu

<Playground
name="dropdown-submenu" height="22rem"
frameworks={{
  react: SourceReactDropdownSubmenu,
  angular: SourceDropdownSubmenu,
  javascript: SourceDropdownSubmenu
}}></Playground>

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
