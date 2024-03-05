import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-toggle/props.md';
import Events from './../auto-generated/ix-toggle/events.md';

import SourceToggle from './../auto-generated/previews/web-component/toggle.md';
import SourceToggleLabel from './../auto-generated/previews/web-component/toggle-custom-label.md';
import SourceToggleDisabled from './../auto-generated/previews/web-component/toggle-disabled.md';
import SourceToggleChecked from './../auto-generated/previews/web-component/toggle-checked.md';
import SourceToggleIndeterminate from './../auto-generated/previews/web-component/toggle-indeterminate.md';

import SourceReactToggle from './../auto-generated/previews/react/toggle.md';
import SourceReactToggleLabel from './../auto-generated/previews/react/toggle-custom-label.md';
import SourceReactToggleDisabled from './../auto-generated/previews/react/toggle-disabled.md';
import SourceReactToggleChecked from './../auto-generated/previews/react/toggle-checked.md';
import SourceReactToggleIndeterminate from './../auto-generated/previews/react/toggle-indeterminate.md';

import SourceAngularToggle from './../auto-generated/previews/angular/toggle.ts.md';
import SourceAngularToggleNgModel from './../auto-generated/previews/angular/toggle-ng-model.ts.md';
import SourceAngularToggleLabel from './../auto-generated/previews/angular/toggle-custom-label.ts.md';
import SourceAngularToggleDisabled from './../auto-generated/previews/angular/toggle-disabled.ts.md';
import SourceAngularToggleChecked from './../auto-generated/previews/angular/toggle-checked.ts.md';
import SourceAngularToggleIndeterminate from './../auto-generated/previews/angular/toggle-indeterminate.ts.md';

import SourceVueToggle from './../auto-generated/previews/vue/toggle.md';
import SourceVueToggleLabel from './../auto-generated/previews/vue/toggle-custom-label.md';
import SourceVueToggleDisabled from './../auto-generated/previews/vue/toggle-disabled.md';
import SourceVueToggleChecked from './../auto-generated/previews/vue/toggle-checked.md';
import SourceVueToggleIndeterminate from './../auto-generated/previews/vue/toggle-indeterminate.md';

# Toggle

## Example

<Playground
name="toggle"
frameworks={{
  react: SourceReactToggle,
  angular: {
    'toggle.ts': SourceAngularToggle,
    "toggle-ng-model.ts": SourceAngularToggleNgModel,
    },
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
  vue: SourceVueToggleDisabled
}}></Playground>

### Checked

<Playground
name="toggle-checked"
hideInitalCodePreview
frameworks={{
  react: SourceReactToggleChecked,
  angular: SourceAngularToggleChecked,
  javascript: SourceToggleChecked,
  vue: SourceVueToggleChecked
}}></Playground>

### Indeterminate

<Playground
name="toggle-indeterminate"
hideInitalCodePreview
frameworks={{
  react: SourceReactToggleIndeterminate,
  angular: SourceAngularToggleIndeterminate,
  javascript: SourceToggleIndeterminate,
  vue: SourceVueToggleIndeterminate
}}></Playground>

## API

### Props

<Props />

### Events

<Events />
