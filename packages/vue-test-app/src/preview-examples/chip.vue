<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxChip } from '@siemens/ix-vue';
</script>

<style>
.example {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.example > ix-chip {
  margin-bottom: 0.5rem;
}
</style>

<template>
  <div className="example">
    <IxChip closable outline> Primary </IxChip>
    <IxChip icon="print">Primary with icon</IxChip>
    <IxChip icon="print" style="width: 10rem" closable> Primary </IxChip>

    <IxChip variant="critical" closable outline> Alarm </IxChip>
    <IxChip variant="alarm" icon="print"> Alarm with icon </IxChip>
    <IxChip variant="alarm" icon="print" style="width: 10rem" closable>
      Alarm
    </IxChip>
    <IxChip variant="warning" icon="print" style="width: 10rem" closable>
      Alarm
    </IxChip>
    <IxChip
      background="purple"
      color="green"
      variant="custom"
      icon="print"
      style="width: 10rem"
      closable
    >
      Custom
    </IxChip>
  </div>
</template>
