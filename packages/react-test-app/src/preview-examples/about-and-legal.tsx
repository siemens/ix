/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-react';
import React, { useLayoutEffect, useRef } from 'react';
// Example styling for documentation
import './styles/placeholder-logo.css';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      element.toggleAbout(true);
    }
  }, []);

  return (
    <IxBasicNavigation>
      <div className="placeholder-logo" slot="logo"></div>
      <IxMenu ref={ref}>
        <IxMenuAbout>
          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
        </IxMenuAbout>
      </IxMenu>
    </IxBasicNavigation>
  );
};
