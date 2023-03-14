import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-pagination/props.md';
import Events from './../auto-generated/ix-pagination/events.md';

import SourcePagination from './../auto-generated/previews/web-component/pagination.md';
import SourceReactPagination from './../auto-generated/previews/react/pagination.md';
import SourceAngularPagination from './../auto-generated/previews/angular/pagination.ts.md';
import SourceVuePagination from './../auto-generated/previews/vue/pagination.md';

import SourcePaginationAdvanced from './../auto-generated/previews/web-component/pagination-advanced.md';
import SourceReactPaginationAdvanced from './../auto-generated/previews/react/pagination-advanced.md';
import SourceAngularPaginationAdvanced from './../auto-generated/previews/angular/pagination-advanced.ts.md';
import SourceVuePaginationAdvanced from './../auto-generated/previews/vue/pagination-advanced.md';

# Pagination

## Usage

<Playground
name="pagination" height="24rem"
frameworks={{
  react: SourceReactPagination,
  angular: SourceAngularPagination,
  javascript: SourcePagination,
  vue: SourceVuePagination
}}>
</Playground>

## Advanced

<Playground
name="pagination-advanced" height="24rem"
frameworks={{
  react: SourceReactPaginationAdvanced,
  angular: SourceAngularPaginationAdvanced,
  javascript: SourcePaginationAdvanced,
  vue: SourceVuePaginationAdvanced
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
