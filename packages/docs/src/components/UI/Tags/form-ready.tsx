/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BaseTag from './baseTag';
import styles from './base.module.css';

export function FormReady({ message }: { message?: string }) {
  return (
    <BaseTag>
      <div className={styles.FormReady}>
        Form ready{message ? `since ${message}` : ''}
      </div>
    </BaseTag>
  );
}
