<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import {
  IxApplication,
  IxApplicationHeader,
  IxButton,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxPane,
  IxPaneLayout,
} from '@siemens/ix-vue';
</script>

<style scoped src="./map-navigation-migration.css"></style>

<script lang="ts">
export default {
  data(): {
    expanded: boolean;
  } {
    return {
      expanded: false,
    };
  },
  methods: {
    resetExpanded(e: Event) {
      this.expanded = (e as CustomEvent).detail.expanded;
    },
  },
};
</script>

<template>
  <IxApplication className="application">
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <!--{KEEP} Compare context menu -->
      <IxDropdownButton variant="secondary" label="Select config" ghost>
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <!--{KEEP} Compare overlay -->
    <IxPane
      className="overlay"
      composition="right"
      heading="Custom overlay"
      :icon="iconBulb"
      size="320px"
      variant="floating"
      hideOnCollapse
      :expanded="expanded"
      @expanded-changed="(e: Event) => resetExpanded(e)"
    >
      Overlay content
    </IxPane>

    <IxPaneLayout>
      <!--{KEEP} Compare sidebar -->
      <IxPane slot="left" heading="Navigation title" size="320px" expanded>
        Sidebar content
      </IxPane>

      <IxContent className="content">
        <IxContentHeader
          slot="header"
          header-title="My Content Page"
        ></IxContentHeader>

        <IxButton @click="expanded = !expanded">Open overlay</IxButton>
      </IxContent>
    </IxPaneLayout>
  </IxApplication>
</template>
