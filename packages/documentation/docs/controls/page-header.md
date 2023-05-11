import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-page-header/props.md';
import Events from './../auto-generated/ix-page-header/events.md';

import SourcePageHeader from './../auto-generated/previews/web-component/page-header.md'
import SourceReactPageHeader from './../auto-generated/previews/react/page-header.md'
import SourceAngularPageHeader from './../auto-generated/previews/angular/page-header.ts.md'
import SourceVuePageHeader from './../auto-generated/previews/vue/page-header.md'

# Page Header

## Usage

<Playground
name="page-header" height="35rem"
frameworks={{
  react: SourceReactPageHeader,
  angular: SourceAngularPageHeader,
  javascript: SourcePageHeader,
  vue: SourceVuePageHeader
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
