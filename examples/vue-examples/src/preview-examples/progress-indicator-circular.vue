<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
</template>
