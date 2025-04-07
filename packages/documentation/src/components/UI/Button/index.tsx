/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forwardRef } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className }: ButtonProps, ref) => {
    return (
      <button
        className={clsx('all-unset', styles.Button, className)}
        onClick={onClick}
        ref={ref}
      >
        <div className={clsx(styles.ButtonText, 'ButtonText')}>{children}</div>
      </button>
    );
  }
);

export default Button;
