<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
