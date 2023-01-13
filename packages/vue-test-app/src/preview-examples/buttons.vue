<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxButton className="m-1" variant="Primary"> Button </IxButton>
  <IxButton className="m-1" variant="Primary" disabled> Button </IxButton>
</template>
