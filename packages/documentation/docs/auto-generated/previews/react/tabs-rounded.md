<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/tabs-rounded.tsx -->

```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-react';
import React from 'react';

export const Tabs: React.FC = () => {
  return (
    <IxTabs rounded>
      <IxTabItem>
        <IxIcon name="success"></IxIcon>
      </IxTabItem>
      <IxTabItem counter={200}>
        <IxIcon name="tree"></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name="maintenance"></IxIcon>
      </IxTabItem>
      <IxTabItem disabled counter={24}>
        <IxIcon name="sound-loud"></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name="hierarchy"></IxIcon>
      </IxTabItem>
      <IxTabItem disabled>
        <IxIcon name="calendar-settings"></IxIcon>
      </IxTabItem>
    </IxTabs>
  );
};
```
