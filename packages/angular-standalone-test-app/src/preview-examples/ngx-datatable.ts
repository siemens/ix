/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  DatatableComponent,
  DatatableFooterDirective,
  DataTableFooterTemplateDirective,
  TableColumn,
} from '@siemens/ngx-datatable';
import { IxPagination } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    DatatableComponent,
    DatatableFooterDirective,
    DataTableFooterTemplateDirective,
    IxPagination,
  ],
  templateUrl: './ngx-datatable.html',
  styleUrls: ['./ngx-datatable.css'],
})
export default class NgxDatatable {
  loading = true;
  rows: { name: string; gender: string; company: string }[] = [];
  selected = [];

  columns: TableColumn[] = [
    { prop: 'name', name: 'Name', checkboxable: true, headerCheckboxable: true },
    { prop: 'gender', name: 'Gender' },
    { prop: 'company', name: 'Company' },
  ];

  readonly allRows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'Graham', gender: 'Male', company: 'Google' },
    { name: 'Emily', gender: 'Female', company: 'Siemens' },
    { name: 'Oliver', gender: 'Male', company: 'Microsoft' },
    { name: 'Sophia', gender: 'Female', company: 'Amazon' },
    { name: 'Liam', gender: 'Male', company: 'Apple' },
    { name: 'Emma', gender: 'Female', company: 'Meta' },
    { name: 'Noah', gender: 'Male', company: 'Tesla' },
    { name: 'Ava', gender: 'Female', company: 'Netflix' },
    { name: 'James', gender: 'Male', company: 'Intel' },
  ];

  count = this.allRows.length;
  offset = 0;
  limit = 5;

  get totalPages(): number {
    return Math.ceil(this.count / this.limit);
  }

  constructor() {
    this.loadPage();
  }

  onPageSelected(page: number) {
    this.loading = true;
    this.offset = page;
    this.loadPage();
  }

  private loadPage() {
    setTimeout(() => {
      const start = this.offset * this.limit;
      const end = start + this.limit;
      this.rows = this.allRows.slice(start, end);
      this.loading = false;
    }, 1500);
  }
}
