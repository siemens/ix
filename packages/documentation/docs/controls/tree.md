import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-tree/props.md';
import TreeItemProps from './../auto-generated/ix-tree-item/props.md';
import Events from './../auto-generated/ix-tree/events.md';
import TreeItemEvents from './../auto-generated/ix-tree-item/events.md';
import TabItem from '@theme/TabItem';

import SourceTree from './../auto-generated/previews/web-component/tree.md';
import SourceTreeCustom from './../auto-generated/previews/web-component/tree-custom.md';

import SourceReactTree from './../auto-generated/previews/react/tree.md';
import SourceReactTreeCustom from './../auto-generated/previews/react/tree-custom.md';

import SourceAngularTree from './../auto-generated/previews/angular/tree.ts.md';
import SourceAngularTreeCustom from './../auto-generated/previews/angular/tree-custom.ts.md';

import SourceVueTree from './../auto-generated/previews/vue/tree.md';
import SourceVueTreeCustom from './../auto-generated/previews/vue/tree-custom.md';

# Tree

## Usage

<Playground
name="tree" height="16rem"
frameworks={{
  react: SourceReactTree,
  angular: SourceAngularTree,
  javascript: SourceTree,
  vue: SourceVueTree
}}></Playground>

### Custom tree node

<Playground
name="tree-custom" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactTreeCustom,
  angular: SourceAngularTreeCustom,
  javascript: SourceTreeCustom,
  vue: SourceVueTreeCustom
}}></Playground>

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
