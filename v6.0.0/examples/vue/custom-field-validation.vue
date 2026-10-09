<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCustomField } from '@siemens/ix-vue';
</script>

<template>
  <div class="custom-field-wrapper">
    <IxCustomField
      helper-text="Add your first name here"
      valid-text="Valid first name"
      label="First name"
    >
      <input
        id="first-name"
        className="ix-form-control ix-valid"
        value="Jane"
      />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField info-text="Family name" label="Last name">
      <input id="last-name" className="ix-form-control ix-info" value="Doe" />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField warning-text="Not a valid email address" label="Email">
      <input id="email" className="ix-form-control ix-warning" value="info@" />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField invalid-text="Required" label="Address">
      <input id="address" className="ix-form-control ix-invalid" />
    </IxCustomField>
  </div>
</template>

<style scoped>
.custom-field-wrapper {
  margin-bottom: 1rem;
}
</style>
