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
  IxBadge,
  IxIcon,
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

addIcons({ iconAlarmBell, iconContextMenu });
</script>

<style scoped src="./generic-list-custom-content.css"></style>

<template>
  <IxList action-slot-alignment="start">
    <IxListItem aria-label="Alarm: High temperature">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="alarm"
            role="img"
            aria-label="Alarm"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge type="label" label="Alarm" variant="alarm"></IxBadge>
              <strong>High temperature</strong>
            </div>
            <strong>A1214-11241-101</strong>
            <span class="event-list-location">
              MyPlant - Cooling water circuit
            </span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:50:21">
            <span>2026-05-13</span>
            <span>08:50:21</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for High temperature"
      ></IxIconButton>
    </IxListItem>

    <IxListItem aria-label="Warning: Low cooling water pressure">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="warning"
            role="img"
            aria-label="Warning"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge type="label" label="Warning" variant="warning"></IxBadge>
              <strong>Low cooling water pressure</strong>
            </div>
            <strong>P4711-23012-042</strong>
            <span class="event-list-location">MyPlant - Pump station 2</span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:42:03">
            <span>2026-05-13</span>
            <span>08:42:03</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for Low cooling water pressure"
      ></IxIconButton>
    </IxListItem>

    <IxListItem aria-label="Critical: Drive overload">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="critical"
            role="img"
            aria-label="Critical"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge
                type="label"
                label="Critical"
                variant="critical"
              ></IxBadge>
              <strong>Drive overload</strong>
            </div>
            <strong>M0815-55120-007</strong>
            <span class="event-list-location">MyPlant - Conveyor line 4</span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:35:47">
            <span>2026-05-13</span>
            <span>08:35:47</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for Drive overload"
      ></IxIconButton>
    </IxListItem>
  </IxList>
</template>
