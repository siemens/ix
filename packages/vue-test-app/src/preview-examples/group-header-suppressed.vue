<script setup lang="ts">
import { IxGroup, IxGroupItem } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxGroup
    header="Header text"
    subHeader="Subheader text"
    suppressHeaderSelection
  >
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem text="Example text 3"></IxGroupItem>
  </IxGroup>
</template>
