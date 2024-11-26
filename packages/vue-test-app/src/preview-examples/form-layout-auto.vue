<script setup lang="ts">
import {
  IxButton,
  IxFieldLabel,
  IxInput,
  IxLayoutAuto,
  IxSelect,
} from '@siemens/ix-vue';
</script>

<template>
  <IxLayoutAuto>
    <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
    <IxSelect id="my-select-1"></IxSelect>
    <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
    <IxInput id="my-select-2"></IxInput>
    <IxButton data-colspan="2">Submit</IxButton>
  </IxLayoutAuto>
</template>
