import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-split-button/props.md';
import Events from './../auto-generated/ix-split-button/events.md';

import ItemProps from './../auto-generated/ix-split-button-item/props.md';
import ItemEvents from './../auto-generated/ix-split-button-item/events.md';

import SourceSplitButton from './../auto-generated/previews/web-component/split-button.md';
import SourceSplitButtonIcons from './../auto-generated/previews/web-component/split-button-icons.md';

import SourceReactSplitButton from './../auto-generated/previews/react/split-button.md';
import SourceReactSplitButtonIcons from './../auto-generated/previews/react/split-button-icons.md';

import SourceAngularSplitButton from './../auto-generated/previews/angular/split-button.ts.md';
import SourceAngularSplitButtonIcons from './../auto-generated/previews/angular/split-button-icons.ts.md';

import SourceVueSplitButton from './../auto-generated/previews/vue/split-button.md';
import SourceVueSplitButtonIcons from './../auto-generated/previews/vue/split-button-icons.md';


<Playground
name="split-button" height="16rem"
frameworks={{
  react: SourceReactSplitButton,
  angular: SourceAngularSplitButton,
  javascript: SourceSplitButton,
  vue: SourceVueSplitButton
}}></Playground>

### With icon only

<Playground
name="split-button-icons" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactSplitButtonIcons,
  angular: SourceAngularSplitButtonIcons,
  javascript: SourceSplitButtonIcons,
  vue: SourceVueSplitButtonIcons
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
