import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-dropdown/props.md';
import Events from './../auto-generated/ix-dropdown/events.md';

import ItemProps from './../auto-generated/ix-dropdown/props.md';
import ItemEvents from './../auto-generated/ix-dropdown/events.md';

import SourceDropdown from './../auto-generated/previews/web-component/dropdown.md'
import SourceDropdownIcon from './../auto-generated/previews/web-component/dropdown-icon.md'

import SourceReactDropdown from './../auto-generated/previews/react/dropdown.md'
import SourceReactDropdownIcon from './../auto-generated/previews/react/dropdown-icon.md'

import SourceAngularDropdown from './../auto-generated/previews/angular/dropdown.ts.md'
import SourceAngularDropdownIcon from './../auto-generated/previews/angular/dropdown-icon.ts.md'

import SourceVueDropdown from './../auto-generated/previews/vue/dropdown.md'
import SourceVueDropdownIcon from './../auto-generated/previews/vue/dropdown-icon.md'

# Dropdown

## Usage

<Playground
name="dropdown" height="16rem"
frameworks={{
  react: SourceReactDropdown,
  angular: SourceAngularDropdown,
  javascript: SourceDropdown,
  vue: SourceVueDropdown
}}></Playground>

### Dropdown with icon

<Playground
name="dropdown-icon" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDropdownIcon,
  angular: SourceAngularDropdownIcon,
  javascript: SourceDropdownIcon,
  vue: SourceVueDropdownIcon
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
