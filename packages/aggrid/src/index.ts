/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type AgGridCommunity from 'ag-grid-community';
// import filterIcon from './filter-icon.style.css';
import checkboxStyles from './checkbox.style.css';

type AgGridModule = typeof AgGridCommunity;

const applyIxTheme = async (
  importedAggridModule: () => Promise<AgGridModule> | AgGridModule
) => {
  const { createTheme, createPart, themeAlpine } = await importedAggridModule();
  const base = themeAlpine.withParams({
    backgroundColor: 'var(--theme-color-1)',
    foregroundColor: 'var(--theme-color-std-text)',
    headerBackgroundColor: 'transparent',
    oddRowBackgroundColor: 'transparent',
    rowHoverColor: 'var(--theme-table-data-row--background--hover)',
    selectedRowBackgroundColor:
      'var(--theme-table-data-row--background--selected)',

    rangeSelectionBackgroundColor:
      'var(--theme-table-data-row--background--selected)',
    rangeSelectionBorderColor: 'var(--theme-input--border-color--focus)',
    headerColumnResizeHandleColor:
      'var(--theme-table-header-splitter--background)',
    headerColumnResizeHandleHeight: '100%',
    headerColumnResizeHandleWidth: '1px',

    inputFocusShadow: 'none',
  });

  function checkboxPart() {
    return base.withoutPart('checkboxStyle').withPart(
      createPart({
        feature: 'checkboxStyle',
        params: {},
        css: checkboxStyles,
      })
    );
  }

  return checkboxPart();
};

export { applyIxTheme };
