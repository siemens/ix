import Playground from '@site/src/components/Playground';

import Props from './../../auto-generated/ix-map-navigation/props.md';
import Events from './../../auto-generated/ix-map-navigation/events.md';
import PropsOverlay from './../../auto-generated/ix-map-navigation-overlay/props.md';
import EventsOverlay from './../../auto-generated/ix-map-navigation-overlay/events.md';

import SourceWebComponent from './../../auto-generated/previews/web-component/map-navigation.md'
import ReactComponent from './../../auto-generated/previews/react/map-navigation.md'
import AngularComponent from './../../auto-generated/previews/angular/map-navigation.ts.md'
import VueComponent from './../../auto-generated/previews/vue/map-navigation.md'

import OverlayWebComponent from './../../auto-generated/previews/web-component/map-navigation-overlay.md'
import OverlayReactComponent from './../../auto-generated/previews/react/map-navigation-overlay.md'
import OverlayAngularComponent from './../../auto-generated/previews/angular/map-navigation-overlay.ts.md'
import OverlayVueComponent from './../../auto-generated/previews/vue/map-navigation-overlay.md'

## Example

<Playground
name="map-navigation" height="35rem" noMargin
hideInitalCodePreview
frameworks={{
  react: ReactComponent,
  angular: AngularComponent,
  javascript: SourceWebComponent,
  vue: VueComponent
}}></Playground>

### Custom overlay

<Playground
name="map-navigation-overlay" height="35rem" noMargin
hideInitalCodePreview
frameworks={{
  react: OverlayReactComponent,
  angular: OverlayAngularComponent,
  javascript: OverlayWebComponent,
  vue: OverlayVueComponent
}}></Playground>

## API

### Props

<Props />

### Events

<Events />
