<script setup lang="ts">
import {
  HTMLRefElement,
  IxBasicNavigation,
  IxMenu,
  IxMenuSettings,
  IxMenuSettingsItem,
} from '@siemens/ix-vue/dist';
import { nextTick, onMounted, ref } from 'vue';

const menu = ref<HTMLRefElement<HTMLIxMenuElement>>();

onMounted(async () => {
  await nextTick();
  menu.value?.$el.toggleSettings(true);
});
</script>

<template>
  <IxBasicNavigation>
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu ref="menu">
      <IxMenuSettings>
        <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
        <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
      </IxMenuSettings>
    </IxMenu>
  </IxBasicNavigation>
</template>
