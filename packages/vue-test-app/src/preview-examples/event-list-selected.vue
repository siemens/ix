<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxEventList>
    <IxEventListItem color="color-primary">Text 1</IxEventListItem>
    <IxEventListItem color="color-primary" selected> Text 2 </IxEventListItem>
    <IxEventListItem color="color-primary">Text 3</IxEventListItem>
    <IxEventListItem color="color-primary">Text 4</IxEventListItem>
  </IxEventList>
</template>
