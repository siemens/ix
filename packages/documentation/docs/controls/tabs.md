import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-tabs/props.md';
import Events from './../auto-generated/ix-tabs/events.md';

import ItemProps from './../auto-generated/ix-tab-item/props.md';
import ItemEvents from './../auto-generated/ix-tab-item/events.md';

import SourceTabs from './../auto-generated/previews/web-component/tabs.md';
import SourceReactTabs from './../auto-generated/previews/react/tabs.md';
import SourceAngularTabs from './../auto-generated/previews/angular/tabs.md';

import SourceTabsRounded from './../auto-generated/previews/web-component/tabs-rounded.md';
import SourceReactTabsRounded from './../auto-generated/previews/react/tabs-rounded.md';
import SourceAngularTabsRounded from './../auto-generated/previews/angular/tabs-rounded.md';

# Tabs

## Usage

<Playground
name="tabs" height="20rem"
frameworks={{
  react: SourceReactTabs,
  angular: SourceAngularTabs,
  javascript: SourceTabs
}}></Playground>

### Tabs Rounded

<Playground
name="tabs-rounded"
hideInitalCodePreview
frameworks={{
  react: SourceReactTabsRounded,
  angular: SourceAngularTabsRounded,
  javascript: SourceTabsRounded
}}></Playground>

## Properties (ix-tabs)

### Props

<Props />

### Events

<Events />

## Properties (ix-tab-item)

### Props

<ItemProps />

### Events

<ItemEvents />
