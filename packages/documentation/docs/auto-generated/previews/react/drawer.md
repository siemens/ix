<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/drawer.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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
