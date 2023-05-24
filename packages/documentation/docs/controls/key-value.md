import Playground from '@site/src/components/Playground';

import Tags from './../auto-generated/ix-key-value/tags.md';
import Props from './../auto-generated/ix-key-value/props.md';
import Slots from './../auto-generated/ix-key-value/slots.md';

import SourceKeyValue from './../auto-generated/previews/web-component/key-value.md'
import SourceReactKeyValue from './../auto-generated/previews/react/key-value.md'
import SourceAngularKeyValue from './../auto-generated/previews/angular/key-value.ts.md'
import SourceVueKeyValue from './../auto-generated/previews/vue/key-value.md'

import SourceKeyValueWithCustomValue from './../auto-generated/previews/web-component/key-value-with-custom-value.md'
import SourceReactKeyValueWithCustomValue from './../auto-generated/previews/react/key-value-with-custom-value.md'
import SourceAngularKeyValueWithCustomValue from './../auto-generated/previews/angular/key-value-with-custom-value.ts.md'
import SourceVueKeyValueWithCustomValue from './../auto-generated/previews/vue/key-value-with-custom-value.md'

import SourceKeyValueWithIcon from './../auto-generated/previews/web-component/key-value-with-icon.md'
import SourceReactKeyValueWithIcon from './../auto-generated/previews/react/key-value-with-icon.md'
import SourceAngularKeyValueWithIcon from './../auto-generated/previews/angular/key-value-with-icon.ts.md'
import SourceVueKeyValueWithIcon from './../auto-generated/previews/vue/key-value-with-icon.md'

import SourceKeyValueWithLabelLeft from './../auto-generated/previews/web-component/key-value-with-label-left.md'
import SourceReactKeyValueWithLabelLeft from './../auto-generated/previews/react/key-value-with-label-left.md'
import SourceAngularKeyValueWithLabelLeft from './../auto-generated/previews/angular/key-value-with-label-left.ts.md'
import SourceVueKeyValueWithLabelLeft from './../auto-generated/previews/vue/key-value-with-label-left.md'

# Key value

<Tags />

## Usage

<Playground
name="key-value" height="16rem"
frameworks={{
  react: SourceReactKeyValue,
  angular: SourceAngularKeyValue,
  javascript: SourceKeyValue,
  vue: SourceVueKeyValue
}}>
</Playground>

### With custom value

<Playground
name="key-value-with-custom-value"
frameworks={{
  react: SourceReactKeyValueWithCustomValue,
  angular: SourceAngularKeyValueWithCustomValue,
  javascript: SourceKeyValueWithCustomValue,
  vue: SourceVueKeyValueWithCustomValue
}}>
</Playground>

### With icon

<Playground
name="key-value-with-icon"
frameworks={{
  react: SourceReactKeyValueWithIcon,
  angular: SourceAngularKeyValueWithIcon,
  javascript: SourceKeyValueWithIcon,
  vue: SourceVueKeyValueWithIcon
}}>
</Playground>

### With label on left side

<Playground
name="key-value-with-label-left"
frameworks={{
  react: SourceReactKeyValueWithLabelLeft,
  angular: SourceAngularKeyValueWithLabelLeft,
  javascript: SourceKeyValueWithLabelLeft,
  vue: SourceVueKeyValueWithLabelLeft
}}>
</Playground>

## Properties

### Props

<Props />

### Slots

<Slots />
