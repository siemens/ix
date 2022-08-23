import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-toggle/props.md';
import Events from './../auto-generated/ix-toggle/events.md';

import SourceToggle from './../auto-generated/previews/web-component/toggle.md';
import SourceToggleLabel from './../auto-generated/previews/web-component/toggle-custom-label.md';
import SourceToggleColor from './../auto-generated/previews/web-component/toggle-color.md';
import SourceToggleDisbaled from './../auto-generated/previews/web-component/toggle-custom-disable.md';

import SourceReactToggle from './../auto-generated/previews/react/toggle.md';
import SourceReactToggleLabel from './../auto-generated/previews/react/toggle-custom-label.md';
import SourceReactToggleColor from './../auto-generated/previews/react/toggle-color.md';
import SourceReactToggleDisbaled from './../auto-generated/previews/react/toggle-custom-disable.md';

# Toggle

## Usage

<Preview name="toggle">
  <TabItem value="javascript">
    <SourceToggle />
  </TabItem>
  <TabItem value="react">
    <SourceReactToggle />
  </TabItem>
</Preview>

### Custom label

<Preview name="toggle-custom-label">
  <TabItem value="javascript">
    <SourceToggleLabel />
  </TabItem>
  <TabItem value="react">
    <SourceReactToggleLabel />
  </TabItem>
</Preview>

### Different colors

<Preview name="toggle-color">
  <TabItem value="javascript">
    <SourceToggleColor />
  </TabItem>
  <TabItem value="react">
    <SourceReactToggleColor />
  </TabItem>
</Preview>

### Disabled

<Preview name="toggle-custom-disable">
  <TabItem value="javascript">
    <SourceToggleDisbaled />
  </TabItem>
  <TabItem value="react">
    <SourceReactToggleDisbaled />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events />
