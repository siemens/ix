<script setup lang="ts">
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<template>
  <IxDropdownButton label="Dropdown" variant="Primary" icon="checkboxes">
    <IxDropdownItem label="Item 1"></IxDropdownItem>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
  </IxDropdownButton>

  <IxDropdownButton label="Dropdown" variant="Primary" ghost icon="checkboxes">
    <IxDropdownItem label="Item 1"></IxDropdownItem>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
  </IxDropdownButton>

  <IxDropdownButton
    label="Dropdown"
    variant="Primary"
    disabled
    icon="checkboxes"
  >
    <IxDropdownItem label="Item 1"></IxDropdownItem>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
  </IxDropdownButton>
</template>
