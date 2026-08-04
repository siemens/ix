<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Status - Default</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Success</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="success"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Error</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="error"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Info</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="info"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Warning</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="warning"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Paused</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="paused"
  >
    75%
  </IxProgressIndicator>
</template>
