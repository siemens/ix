/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconBulb } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxContent,
  IxContentHeader,
  IxMapNavigation,
  IxMapNavigationOverlay,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [overlay, setOverlay] = useState(false);

  function openOverlay() {
    setOverlay(true);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  return (
    <IxMapNavigation
      applicationName="My Application"
      navigationTitle="Navigation title"
      hideContextMenu={false}
    >
      <div className="placeholder-logo" slot="logo"></div>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent slot="sidebar-content">Sidebar content</IxContent>

      <IxContent>
        <IxContentHeader
          slot="header"
          header-title="My Content Page"
        ></IxContentHeader>

        <IxButton
          onClick={() => {
            openOverlay();
          }}
        >
          Open overlay
        </IxButton>
      </IxContent>

      {overlay ? (
        <IxMapNavigationOverlay
          slot="overlay"
          name="Custom overlay"
          icon={iconBulb}
          onCloseClick={() => closeOverlay()}
        >
          <IxContent>Overlay content</IxContent>
        </IxMapNavigationOverlay>
      ) : null}
    </IxMapNavigation>
  );
};
