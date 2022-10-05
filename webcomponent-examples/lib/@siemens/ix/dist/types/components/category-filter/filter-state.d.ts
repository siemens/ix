import { LogicalFilterOperator } from './logical-filter-operator';
export declare class FilterState {
  tokens: string[];
  categories: {
    id: string;
    value: string;
    operator: LogicalFilterOperator;
  }[];
}
