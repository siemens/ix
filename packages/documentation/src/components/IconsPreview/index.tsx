/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ICON_LIST from '@siemens/ix-icons/dist/sample.json';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Icons.module.css';

const Icons: React.FC = () => {
  const refs = useRef<{ [k: string]: any }>({});

  const [searchIcon, setSearchIcon] = useState<string>();
  const [icons] = useState<string[]>(ICON_LIST.icons);

  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <div className={styles.IconsPreview}>
      <div className={clsx(styles.Search)}>
        <span className={clsx(styles.Search__Label)}>Search: </span>
        <input
          placeholder="Search Icon"
          onInput={(e) =>
            setSearchIcon(
              (e.target as HTMLInputElement).value.toLocaleLowerCase()
            )
          }
        />
      </div>
      <div className={clsx(styles.Icons)}>
        {icons
          .filter((icon) => !searchIcon || icon.includes(searchIcon))
          .map((icon) => (
            <div
              key={icon}
              className={clsx(styles.Icon__Tile, {
                [styles.Selected]: selectedIcon === icon,
              })}
              onClick={() => {}}
            >
              <div>
                {React.createElement('ix-icon', {
                  name: icon,
                })}
              </div>
              <input
                ref={(r) => {
                  refs.current[icon] = r;
                }}
                className={clsx(styles.Hide__Input)}
                type="text"
                readOnly
                value={icon}
                onChange={() => {}}
              ></input>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Icons;
