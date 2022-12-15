import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-tree/props.md';
import TreeItemProps from './../auto-generated/ix-tree-item/props.md';
import Events from './../auto-generated/ix-tree/events.md';
import TreeItemEvents from './../auto-generated/ix-tree-item/events.md';
import TabItem from '@theme/TabItem';

import SourceTree from './../auto-generated/previews/web-component/tree.md';
import SourceTreeCustom from './../auto-generated/previews/web-component/tree-custom.md';

import SourceReactTree from './../auto-generated/previews/react/tree.md';
import SourceReactTreeCustom from './../auto-generated/previews/react/tree-custom.md';

import SourceAngularTree from './../auto-generated/previews/angular/tree.md';
import SourceAngularTreeCustom from './../auto-generated/previews/angular/tree-custom.md';

# Tree

## Usage

<Preview name="tree" height="16rem">
  <TabItem value="javascript">
    <SourceTree />
  </TabItem>
  <TabItem value="react">
    <SourceReactTree />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTree />
  </TabItem>
</Preview>

### Custom tree node

<Preview name="tree-custom" height="16rem">
  <TabItem value="javascript">
    <SourceTreeCustom />
  </TabItem>
  <TabItem value="react">
    <SourceReactTreeCustom />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTreeCustom />
  </TabItem>
</Preview>

## Properties (ix-tree)

### Props

<Props />

### Events

<Events />

## Properties (ix-tree-item)

### Props

<TreeItemProps />

### Events

<TreeItemEvents />
