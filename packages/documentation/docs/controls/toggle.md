import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-toggle/props.md';
import Events from './../auto-generated/ix-toggle/events.md';

import SourceToggle from './../auto-generated/previews/web-component/toggle.md';
import SourceToggleLabel from './../auto-generated/previews/web-component/toggle-custom-label.md';
import SourceToggleDisabled from './../auto-generated/previews/web-component/toggle-disabled.md';

import SourceReactToggle from './../auto-generated/previews/react/toggle.md';
import SourceReactToggleLabel from './../auto-generated/previews/react/toggle-custom-label.md';
import SourceReactToggleDisabled from './../auto-generated/previews/react/toggle-disabled.md';

import SourceAngularToggle from './../auto-generated/previews/angular/toggle.ts.md';
import SourceAngularToggleLabel from './../auto-generated/previews/angular/toggle-custom-label.ts.md';
import SourceAngularToggleDisabled from './../auto-generated/previews/angular/toggle-disabled.ts.md';

import SourceVueToggle from './../auto-generated/previews/vue/toggle.md';
import SourceVueToggleLabel from './../auto-generated/previews/vue/toggle-custom-label.md';
import SourceVueToggleDisbaled from './../auto-generated/previews/vue/toggle-disabled.md';

# Toggle

## Usage

<Playground
name="toggle"
frameworks={{
  react: SourceReactToggle,
  angular: SourceAngularToggle,
  javascript: SourceToggle,
  vue: SourceVueToggle
}}></Playground>

### Custom label

<Playground
name="toggle-custom-label"
hideInitalCodePreview
frameworks={{
  react: SourceReactToggleLabel,
  angular: SourceAngularToggleLabel,
  javascript: SourceToggleLabel,
  vue: SourceVueToggleLabel
}}></Playground>

### Disabled

<Playground
name="toggle-disabled"
hideInitalCodePreview
frameworks={{
  react: SourceReactToggleDisabled,
  angular: SourceAngularToggleDisabled,
  javascript: SourceToggleDisabled,
  vue: SourceVueToggleDisbaled
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
