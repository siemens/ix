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
  <div>
    <IxTextareaField
      maxLength="100"
      name="comment"
      label="Comment"
      resizeBehavior="dimensions"
      textareaHeight="50px"
      textareaWidth="200px"
      infoText="Info text"
      class="ix-info"
    ></IxTextareaField>
  </div>

  <div>
    <IxTextareaField
      maxLength="100"
      name="comment"
      label="Comment"
      resizeBehavior="dimensions"
      textareaHeight="50px"
      textareaWidth="200px"
      warningText="Warning text"
      class="ix-warning"
    ></IxTextareaField>
  </div>

  <div>
    <IxTextareaField
      maxLength="100"
      name="comment"
      label="Comment"
      resizeBehavior="dimensions"
      textareaHeight="50px"
      textareaWidth="200px"
      validText="Valid text"
      className="valid"
    ></IxTextareaField>
  </div>

  <div>
    <IxTextareaField
      maxLength="100"
      name="comment"
      label="Comment"
      resizeBehavior="dimensions"
      textareaHeight="50px"
      textareaWidth="200px"
      invalidText="Invalid text"
      class="ix-invalid"
    ></IxTextareaField>
  </div>
</template>
