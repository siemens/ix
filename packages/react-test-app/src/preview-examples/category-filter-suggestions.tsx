// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
