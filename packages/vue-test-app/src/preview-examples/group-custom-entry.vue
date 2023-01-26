<script setup lang="ts">
import { IxButton, IxGroup, IxGroupItem } from '@siemens/ix-vue';
</script>

<template>
  <IxGroup header="Header text" subHeader="Subheader text">
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem>
      <IxButton>Test</IxButton>
    </IxGroupItem>
  </IxGroup>
</template>
