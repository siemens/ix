// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import {
    IxBasicNavigation,
    IxMenu,
    IxMenuAbout,
    IxMenuAboutItem,
    IxMenuAboutNews
} from '@siemens/ix-react';
import React from 'react';

export const PopoverNews: React.FC = () => {
  return (
    <IxBasicNavigation>
      <IxMenu>
        <IxMenuAbout>
          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show about-item-label="Example">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxBasicNavigation>
  );
};
