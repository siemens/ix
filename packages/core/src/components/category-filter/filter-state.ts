/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { LogicalFilterOperator } from './logical-filter-operator';
export class FilterState {
  public tokens: string[];
  public categories: { id: string; value: string; operator: LogicalFilterOperator }[];
}
