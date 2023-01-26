<script setup lang="ts">
import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuAvatar>
      <IxMenuAvatarItem label="Option 1"></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab tab-icon="home"> &nbsp; Home&nbsp; </IxMenuItem>
    <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
    <IxMenuItem tab-icon="star" disabled>
      &nbsp; Disabled Tab&nbsp;
    </IxMenuItem>
    <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
  </IxMenu>
</template>
