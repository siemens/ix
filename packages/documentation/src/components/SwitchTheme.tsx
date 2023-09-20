/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useState } from 'react';
import { ThemeChangeEvent } from '../utils/theme-change-event';
import { getDefaultTheme } from './config';
import styles from './SwitchTheme.module.css';

function ThemeEntry(props: {
  label: string;
  color: string;
  id: string;
  onClick?: (event: React.MouseEvent, id: string) => void;
}) {
  return (
    <div
      className={styles.Dropdown__Item}
      onClick={(e) => props.onClick?.(e, props.id)}
    >
      <div
        className={styles.Theme__Color}
        style={{ backgroundColor: props.color }}
      ></div>
      <div className={styles.Dropdown__Label}>{props.label}</div>
    </div>
  );
}
export function SwitchTheme(props: { icon: string; label: string }) {
  const context = useDocusaurusContext();

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>();

  const [registeredThemes, setRegisteredThemes] = useState([
    {
      id: 'theme-classic-dark',
      label: 'Classic Dark',
      color: '#000',
    },
    {
      id: 'theme-classic-light',
      label: 'Classic Light',
      color: '#6a7f98',
    },
  ]);

  useEffect(() => {
    let storedTheme = localStorage.getItem('theme');

    if (!storedTheme) {
      const theme = getDefaultTheme(context);
      setTheme(theme);
      localStorage.setItem('theme', theme);
      storedTheme = theme;
    } else {
      setTheme(storedTheme);
    }

    document.body.className = storedTheme;
  }, []);

  useEffect(() => {
    if (context.siteConfig.customFields.withBrandTheme) {
      setRegisteredThemes([
        ...registeredThemes,
        {
          id: 'theme-brand-light',
          label: 'Siemens Brand Light',
          color: '#f3f3f0',
        },
        {
          id: 'theme-brand-dark',
          label: 'Siemens Brand Dark',
          color: '#22223b',
        },
      ]);
    }
  }, []);

  const onThemeChange = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.body.className = theme;

    dispatchThemeChange(theme);

    setOpen(false);
  };

  function getLabel(id: string = 'theme-classic-dark') {
    return registeredThemes.find((t) => t.id === id)?.label;
  }

  function dispatchThemeChange(theme: string) {
    window.dispatchEvent(new ThemeChangeEvent(theme));
  }

  return (
    <IxDropdownButton outline icon={props.icon} label={getLabel(theme)}>
      {registeredThemes.map(({ id, label, color }) => {
        return (
          <IxDropdownItem key={id} checked={id === theme}>
            <ThemeEntry
              key={id}
              id={id}
              label={label}
              color={color}
              onClick={(_, id) => onThemeChange(id)}
            />
          </IxDropdownItem>
        );
      })}
    </IxDropdownButton>
  );
}
