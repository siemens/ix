/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, showMessage } from '@siemens/ix-react';

/** TEMP: EIX-259 — buttons for every showMessage variant (revert before merge). */
const variants = [
  'information',
  'warning',
  'error',
  'success',
  'question',
  'caution',
  'critical',
  'danger',
] as const;

export default () => {
  const triggerMessage = async (variant: (typeof variants)[number]) => {
    (
      await showMessage[variant](
        `${variant} title`,
        `Example ${variant} message`,
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {variants.map((variant) => (
        <IxButton key={variant} onClick={() => triggerMessage(variant)}>
          Show '{variant}' message
        </IxButton>
      ))}
    </div>
  );
};
