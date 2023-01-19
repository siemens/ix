<script setup lang="ts">
import { IxCategoryFilter } from '@siemens/ix-vue/dist';
import { ref } from 'vue';

const suggestions = ref(['Item 1', 'Item 2']);
</script>

<template>
  <IxCategoryFilter
    placeholder="Filter by"
    :suggestions="suggestions"
  ></IxCategoryFilter>
</template>
