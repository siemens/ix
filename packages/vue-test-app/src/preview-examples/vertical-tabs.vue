<script setup lang="ts">
import { IxMenu, IxMenuItem } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab tab-icon="home"> Home </IxMenuItem>
    <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
    <IxMenuItem tab-icon="star" disabled> Disabled Tab </IxMenuItem>
    <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
    <IxMenuItem tab-icon="globe" style="display: none">
      Should not visible
    </IxMenuItem>
  </IxMenu>
</template>
