import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Tags from './../auto-generated/ix-tooltip/tags.md';
import Props from './../auto-generated/ix-tooltip/props.md';
import Slots from './../auto-generated/ix-tooltip/slots.md';

import SourceJavascript from './../auto-generated/previews/web-component/tooltip.md'

import SourceReact from './../auto-generated/previews/react/tooltip.md'
import SourceVue from './../auto-generated/previews/vue/tooltip.md'
import SourceAngularTs from './../auto-generated/previews/angular/tooltip.ts.md'
import SourceAngularHtml from './../auto-generated/previews/angular/tooltip.html.md'

import Playground from '@site/src/components/Playground'

# Tooltip

<Tags />

## Usage

<Playground
name="tooltip"
height="16rem"
frameworks={{
    react: SourceReact,
    angular: {
        "tooltip.html": SourceAngularHtml,
        "tooltip.ts": SourceAngularTs
    },
    javascript: SourceJavascript,
    vue: SourceVue
}}>
</Playground>

## Properties

### Props

<Props />

### Slots

<Slots />
