<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/popover-news.tsx -->
```tsx
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
```
