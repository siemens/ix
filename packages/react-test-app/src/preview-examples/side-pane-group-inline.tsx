/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxSidePane,
  IxSidePaneContentArea,
  IxSidePaneGroup,
} from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <IxSidePaneGroup inline>
      <IxSidePane paneTitle="TOP" slot="top"></IxSidePane>
      <IxSidePane paneTitle="RIGHT" slot="right"></IxSidePane>
      <IxSidePane paneTitle="LEFT" slot="left"></IxSidePane>
      <IxSidePane paneTitle="BOTTOM" slot="bottom"></IxSidePane>
      <IxSidePaneContentArea slot="content">
        <p>This is a text content.</p>
      </IxSidePaneContentArea>
    </IxSidePaneGroup>
  );
};
