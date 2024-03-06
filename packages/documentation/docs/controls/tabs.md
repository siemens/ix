import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-tabs/props.md';
import Events from './../auto-generated/ix-tabs/events.md';

import ItemProps from './../auto-generated/ix-tab-item/props.md';
import ItemEvents from './../auto-generated/ix-tab-item/events.md';

import SourceTabs from './../auto-generated/previews/web-component/tabs.md';
import SourceReactTabs from './../auto-generated/previews/react/tabs.md';
import SourceAngularTabs from './../auto-generated/previews/angular/tabs.ts.md';

import SourceTabsRounded from './../auto-generated/previews/web-component/tabs-rounded.md';
import SourceReactTabsRounded from './../auto-generated/previews/react/tabs-rounded.md';
import SourceAngularTabsRounded from './../auto-generated/previews/angular/tabs-rounded.ts.md';

import SourceVueTabs from './../auto-generated/previews/vue/tabs.md';
import SourceVueTabsRounded from './../auto-generated/previews/vue/tabs-rounded.md';

# Tabs

## Examples

<Playground
name="tabs"
frameworks={{
  react: SourceReactTabs,
  angular: SourceAngularTabs,
  javascript: SourceTabs,
  vue: SourceVueTabs
}}></Playground>

### Tabs Rounded

<Playground
name="tabs-rounded"
hideInitalCodePreview
frameworks={{
  react: SourceReactTabsRounded,
  angular: SourceAngularTabsRounded,
  javascript: SourceTabsRounded,
  vue: SourceVueTabsRounded
}}></Playground>

## API (ix-tabs)

### Props

<Props />

### Events

<Events />

## API (ix-tab-item)

### Props

<ItemProps />

### Events

<ItemEvents />
