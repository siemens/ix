---
sidebar_position: 2
---
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Playground';
import SourceWebComponent from './../auto-generated/previews/web-component/theme-switcher.md'
import ReactComponent from './../auto-generated/previews/react/theme-switcher.md'
import AngularComponent from './../auto-generated/previews/angular/theme-switcher.ts.md'

# Theme switching

## Working with themes during runtime

<ApiTableSinceTag message="1.3.0" />

<Playground
name="theme-switcher" height="15rem"
frameworks={{
  react: ReactComponent,
  angular: AngularComponent,
  javascript: SourceWebComponent
}}></Playground>
