/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { showMessage } from '@siemens/ix';
import { IxButton } from '@siemens/ix-react';

export default () => {
  const triggerMessage = async () => {
    (
      await showMessage.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
  return (
    <IxButton onClick={() => triggerMessage()}>Show 'success' message</IxButton>
  );
};
