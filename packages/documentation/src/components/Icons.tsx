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
import React, { useRef, useState } from 'react';
import styles from './Icons.module.css';

export default function Icons() {
  const refs = useRef<{ [k: string]: any }>({});

  const [searchIcon, setSearchIcon] = useState<string>();
  const [icons] = useState<string[]>(ICON_LIST.icons);

  return (
    <>
      <div className={clsx(styles.Search)}>
        <span className={clsx(styles.Search__Label)}>Search: </span>
        <input
          placeholder="Search Icon"
          className="form-control"
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
              className={clsx(styles.Icon__Tile)}
              onClick={() => {}}
            >
              <div>
                <ix-icon name={icon}></ix-icon>
              </div>
              <input
                ref={(r) => {
                  refs.current[icon] = r;
                }}
                className={clsx('form-control', styles.Hide__Input)}
                type="text"
                readOnly
                value={icon}
                onChange={() => {}}
              ></input>
            </div>
          ))}
      </div>
    </>
  );
}
