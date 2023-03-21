<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSelect selected-indices="1">
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
