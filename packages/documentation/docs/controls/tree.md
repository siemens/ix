import Preview from '@site/src/components/Preview';
import SourceTree from './../auto-generated/previews/web-component/tree.md';
import SourceTreeCustom from './../auto-generated/previews/web-component/tree-custom.md';
import Props from './../auto-generated/cw-tree/props.md';
import Events from './../auto-generated/cw-tree/events.md';
import TabItem from '@theme/TabItem';

# Tree

## Usage

<Preview name="tree" height="16rem">
  <TabItem value="javascript">
    <SourceTree />
  </TabItem>
</Preview>

### Custom tree node

<Preview name="tree-custom" height="16rem">
  <TabItem value="javascript">
    <SourceTreeCustom />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events />
