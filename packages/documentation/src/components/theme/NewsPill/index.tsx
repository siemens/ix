/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxIcon, IxTypography } from '@siemens/ix-react';
import styles from './NewsPill.module.css';
import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import Link from '@docusaurus/Link';

export default function NewsPill({ label, value }) {
  console.log(value);
  return (
    <Link to={value} className={styles.NoTextDecoration}>
      <div className={styles.NewsPill}>
        <IxTypography format="body-sm" bold>
          {label}
        </IxTypography>
        <IxIcon name={iconChevronRightSmall} size="16"></IxIcon>
      </div>
    </Link>
  );
}
