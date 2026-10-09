<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang='ts'>
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
</script>

<template>
  <IxCheckboxGroup label="Terms of something">
    <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
    <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
  </IxCheckboxGroup>
</template>
