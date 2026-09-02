/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, showToast } from '@siemens/ix-react';

export default () => {
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
