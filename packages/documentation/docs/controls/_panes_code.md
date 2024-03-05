import Playground from '@site/src/components/Playground';

import PaneProps from './../auto-generated/ix-pane/props.md';
import PaneEvents from './../auto-generated/ix-pane/events.md';
import PaneLayoutProps from './../auto-generated/ix-pane-layout/props.md';
import PaneLayoutEvents from './../auto-generated/ix-pane-layout/events.md';
import Tags from './../auto-generated/ix-pane/tags.md';

import SourcePane from './../auto-generated/previews/web-component/pane.md';
import SourceReactPane from './../auto-generated/previews/react/pane.md';
import SourceAngularPaneTs from './../auto-generated/previews/angular/pane.ts.md';
import SourceAngularPaneHtml from './../auto-generated/previews/angular/pane.html.md';
import SourceVuePane from './../auto-generated/previews/vue/pane.md';

import SourcePaneLayout from './../auto-generated/previews/web-component/pane-layout.md';
import SourceReactPaneLayout from './../auto-generated/previews/react/pane-layout.md';
import SourceAngularPaneLayoutTs from './../auto-generated/previews/angular/pane-layout.ts.md';
import SourceAngularPaneLayoutHtml from './../auto-generated/previews/angular/pane-layout.html.md';
import SourceVuePaneLayout from './../auto-generated/previews/vue/pane-layout.md';

## Pane

<Tags />

<Playground
name="pane" height="24rem" noMargin
frameworks={{
  react: SourceReactPane,
  angular: {
    "pane.html": SourceAngularPaneHtml,
    "pane.ts": SourceAngularPaneTs
  },
  javascript: SourcePane,
  vue: SourceVuePane
}}>
</Playground>

## Pane Layout

<Tags />

<Playground
name="pane-layout" height="24rem" noMargin
frameworks={{
  react: SourceReactPaneLayout,
  angular: {
    "pane-layout.html": SourceAngularPaneLayoutHtml,
    "pane-layout.ts": SourceAngularPaneLayoutTs
  },
  javascript: SourcePaneLayout,
  vue: SourceVuePaneLayout
}}>
</Playground>

## Properties

### Pane

<PaneProps />

### Pane Layout

<PaneLayoutProps />

## Events

### Pane

<PaneEvents />

### Pane Layout

<PaneLayoutEvents />
