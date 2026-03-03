/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxButton,
  IxInput,
  IxModalContent,
  IxModalFooter,
  IxModalHeader,
  Modal,
  dismissModal,
  showModal,
} from '@siemens/ix-react';
import type { ModalRef } from '@siemens/ix-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './change-password.module.css';

interface PasswordRule {
  id: string;
  label: string;
  isValid: boolean;
}

function ChangePasswordModal() {
  const modalRef = useRef<ModalRef>(null);
  const [currentPassword, setCurrentPassword] = useState('P@ssword1');
  const [newPassword, setNewPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordDoesNotMatch =
    confirmPassword.length > 0 && confirmPassword !== newPassword;

  const rules = useMemo<PasswordRule[]>(() => {
    const hasMinLength = newPassword.length >= 8;
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(newPassword);
    const hasUppercaseCharacter = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);

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
  }, [newPassword]);

  const allPasswordRequirementsFulfilled = rules.every((rule) => rule.isValid);
  const confirmPasswordMatches =
    confirmPassword.length > 0 && confirmPassword === newPassword;
  const canSave = allPasswordRequirementsFulfilled && confirmPasswordMatches;

  const dismiss = () => {
    modalRef.current?.dismiss('dismiss payload');
  };

  const close = () => {
    modalRef.current?.close('close payload');
  };

  return (
    <Modal ref={modalRef}>
      <IxModalHeader onCloseClick={() => dismiss()}>
        Change password
      </IxModalHeader>

      <IxModalContent className={styles.formContent}>
        <IxInput
          label="Current password*"
          type="password"
          value={currentPassword}
          onInput={(event) =>
            setCurrentPassword((event.target as HTMLInputElement).value)
          }
        ></IxInput>

        <IxInput
          label="New password*"
          type="password"
          value={newPassword}
          onInput={(event) =>
            setNewPassword((event.target as HTMLInputElement).value)
          }
        ></IxInput>

        <ul className={styles.ruleList} aria-label="Password rules">
          {rules.map((rule) => (
            <li key={rule.id} className={styles.ruleItem}>
              <span
                className={`${styles.ruleIcon} ${
                  rule.isValid ? styles.valid : styles.invalid
                }`}
                aria-hidden="true"
              >
                {rule.isValid ? '✓' : '✕'}
              </span>
              <span>{rule.label}</span>
            </li>
          ))}
        </ul>

        <IxInput
          label="Confirm password*"
          type="password"
          value={confirmPassword}
          className={passwordDoesNotMatch ? 'ix-invalid' : undefined}
          invalidText={
            passwordDoesNotMatch
              ? 'Confirm password must match new password'
              : undefined
          }
          onInput={(event) =>
            setConfirmPassword((event.target as HTMLInputElement).value)
          }
        ></IxInput>
      </IxModalContent>

      <IxModalFooter>
        <IxButton variant="secondary" onClick={() => dismiss()}>
          Cancel
        </IxButton>
        <IxButton disabled={!canSave} onClick={() => close()}>
          Save
        </IxButton>
      </IxModalFooter>
    </Modal>
  );
}

export default function ChangePassword() {
  const modalInstanceRef = useRef<Awaited<ReturnType<typeof showModal>> | null>(
    null
  );

  const openModal = async () => {
    if (modalInstanceRef.current) {
      dismissModal(modalInstanceRef.current);
    }

    modalInstanceRef.current = await showModal({
      size: '480',
      content: <ChangePasswordModal />,
    });
  };

  useEffect(() => {
    return () => {
      if (modalInstanceRef.current) {
        dismissModal(modalInstanceRef.current);
        modalInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.viewport}>
      <IxButton onClick={openModal}>Open change password modal</IxButton>
    </div>
  );
}
