/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxy */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@siemens/ix';
import { defineCustomElement as defineIxDatePicker } from '@siemens/ix/components/ix-date-picker.js';

export const IxDatePicker: StencilVueComponent<JSX.IxDatePicker> = /*@__PURE__*/ defineContainer<JSX.IxDatePicker>('ix-date-picker', defineIxDatePicker, [
  'format',
  'singleSelection',
  'corners',
  'from',
  'to',
  'minDate',
  'maxDate',
  'i18nDone',
  'requireConfirmation',
  'i18nConfirm',
  'i18nCancel',
  'ariaLabelPreviousMonthButton',
  'ariaLabelNextMonthButton',
  'ariaLabelMonthSelection',
  'ariaLabelYearSelection',
  'weekStartIndex',
  'locale',
  'showWeekNumbers',
  'embedded',
  'today',
  'enableTopLayer',
  'dateChange',
  'dateRangeChange',
  'dateSelect',
  'dateCancel'
], [
  'dateChange',
  'dateRangeChange',
  'dateSelect',
  'dateCancel'
]);
