// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { FilterState, LogicalFilterOperator } from '@siemens/ix';
import { IxCategoryFilter } from '@siemens/ix-react';
import React, { useState } from 'react';

export const CategoryFilter: React.FC = () => {
  const [filter] = useState<FilterState>({
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: LogicalFilterOperator.NOT_EQUAL,
      },
    ],
  });

  const [categories] = useState({
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  });

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      repeatCategories={true}
      filterState={filter}
      categories={categories}
    ></IxCategoryFilter>
  );
};
