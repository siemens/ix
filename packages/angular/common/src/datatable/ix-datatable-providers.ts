/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Provider } from '@angular/core';

/**
 * Interface for messages to override default table texts.
 */
export interface IxDatatableMessages {
  /** Message to show when the array is present but empty */
  emptyMessage: string;
  /** Footer total message */
  totalMessage: string;
  /** Footer selected message */
  selectedMessage: string;
  /** Pager screen reader message for the first page button */
  ariaFirstPageMessage: string;
  /**
   * Pager screen reader message for the n-th page button.
   * It will be rendered as: `{{ariaPageNMessage}} {{n}}`.
   */
  ariaPageNMessage: string;
  /** Pager screen reader message for the previous page button */
  ariaPreviousPageMessage: string;
  /** Pager screen reader message for the next page button */
  ariaNextPageMessage: string;
  /** Pager screen reader message for the last page button */
  ariaLastPageMessage: string;
  /** Row checkbox aria label */
  ariaRowCheckboxMessage: string;
  /** Header checkbox aria label */
  ariaHeaderCheckboxMessage: string;
  /** Group header checkbox aria label */
  ariaGroupHeaderCheckboxMessage: string;
}

/**
 * CSS classes for icons that override the default table icons.
 */
export interface IxDatatableCssClasses {
  sortAscending: string;
  sortDescending: string;
  sortUnset: string;
  pagerLeftArrow: string;
  pagerRightArrow: string;
  pagerPrevious: string;
  pagerNext: string;
  treeStatusLoading: string;
  treeStatusExpanded: string;
  treeStatusCollapsed: string;
}

/**
 * Configuration interface for the @siemens/ngx-datatable.
 * See https://github.com/siemens/ngx-datatable
 */
export interface IxDatatableConfig {
  messages?: IxDatatableMessages;
  cssClasses?: IxDatatableCssClasses;
  headerHeight?: number;
  footerHeight?: number;
  rowHeight?: number;
  defaultColumnWidth?: number;
}

/**
 * Extended configuration with IX-specific defaults.
 */
interface IxDatatableFullConfig extends IxDatatableConfig {
  cssClasses: IxDatatableCssClasses;
  headerHeight: number;
  footerHeight: number;
  rowHeight: number;
  rowHeightSmall: number;
  rowHeightExtraSmall: number;
  rowHeightTiny: number;
  summaryHeight: number;
}

/**
 * Default IX datatable configuration with IX icon classes.
 */
export const IX_DATATABLE_CONFIG: IxDatatableFullConfig = {
  cssClasses: {
    sortAscending: 'ix-datatable-icon-sort-asc',
    sortDescending: 'ix-datatable-icon-sort-desc',
    pagerLeftArrow: 'ix-datatable-icon-pager-left',
    pagerRightArrow: 'ix-datatable-icon-pager-right',
    pagerPrevious: 'ix-datatable-icon-pager-prev',
    pagerNext: 'ix-datatable-icon-pager-next',
    sortUnset: '',
    treeStatusLoading: '',
    treeStatusExpanded: 'ix-datatable-icon-tree-expanded',
    treeStatusCollapsed: 'ix-datatable-icon-tree-collapsed',
  },
  headerHeight: 44, // 40px actual-height + 4px border-bottom
  footerHeight: 40,
  rowHeight: 64,
  rowHeightSmall: 48,
  rowHeightExtraSmall: 32,
  rowHeightTiny: 24,
  summaryHeight: 32,
};

/**
 * Provides IX configuration for the @siemens/ngx-datatable.
 *
 * @param configOverrides - overrides that will be merged with the IX configuration.
 *
 * @example
 * ```typescript
 * // In your AppModule or component providers:
 * providers: [provideIxDatatableConfig()]
 *
 * // With overrides:
 * providers: [provideIxDatatableConfig({ headerHeight: 50 })]
 * ```
 */
export const provideIxDatatableConfig = (
  configOverrides?: IxDatatableConfig
): Provider => ({
  provide: 'configuration',
  useValue: { ...IX_DATATABLE_CONFIG, ...configOverrides },
});
