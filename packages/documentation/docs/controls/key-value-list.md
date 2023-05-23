import Playground from '@site/src/components/Playground';

import Tags from './../auto-generated/ix-key-value-list/tags.md';
import Props from './../auto-generated/ix-key-value-list/props.md';

import SourceKeyValueList from './../auto-generated/previews/web-component/key-value-list.md'
import SourceReactKeyValueList from './../auto-generated/previews/react/key-value-list.md'
import SourceAngularKeyValueList from './../auto-generated/previews/angular/key-value-list.ts.md'
import SourceVueKeyValueList from './../auto-generated/previews/vue/key-value-list.md'

import SourceKeyValueListWithCustomValue from './../auto-generated/previews/web-component/key-value-list-with-custom-value.md'
import SourceReactKeyValueListWithCustomValue from './../auto-generated/previews/react/key-value-list-with-custom-value.md'
import SourceAngularKeyValueListWithCustomValue from './../auto-generated/previews/angular/key-value-list-with-custom-value.ts.md'
import SourceVueKeyValueListWithCustomValue from './../auto-generated/previews/vue/key-value-list-with-custom-value.md'

import SourceKeyValueListWithIcon from './../auto-generated/previews/web-component/key-value-list-with-icon.md'
import SourceReactKeyValueListWithIcon from './../auto-generated/previews/react/key-value-list-with-icon.md'
import SourceAngularKeyValueListWithIcon from './../auto-generated/previews/angular/key-value-list-with-icon.ts.md'
import SourceVueKeyValueListWithIcon from './../auto-generated/previews/vue/key-value-list-with-icon.md'

import SourceKeyValueListStriped from './../auto-generated/previews/web-component/key-value-list-striped.md'
import SourceReactKeyValueListStriped from './../auto-generated/previews/react/key-value-list-striped.md'
import SourceAngularKeyValueListStriped from './../auto-generated/previews/angular/key-value-list-striped.ts.md'
import SourceVueKeyValueListStriped from './../auto-generated/previews/vue/key-value-list-striped.md'

# Key value list

<Tags />

## Usage

<Playground
name="key-value-list" height="16rem"
frameworks={{
  react: SourceReactKeyValueList,
  angular: SourceAngularKeyValueList,
  javascript: SourceKeyValueList,
  vue: SourceVueKeyValueList
}}>
</Playground>

### With custom value

<Playground
name="key-value-list-with-custom-value"
frameworks={{
  react: SourceReactKeyValueListWithCustomValue,
  angular: SourceAngularKeyValueListWithCustomValue,
  javascript: SourceKeyValueListWithCustomValue,
  vue: SourceVueKeyValueListWithCustomValue
}}>
</Playground>

### With icon

<Playground
name="key-value-list-with-icon"
frameworks={{
  react: SourceReactKeyValueListWithIcon,
  angular: SourceAngularKeyValueListWithIcon,
  javascript: SourceKeyValueListWithIcon,
  vue: SourceVueKeyValueListWithIcon
}}>
</Playground>

### Striped

<Playground
name="key-value-list-striped"
frameworks={{
  react: SourceReactKeyValueListStriped,
  angular: SourceAngularKeyValueListStriped,
  javascript: SourceKeyValueListStriped,
  vue: SourceVueKeyValueListStriped
}}>
</Playground>

## Properties

### Props

<Props />
