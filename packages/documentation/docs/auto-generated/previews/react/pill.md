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
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/pill.tsx -->
```tsx
import { IxPill } from '@siemens/ix-react';
import React, { CSSProperties } from 'react';

export const Pill: React.FC = () => {
  const styled: CSSProperties = {
    width: '8rem',
  };

  return (
    <>
      <IxPill variant="custom" color="white" background="purple">
        Label
      </IxPill>

      <IxPill>Label</IxPill>
      <IxPill outline>Label</IxPill>
      <IxPill style={styled}>Label</IxPill>

      <IxPill icon="star">Label</IxPill>
      <IxPill icon="star" style={styled}>
        Label
      </IxPill>
      <IxPill outline alignLeft icon="star" style={styled}>
        Label
      </IxPill>

      <IxPill variant="alarm">Label</IxPill>
      <IxPill variant="alarm" outline>
        Label
      </IxPill>
      <IxPill variant="alarm" style={styled}>
        Label
      </IxPill>

      <IxPill variant="alarm" icon="star">
        Label
      </IxPill>
      <IxPill variant="alarm" icon="star" style={styled}>
        Label
      </IxPill>
      <IxPill variant="alarm" outline alignLeft icon="star" style={styled}>
        Label
      </IxPill>
    </>
  );
};
```
