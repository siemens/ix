import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-spinner/props.md';
import Events from './../auto-generated/ix-spinner/events.md';

import SourceSpinner from './../auto-generated/previews/web-component/spinner.md';
import SourceSpinnerLarge from './../auto-generated/previews/web-component/spinner-large.md';

import SourceReactSpinner from './../auto-generated/previews/react/spinner.md';
import SourceReactSpinnerLarge from './../auto-generated/previews/react/spinner-large.md';

import SourceAngularSpinner from './../auto-generated/previews/angular/spinner.ts.md';
import SourceAngularSpinnerLarge from './../auto-generated/previews/angular/spinner-large.ts.md';

import SourceVueSpinner from './../auto-generated/previews/vue/spinner.md';
import SourceVueSpinnerLarge from './../auto-generated/previews/vue/spinner-large.md';

# Spinner

## Usage

<Playground
name="spinner" height="5rem"
frameworks={{
  react: SourceReactSpinner,
  angular: SourceAngularSpinner,
  javascript: SourceSpinner,
  vue: SourceVueSpinner
}}></Playground>

### Large

<Playground
name="spinner-large" height="16rem"
hideInitalCodePreview
frameworks={{
  react: SourceAngularSpinnerLarge,
  angular: SourceReactSpinnerLarge,
  javascript: SourceSpinnerLarge,
  vue: SourceVueSpinnerLarge
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />
