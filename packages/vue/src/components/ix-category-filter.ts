/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxy */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@siemens/ix';
import { defineCustomElement as defineIxCategoryFilter } from '@siemens/ix/components/ix-category-filter.js';

export const IxCategoryFilter: StencilVueComponent<JSX.IxCategoryFilter> = /*@__PURE__*/ defineContainer<JSX.IxCategoryFilter>('ix-category-filter', defineIxCategoryFilter, [
  'disabled',
  'readonly',
  'filterState',
  'placeholder',
  'categories',
  'nonSelectableCategories',
  'suggestions',
  'icon',
  'hideIcon',
  'staticOperator',
  'uniqueCategories',
  'labelCategories',
  'i18nPlainText',
  'ariaLabelResetButton',
  'ariaLabelOperatorButton',
  'ariaLabelFilterInput',
  'enableTopLayer',
  'categoryChanged',
  'inputChanged',
  'filterChanged',
  'filterCleared'
], [
  'categoryChanged',
  'inputChanged',
  'filterChanged',
  'filterCleared'
]);
