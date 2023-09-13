/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxSelectCustomEvent, themeSwitcher } from '@siemens/ix';
import {
  IxButton,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import React, { ChangeEvent, useState } from 'react';
import './theme-switcher.css';

export default () => {
  const [themes] = useState(['theme-classic-light', 'theme-classic-dark']);
  const [selectedTheme, setSelectedTheme] = useState(themes[1]);

  const selectionChange = (event: IxSelectCustomEvent<string | string[]>) => {
    const newTheme = event.detail[0];
    themeSwitcher.setTheme(newTheme);
    setSelectedTheme(newTheme);
  };

  const toggle = () => {
    themeSwitcher.toggleMode();
  };

  const systemChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      themeSwitcher.setVariant();
      return;
    }

    themeSwitcher.setTheme(selectedTheme);
  };

  return (
    <IxLayoutGrid className="ThemeSwitcher">
      <IxRow>
        <IxCol size="2">
          <span>Light/Dark</span>
        </IxCol>
        <IxCol>
          <IxButton onClick={toggle}>Toggle mode</IxButton>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="2">Theme</IxCol>
        <IxCol>
          <IxSelect
            value={selectedTheme}
            onValueChange={selectionChange}
            placeholder="Select a theme"
          >
            {themes.map((theme) => (
              <IxSelectItem
                key={theme}
                label={theme}
                value={theme}
              ></IxSelectItem>
            ))}
          </IxSelect>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="2">Use System</IxCol>
        <IxCol>
          <input type="checkbox" id="system" onChange={systemChange} />
          <label htmlFor="system"></label>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
