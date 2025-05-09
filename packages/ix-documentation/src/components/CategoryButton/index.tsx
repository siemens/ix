/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { IxButton } from '@siemens/ix-react';
import styles from './CategoryButton.module.css';

export function CategoryButton(
  props: React.PropsWithChildren<{
    title: string;
    link: string;
    buttonWidth?: string;
    imageWidth?: string;
  }>
) {
  return (
    <IxButton
      ghost
      className={styles.CategoryButton}
      onClick={() => {
        window.location.href = props.link;
      }}
      style={{
        width: props.buttonWidth,
      }}
    >
      <div className={styles.CategoryButton__Content}>
        <div className={styles.CategoryButton__Title}>{props.title}</div>
        <div
          className={styles.CategoryButton__Image}
          style={{ width: props.imageWidth }}
        >
          {props.children}
        </div>
      </div>
    </IxButton>
  );
}
