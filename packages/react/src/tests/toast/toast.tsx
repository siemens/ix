/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { IxButton, showToast, setToastPosition } from '../../';
import { ToastPosition } from '@siemens/ix';

function useToastPosition(position: ToastPosition) {
  useEffect(() => {
    setToastPosition(position);
  }, []);
}

const Index = () => {
  useToastPosition('top-right');
  return (
    <>
      <IxButton
        onClick={async () => {
          await showToast({
            icon: 'star',
            message: 'Foobar',
          });
        }}
      >
        Hallo
      </IxButton>
    </>
  );
};

export default Index;
