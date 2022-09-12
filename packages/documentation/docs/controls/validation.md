import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-validation-tooltip/props.md';

import SourceValidation from './../auto-generated/previews/web-component/validation.md';
import SourceReactValidation from './../auto-generated/previews/react/validation.md';
import SourceAngularValidation from './../auto-generated/previews/angular/validation.md';

# Form validation

For the validation `@siemens/ix` use the validation concept of [bootstrap](https://getbootstrap.com/docs/5.2/forms/validation/).
The differences is that the validation tooltip is implemented as `@siemens/ix` [tooltip](#properties-tooltip)

In the following preview section you will find different implementation of a forms validation.

## Preview

<Preview name="validation" height="20rem">
  <TabItem value="javascript">
    <SourceValidation />
  </TabItem>
  <TabItem value="react">
    <SourceReactValidation />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularValidation />
  </TabItem>
</Preview>

## Properties (Tooltip)

## Props

<Props />
