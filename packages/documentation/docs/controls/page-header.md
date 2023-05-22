import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-page-header/props.md';
import Events from './../auto-generated/ix-page-header/events.md';

import SourcePageHeader from './../auto-generated/previews/web-component/page-header.md'
import SourceReactPageHeader from './../auto-generated/previews/react/page-header.md'
import SourceHtmlAngularPageHeader from './../auto-generated/previews/angular/page-header.html.md'
import SourceTsAngularPageHeader from './../auto-generated/previews/angular/page-header.ts.md'
import SourceVuePageHeader from './../auto-generated/previews/vue/page-header.md'

import SourcePageHeaderNoBack from './../auto-generated/previews/web-component/page-header-no-back.md'
import SourceReactPageHeaderNoBack from './../auto-generated/previews/react/page-header-no-back.md'
import SourceHtmlAngularPageHeaderNoBack from './../auto-generated/previews/angular/page-header-no-back.html.md'
import SourceTsAngularPageHeaderNoBack from './../auto-generated/previews/angular/page-header-no-back.ts.md'
import SourceVuePageHeaderNoBack from './../auto-generated/previews/vue/page-header-no-back.md'

# Page Header

## Usage

<Playground
name="page-header"
frameworks={{
  react: SourceReactPageHeader,
  angular: {
      "page-header.html": SourceHtmlAngularPageHeader,
      "page-header.ts": SourceTsAngularPageHeader
  },
  javascript: SourcePageHeader,
  vue: SourceVuePageHeader
}}>
</Playground>

### No back button

<Playground
name="page-header-no-back"
frameworks={{
  react: SourceReactPageHeaderNoBack,
  angular: {
      "page-header-no-back.html": SourceHtmlAngularPageHeaderNoBack,
      "page-header-no-back.ts": SourceTsAngularPageHeaderNoBack
  },
  javascript: SourcePageHeaderNoBack,
  vue: SourceVuePageHeaderNoBack
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
