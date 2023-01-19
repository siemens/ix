<script setup lang="ts">
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxTabs rounded>
    <IxTabItem>
      <IxIcon name="success"></IxIcon>
    </IxTabItem>
    <IxTabItem :counter="200">
      <IxIcon name="tree"></IxIcon>
    </IxTabItem>
    <IxTabItem>
      <IxIcon name="maintenance"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled :counter="24">
      <IxIcon name="sound-loud"></IxIcon>
    </IxTabItem>
    <IxTabItem>
      <IxIcon name="hierarchy"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled>
      <IxIcon name="calendar-settings"></IxIcon>
    </IxTabItem>
  </IxTabs>
</template>
