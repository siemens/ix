<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { FilterState, LogicalFilterOperator } from '@siemens/ix';
import { IxCategoryFilter } from '@siemens/ix-vue';

const filter: FilterState = {
  tokens: ['Custom filter text'],
  categories: [
    {
      id: 'ID_1',
      value: 'IBM',
      operator: LogicalFilterOperator.NOT_EQUAL,
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
</script>

<template>
  <IxCategoryFilter
    placeholder="Filter by"
    repeatCategories
    :filterState="filter"
    :categories="categories"
  ></IxCategoryFilter>
</template>
