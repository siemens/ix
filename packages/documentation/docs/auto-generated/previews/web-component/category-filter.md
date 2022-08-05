<!-- Auto generated! Please edit here: siemens-ix/packages/documentation/static/webcomponent-examples/category-filter.html -->
```html
<cw-category-filter placeholder="Filter by"></cw-category-filter>
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

  const categoryFilter = document.querySelector('cw-category-filter');
  categoryFilter.repeatCategories = repeatCategories;
  categoryFilter.filterState = filterState;
  categoryFilter.categories = categories;
</script>
```
