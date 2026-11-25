<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBadge, IxList, IxListItem, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./generic-list-notification-icon.css"></style>

<template>
  <IxList class="notification-icon-list">
    <IxListItem aria-label="Notification: This is the first title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>Just now</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the first title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the first item
          </IxTypography>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the second title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>5 minutes ago</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the second title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the second item
          </IxTypography>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the third title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>Yesterday</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the third title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the third item
          </IxTypography>
        </div>
      </div>
    </IxListItem>
  </IxList>
</template>
