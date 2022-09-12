/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, showToast } from '@siemens/ix-react';
import React from 'react';

function CustomToast() {
  return (
    <div>
      <div>Custom toast message</div>
      <IxButton>Action</IxButton>
    </div>
  );
}

export const ToastCustom: React.FC = () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: <CustomToast></CustomToast>,
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
