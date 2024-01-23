/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxPane, IxPaneLayout } from '@siemens/ix-react';
import React, { useState } from 'react';

export default () => {
  const [hidden, setHidden] = useState(true);

  return (
    <IxPaneLayout variant="floating" layout="full-height-left-right">
      {!hidden && <IxPane heading="TOP" slot="top"></IxPane>}
      <IxPane heading="RIGHT" slot="right"></IxPane>
      <IxPane heading="LEFT" slot="left"></IxPane>
      <IxPane heading="BOTTOM" slot="bottom"></IxPane>
      <div slot="content">
        <p>This is a text content.</p>
        <IxButton onClick={() => setHidden(!hidden)}>Toggle left pane</IxButton>
      </div>
    </IxPaneLayout>
  );
};
