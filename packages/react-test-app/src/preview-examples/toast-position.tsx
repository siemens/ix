/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getToastContainer } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-react';
import React from 'react';

export default () => {
  getToastContainer().position = 'top-right';

  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
