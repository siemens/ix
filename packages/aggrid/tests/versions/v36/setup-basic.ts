/*Add a comment on  lines R1 to R5Add diff commentMarkdown input:  edit mode selected.WritePreviewAdd a suggestionHeadingBold(control b) control⌃ bBItalic(control i) control⌃ iIQuote(control shift right angle bracket) control⌃ shift⇧ right angle bracket>Code(control e) control⌃ eELink(control k) control⌃ kKUnordered list(control 8) control⌃ 88Numbered list(control shift ampersand) control⌃ shift⇧ ampersand&Task list(control shift l) control⌃ shift⇧ lLMentionReferenceSlash commandsMore itemsSaved repliesAdd FilesPaste, drop, or click to add filesCancelCommentStart a review
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  AllCommunityModule,
  createGrid,
  ModuleRegistry,
} from 'ag-grid-community-36';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { getIxTheme } from '@siemens/ix-aggrid';
import { COLUMN_DEFS, ROW_DATA } from '../../utils/test/basic.const';
import * as agGridCommunity36 from 'ag-grid-community-36';
import './../../utils/test/runtime/main';

ModuleRegistry.registerModules([AllCommunityModule]);

const theme = getIxTheme(agGridCommunity36);

const gridOptions = {
  columnDefs: COLUMN_DEFS,
  rowData: ROW_DATA,
  rowSelection: {
    mode: 'multiRow',
  },
  suppressCellFocus: true,
  theme: theme,
} satisfies agGridCommunity36.GridOptions;

const myGridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
