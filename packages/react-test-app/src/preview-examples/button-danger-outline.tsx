/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
      <IxButton style={{ margin: '0.25rem' }} outline variant="danger">
        Button
      </IxButton>
      <IxButton style={{ margin: '0.25rem' }} disabled outline variant="danger">
        Button
      </IxButton>
    </>
  );
};
