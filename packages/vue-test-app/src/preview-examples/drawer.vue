<script setup lang="ts">
import { IxButton, IxDrawer } from '@siemens/ix-vue';
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
  <IxDrawer closeOnClickOutside :show="show" @drawerClose="show = false">
    <span>Some content of drawer</span>
  </IxDrawer>
  <IxButton @click="show = !show">Toggle drawer</IxButton>
</template>
