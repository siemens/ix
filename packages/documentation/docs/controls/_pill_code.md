import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-pill/props.md';
import Events from './../auto-generated/ix-pill/events.md';

import SourcePill from './../auto-generated/previews/web-component/pill.md';
import SourceReactPill from './../auto-generated/previews/react/pill.md';
import SourceAngularPill from './../auto-generated/previews/angular/pill.ts.md';
import SourceVuePill from './../auto-generated/previews/vue/pill.md';

import SourcePillVariants from './../auto-generated/previews/web-component/pill-variants.md';
import SourceAngularPillVariants from './../auto-generated/previews/angular/pill-variants.ts.md';
import SourceReactPillVariants from './../auto-generated/previews/react/pill-variants.md';
import SourceVuePillVariants from './../auto-generated/previews/vue/pill-variants.md';

<Playground
name="pill"
frameworks={{
  react: SourceReactPill,
  angular: SourceAngularPill,
  javascript: SourcePill,
  vue: SourceVuePill
}}>
</Playground>

## Variants
<Playground
name="pill-variants" height="24rem"
frameworks={{
  angular: SourceAngularPillVariants,
  javascript: SourcePillVariants,
  react: SourceReactPillVariants,
  vue: SourceVuePillVariants
}}>
</Playground>

## Properties

### Props

<Props />

### Events

<Events />
