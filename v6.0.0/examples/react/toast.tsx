/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ToastType } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton
        onClick={async () => {
          const toastTypes: ToastType[] = [
            'information',
            'success',
            'caution',
            'warning',
            'danger',
            'critical',
            'error',
            'base',
          ];

          for (const type of toastTypes) {
            await showToast({
              type,
              title: 'Toast headline',
              message: 'This is a toast test message!',
              autoClose: false,
            });
          }
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
