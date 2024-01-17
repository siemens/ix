/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxPane, IxPanes } from '@siemens/ix-react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef<any>(null);

  return (
    <IxPanes behaviour="floating" variant="full-height-left-right">
      <IxPane paneTitle="TOP" slot="top"></IxPane>
      <IxPane paneTitle="RIGHT" slot="right"></IxPane>
      <IxPane ref={ref} paneTitle="LEFT" slot="left"></IxPane>
      <IxPane paneTitle="BOTTOM" slot="bottom"></IxPane>
      <div slot="content">
        <IxButton
          onClick={() => (ref.current!.expand = !ref.current!.expand)}
        >
          Toggle left pane
        </IxButton>
      </div>
    </IxPanes>
  );
};
