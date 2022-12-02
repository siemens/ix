import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-blind/props.md';
import Events from './../auto-generated/ix-blind/events.md';

import WebComponent from './../auto-generated/previews/web-component/blind.md'
import SourceReact from './../auto-generated/previews/react/blind.md'
import SourceAngular from './../auto-generated/previews/angular/blind.md'

import Playground from '@site/src/components/Playground'

# Blind

## Usage

<Playground
name="blind"
height="16rem"
frameworks={{
    react: SourceReact,
    angular: SourceAngular,
    javascript: WebComponent
}}>
</Playground>

<Preview name="blind" height="16rem">
  <TabItem value="javascript">
    <WebComponent />
  </TabItem>
  <TabItem value="react">
    <SourceReact />
  </TabItem>
  <TabItem value="angular">
    <SourceAngular />
  </TabItem>
</Preview>

## Properties

### Props

<Props />

### Events

<Events / >
