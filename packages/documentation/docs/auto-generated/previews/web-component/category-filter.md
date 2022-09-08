<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/category-filter.html -->
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
