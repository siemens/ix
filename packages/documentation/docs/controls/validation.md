import Playground from '@site/src/components/Playground';

import Props from './../auto-generated/ix-validation-tooltip/props.md';

import SourceValidation from './../auto-generated/previews/web-component/validation.md';
import SourceReactValidation from './../auto-generated/previews/react/validation.md';
import SourceAngularValidation from './../auto-generated/previews/angular/validation.ts.md';

# Form validation

For the validation `@siemens/ix` use the validation concept of [bootstrap](https://getbootstrap.com/docs/5.2/forms/validation/).
The differences is that the validation tooltip is implemented as `@siemens/ix` [tooltip](#properties-tooltip)

In the following preview section you will find different implementation of a forms validation.

## Preview

<Playground
name="validation" height="20rem"
frameworks={{
  react: SourceReactValidation,
  angular: SourceAngularValidation,
  javascript: SourceValidation,
}}>
</Playground>

## Properties (Tooltip)

## Props

<Props />
