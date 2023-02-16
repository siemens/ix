import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '@site/src/components/Playground';

import SourceToast from './../auto-generated/previews/web-component/toast.md';
import SourceReactToast from './../auto-generated/previews/react/toast.md';
import SourceAngularToast from './../auto-generated/previews/angular/toast.ts.md';

import SourceToastCustom from './../auto-generated/previews/web-component/toast-custom.md';
import SourceAngularToastCustom from './../auto-generated/previews/angular/toast-custom.ts.md';
import SourceReactToastCustom from './../auto-generated/previews/react/toast-custom.md';

import ApiToastConfigJavaScript from './\_toast/javascript/toast-config.md';

import ApiToastServiceAngular from './\_toast/angular/toast-service.html.md';
import ApiToastConfigAngular from './\_toast/angular/toast-config.md';

import ApiToastConfigReact from './\_toast/react/toast-config.md';

# Toast

<Playground
name="toast" height="18rem"
frameworks={{
  react: SourceReactToast,
  angular: SourceAngularToast,
  javascript: SourceToast
}}></Playground>

## Custom toast message

<Playground
name="toast-custom" height="18rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactToastCustom,
  angular: SourceAngularToastCustom,
  javascript: SourceToastCustom
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
</Tabs>
