<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/checkbox.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export const Checkbox: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <input type="checkbox" id="checkbox_01" />
        <label htmlFor="checkbox_01">Simple checkbox</label>
      </div>

      <div>
        <input type="checkbox" id="checkbox_02" disabled />
        <label htmlFor="checkbox_02">Disabled checkbox</label>
      </div>
    </>
  );
};
```
