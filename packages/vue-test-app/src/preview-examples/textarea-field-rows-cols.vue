<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script lang="ts">
import { IxTextareaField } from '@siemens/ix-vue'

export default {
  name: 'TextareaFieldRowsCols',
  components: { IxTextareaField },
};
</script>

<template>
  <IxTextareaField
    :maxLength="100"
    name="comment"
    label="Comment"
    :textarea-rows="15"
    :textarea-cols="20"
    helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
  ></IxTextareaField>
</template>
