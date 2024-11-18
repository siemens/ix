<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCheckbox, IxCustomField } from '@siemens/ix-vue';
</script>

<template>
  <IxCustomField info-text="Info text">
    <IxCheckbox
      label="I agree everything"
      name="agreed"
      class="ix-info"
    ></IxCheckbox>
  </IxCustomField>

  <br />

  <IxCustomField warning-text="Warning text">
    <IxCheckbox
      label="I disagree everything"
      name="agreed"
      class="ix-warning"
    ></IxCheckbox>
  </IxCustomField>

  <br />

  <IxCustomField invalid-text="Invalid text">
    <IxCheckbox
      label="I disagree everything"
      name="agreed"
      class="ix-invalid"
    ></IxCheckbox>
  </IxCustomField>

  <br />

  <IxCustomField valid-text="Valid text">
    <IxCheckbox
      label="I disagree everything"
      name="agreed"
      class="ix-valid"
    ></IxCheckbox>
  </IxCustomField>
</template>
