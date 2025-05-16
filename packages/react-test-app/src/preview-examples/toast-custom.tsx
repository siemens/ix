/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, showToast } from '@siemens/ix-react';
import { iconUndo } from '@siemens/ix-icons/icons';

function CustomToastMessage() {
  return <div>This message is from template</div>;
}

function CustomToastAction() {
  return (
    <div>
      <IxButton ghost icon={iconUndo}>
        Undo
      </IxButton>
    </div>
  );
}

export default () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            title: 'Toast headline',
            message: <CustomToastMessage></CustomToastMessage>,
            type: 'success',
          });
        }}
        style={{ marginRight: '0.5rem' }}
      >
        Trigger toast with custom message
      </IxButton>

      <IxButton
        onClick={() => {
          showToast({
            title: 'Toast headline',
            message: <CustomToastMessage></CustomToastMessage>,
            action: <CustomToastAction></CustomToastAction>,
          });
        }}
      >
        Trigger toast with action button
      </IxButton>
    </>
  );
};
