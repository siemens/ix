/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './theme-switcher.scoped.css';

import { IxSelectCustomEvent, themeSwitcher } from '@siemens/ix';
import {
  IxButton,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import { ChangeEvent, useState } from 'react';

export default () => {
  const [themes] = useState(['theme-classic-light', 'theme-classic-dark']);
  const [selectedTheme, setSelectedTheme] = useState(themes[1]);

  const valueChange = (event: IxSelectCustomEvent<string | string[]>) => {
    const newTheme: string = event.detail as string;
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
    <IxLayoutGrid class="theme-switcher">
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
            onValueChange={valueChange}
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
        <IxCol size="2"></IxCol>
        <IxCol>
          <input
            className="ix-form-control"
            type="checkbox"
            id="system"
            onChange={systemChange}
          />
          <label className="ix-form-label" htmlFor="system">
            Use System
          </label>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
