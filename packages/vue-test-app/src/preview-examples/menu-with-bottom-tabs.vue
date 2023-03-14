<script setup lang="ts">
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab tab-icon="home"> Home </IxMenuItem>
    <IxMenuItem tab-icon="globe" slot="bottom">
      &nbsp; Bottom Tab&nbsp;
    </IxMenuItem>
  </IxMenu>
</template>
