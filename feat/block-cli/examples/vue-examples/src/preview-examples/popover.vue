<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { ref } from 'vue';
import { iconInfo } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-vue';

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

const popoverRef = ref<InstanceType<typeof IxPopover>>();

const onCancel = () => {
  popoverRef.value?.$el.hidePopover();
};
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxPopover
    ref="popoverRef"
    trigger="triggerId"
    placement="bottom"
    trigger-mode="click"
    has-spike
    close-on-click-outside
    aria-label="Release highlights"
  >
    <IxPopoverHeader
      :icon="iconInfo"
      icon-color="color-info"
      aria-label-close-icon-button="Close popover"
    >
      Release highlights
      <IxPill slot="additional-items" variant="info">New</IxPill>
    </IxPopoverHeader>
    <IxPopoverImage :image="POPOVER_IMAGE_SRC" image-alt="Release preview" />
    <IxPopoverContent>
      Check out the new dashboard and improved performance metrics.
    </IxPopoverContent>
    <IxPopoverFooter alignment="vertical">
      <span slot="start">v4.0.0</span>
      <IxButton variant="secondary" @click="onCancel">Cancel</IxButton>
      <IxButton>Save</IxButton>
    </IxPopoverFooter>
  </IxPopover>
</template>
