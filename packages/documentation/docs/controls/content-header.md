import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-content-header/props.md';
import Events from './../auto-generated/ix-content-header/events.md';

import SourceContentHeader from './../auto-generated/previews/web-component/content-header.md'
import SourceReactContentHeader from './../auto-generated/previews/react/content-header.md'
import SourceHtmlAngularContentHeader from './../auto-generated/previews/angular/content-header.html.md'
import SourceTsAngularContentHeader from './../auto-generated/previews/angular/content-header.ts.md'
import SourceVueContentHeader from './../auto-generated/previews/vue/content-header.md'

import SourceContentHeaderNoBack from './../auto-generated/previews/web-component/content-header-no-back.md'
import SourceReactContentHeaderNoBack from './../auto-generated/previews/react/content-header-no-back.md'
import SourceHtmlAngularContentHeaderNoBack from './../auto-generated/previews/angular/content-header-no-back.html.md'
import SourceTsAngularContentHeaderNoBack from './../auto-generated/previews/angular/content-header-no-back.ts.md'
import SourceVueContentHeaderNoBack from './../auto-generated/previews/vue/content-header-no-back.md'

# Content Header

## Usage

<Playground
name="content-header"
frameworks={{
  react: SourceReactContentHeader,
  angular: {
      "content-header.html": SourceHtmlAngularContentHeader,
      "content-header.ts": SourceTsAngularContentHeader
  },
  javascript: SourceContentHeader,
  vue: SourceVueContentHeader
}}>
</Playground>

### No back button

<Playground
name="content-header-no-back"
frameworks={{
  react: SourceReactContentHeaderNoBack,
  angular: {
      "content-header-no-back.html": SourceHtmlAngularContentHeaderNoBack,
      "content-header-no-back.ts": SourceTsAngularContentHeaderNoBack
  },
  javascript: SourceContentHeaderNoBack,
  vue: SourceVueContentHeaderNoBack
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
