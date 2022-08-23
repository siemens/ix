<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/input-with-icon.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxInputGroup } from '@siemens/ix-react';
import React from 'react';

export const InputWithIcon: React.FC = () => {
  return (
    <form className="needs-validation m-2">
      <IxInputGroup>
        <span slot="input-start">Price</span>
        <input type="number" className="form-control" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </IxInputGroup>
    </form>
  );
};
```
