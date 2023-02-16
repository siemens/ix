import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-blind/props.md';
import Events from './../auto-generated/ix-blind/events.md';

import WebComponent from './../auto-generated/previews/web-component/blind.md'
import SourceReact from './../auto-generated/previews/react/blind.md'
import SourceAngularTs from './../auto-generated/previews/angular/blind.ts.md'
import SourceAngularHtml from './../auto-generated/previews/angular/blind.html.md'

import Playground from '@site/src/components/Playground'

<Playground
name="blind"
height="16rem"
frameworks={{
    react: SourceReact,
    angular: {
        "blind.html": SourceAngularHtml,
        "blind.ts": SourceAngularTs
    },
    javascript: WebComponent
}}>
</Playground>

### Properties

#### Props

<Props />

#### Events

<Events / >
