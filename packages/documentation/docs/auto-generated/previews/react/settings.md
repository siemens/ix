<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/settings.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuSettings,
  IxMenuSettingsItem,
} from '@siemens/ix-react';
import React, { useLayoutEffect, useRef } from 'react';

export const Settings: React.FC = () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.toggleSettings(true);
    }
  }, []);

  return (
    <IxBasicNavigation>
      <IxMenu ref={ref}>
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
        </IxMenuSettings>
      </IxMenu>
    </IxBasicNavigation>
  );
};
```
