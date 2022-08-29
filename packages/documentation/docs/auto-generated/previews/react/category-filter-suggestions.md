<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/category-filter-suggestions.tsx -->
```tsx
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
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
