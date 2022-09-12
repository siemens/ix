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
