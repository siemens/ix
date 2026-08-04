/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxy */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@siemens/ix';
import { defineCustomElement as defineIxInput } from '@siemens/ix/components/ix-input.js';

export const IxInput: StencilVueComponent<JSX.IxInput, JSX.IxInput["value"]> = /*@__PURE__*/ defineContainer<JSX.IxInput, JSX.IxInput["value"]>('ix-input', defineIxInput, [
  'type',
  'name',
  'placeholder',
  'value',
  'required',
  'disabled',
  'readonly',
  'helperText',
  'infoText',
  'showTextAsTooltip',
  'validText',
  'warningText',
  'label',
  'invalidText',
  'pattern',
  'maxLength',
  'minLength',
  'allowedCharactersPattern',
  'suppressSubmitOnEnter',
  'textAlignment',
  'valueChange',
  'validityStateChange',
  'ixBlur',
  'ixChange'
], [
  'valueChange',
  'validityStateChange',
  'ixBlur',
  'ixChange'
],
'value', 'valueChange', undefined);
