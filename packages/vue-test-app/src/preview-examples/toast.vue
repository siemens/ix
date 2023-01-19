<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
