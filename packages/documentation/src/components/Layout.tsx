/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './Layout.module.css';

export function Layout(props: { description: string }) {
  return (
    <>
      <hr></hr>
      <div className={styles.description}>{props.description}</div>
      <slot></slot>
    </>
  );
}
