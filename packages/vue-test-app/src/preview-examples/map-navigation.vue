<script setup lang="ts">
import { IxMapNavigation, IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMapNavigation
    applicationName="Test Application"
    navigationTitle="Some other content"
  >
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
      <IxMenuItem>Item 3</IxMenuItem>
    </IxMenu>
    <div slot="sidebar-content">Sidebar content</div>
    <div>Content</div>
  </IxMapNavigation>
</template>
