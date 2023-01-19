import Playground from '@site/src/components/Playground';

import SourceToast from './../auto-generated/previews/web-component/toast.md';
import SourceReactToast from './../auto-generated/previews/react/toast.md';
import SourceAngularToast from './../auto-generated/previews/angular/toast.ts.md';
import SourceVueToast from './../auto-generated/previews/vue/toast.md';

import SourceToastCustom from './../auto-generated/previews/web-component/toast-custom.md';
import SourceAngularToastCustom from './../auto-generated/previews/angular/toast-custom.ts.md';
import SourceReactToastCustom from './../auto-generated/previews/react/toast-custom.md';
import SourceVueToastCustom from './../auto-generated/previews/vue/toast-custom.md';

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
