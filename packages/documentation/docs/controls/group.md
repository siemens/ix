import Playground from '@site/src/components/PlaygroundV2';

import Props from './../auto-generated/ix-group/props.md';
import Events from './../auto-generated/ix-group/events.md';

import ItemProps from './../auto-generated/ix-group-item/props.md';
import ItemEvents from './../auto-generated/ix-group-item/events.md';

# Group

## Usage

<Playground
name="group" height="16rem"
examplesByName></Playground>

### Suppress header selection

<Playground
name="group-header-suppressed" height="16rem"
hideInitalCodePreview
examplesByName></Playground>

### Custom group entry

<Playground
name="group-custom-entry" height="16rem"
hideInitalCodePreview
examplesByName></Playground>

### Group with context menu

:::note

Please note that there is an issue with the slot rendering that can only be fixed with the next major version of Siemens iX.
Luckily there exists a workaround for rendering context menus inside the group component.

:::

To show a context menu place an `ix-dropdown` with `slot="dropdown"` combined with `ix-dropdown-item`'s inside the `ix-group-tag` tag.

<Playground
name="group-context-menu" height="16rem"
hideInitalCodePreview
examplesByName></Playground>

## Properties (ix-group)

### Props

<Props />

### Events

<Events />

## Properties (ix-group-item)

### Props

<ItemProps />

### Events

<ItemEvents />
