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
import styles from './Guideline.module.css';

export default function Guideline(props: { label: string; do?: boolean }) {
  function getIcon() {
    if (props.do) {
      return React.createElement('ix-icon', {
        name: 'single-check',
        size: '16',
        color: 'color-success',
      });
    } else {
      return React.createElement('ix-icon', {
        name: 'close',
        size: '16',
        color: 'color-alarm',
      });
    }
  }

  return (
    <div className={clsx(styles.Guideline)}>
      <div className={clsx(styles.Icon)}>{getIcon()}</div>
      <div>{props.label}</div>
    </div>
  );
}
