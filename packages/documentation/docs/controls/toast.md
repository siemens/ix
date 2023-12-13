import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ApiTableSinceTag } from '@site/src/components/ApiTableTag';
import Playground from '@site/src/components/Playground';

import SourceToast from './../auto-generated/previews/web-component/toast.md';
import SourceReactToast from './../auto-generated/previews/react/toast.md';
import SourceAngularToast from './../auto-generated/previews/angular/toast.ts.md';
import SourceVueToast from './../auto-generated/previews/vue/toast.md';

import SourceToastCustom from './../auto-generated/previews/web-component/toast-custom.md';
import SourceAngularToastCustom from './../auto-generated/previews/angular/toast-custom.ts.md';
import SourceReactToastCustom from './../auto-generated/previews/react/toast-custom.md';
import SourceVueToastCustom from './../auto-generated/previews/vue/toast-custom.md';

import SourceToastPosition from './../auto-generated/previews/web-component/toast-position.md';
import SourceAngularToastPosition from './../auto-generated/previews/angular/toast-position.ts.md';
import SourceReactToastPosition from './../auto-generated/previews/react/toast-position.md';
import SourceVueToastPosition from './../auto-generated/previews/vue/toast-position.md';

import ApiToastConfigJavaScript from './\_toast/javascript/toast-config.md';

import ApiToastServiceAngular from './\_toast/angular/toast-service.html.md';
import ApiToastConfigAngular from './\_toast/angular/toast-config.md';

import ApiToastConfigReact from './\_toast/react/toast-config.md';
import ApiToastConfigVue from './\_toast/vue/toast-config.md';

# Toast

<Playground
name="toast" height="18rem"
frameworks={{
  react: SourceReactToast,
  angular: SourceAngularToast,
  javascript: SourceToast,
  vue: SourceVueToast
}}></Playground>

## Custom toast message

<Playground
name="toast-custom" height="18rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactToastCustom,
  angular: SourceAngularToastCustom,
  javascript: SourceToastCustom,
  vue: SourceVueToastCustom
}}></Playground>

## Position

<ApiTableSinceTag message="1.5.0" />

<Playground
name="toast-position" height="18rem"
frameworks={{
  react: SourceReactToastPosition,
  angular: SourceAngularToastPosition,
  javascript: SourceToastPosition,
  vue: SourceVueToastPosition,
}}></Playground>

## API

<Tabs>
  <TabItem value="Angular">
    <h3>ToastService</h3>
    <ApiToastServiceAngular />
    <h3>ToastConfig</h3>
    <ApiToastConfigAngular />
  </TabItem>

  <TabItem value="React">
    <h3>ToastConfig</h3>
    <ApiToastConfigReact />
  </TabItem>

  <TabItem value="JavaScript">
    <h3>ToastConfig</h3>
    <ApiToastConfigJavaScript />
  </TabItem>

  <TabItem value="Vue">
    <h3>ToastConfig</h3>
    <ApiToastConfigVue />
  </TabItem>
</Tabs>
