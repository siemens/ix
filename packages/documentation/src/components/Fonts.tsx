/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import React from 'react';
import styles from './Fonts.module.css';

export default function Fonts() {
  const fonts: {
    name: string;
    className: string;
  }[] = [
    {
      name: 'xsmall',
      className: 'text-xs',
    },
    {
      name: 'small',
      className: 'text-s',
    },
    {
      name: 'caption',
      className: 'text-caption',
    },
    {
      name: 'caption-single',
      className: 'text-caption-single',
    },
    {
      name: 'default',
      className: 'text-default',
    },
    {
      name: 'default-single',
      className: 'text-default-single',
    },
    {
      name: 'large',
      className: 'text-l',
    },
    {
      name: 'large-single',
      className: 'text-l-single',
    },
    {
      name: 'h2',
      className: 'text-h2',
    },
    {
      name: 'display-large',
      className: 'text-xl',
    },
  ];
  return (
    <>
      <table className={clsx(styles.Table)}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {fonts.map((v) => (
            <tr key={v.name}>
              <td>{v.name}</td>
              <td>
                <input
                  className="ix-form-control"
                  defaultValue={v.className}
                  onFocus={(e) => {
                    // copyToClipboard(e.target as HTMLInputElement);
                  }}
                />
              </td>
              <td>
                <div className={v.className}>{v.name}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
