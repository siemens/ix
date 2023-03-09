<script setup lang="ts">
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-vue';
import { ref } from 'vue';

const nextItems = ref<string[]>(['Next Item 1']);
</script>

<template>
  <IxBreadcrumb :nextItems="nextItems">
    <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
