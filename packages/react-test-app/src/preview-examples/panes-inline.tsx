/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxPane, IxPaneLayout } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxPaneLayout variant="inline">
      <IxPane heading="TOP" slot="top"></IxPane>
      <IxPane heading="RIGHT" slot="right"></IxPane>
      <IxPane heading="LEFT" slot="left"></IxPane>
      <IxPane heading="BOTTOM" slot="bottom"></IxPane>
      <div slot="content">
        <p>This is a text content.</p>
      </div>
    </IxPaneLayout>
  );
};
