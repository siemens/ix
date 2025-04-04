/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useEffect, useRef, useState } from 'react';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import Button from '../Button';
import { iconChevronDownSmall, iconPen } from '@siemens/ix-icons/icons';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';

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

export function ThemeSelection(props: ThemeSelectionProps) {
  const context = useDocusaurusContext();
  const [availableThemes] = useState(() => {
    const themes = [classicTheme];
    if (context.siteConfig.customFields.withBrandTheme) {
      themes.push(brandTheme);
    }

    return themes;
  });

  const [theme, setTheme] = useState(() => {
    if (context.siteConfig.customFields.withBrandTheme) {
      return brandTheme;
    }
    return classicTheme;
  });

  const [ref, setRef] = useState<HTMLButtonElement>(null);
  const displayTheme = toUppercase(theme);

  useEffect(() => {
    props.onThemeChange?.(theme);
  }, [theme]);

  return (
    <>
      <Button ref={setRef} className="dropdown-button">
        {React.createElement('ix-icon', {
          name: iconPen,
        })}
        <span className="ButtonText">{displayTheme}</span>
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
        })}
      </Button>
      {ref && (
        <IxDropdown trigger={ref}>
          {availableThemes.map((theme) => (
            <IxDropdownItem key={theme} onClick={() => setTheme(theme)}>
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
