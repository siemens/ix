/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxPanes,
  IxPane,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxPanes behaviour="inline">
      <IxPane paneTitle="TOP" slot="top"></IxPane>
      <IxPane paneTitle="RIGHT" slot="right"></IxPane>
      <IxPane paneTitle="LEFT" slot="left"></IxPane>
      <IxPane paneTitle="BOTTOM" slot="bottom"></IxPane>
      <div slot="content">
        <p>This is a text content.</p>
      </div>
    </IxPanes>
  );
};
