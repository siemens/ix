<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

addIcons({ iconCheckbox, iconFolder, iconTrashcan });
</script>

<style scoped src="./generic-list-users.css"></style>

<template>
  <IxList class="notification-list">
    <IxListItem aria-label="Notification: This is the first title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
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
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark first notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive first notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete first notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the second title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
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
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark second notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive second notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete second notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the third title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
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
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark third notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive third notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete third notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>
  </IxList>
</template>
