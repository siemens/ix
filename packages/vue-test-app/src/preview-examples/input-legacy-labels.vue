<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxInputGroup } from '@siemens/ix-vue';
</script>

<template>
  <form className="needs-validation">
    <IxInputGroup>
      <span slot="input-start">Label Start</span>
      <input class="ix-form-control" type="text" />
    </IxInputGroup>

    <IxInputGroup>
      <input class="ix-form-control" type="text" />
      <span slot="input-end">Label End</span>
    </IxInputGroup>
  </form>
</template>
