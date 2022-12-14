import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-event-list/props.md';
import Events from './../auto-generated/ix-event-list/events.md';

import ItemProps from './../auto-generated/ix-event-list-item/props.md';
import ItemEvents from './../auto-generated/ix-event-list-item/events.md';

import SourceEventList from './../auto-generated/previews/web-component/event-list.md'
import SourceEventListSelected from './../auto-generated/previews/web-component/event-list-selected.md'
import SourceEventListHeight from './../auto-generated/previews/web-component/event-list-custom-item-height.md'
import SourceEventListCompact from './../auto-generated/previews/web-component/event-list-compact.md'

import SourceReactEventList from './../auto-generated/previews/react/event-list.md'
import SourceReactEventListSelected from './../auto-generated/previews/react/event-list-selected.md'
import SourceReactEventListHeight from './../auto-generated/previews/react/event-list-custom-item-height.md'
import SourceReactEventListCompact from './../auto-generated/previews/react/event-list-compact.md'

import SourceAngularEventList from './../auto-generated/previews/angular/event-list.md'
import SourceAngularEventListSelected from './../auto-generated/previews/angular/event-list-selected.md'
import SourceAngularEventListHeight from './../auto-generated/previews/angular/event-list-custom-item-height.md'
import SourceAngularEventListCompact from './../auto-generated/previews/angular/event-list-compact.md'

# Event List

## Usage

<Playground
name="event-list" height="14rem"
frameworks={{
  react: SourceReactEventList,
  angular: SourceAngularEventList,
  javascript: SourceEventList
}}></Playground>

### Selected

<Playground
name="event-list-selected" height="14rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactEventListSelected,
  angular: SourceAngularEventListSelected,
  javascript: SourceEventListSelected
}}></Playground>

### Custom item height

<Playground
name="event-list-custom-item-height" height="15rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactEventListHeight,
  angular: SourceAngularEventListHeight,
  javascript: SourceEventListHeight
}}></Playground>

### Compact

<Playground
name="event-list-compact" height="14rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactEventListCompact,
  angular: SourceAngularEventListCompact,
  javascript: SourceEventListCompact
}}></Playground>

## Properties (ix-event-list)

### Props

<Props />

### Events

<Events />

## Properties (ix-event-list-item)

### Props

<ItemProps />

### Events

<ItemEvents />
