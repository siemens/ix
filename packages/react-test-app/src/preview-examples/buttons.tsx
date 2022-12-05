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

export default () => {
  return (
    <>
      <IxButton className="m-1" variant="Primary">
        Button
      </IxButton>
      <IxButton className="m-1" disabled variant="Primary">
        Button
      </IxButton>
    </>
  );
};
