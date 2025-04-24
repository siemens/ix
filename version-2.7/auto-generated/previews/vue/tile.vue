<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxIcon, IxIconButton, IxTile } from '@siemens/ix-vue';
</script>

<style scoped src="./tile.css"></style>

<template>
  <div className="example">
    <IxTile size="small">92.8 °C</IxTile>

    <IxTile size="medium" className="mr-1">
      <div slot="header">Tile header</div>
      <div className="text-l">92.8 °C</div>
    </IxTile>

    <IxTile size="big">
      <div
        className="d-flex flex-grow-1 align-items-center justify-content-between"
        slot="header"
      >
        Tile header
        <IxIconButton ghost icon="context-menu"></IxIconButton>
      </div>
      <div slot="subheader">Temperature</div>
      <div
        style="
          display: flex;
          flex-direction: column;
          height: 100%;
          align-items: flex-end;
          justify-content: space-between;
        "
      >
        <span>92.8 °C</span>
      </div>
      <div
        className="d-flex h-100 align-items-center justify-content-end"
        slot="footer"
      >
        <IxButton ghost slot="footer">
          <IxIcon name="chevron-right-small"></IxIcon>Details
        </IxButton>
      </div>
    </IxTile>
  </div>
</template>
