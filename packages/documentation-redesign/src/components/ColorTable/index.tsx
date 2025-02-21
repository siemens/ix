/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ApiTable from '@site/src/components/ApiTable';
import { AnchorHeader } from '@site/src/components/ApiTable';
import ThemeSelection from '../UI/ThemeSelection';
function ColorTable({ children, colorName }) {
  return (
    <ApiTable>
      <AnchorHeader
        anchorName={`color-${colorName}`}
        anchorLabel="Direct link to the color"
        right={<ThemeSelection></ThemeSelection>}
      >
        --theme-{colorName}
      </AnchorHeader>

      {children}
    </ApiTable>
  );
}

export default ColorTable;
