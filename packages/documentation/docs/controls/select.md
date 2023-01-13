import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-select/props.md';
import Events from './../auto-generated/ix-select/events.md';

import ItemProps from './../auto-generated/ix-select-item/props.md';
import ItemEvents from './../auto-generated/ix-select-item/events.md';

import SourceSelect from './../auto-generated/previews/web-component/select.md';
import SourceEditable from './../auto-generated/previews/web-component/select-editable.md';
import SourceMultiple from './../auto-generated/previews/web-component/select-multiple.md';

import SourceReactSelect from './../auto-generated/previews/react/select.md';
import SourceReactEditable from './../auto-generated/previews/react/select-editable.md';
import SourceReactMultiple from './../auto-generated/previews/react/select-multiple.md';

import SourceAngularSelect from './../auto-generated/previews/angular/select.ts.md';
import SourceAngularEditable from './../auto-generated/previews/angular/select-editable.ts.md';
import SourceAngularMultiple from './../auto-generated/previews/angular/select-multiple.ts.md';

# Select

## Usage

<Playground
name="select" height="18rem"
frameworks={{
  react: SourceReactSelect,
  angular: SourceAngularSelect,
  javascript: SourceSelect
}}></Playground>

### Editable

<Playground
name="select-editable" height="18rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactEditable,
  angular: SourceAngularEditable,
  javascript: SourceEditable
}}></Playground>

### Multiselect

<Playground
name="select-multiple" height="18rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactMultiple,
  angular: SourceAngularMultiple,
  javascript: SourceMultiple
}}></Playground>

## Properties (ix-select)

### Props

<Props />

### Events

<Events />

## Properties (ix-select-item)

### Props

<ItemProps />

### Events

<ItemEvents />
