<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/popover-news.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
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
