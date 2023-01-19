<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue/dist';
import { nextTick, onMounted, ref } from 'vue';

const selection = ref<string[]>([]);

onMounted(() => nextTick(() => (selection.value = ['1', '2'])));
</script>

<template>
  <IxSelect mode="multiple" :selectedIndices="selection">
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
