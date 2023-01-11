/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { themeSwitcher } from '@siemens/ix';
import { IxButton, IxSelect, IxSelectItem } from '@siemens/ix-react';
import React from 'react';
export default () => {
  return (
    <>
      <IxButton className="mb-2" onClick={() => themeSwitcher.toggleMode()}>
        Toggle mode
      </IxButton>
      <IxSelect
        onItemSelectionChange={({ detail: [theme] }) => {
          themeSwitcher.setTheme(theme);
        }}
        placeholder="Select a theme"
      >
        <IxSelectItem
          label="Classic light"
          value="theme-classic-light"
        ></IxSelectItem>
        <IxSelectItem
          label="Classic dark"
          value="theme-classic-dark"
        ></IxSelectItem>
      </IxSelect>
    </>
  );
};
