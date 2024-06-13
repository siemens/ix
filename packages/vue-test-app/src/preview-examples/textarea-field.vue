<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script lang="ts">
import { IxTextareaField } from '@siemens/ix-vue';

export default {
  name: 'TextareaField',
  components: { IxTextareaField },
};
</script>

<template>
  <IxTextareaField
    resizeBehavior="dimensions"
    textareaHeight="100px"
    textareaWidth="300px"
  ></IxTextareaField>
</template>
