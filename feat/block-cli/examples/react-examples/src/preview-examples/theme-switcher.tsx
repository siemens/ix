/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './theme-switcher.scoped.css';

import { themeSwitcher, ThemeVariant } from '@siemens/ix';
import {
  IxButton,
  IxCheckbox,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [variants] = useState<ThemeVariant[]>(['light', 'dark']);
  const [selectedVariant, setSelectedVariant] = useState<ThemeVariant>('dark');
  const [useSystemTheme, setUseSystemTheme] = useState(false);

  useEffect(() => {
    themeSwitcher.setTheme('classic');
    themeSwitcher.setVariant(selectedVariant);
  }, []);

  const onValueChange = (event: CustomEvent<string | string[]>) => {
    if (useSystemTheme) {
      return;
    }

    const newVariant = event.detail as ThemeVariant;

    themeSwitcher.setVariant(newVariant);
    setSelectedVariant(newVariant);
  };

  const toggle = () => {
    if (useSystemTheme) {
      return;
    }

    themeSwitcher.toggleMode();

    const newVariant = selectedVariant === 'light' ? 'dark' : 'light';

    setSelectedVariant(newVariant);
  };

  const onCheckedChange = (event: CustomEvent<boolean>) => {
    const checked = event.detail;

    setUseSystemTheme(checked);

    if (checked) {
      themeSwitcher.setVariant();
    } else {
      themeSwitcher.setVariant(selectedVariant);
    }
  };

  return (
    <IxLayoutGrid className="theme-switcher">
      <IxRow>
        <IxCol size="2">
          <span>Light/Dark</span>
        </IxCol>
        <IxCol>
          <IxButton onClick={toggle} disabled={useSystemTheme}>
            Toggle mode
          </IxButton>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="2">Theme</IxCol>
        <IxCol>
          <IxSelect
            value={selectedVariant}
            onValueChange={onValueChange}
            disabled={useSystemTheme}
          >
            {variants.map((variant) => (
              <IxSelectItem
                key={variant}
                label={variant}
                value={variant}
              ></IxSelectItem>
            ))}
          </IxSelect>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="2"></IxCol>
        <IxCol>
          <IxCheckbox label="Use system" onCheckedChange={onCheckedChange} />
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
