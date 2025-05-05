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
<<<<<<< HEAD
  return <div>This message is from template</div>;
=======
  return <div>Toast message text from function</div>;
>>>>>>> 718c4c1596134bddee7f22c76a8aa3d31d425e7d
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
            message: 'Toast message text',
            action: <CustomToastAction></CustomToastAction>,
            type: 'success',
          });

          showToast({
            title: 'Toast headline',
            message: <CustomToastMessage></CustomToastMessage>,
            action: <CustomToastAction></CustomToastAction>,
            type: 'success',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
