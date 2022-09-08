<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/category-filter-suggestions.ts -->
```typescript
/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-filter-suggestions',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [suggestions]="suggestions"
    ></ix-category-filter>
  `,
})
export class CategoryFilterSuggestions {
  suggestions = ['Item 1', 'Item 2'];
}
```
