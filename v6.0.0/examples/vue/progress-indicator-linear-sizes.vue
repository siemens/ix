<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Size - XS</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xs"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - SM</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="sm"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - MD</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="md"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - LG</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="lg"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - XL</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xl"
  >
    75%
  </IxProgressIndicator>
</template>
