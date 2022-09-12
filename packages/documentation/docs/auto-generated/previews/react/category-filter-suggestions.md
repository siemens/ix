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
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/category-filter-suggestions.tsx -->
```tsx
import { IxCategoryFilter } from '@siemens/ix-react';
import React, { useState } from 'react';

export const CategoryFilterSuggestions: React.FC = () => {
  const [suggestions] = useState(['Item 1', 'Item 2']);

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      suggestions={suggestions}
    ></IxCategoryFilter>
  );
};
```
