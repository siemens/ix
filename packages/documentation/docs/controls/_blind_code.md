import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Props from './../auto-generated/ix-blind/props.md';
import Events from './../auto-generated/ix-blind/events.md';

import WebComponent from './../auto-generated/previews/web-component/blind.md'
import SourceReact from './../auto-generated/previews/react/blind.md'
import SourceVue from './../auto-generated/previews/vue/blind.md'
import SourceAngularTs from './../auto-generated/previews/angular/blind.ts.md'
import SourceAngularHtml from './../auto-generated/previews/angular/blind.html.md'

import WebComponentHeaderActions from './../auto-generated/previews/web-component/blind-header-actions.md'
import SourceReactHeaderActions from './../auto-generated/previews/react/blind-header-actions.md'
import SourceVueHeaderActions from './../auto-generated/previews/vue/blind-header-actions.md'
import SourceAngularHeaderActions from './../auto-generated/previews/angular/blind-header-actions.ts.md'

import WebComponentVariants from './../auto-generated/previews/web-component/blind-variants.md'
import SourceReactVariants from './../auto-generated/previews/react/blind-variants.md'
import SourceVueVariants from './../auto-generated/previews/vue/blind-variants.md'
import SourceAngularVariantsTs from './../auto-generated/previews/angular/blind-variants.ts.md'
import SourceAngularVariantsHtml from './../auto-generated/previews/angular/blind-variants.html.md'


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
    javascript: WebComponent,
    vue: SourceVue
}}>
</Playground>

### Header actions

<ApiTableSinceTag message="1.5.0" />

<Playground
name="blind-header-actions"
height="16rem"
frameworks={{
    react: SourceReactHeaderActions,
    angular: SourceAngularHeaderActions,
    javascript: WebComponentHeaderActions,
    vue: SourceVueHeaderActions
}}>
</Playground>

<ApiTableSinceTag message="2.0.0" />

<Playground
name="blind-variants"
height="55rem"
frameworks={{
    react: SourceReactVariants,
    angular: {
        "blind.html": SourceAngularVariantsHtml,
        "blind.ts": SourceAngularVariantsTs
    },
    javascript: WebComponentVariants,
    vue: SourceVueVariants
}}>
</Playground>


### Properties

#### Props

<Props />

#### Events

<Events />
