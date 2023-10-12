import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/test-component/props.md';
import Events from './../auto-generated/test-component/events.md';

import SourceTestComponentWeb from './../auto-generated/previews/web-component/test-component.md'
import SourceTestComponentReact from './../auto-generated/previews/react/test-component.md';
import SourceTestComponentAngular from './../auto-generated/previews/angular/test-component.ts.md';
import SourceTestComponentVue from './../auto-generated/previews/vue/test-component.md';

# Test Component

## Usage

<Playground
name="test-component" height="20rem"
frameworks={{
  react: SourceTestComponentReact,
  javascript: SourceTestComponentWeb,
  angular: SourceTestComponentAngular,
  vue: SourceTestComponentVue
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
