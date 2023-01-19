<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue/dist';
</script>

<template>
  <div className="btn-group">
    <IxButton variant="Primary" outline> Left </IxButton>
    <IxButton variant="Primary">Middle</IxButton>
    <IxButton variant="Primary" outline> Right </IxButton>
  </div>
</template>
