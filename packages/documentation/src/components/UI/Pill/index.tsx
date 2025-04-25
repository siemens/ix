/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Pill({
  children,
  active,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}>) {
  return (
    <button
      onClick={onClick}
      className={clsx('all-unset', styles.pill, {
        [styles.pill__active]: active,
      })}
    >
      {children}
    </button>
  );
}
