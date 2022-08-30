<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/toast.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxButton, showToast } from '@siemens/ix-react';
import React from 'react';

export const Toast: React.FC = () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
```
