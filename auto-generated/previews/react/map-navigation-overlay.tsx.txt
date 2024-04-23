/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxButton,
  IxMapNavigation,
  IxMapNavigationOverlay,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';
import React, { useState } from 'react';

export default () => {
  const [overlay, setOverlay] = useState(false);

  function openOverlay() {
    setOverlay(true);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  return (
    <IxMapNavigation>
      <div className="placeholder-logo" slot="logo"></div>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
        <IxMenuItem>Item 3</IxMenuItem>
      </IxMenu>
      <IxButton
        onClick={() => {
          openOverlay();
        }}
      >
        Open overlay
      </IxButton>
      <div>
        {overlay ? (
          <IxMapNavigationOverlay
            name="Custom overlay title"
            icon="bulb"
            onCloseClick={() => closeOverlay()}
          >
            Lorem ipsum
          </IxMapNavigationOverlay>
        ) : null}
      </div>
    </IxMapNavigation>
  );
};
