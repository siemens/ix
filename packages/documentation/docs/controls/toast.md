import Playground from '@site/src/components/Playground';

import SourceToast from './../auto-generated/previews/web-component/toast.md';
import SourceReactToast from './../auto-generated/previews/react/toast.md';
import SourceAngularToast from './../auto-generated/previews/angular/toast.md';

import SourceToastCustom from './../auto-generated/previews/web-component/toast-custom.md';
import SourceAngularToastCustom from './../auto-generated/previews/angular/toast-custom.md';
import SourceReactToastCustom from './../auto-generated/previews/react/toast-custom.md';

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
