/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { getDefaultTheme } from './config';
import styles from './SwitchTheme.module.css';

function ThemeEntry(props: {
  label: string;
  color: string;
  active: boolean;
  id: string;
  onClick?: (event: React.MouseEvent, id: string) => void;
}) {
  return (
    <div
      className={styles.Dropdown__Item}
      onClick={(e) => props.onClick(e, props.id)}
    >
      <div className={styles.Dropdown__Check}>
        {props.active ? (
          <i
            className="glyph glyph-single-check"
            style={{ color: 'var(--theme-color-primary)' }}
          />
        ) : null}
      </div>
      <div className={styles.Dropdown__Label}>{props.label}</div>
      <div
        className={styles.Theme__Color}
        style={{ backgroundColor: props.color }}
      ></div>
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
          label: 'Siemens brand Light',
          color: '#f3f3f0',
        },
        {
          id: 'theme-brand-dark',
          label: 'Siemens brand Dark',
          color: '#22223b',
        },
      ]);
    }
  }, []);

  const onThemeChange = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.body.className = theme;

    setOpen(false);
  };

  return (
    <div className={styles.Dropdown__Container}>
      <div
        className={clsx({
          [styles.Selection]: true,
          [styles.Open]: open,
        })}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.Icon}>
          <ix-icon name={props.icon} size="16"></ix-icon>
        </div>
        <div>{props.label}</div>
        <div className={styles.Chevron}>
          <ix-icon name="chevron-down-small"></ix-icon>
        </div>
      </div>
      {open ? (
        <div className={styles.Dropdown}>
          {registeredThemes.map(({ id, label, color }) => {
            return (
              <ThemeEntry
                id={id}
                key={id}
                label={label}
                active={id === theme}
                color={color}
                onClick={(_, id) => onThemeChange(id)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
