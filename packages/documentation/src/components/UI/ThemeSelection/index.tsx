/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  iconChevronDownSmall,
  iconDrawingDocument,
} from '@siemens/ix-icons/icons';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import { usePlaygroundTheme } from '@site/src/hooks/use-playground-theme';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './ThemeSelection.module.css';

const brandTheme = 'brand';
const classicTheme = 'classic';

function toUppercase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function useDefaultTheme() {
  const context = useDocusaurusContext();
  if (context.siteConfig.customFields.withBrandTheme) {
    return brandTheme;
  }
  return classicTheme;
}

type ThemeSelectionProps = {
  onThemeChange?: (theme: string) => void;
};

export function ThemeSelection(props: Readonly<ThemeSelectionProps>) {
  const { playgroundTheme: activeTheme, setPlaygroundTheme: setTheme } =
    usePlaygroundTheme();
  const context = useDocusaurusContext();
  const [availableThemes] = useState(() => {
    const themes = [classicTheme];
    if (context.siteConfig.customFields.withBrandTheme) {
      themes.push(brandTheme);
    }

    return themes;
  });

  const [ref, setRef] = useState<HTMLButtonElement>(null);
  const displayTheme = toUppercase(activeTheme);

  useEffect(() => {
    props.onThemeChange?.(activeTheme);
  }, [activeTheme]);

  return (
    <>
      <Button ref={setRef} className="dropdown-button">
        {React.createElement('ix-icon', {
          name: iconDrawingDocument,
          size: '16',
        })}
        <span className="ButtonText">{displayTheme}</span>
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
          size: '16',
        })}
      </Button>
      {ref && (
        <IxDropdown trigger={ref}>
          {availableThemes.map((theme) => (
            <IxDropdownItem
              key={theme}
              onClick={() => setTheme(theme)}
              className={styles.DropdownItem}
              checked={activeTheme === theme}
            >
              {toUppercase(theme)}
            </IxDropdownItem>
          ))}
        </IxDropdown>
      )}
    </>
  );
}

export default (props: ThemeSelectionProps) => {
  return <BrowserOnly>{() => <ThemeSelection {...props} />}</BrowserOnly>;
};
