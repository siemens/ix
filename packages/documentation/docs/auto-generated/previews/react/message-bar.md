<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/message-bar.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxButton, IxMessageBar } from '@siemens/ix-react';
import React from 'react';

export const MessageBar: React.FC = () => {
  return (
    <>
      <IxMessageBar>Message text</IxMessageBar>
      <IxMessageBar type="warning">Message text</IxMessageBar>
      <IxMessageBar type="danger">
        <div className="d-flex align-items-center justify-content-between">
          Message text <IxButton>Action</IxButton>
        </div>
      </IxMessageBar>
    </>
  );
};
```
