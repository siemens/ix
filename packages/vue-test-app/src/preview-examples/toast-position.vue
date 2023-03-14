<script setup lang="ts">
import { IxButton, setToastPosition, showToast } from '@siemens/ix-vue';

setToastPosition('top-right');
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
