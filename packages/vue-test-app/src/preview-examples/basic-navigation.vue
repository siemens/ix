<script setup lang="ts">
import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxBasicNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>
  </IxBasicNavigation>
</template>
