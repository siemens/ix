import Props from './../auto-generated/ix-breadcrumb/props.md';
import Events from './../auto-generated/ix-breadcrumb/events.md';

import ItemProps from './../auto-generated/ix-breadcrumb-item/props.md';

import SourceBreadcrumb from './../auto-generated/previews/web-component/breadcrumb.md'
import SourceBreadcrumbTruncate from './../auto-generated/previews/web-component/breadcrumb-truncate.md'
import SourceBreadcrumbNextItems from './../auto-generated/previews/web-component/breadcrumb-next-items.md'

import SourceReactBreadcrumb from './../auto-generated/previews/react/breadcrumb.md'
import SourceReactBreadcrumbTruncate from './../auto-generated/previews/react/breadcrumb-truncate.md'
import SourceReactBreadcrumbNextItems from './../auto-generated/previews/react/breadcrumb-next-items.md'

import SourceAngularBreadcrumb from './../auto-generated/previews/angular/breadcrumb.ts.md'
import SourceAngularBreadcrumbTruncate from './../auto-generated/previews/angular/breadcrumb-truncate.ts.md'
import SourceAngularBreadcrumbNextItems from './../auto-generated/previews/angular/breadcrumb-next-items.ts.md'

import Playground from '@site/src/components/Playground'

# Breadcrumb

## Usage

<Playground
name="breadcrumb"
height="8rem"
frameworks={{
    react: SourceReactBreadcrumb,
    angular: SourceAngularBreadcrumb,
    javascript: SourceBreadcrumb
}}>
</Playground>

### Truncate

<Playground
name="breadcrumb-truncate"
height="10rem"
hideInitalCodePreview
frameworks={{
    react: SourceReactBreadcrumbTruncate,
    angular: SourceAngularBreadcrumbTruncate,
    javascript: SourceBreadcrumbTruncate
}}>
</Playground>

### Lazy loaded next items

<Playground
name="breadcrumb-next-items"
height="8rem"
hideInitalCodePreview
frameworks={{
    react: SourceReactBreadcrumbNextItems,
    angular: SourceAngularBreadcrumbNextItems,
    javascript: SourceBreadcrumbNextItems
}}>
</Playground>

## Properties (ix-breadcrumb)

### Props

<Props />

### Events

<Events />

## Properties (ix-breadcrumb-item)

### Props

<ItemProps />
