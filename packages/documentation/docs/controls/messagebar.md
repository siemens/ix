import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-message-bar/props.md';
import Events from './../auto-generated/ix-message-bar/events.md';

import SourceMessage from './../auto-generated/previews/web-component/message-bar.md';
import SourceReactMessage from './../auto-generated/previews/react/message-bar.md';
import SourceAnuglarMessage from './../auto-generated/previews/angular/message-bar.ts.md';
import SourceVueMessage from './../auto-generated/previews/vue/message-bar.md';

# Message bar

## Usage

<Playground
name="message-bar" height="14rem"
frameworks={{
  react: SourceReactMessage,
  angular: SourceAnuglarMessage,
  javascript: SourceMessage,
  vue: SourceVueMessage
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
