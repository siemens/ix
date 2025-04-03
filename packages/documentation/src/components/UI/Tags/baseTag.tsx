/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './base.module.css';

export default function BaseTag({ children }) {
  return <div className={styles.Tag}>{children}</div>;
}
