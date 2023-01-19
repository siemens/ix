import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-upload/props.md';
import Events from './../auto-generated/ix-upload/events.md';

import SourceUpload from './../auto-generated/previews/web-component/upload.md';
import SourceReactUpload from './../auto-generated/previews/react/upload.md';
import SourceAngularUpload from './../auto-generated/previews/angular/upload.ts.md';
import SourceVueUpload from './../auto-generated/previews/vue/upload.md';

# Upload

## Usage

<Playground
name="upload" height="8rem"
frameworks={{
  react: SourceReactUpload,
  angular: SourceAngularUpload,
  javascript: SourceUpload,
  vue: SourceVueUpload
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
