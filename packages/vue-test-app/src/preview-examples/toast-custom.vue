<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
import { ref } from 'vue';

const custom = ref<HTMLElement | null>(null);
</script>

<template>
  <IxButton @click="showToast({ message: custom! })"> Trigger toast </IxButton>
  <template>
    <div ref="custom">
      <div>Custom toast message</div>
      <IxButton>Action</IxButton>
    </div>
  </template>
</template>
