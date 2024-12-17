/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export function ApiTableDeprecatedTag(props: { message: string }) {
  return (
    <div className={clsx(styles.Tag, styles['Tag--Deprecated'])}>
      Deprecated {props.message}
    </div>
  );
}

export function ApiTableSinceTag(props: { message: string }) {
  return <div className={styles.Tag}>Since {props.message}</div>;
}
