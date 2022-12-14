---
sidebar_position: 4
---

import Playground from '@site/src/components/Playground';

import Props from './../../auto-generated/ix-menu-settings/props.md';
import Events from './../../auto-generated/ix-menu-settings/events.md';
import ItemProps from './../../auto-generated/ix-menu-settings-item/props.md';

import SourceSettings from './../../auto-generated/previews/web-component/settings.md'
import SourceReactSettings from './../../auto-generated/previews/react/settings.md'
import SourceAngularSettings from './../../auto-generated/previews/angular/settings.ts.md'

# Settings

## Usage

<Playground
name="settings" height="30rem" noMargin
frameworks={{
  react: SourceReactSettings,
  angular: SourceAngularSettings,
  javascript: SourceSettings
}}>
</Playground>

## Properties (ix-menu-settings)

### Props

<Props />

### Events

<Events />

## Properties (ix-menu-settings-item)

### Props

<ItemProps />
