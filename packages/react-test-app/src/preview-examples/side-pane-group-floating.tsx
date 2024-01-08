/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxSidePane,
  IxSidePaneContentArea,
  IxSidePaneGroup,
} from '@siemens/ix-react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxSidePaneElement>(null);

  return (
    <IxSidePaneGroup floating variant="1">
      <IxSidePane paneTitle="TOP" slot="top"></IxSidePane>
      <IxSidePane paneTitle="RIGHT" slot="right"></IxSidePane>
      <IxSidePane ref={ref} paneTitle="LEFT" slot="left"></IxSidePane>
      <IxSidePane paneTitle="BOTTOM" slot="bottom"></IxSidePane>
      <IxSidePaneContentArea slot="content">
        <IxButton
          onClick={() => (ref.current!.expandPane = !ref.current!.expandPane)}
        >
          Toggle left pane
        </IxButton>
      </IxSidePaneContentArea>
    </IxSidePaneGroup>
  );
};
