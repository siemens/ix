/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconCheck, iconClose } from '@siemens/ix-icons/icons';
import { IxIcon, IxInput } from '@siemens/ix-react';
import { useMemo, useState } from 'react';
import styles from './password-criteria.module.css';

interface PasswordRule {
  id: string;
  label: string;
  isValid: boolean;
}

export default function PasswordCriteria() {
  const [password, setPassword] = useState('Password1');

  const rules = useMemo<PasswordRule[]>(() => {
    const hasMinLength = password.length >= 8;
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasUppercaseCharacter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    return [
      {
        id: 'min-length',
        label: 'Minimum length 8 characters',
        isValid: hasMinLength,
      },
      {
        id: 'special-character',
        label: 'Minimum 1 special character',
        isValid: hasSpecialCharacter,
      },
      {
        id: 'uppercase',
        label: 'Minimum 1 upper case character',
        isValid: hasUppercaseCharacter,
      },
      {
        id: 'number',
        label: 'Minimum 1 number',
        isValid: hasNumber,
      },
    ];
  }, [password]);

  return (
    <section className={styles.panel} aria-label="Password criteria">
      <IxInput
        label="Label*"
        type="password"
        value={password}
        onInput={(event) =>
          setPassword((event.target as HTMLInputElement).value)
        }
      />

      <ul className={styles.ruleList} aria-label="Password requirements">
        {rules.map((rule) => (
          <li key={rule.id} className={styles.ruleItem}>
            <span
              className={`${styles.ruleIcon} ${
                rule.isValid ? styles.valid : styles.invalid
              }`}
              aria-hidden="true"
            >
              {rule.isValid ? (
                <IxIcon name={iconCheck} size="16" />
              ) : (
                <IxIcon name={iconClose} size="16" />
              )}
            </span>
            <span className={styles.ruleLabel}>{rule.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
