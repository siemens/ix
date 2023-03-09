import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-category-filter/props.md';
import Events from './../auto-generated/ix-category-filter/events.md';

import SourceCategoryFilter from './../auto-generated/previews/web-component/category-filter.md'
import SourceReactCategoryFilter from './../auto-generated/previews/react/category-filter.md'
import SourceAngularCategoryFilter from './../auto-generated/previews/angular/category-filter.ts.md'

import SourceCategoryFilterSuggestions from './../auto-generated/previews/web-component/category-filter-suggestions.md'
import SourceReactCategoryFilterSuggestions from './../auto-generated/previews/react/category-filter-suggestions.md'
import SourceAngularCategoryFilterSuggestions from './../auto-generated/previews/angular/category-filter-suggestions.ts.md'

import SourceVueCategoryFilter from './../auto-generated/previews/vue/category-filter.md'
import SourceVueCategoryFilterSuggestions from './../auto-generated/previews/vue/category-filter-suggestions.md'

import Playground from '@site/src/components/Playground';

# Category filter

## Usage

<Playground
name="category-filter"
height="12rem"
frameworks={{
  react: SourceReactCategoryFilter,
  angular: SourceAngularCategoryFilter,
  javascript: SourceCategoryFilter,
  vue: SourceVueCategoryFilter
}}></Playground>

### without categories

<Playground
name="category-filter-suggestions"
hideInitalCodePreview
height="12rem"
frameworks={{
  react: SourceReactCategoryFilterSuggestions,
  angular: SourceAngularCategoryFilterSuggestions,
  javascript: SourceCategoryFilterSuggestions,
  vue: SourceVueCategoryFilterSuggestions
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
