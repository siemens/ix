<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<template>
  <IxButton class="m-1" variant="Secondary" ghost> Not selected </IxButton>
  <IxButton class="m-1" variant="Secondary" ghost selected> Selected </IxButton>
</template>
