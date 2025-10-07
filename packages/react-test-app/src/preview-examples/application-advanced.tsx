/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-react';
import {
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice,
} from '@siemens/ix-icons/icons';
import { useState } from 'react';

export default function ApplicationAdvancedExample() {
  const [activeContent, setActiveContent] = useState('home');

  return (
    <IxApplication>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
        <IxAvatar username="Example User" extra="Additional info"></IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem
          home
          icon={iconHome}
          onClick={() => setActiveContent('home')}
          active={activeContent === 'home'}
        >
          Home
        </IxMenuItem>
        <IxMenuItem
          icon={iconAlarmBell}
          onClick={() => setActiveContent('alarm')}
          active={activeContent === 'alarm'}
        >
          Alarm
        </IxMenuItem>
        <IxMenuCategory icon={iconPiechart} label="Analysis">
          <IxMenuItem
            icon={iconPlant}
            onClick={() => setActiveContent('plant')}
            active={activeContent === 'plant'}
          >
            Plant
          </IxMenuItem>
          <IxMenuItem
            icon={iconNetworkDevice}
            onClick={() => setActiveContent('network')}
            active={activeContent === 'network'}
          >
            Network
          </IxMenuItem>
        </IxMenuCategory>
        <IxMenuSettings></IxMenuSettings>
        <IxMenuAbout></IxMenuAbout>
      </IxMenu>
      <IxContent>
        <IxContentHeader
          headerTitle={`Example ${activeContent} content`}
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
