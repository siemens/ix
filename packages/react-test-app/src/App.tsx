/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AppSwitchConfiguration } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationContext,
  IxApplicationHeader,
  IxAvatar,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';
import React, { useEffect, useState } from 'react';

const apps = [
  {
    id: 'app-1',
    name: 'Example App 1',
    iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
    url: 'https://www.google.de',
    description: 'Test',
    target: '_self',
  },
];

function App() {
  const [toggle, setToggle] = useState<AppSwitchConfiguration>({
    textAppSwitch: 'Aendere die Applikation',
    currentAppId: 'app-2',
    apps: [],
  });

  useEffect(() => {
    setTimeout(() => {
      console.log('timeout');
      setToggle({
        ...toggle,
        apps: apps,
      });
    }, 5000);
  }, []);

  return (
    <>
      <IxApplicationContext>
        <IxApplication appSwitchConfig={toggle}>
          <IxApplicationHeader name="Test App">
            <IxAvatar></IxAvatar>
          </IxApplicationHeader>
          <IxMenu>
            <IxMenuItem>Test</IxMenuItem>
            <IxMenuItem>Test</IxMenuItem>
            <IxMenuItem>Test</IxMenuItem>
            <IxMenuItem>Test</IxMenuItem>
            <IxMenuItem>Test</IxMenuItem>
          </IxMenu>
        </IxApplication>
      </IxApplicationContext>
    </>
  );
}

export default App;
