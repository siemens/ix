import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-breadcrumb/props.md';
import Events from './../auto-generated/ix-breadcrumb/events.md';

import ItemProps from './../auto-generated/ix-breadcrumb-item/props.md';

import SourceBreadcrumb from './../auto-generated/previews/web-component/breadcrumb.md'
import SourceBreadcrumbTruncate from './../auto-generated/previews/web-component/breadcrumb-truncate.md'
import SourceBreadcrumbNextItems from './../auto-generated/previews/web-component/breadcrumb-next-items.md'

import SourceReactBreadcrumb from './../auto-generated/previews/react/breadcrumb.md'
import SourceReactBreadcrumbTruncate from './../auto-generated/previews/react/breadcrumb-truncate.md'
import SourceReactBreadcrumbNextItems from './../auto-generated/previews/react/breadcrumb-next-items.md'

import SourceAngularBreadcrumb from './../auto-generated/previews/angular/breadcrumb.md'
import SourceAngularBreadcrumbTruncate from './../auto-generated/previews/angular/breadcrumb-truncate.md'
import SourceAngularBreadcrumbNextItems from './../auto-generated/previews/angular/breadcrumb-next-items.md'

# Breadcrumb

## Usage

<Preview name="breadcrumb" height="8rem">
  <TabItem value="javascript">
    <SourceBreadcrumb />
  </TabItem>
  <TabItem value="react">
    <SourceReactBreadcrumb />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularBreadcrumb />
  </TabItem>
</Preview>

### Truncate

<Preview name="breadcrumb-truncate" height="10rem">
  <TabItem value="javascript">
    <SourceBreadcrumbTruncate />
  </TabItem>
  <TabItem value="react">
    <SourceReactBreadcrumbTruncate />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularBreadcrumbTruncate />
  </TabItem>
</Preview>

### Lazy loaded next items

<Preview name="breadcrumb-next-items" height="8rem">
  <TabItem value="javascript">
    <SourceBreadcrumbNextItems />
  </TabItem>
  <TabItem value="react">
    <SourceReactBreadcrumbNextItems />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularBreadcrumbNextItems />
  </TabItem>
</Preview>

## Properties (ix-breadcrumb)

### Props

<Props />

### Events

<Events />

## Properties (ix-breadcrumb-item)

### Props

<ItemProps />
