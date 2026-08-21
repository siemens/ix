<script setup lang="ts">
import {
  IxButton,
  IxCol,
  IxFieldLabel,
  IxInput,
  IxLayoutGrid,
  IxRow,
  IxSelect,
} from '@siemens/ix-vue';
</script>

<style scoped src="./form-layout-grid.css"></style>

<template>
  <IxLayoutGrid class="layout-grid-example">
    <IxRow>
      <IxCol size="2" size-sm="12">
        <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
      </IxCol>
      <IxCol>
        <IxSelect id="my-select-1"></IxSelect>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="2" size-sm="12">
        <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
      </IxCol>
      <IxCol>
        <IxInput id="my-select-2"></IxInput>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="12" size-sm="12">
        <IxButton data-colspan="2">Submit</IxButton>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
