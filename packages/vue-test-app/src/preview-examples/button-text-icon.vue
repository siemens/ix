<script setup lang="ts">
import { IxButton, IxIcon } from '@siemens/ix-vue';
</script>

<template>
  <IxButton class="m-1" variant="Primary">
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" variant="Secondary">
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" outline>
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
  <IxButton class="m-1" ghost>
    <IxIcon name="star"></IxIcon>
    Button
  </IxButton>
</template>
