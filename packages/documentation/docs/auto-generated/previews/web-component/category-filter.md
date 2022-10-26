<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/category-filter.html -->
```html
<ix-category-filter placeholder="Filter by"></ix-category-filter>
<script>
  const repeatCategories = false;
  const filterState = {
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: 'Not equal',
      },
    ],
  };
  const categories = {
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  };

  const categoryFilter = document.querySelector('ix-category-filter');
  categoryFilter.repeatCategories = repeatCategories;
  categoryFilter.filterState = filterState;
  categoryFilter.categories = categories;
</script>
```
