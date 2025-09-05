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
import { aggridIxThemeParams } from './aggrid-ix-theme-params.ts';

type AgGridModule = typeof AgGridCommunity;

const useIxTheme = async (
  importModule: () => Promise<AgGridModule> | AgGridModule
) => {
  const { createPart, themeAlpine } = await importModule();
  const base = themeAlpine.withParams({
    ...aggridIxThemeParams,
  });

  function modifyParts() {
    return base.withoutPart('checkboxStyle').withPart(
      createPart({
        feature: 'checkboxStyle',
        params: {},
        css: checkboxStyles,
      })
    );
  }

  return modifyParts();
};

export { useIxTheme };
