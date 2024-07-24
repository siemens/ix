/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'example-styles/dist/buttons.css';

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxButton outline>
        Button
      </IxButton>
      <IxButton disabled outline>
        Button
      </IxButton>
    </>
  );
};
