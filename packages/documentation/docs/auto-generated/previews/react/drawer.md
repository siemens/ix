<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/drawer.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxDrawer } from '@siemens/ix-react';
import React, { useState } from 'react';

export const DrawerFullHeight: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <IxDrawer
        closeOnClickOutside={true}
        show={show}
        onDrawerClose={() => setShow(false)}
      >
        <span>Some content of drawer</span>
      </IxDrawer>
      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>
    </>
  );
};
```
