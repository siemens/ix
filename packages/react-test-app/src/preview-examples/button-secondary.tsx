/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonsSecondary: React.FC = () => {
  return (
    <>
      <IxButton class="m-1" outline variant="Primary">
        Button
      </IxButton>
      <IxButton class="m-1" disabled outline variant="Primary">
        Button
      </IxButton>
    </>
  );
};
