/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { setToastPosition, ToastPosition } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-react';
import { useEffect } from 'react';

function useToastPosition(position: ToastPosition) {
  useEffect(() => {
    setToastPosition(position);
  }, []);
}

export default () => {
  useToastPosition('top-right');

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
