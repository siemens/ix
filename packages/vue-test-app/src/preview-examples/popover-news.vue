<script setup lang="ts">
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-vue/dist';
</script>

<template>
  <IxBasicNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <IxMenuAbout>
        <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
      </IxMenuAbout>
      <IxMenuAboutNews label="Test" show about-item-label="Example">
        Test
      </IxMenuAboutNews>
    </IxMenu>
  </IxBasicNavigation>
</template>
