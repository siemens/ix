/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME } from './config';
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
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    let storedTheme = localStorage.getItem('theme');

    if (!storedTheme) {
      setTheme(DEFAULT_THEME);
      localStorage.setItem('theme', DEFAULT_THEME);
      storedTheme = DEFAULT_THEME;
    } else {
      setTheme(storedTheme);
    }

    document.body.className = storedTheme;
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
          <ThemeEntry
            id="theme-classic-dark"
            label="Classic Dark"
            active={'theme-classic-dark' === theme}
            color="#000"
            onClick={(_, id) => onThemeChange(id)}
          />
          <ThemeEntry
            id="theme-classic-light"
            label="Classic Light"
            active={'theme-classic-light' === theme}
            color="#6a7f98"
            onClick={(_, id) => onThemeChange(id)}
          />
          <ThemeEntry
            id="theme-brand-light"
            label="Siemens brand Light"
            active={'theme-brand-light' === theme}
            color="#f3f3f0"
            onClick={(_, id) => onThemeChange(id)}
          />
          <ThemeEntry
            id="theme-brand-dark"
            label="Siemens brand Dark"
            active={'theme-brand-dark' === theme}
            color="#22223b"
            onClick={(_, id) => onThemeChange(id)}
          />
        </div>
      ) : null}
    </div>
  );
}
