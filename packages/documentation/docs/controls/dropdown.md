import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-dropdown/props.md';
import Events from './../auto-generated/ix-dropdown/events.md';
import TagsQuickActions from './../auto-generated/ix-dropdown-quick-actions/tags.md';

import ItemProps from './../auto-generated/ix-dropdown/props.md';
import ItemEvents from './../auto-generated/ix-dropdown/events.md';

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

# Dropdown

## Usage

<Playground
name="dropdown" height="16rem"
frameworks={{
  react: SourceReactDropdown,
  angular: SourceAngularDropdown,
  javascript: SourceDropdown
}}></Playground>

### Dropdown with icon

<Playground
name="dropdown-icon" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDropdownIcon,
  angular: SourceAngularDropdownIcon,
  javascript: SourceDropdownIcon
}}></Playground>

### Dropdown with quick actions menu

<TagsQuickActions />

<Playground
name="dropdown-quick-actions" height="16rem"
hideInitalCodePreview
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
name="dropdown-submenu" height="16rem"
hideInitalCodePreview
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
