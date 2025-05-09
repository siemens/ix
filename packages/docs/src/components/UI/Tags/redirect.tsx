/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './base.module.css';
import BaseTag from './baseTag';
import { iconOpenExternal } from '@siemens/ix-icons/icons';
import clsx from 'clsx';

export function RedirectTag({
  link,
  children,
}: {
  link: string;
  children?: string;
}) {
  return (
    <BaseTag>
      <div className={clsx(styles.Redirect)}>
        {React.createElement('ix-icon', {
          name: iconOpenExternal,
          color: 'color-primary',
          size: '16',
        })}
        <a href={link} target="_blank" rel="noreferrer" className={styles.Link}>
          {children}
        </a>
      </div>
    </BaseTag>
  );
}
